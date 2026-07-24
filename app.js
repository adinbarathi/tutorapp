// --- Aether Tutor Main Logic -- //

// 1. DEFAULT DATA STORES (Local Storage fallback)
const DEFAULT_COURSES = [
  {
    id: "css-flexbox",
    title: "Mastering CSS Flexbox",
    emoji: "📐",
    desc: "Understand alignment, direction, justify-content, and wrap behaviors visually.",
    difficulty: "beginner",
    modules: ["Flex Container Properties", "Flex Item Dimensions", "Complex Alignment Grids", "Responsive Flexbox Cards"]
  },
  {
    id: "javascript-async",
    title: "Asynchronous JavaScript",
    emoji: "💻",
    desc: "Unravel Event Loop, Promises, Callbacks, Async/Await rules and async queue orders.",
    difficulty: "intermediate",
    modules: ["The Call Stack & WebAPIs", "Promises & Chain Structures", "Async / Await syntactic sugar", "Concurrent executions"]
  },
  {
    id: "quantum-physics",
    title: "Quantum Physics Introduction",
    emoji: "⚛️",
    desc: "Dive into wave-particle duality, superposition principle, and quantum entanglement theories.",
    difficulty: "advanced",
    modules: ["Planck's constant & Photoelectric effect", "Superposition & Wave functions", "Schrödinger's Cat thought experiment", "Quantum Cryptography"]
  }
];

const DEFAULT_FLASHCARDS = {
  "CSS Flexbox": [
    { q: "What is the default value of the flex-direction property?", a: "The default value is 'row'. It layouts items horizontally from left to right." },
    { q: "Which justify-content value stretches items to allocate spaces equally on both ends?", a: "The value is 'space-between' (items touch edges) or 'space-evenly' (equal spaces including edges)." },
    { q: "What does the 'flex-wrap: wrap' property do?", a: "It allows flex items to wrap onto multiple lines if there is insufficient space along the main axis." }
  ],
  "Asynchronous JavaScript": [
    { q: "What is a Promise in JavaScript?", a: "An object representing the eventual completion (or failure) of an asynchronous execution and its resulting value." },
    { q: "What queue runs first: Microtasks or Macrotasks?", a: "The Microtask Queue (containing Job Queues like Promises, MutationObservers) runs first, before Macrotasks (setTimeout, event handlers)." }
  ],
  "Quantum Physics": [
    { q: "State the superposition principle.", a: "A quantum system can exist in multiple states or configurations simultaneously until it is measured, after which the wave function collapses." },
    { q: "What is quantum entanglement?", a: "A phenomenon where twin particles are linked together such that the state of one instantly dictates the state of another, regardless of distance." }
  ]
};

const DEFAULT_QUIZZES = {
  "CSS Flexbox": [
    {
      q: "Which property controls the alignment of flex items along the cross-axis?",
      a: "align-items",
      opts: ["justify-content", "align-items", "flex-wrap", "align-content"],
      exp: "'align-items' handles alignment on the cross-axis (vertical if direction is row, horizontal if column)."
    },
    {
      q: "What is the flex-grow default value?",
      a: "0",
      opts: ["0", "1", "auto", "initial"],
      exp: "Default is 0, meaning items will not grow to fill remaining space unless explicitly instructed."
    }
  ],
  "JavaScript Async": [
    {
      q: "Which API handles asynchronous operations in the browser background?",
      a: "WebAPIs",
      opts: ["Call Stack", "Microtask Queue", "WebAPIs", "Render Queue"],
      exp: "WebAPIs execute timers, network calls, and events asynchronously outside the main JS Call Stack."
    },
    {
      q: "What is equivalent to calling Promise.resolve()?",
      a: "async function returning value",
      opts: ["Promise.reject()", "async function returning value", "setTimeout wrapper", "callback function"],
      exp: "An 'async' function automatically wraps any aggregate return value in a resolved Promise."
    }
  ]
};

// --- DATA ACCESS BRIDGE ---
let courses = JSON.parse(localStorage.getItem("ae_courses")) || DEFAULT_COURSES;
let flashcards = JSON.parse(localStorage.getItem("ae_flashcards")) || DEFAULT_FLASHCARDS;
let quizzes = JSON.parse(localStorage.getItem("ae_quizzes")) || DEFAULT_QUIZZES;

function saveData() {
  localStorage.setItem("ae_courses", JSON.stringify(courses));
  localStorage.setItem("ae_flashcards", JSON.stringify(flashcards));
  localStorage.setItem("ae_quizzes", JSON.stringify(quizzes));
}

// --- SOUND TRIGGER ENGINE (Web Audio API) ---
function playSynthBeep(freq, type, duration) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.type = type || 'sine';
    oscillator.frequency.setValueAtTime(freq || 440, audioCtx.currentTime);
    
    // Smooth ramp down to avoid clicks
    gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.warn("AudioContext block by browser auto-play policy:", e);
  }
}

// --- STATE MANAGEMENT ---
let currentView = "dashboard";
let currentFlashcardIndex = 0;
let currentFlashcardDeck = "";
let currentQuizCategory = "";
let currentQuizQuestionIndex = 0;
let currentQuizScore = 0;
let quizActiveQuestions = [];
let quizSelectedOptionIdx = null;

// Pomodoro State
let pomodoroTimer = null;
let pomodoroTimeLeft = 25 * 60; // 25 minutes
let pomodoroDuration = 25 * 60;
let pomodoroIsRunning = false;
let pomodoroMode = "study"; // study, short, long

// 2. PAGE ROUTER & VIEW LOADING
document.addEventListener("DOMContentLoaded", () => {
  initApp();
  
  // Navigation Routing listeners
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", (e) => {
      const tabName = e.currentTarget.getAttribute("data-tab");
      switchView(tabName);
    });
  });
  
  // Quick Dashboard shortcuts
  document.getElementById("go-to-courses").onclick = () => switchView("courses");
  document.getElementById("act-start-study").onclick = () => switchView("pomodoro");
  document.getElementById("act-ai-help").onclick = () => switchView("chat");
  document.getElementById("act-review-cards").onclick = () => switchView("flashcards");
  document.getElementById("act-test-quiz").onclick = () => switchView("quiz");
  
  // Theme management toggle
  const themeBtn = document.getElementById("theme-btn");
  const systemTheme = localStorage.getItem("ae_theme") || "light";
  document.documentElement.setAttribute("data-theme", systemTheme);
  updateThemeUI(systemTheme);
  
  themeBtn.onclick = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("ae_theme", next);
    updateThemeUI(next);
    playSynthBeep(330, "triangle", 0.08);
  };
});

function switchView(tab) {
  if (!tab) return;
  currentView = tab;
  
  // Toggle sidebar items
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.getAttribute("data-tab") === tab);
  });
  
  // Toggle main sections
  document.querySelectorAll(".view-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === `view-${tab}`);
  });
  
  // Breadcrumb text setter
  let title = tab.charAt(0).toUpperCase() + tab.slice(1);
  if (tab === "chat") title = "AI Tutor Aura chat";
  if (tab === "courses") title = "Curriculum Explorer";
  if (tab === "flashcards") title = "3D Memory Flashcards";
  if (tab === "quiz") title = "Quiz Testing Studio";
  if (tab === "pomodoro") title = "Study clock Pomodoro";
  if (tab === "tutor-portal") title = "Tutor Console Management";
  document.getElementById("current-view-title").innerText = title;
  
  // View specific setups
  if (tab === "flashcards") resetFlashcardModule();
  if (tab === "quiz") resetQuizModule();
  
  playSynthBeep(450, "sine", 0.05);
}

function updateThemeUI(theme) {
  const sunIcon = document.querySelector(".theme-toggle .sun-icon");
  const moonIcon = document.querySelector(".theme-toggle .moon-icon");
  if (theme === "dark") {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  } else {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }
}

// 3. CORE VIEWS INITS
function initApp() {
  renderDashboardCourses();
  renderCurriculumCourses();
  setupFlexPlayground();
  setupAIResponses();
  setupFlashcardsUI();
  setupQuizUI();
  setupPomodoroUI();
  setupTutorPortalUI();
}

// 4. SUBJECT CURRICULUM LAYOUTS
function renderDashboardCourses() {
  const dashList = document.getElementById("dash-course-list");
  dashList.innerHTML = "";
  
  courses.slice(0, 3).forEach(course => {
    const item = document.createElement("div");
    item.className = "course-item-compact";
    // simple dummy percentage for representation
    let percent = 50;
    if (course.id.includes("flexbox")) percent = 80;
    if (course.id.includes("async")) percent = 60;
    if (course.id.includes("quantum")) percent = 10;
    
    item.innerHTML = `
      <div class="course-meta">
        <span class="course-emoji">${course.emoji}</span>
        <div class="course-details">
          <h4>${course.title}</h4>
          <span>Difficulty: ${course.difficulty} &bull; ${course.modules.length} lessons</span>
        </div>
      </div>
      <div class="progress-text">${percent}%</div>
    `;
    item.onclick = () => {
      switchView("courses");
    };
    dashList.appendChild(item);
  });
}

function renderCurriculumCourses() {
  const container = document.getElementById("curriculum-list");
  container.innerHTML = "";
  
  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "card subject-card";
    
    const modulesLi = course.modules.map(mod => `<span class="module-node">${mod}</span>`).join("");
    
    card.innerHTML = `
      <div>
        <div class="subject-header">
          <span class="emoji">${course.emoji}</span>
          <span class="difficulty-badge ${course.difficulty.toLowerCase()}">${course.difficulty}</span>
        </div>
        <h3>${course.title}</h3>
        <p>${course.desc}</p>
      </div>
      <div class="modules-tree">
        <h5>Syllabus Overview</h5>
        <div class="modules-outline">
          ${modulesLi}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// 5. FLEXBOX PLAYGROUND
function setupFlexPlayground() {
  const controls = document.querySelectorAll(".play-control");
  const flexbox = document.getElementById("flex-playground-container");
  
  controls.forEach(select => {
    select.addEventListener("change", () => {
      const prop = select.id;
      const val = select.value;
      flexbox.style[prop] = val;
      playSynthBeep(260, "sine", 0.05);
    });
  });
}

// 6. DYNAMIC AI SIMULATION
let auraDialogueMap = {};
function setupAIResponses() {
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  
  // Custom response mapping triggers
  auraDialogueMap = {
    "flexbox": `📐 <strong>CSS Flexible Box Layout</strong> is one of the most useful design elements. Here are the core ideas:
<pre><code>.container {
  display: flex;
  flex-direction: row; /* or column */
  justify-content: center; /* main axis */
  align-items: center; /* cross axis */
}</code></pre>
Can you try toggling this visually in the <strong>Curriculum Explorer -> Flexbox Playground</strong> sub-panel?`,

    "recursion": `💻 <strong>Recursion</strong> in programming is a technique where a function calls itself to resolve smaller subproblems. 
Always include a <em>base case</em>, otherwise your program will crash with a Call Stack Overflow:
<pre><code>function factorial(n) {
  if (n <= 1) return 1; // Base Case
  return n * factorial(n - 1); // Recursive Call
}</code></pre>
Call <code>factorial(5)</code> which performs: 5 * 4 * 3 * 2 * 1 = 120.`,

    "superposition": `⚛️ <strong>Quantum Superposition</strong> is a concept where a particle occupies all its possible states at once.
Imagine a spinning coin: while spinning, it's not strictly 'heads' or 'tails', but rather a combination of both.
Only when we trap it (perform a measurement), does it collapse into a single state!`,

    "essay": `✍️ A perfect **argumentative essay hook** must immediately lock user focus. You can use:
1. **The Intriguing Question**: Challenge standard assumptions.
2. **The Shocking Statistic**: Expose facts.
3. **The Vivid Analogy**: Illustrate the stakes.
What is the core argument you want to pitch? I can generate a hook template for you!`
  };
  
  chatForm.onsubmit = (e) => {
    e.preventDefault();
    const val = chatInput.value.trim();
    if (!val) return;
    
    addChatMessage(val, "user");
    chatInput.value = "";
    
    // Simulate Aura typing response
    const scroller = document.getElementById("chat-scroller");
    const indicator = document.getElementById("chat-typing");
    indicator.classList.remove("hidden");
    scroller.scrollTop = scroller.scrollHeight;
    
    setTimeout(() => {
      indicator.classList.add("hidden");
      
      const query = val.toLowerCase();
      let response = "I hear you, Joshua. Would you like me to construct a quick quiz or flashcard regarding those concepts?";
      
      for (let key in auraDialogueMap) {
        if (query.includes(key)) {
          response = auraDialogueMap[key];
          break;
        }
      }
      
      addChatMessage(response, "aura");
      
      // Update stats for study time dynamically
      let durationVal = parseFloat(document.getElementById("dash-duration").innerText);
      document.getElementById("dash-duration").innerText = (durationVal + 0.1).toFixed(1) + "h";
    }, 1200 + Math.random() * 800);
  };
  
  // Prompt chips list queries
  document.querySelectorAll(".prompt-chip").forEach(chip => {
    chip.onclick = () => {
      const q = chip.getAttribute("data-prompt");
      chatInput.value = q;
      chatForm.dispatchEvent(new Event("submit"));
    };
  });
}

function addChatMessage(content, sender) {
  const scroller = document.getElementById("chat-scroller");
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  const container = document.createElement("div");
  container.className = `chat-bubble-container ${sender}-bubble-container`;
  
  const avatarText = sender === "user" ? "JS" : "A";
  
  container.innerHTML = `
    <div class="bubble-avatar">${avatarText}</div>
    <div class="chat-bubble ${sender}">
      <p>${content}</p>
      <div class="chat-time">Today, ${time}</div>
    </div>
  `;
  
  scroller.appendChild(container);
  scroller.scrollTop = scroller.scrollHeight;
  playSynthBeep(sender === "user" ? 600 : 500, "sine", 0.08);
}

// 7. FLASHCARDS CONTROLLER
function setupFlashcardsUI() {
  const select = document.getElementById("deck-select");
  const card = document.getElementById("main-flashcard");
  const revealBtn = document.getElementById("fc-reveal-btn");
  const rateHardBtn = document.getElementById("fc-rate-hard");
  const rateEasyBtn = document.getElementById("fc-rate-easy");
  const resetBtn = document.getElementById("fc-reset-deck");
  
  // Rebuild decks dropdown selectors
  repopulateFlashcardDropdowns();
  
  // Switch deck
  select.onchange = () => {
    currentFlashcardDeck = select.value;
    resetFlashcardModule();
    playSynthBeep(300, "triangle", 0.05);
  };
  
  // Click flip card
  card.onclick = () => {
    if (!card.classList.contains("disabled")) {
      card.classList.toggle("flipped");
      const isFlipped = card.classList.contains("flipped");
      document.getElementById("fc-action-reveal").classList.toggle("hidden", isFlipped);
      document.getElementById("fc-action-rate").classList.toggle("hidden", !isFlipped);
      playSynthBeep(isFlipped ? 440 : 380, "sine", 0.1);
    }
  };
  
  revealBtn.onclick = () => card.click();
  
  rateHardBtn.onclick = (e) => {
    e.stopPropagation();
    processFlashcardFeedback(false);
  };
  
  rateEasyBtn.onclick = (e) => {
    e.stopPropagation();
    processFlashcardFeedback(true);
  };
  
  resetBtn.onclick = () => {
    resetFlashcardModule();
  };
}

function repopulateFlashcardDropdowns() {
  const select = document.getElementById("deck-select");
  const datalist = document.getElementById("existing-decks");
  
  select.innerHTML = "";
  datalist.innerHTML = "";
  
  Object.keys(flashcards).forEach(deckName => {
    const optSelect = document.createElement("option");
    optSelect.value = deckName;
    optSelect.innerText = deckName;
    select.appendChild(optSelect);
    
    const optList = document.createElement("option");
    optList.value = deckName;
    datalist.appendChild(optList);
  });
  
  currentFlashcardDeck = select.value;
}

function resetFlashcardModule() {
  currentFlashcardIndex = 0;
  
  const deck = flashcards[currentFlashcardDeck] || [];
  if (deck.length === 0) {
    document.getElementById("fc-empty-state").classList.remove("hidden");
    document.getElementById("main-flashcard").classList.add("hidden");
    document.getElementById("fc-action-reveal").classList.add("hidden");
    document.getElementById("fc-action-rate").classList.add("hidden");
    document.getElementById("fc-remaining").innerText = "0/0";
    document.getElementById("fc-progress-fill").style.width = "0%";
    return;
  }
  
  document.getElementById("fc-empty-state").classList.add("hidden");
  document.getElementById("main-flashcard").classList.remove("hidden");
  document.getElementById("main-flashcard").classList.remove("flipped");
  document.getElementById("fc-action-reveal").classList.remove("hidden");
  document.getElementById("fc-action-rate").classList.add("hidden");
  
  renderCurrentFlashcard();
}

function renderCurrentFlashcard() {
  const deck = flashcards[currentFlashcardDeck] || [];
  const currentCard = deck[currentFlashcardIndex];
  
  document.getElementById("fc-front-subj").innerText = currentFlashcardDeck;
  document.getElementById("fc-back-subj").innerText = currentFlashcardDeck;
  document.getElementById("fc-front-text").innerText = currentCard.q;
  document.getElementById("fc-back-text").innerText = currentCard.a;
  
  document.getElementById("fc-remaining").innerText = `${currentFlashcardIndex + 1}/${deck.length}`;
  
  const progressPercent = ((currentFlashcardIndex) / deck.length) * 100;
  document.getElementById("fc-progress-fill").style.width = `${progressPercent}%`;
}

function processFlashcardFeedback(isCorrect) {
  const deck = flashcards[currentFlashcardDeck] || [];
  
  if (isCorrect) {
    let scoreEl = document.getElementById("fc-score-val");
    let currentScore = parseInt(scoreEl.innerText);
    scoreEl.innerText = currentScore + 1;
    playSynthBeep(520, "sine", 0.08);
  } else {
    playSynthBeep(280, "sawtooth", 0.12);
  }
  
  currentFlashcardIndex++;
  
  if (currentFlashcardIndex >= deck.length) {
    // Deck complete
    document.getElementById("fc-progress-fill").style.width = "100%";
    setTimeout(() => {
      document.getElementById("main-flashcard").classList.add("hidden");
      document.getElementById("fc-action-reveal").classList.add("hidden");
      document.getElementById("fc-action-rate").classList.add("hidden");
      document.getElementById("fc-empty-state").classList.remove("hidden");
      playSynthBeep(640, "sine", 0.25);
    }, 300);
  } else {
    // Next Card anim flip back first
    const cardEl = document.getElementById("main-flashcard");
    cardEl.classList.remove("flipped");
    document.getElementById("fc-action-reveal").classList.remove("hidden");
    document.getElementById("fc-action-rate").classList.add("hidden");
    
    setTimeout(() => {
      renderCurrentFlashcard();
    }, 250);
  }
}

// 8. QUIZ MANAGEMENT
function setupQuizUI() {
  document.getElementById("quiz-quit-btn").onclick = () => {
    resetQuizModule();
    playSynthBeep(290, "sine", 0.05);
  };
  
  document.getElementById("quiz-next-btn").onclick = () => {
    advanceQuizQuestion();
  };
  
  document.getElementById("quiz-retry-btn").onclick = () => {
    startQuizSession(currentQuizCategory);
  };
  
  document.getElementById("quiz-dashboard-btn").onclick = () => {
    resetQuizModule();
  };
}

function resetQuizModule() {
  document.getElementById("quiz-start-view").classList.remove("hidden");
  document.getElementById("quiz-active-view").classList.add("hidden");
  document.getElementById("quiz-finished-view").classList.add("hidden");
  
  // Render Studio selection list
  const listContainer = document.getElementById("quiz-list-container");
  listContainer.innerHTML = "";
  
  Object.keys(quizzes).forEach(quizKey => {
    const list = quizzes[quizKey] || [];
    const count = list.length;
    const card = document.createElement("div");
    card.className = "card quiz-card glow-card";
    
    card.innerHTML = `
      <h3>${quizKey} Quiz</h3>
      <p class="description">Test memory metrics on ${count} specialized inquiries.</p>
      <button class="primary-btn wide-btn" style="padding:10px;">Select quiz</button>
    `;
    card.onclick = () => {
      startQuizSession(quizKey);
    };
    listContainer.appendChild(card);
  });
  
  // Repopulate Tutor Designer fields
  const quizListDatalist = document.getElementById("existing-quizzes");
  quizListDatalist.innerHTML = "";
  Object.keys(quizzes).forEach(quizKey => {
    const opt = document.createElement("option");
    opt.value = quizKey;
    quizListDatalist.appendChild(opt);
  });
}

function startQuizSession(category) {
  currentQuizCategory = category;
  quizActiveQuestions = quizzes[category] || [];
  currentQuizQuestionIndex = 0;
  currentQuizScore = 0;
  
  if (quizActiveQuestions.length === 0) {
    alert("This quiz doesn't contain any questions yet! Create questions under the Tutor Console.");
    return;
  }
  
  document.getElementById("quiz-start-view").classList.add("hidden");
  document.getElementById("quiz-finished-view").classList.add("hidden");
  document.getElementById("quiz-active-view").classList.remove("hidden");
  
  document.getElementById("active-quiz-title").innerText = `${category} Quiz`;
  document.getElementById("quiz-q-total").innerText = quizActiveQuestions.length;
  
  renderActiveQuizQuestion();
  playSynthBeep(440, "sine", 0.08);
}

function renderActiveQuizQuestion() {
  const question = quizActiveQuestions[currentQuizQuestionIndex];
  document.getElementById("quiz-q-index").innerText = currentQuizQuestionIndex + 1;
  document.getElementById("quiz-question-text").innerText = question.q;
  
  const fill = document.getElementById("quiz-progress-fill");
  const percent = (currentQuizQuestionIndex / quizActiveQuestions.length) * 100;
  fill.style.width = `${percent}%`;
  
  const optionsBox = document.getElementById("quiz-options-box");
  optionsBox.innerHTML = "";
  
  quizSelectedOptionIdx = null;
  document.getElementById("quiz-feedback-box").classList.add("hidden");
  
  question.opts.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<strong style="margin-right:8px;">${String.fromCharCode(65 + idx)}.</strong> ${opt}`;
    
    btn.onclick = () => {
      if (quizSelectedOptionIdx === null) {
        selectQuizOption(idx);
      }
    };
    optionsBox.appendChild(btn);
  });
}

function selectQuizOption(selectedIdx) {
  quizSelectedOptionIdx = selectedIdx;
  
  const q = quizActiveQuestions[currentQuizQuestionIndex];
  const optionsBox = document.getElementById("quiz-options-box");
  const btns = optionsBox.querySelectorAll(".option-btn");
  
  const chosenOptText = q.opts[selectedIdx];
  const isCorrect = (chosenOptText === q.a);
  
  if (isCorrect) {
    currentQuizScore++;
    btns[selectedIdx].classList.add("correct");
    document.querySelector(".feedback-indicator").className = "feedback-indicator correct";
    document.querySelector(".indicator-icon").innerText = "✔";
    document.querySelector(".indicator-title").innerText = "Correct!";
    playSynthBeep(520, "sine", 0.15);
  } else {
    btns[selectedIdx].classList.add("incorrect");
    // Show correct one as well
    const correctIdx = q.opts.indexOf(q.a);
    if (correctIdx !== -1) {
      btns[correctIdx].classList.add("correct");
    }
    
    document.querySelector(".feedback-indicator").className = "feedback-indicator incorrect";
    document.querySelector(".indicator-icon").innerText = "✖";
    document.querySelector(".indicator-title").innerText = "Incorrect";
    playSynthBeep(250, "sawtooth", 0.2);
  }
  
  btns.forEach(btn => btn.disabled = true);
  
  document.getElementById("quiz-explanation-text").innerText = q.exp;
  document.getElementById("quiz-feedback-box").classList.remove("hidden");
}

function advanceQuizQuestion() {
  currentQuizQuestionIndex++;
  if (currentQuizQuestionIndex >= quizActiveQuestions.length) {
    finishQuizSession();
  } else {
    renderActiveQuizQuestion();
  }
  playSynthBeep(320, "sine", 0.05);
}

function finishQuizSession() {
  document.getElementById("quiz-active-view").classList.add("hidden");
  document.getElementById("quiz-finished-view").classList.remove("hidden");
  
  const scoreText = `${currentQuizScore}/${quizActiveQuestions.length}`;
  document.getElementById("quiz-final-score").innerText = scoreText;
  
  let commentStr = "Try configuring study cards in Flashcards mode or ask Aura AI for guidance.";
  if (currentQuizScore === quizActiveQuestions.length) {
    commentStr = "Flawless score! Standard achievement unlocked.";
    triggerConfettiEffect();
  } else if (currentQuizScore >= quizActiveQuestions.length / 2) {
    commentStr = "Not bad! Review the custom curriculum node details to gain a perfect score.";
  }
  document.getElementById("quiz-finished-comment").innerText = commentStr;
  
  // Update dashboard streak / metrics
  let dashProg = document.getElementById("dash-progress");
  let progressFill = document.getElementById("dash-progress-fill");
  dashProg.innerText = "75%";
  progressFill.style.width = "75%";
  
  playSynthBeep(600, "sine", 0.35);
}

// 9. SVT CONFETTI CANVAS LAYER
function triggerConfettiEffect() {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  
  canvas.width = canvas.parentElement.offsetWidth;
  canvas.height = canvas.parentElement.offsetHeight;
  
  const colors = ["#6366f1", "#a855f7", "#ec4899", "#0ea5e9", "#f59e0b", "#10b981"];
  const particles = [];
  
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2 + 100,
      radius: Math.random() * 4 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 5 + 4,
      angle: Math.random() * Math.PI * 2,
      opacity: 1,
      gravity: 0.16,
      drag: 0.98
    });
  }
  
  let animationId;
  function paint() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let active = false;
    particles.forEach(p => {
      if (p.opacity <= 0) return;
      active = true;
      
      const vx = Math.cos(p.angle) * p.speed;
      const vy = Math.sin(p.angle) * p.speed + p.gravity;
      
      p.x += vx;
      p.y += vy;
      p.opacity -= 0.015;
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fill();
    });
    
    ctx.globalAlpha = 1.0;
    
    if (active) {
      animationId = requestAnimationFrame(paint);
    } else {
      cancelAnimationFrame(animationId);
    }
  }
  
  paint();
}

// 10. POMODORO TICKER (Study Focus)
function setupPomodoroUI() {
  const toggleBtn = document.getElementById("timer-start-pause");
  const resetBtn = document.getElementById("timer-reset");
  const modeBtns = document.querySelectorAll(".mode-toggle");
  
  modeBtns.forEach(btn => {
    btn.onclick = () => {
      modeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const durationMins = parseInt(btn.getAttribute("data-duration"));
      configurePomodoro(durationMins * 60, btn.innerText.toLowerCase().includes("break") ? "break" : "study");
      playSynthBeep(350, "sine", 0.05);
    };
  });
  
  toggleBtn.onclick = () => {
    if (pomodoroIsRunning) {
      pausePomodoro();
    } else {
      startPomodoro();
    }
  };
  
  resetBtn.onclick = () => {
    resetPomodoro();
  };
  
  // Ambient Sound Chipes
  document.querySelectorAll(".sound-chip").forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll(".sound-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      document.getElementById("timer-bg-status").innerText = chip.innerText;
      playSynthBeep(450, "sine", 0.08);
    };
  });
}

function configurePomodoro(secs, modeType) {
  pausePomodoro();
  pomodoroTimeLeft = secs;
  pomodoroDuration = secs;
  pomodoroMode = modeType;
  updatePomodoroDisplay();
}

function startPomodoro() {
  pomodoroIsRunning = true;
  document.querySelector(".play-svg").classList.add("hidden");
  document.querySelector(".pause-svg").classList.remove("hidden");
  
  pomodoroTimer = setInterval(() => {
    pomodoroTimeLeft--;
    if (pomodoroTimeLeft <= 0) {
      clearInterval(pomodoroTimer);
      triggerTimerAlert();
    }
    updatePomodoroDisplay();
  }, 1000);
  
  playSynthBeep(440, "triangle", 0.1);
  playSynthBeep(554, "triangle", 0.1);
}

function pausePomodoro() {
  pomodoroIsRunning = false;
  clearInterval(pomodoroTimer);
  document.querySelector(".play-svg").classList.remove("hidden");
  document.querySelector(".pause-svg").classList.add("hidden");
  playSynthBeep(330, "triangle", 0.15);
}

function resetPomodoro() {
  pausePomodoro();
  pomodoroTimeLeft = pomodoroDuration;
  updatePomodoroDisplay();
}

function updatePomodoroDisplay() {
  const display = document.getElementById("timer-time-display");
  const mins = Math.floor(pomodoroTimeLeft / 60);
  const secs = pomodoroTimeLeft % 60;
  display.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  
  // Update circular SVG Progress stroke dashoffset
  const circle = document.getElementById("timer-progress-circle");
  const circumference = 565.48; // Circumference of radius 90 circle
  const fraction = 1 - (pomodoroTimeLeft / pomodoroDuration);
  const offset = circumference * fraction;
  circle.style.strokeDashoffset = offset;
}

function triggerTimerAlert() {
  // Beep alarm
  playSynthBeep(880, "sine", 0.2);
  setTimeout(() => playSynthBeep(880, "sine", 0.2), 300);
  setTimeout(() => playSynthBeep(1200, "sine", 0.4), 600);
  
  alert(pomodoroMode === "study" ? "Focus session complete! Time to take a breather." : "Break finished! Let's resume studying.");
  
  if (pomodoroMode === "study") {
    // Add time to study metrics
    let durationVal = parseFloat(document.getElementById("dash-duration").innerText);
    document.getElementById("dash-duration").innerText = (durationVal + 0.4).toFixed(1) + "h";
  }
  
  resetPomodoro();
}

// 11. TUTOR PORTAL OPERATIONS (Updatable data model)
function setupTutorPortalUI() {
  // Sidebar editor switcher
  document.querySelectorAll(".tutor-tab-item").forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll(".tutor-tab-item").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const secId = tab.getAttribute("data-portal-section");
      document.querySelectorAll(".tutor-editor-section").forEach(sec => {
        sec.classList.toggle("active", sec.id === secId);
      });
      playSynthBeep(320, "sine", 0.05);
    };
  });
  
  // Form submits
  
  // 1. ADD COURSE
  const cForm = document.getElementById("tutor-course-form");
  cForm.onsubmit = (e) => {
    e.preventDefault();
    const titleVal = document.getElementById("course-title").value.trim();
    const emojiVal = document.getElementById("course-icon").value.trim();
    const descVal = document.getElementById("course-desc").value.trim();
    const difVal = document.getElementById("course-difficulty").value;
    const modVal = document.getElementById("course-modules").value.split(",").map(m => m.trim()).filter(m => m !== "");
    
    const newCourseObj = {
      id: "course-" + Date.now(),
      title: titleVal,
      emoji: emojiVal,
      desc: descVal,
      difficulty: difVal,
      modules: modVal
    };
    
    courses.push(newCourseObj);
    saveData();
    
    // UI regenerator
    renderDashboardCourses();
    renderCurriculumCourses();
    
    alert(`Success! '${titleVal}' course has been deployed and saved.`);
    cForm.reset();
    playSynthBeep(660, "sine", 0.25);
  };
  
  // 2. ADD FLASHCARD
  const fcForm = document.getElementById("tutor-fc-form");
  fcForm.onsubmit = (e) => {
    e.preventDefault();
    const deckVal = document.getElementById("fc-deck-title").value.trim();
    const qVal = document.getElementById("fc-question").value.trim();
    const aVal = document.getElementById("fc-answer").value.trim();
    
    if (!flashcards[deckVal]) {
      flashcards[deckVal] = [];
    }
    
    flashcards[deckVal].push({ q: qVal, a: aVal });
    saveData();
    
    // Dropdowns regenerator
    repopulateFlashcardDropdowns();
    
    alert(`Success! Card successfully appended into deck '${deckVal}'.`);
    fcForm.reset();
    playSynthBeep(660, "sine", 0.25);
  };
  
  // 3. ADD QUIZ QUESTION
  const qzForm = document.getElementById("tutor-qz-form");
  qzForm.onsubmit = (e) => {
    e.preventDefault();
    const subVal = document.getElementById("qz-subject").value.trim();
    const questionVal = document.getElementById("qz-question").value.trim();
    const optA = document.getElementById("qz-opt-a").value.trim();
    const optB = document.getElementById("qz-opt-b").value.trim();
    const optC = document.getElementById("qz-opt-c").value.trim();
    const optD = document.getElementById("qz-opt-d").value.trim();
    const correctLetter = document.getElementById("qz-correct").value;
    const expVal = document.getElementById("qz-explanation").value.trim();
    
    const optMapping = { "A": optA, "B": optB, "C": optC, "D": optD };
    const correctValText = optMapping[correctLetter];
    
    if (!quizzes[subVal]) {
      quizzes[subVal] = [];
    }
    
    quizzes[subVal].push({
      q: questionVal,
      a: correctValText,
      opts: [optA, optB, optC, optD],
      exp: expVal
    });
    saveData();
    
    // Reset lists
    resetQuizModule();
    
    alert(`Success! Question successfully injected into '${subVal}' quiz bank.`);
    qzForm.reset();
    playSynthBeep(660, "sine", 0.25);
  };
  
  // RESET DATA BUTTON
  document.getElementById("tutor-reset-data").onclick = () => {
    if (confirm("Are you sure you want to restore defaults? All newly created courses, flashcards, and quizzes will be deleted.")) {
      localStorage.removeItem("ae_courses");
      localStorage.removeItem("ae_flashcards");
      localStorage.removeItem("ae_quizzes");
      
      courses = DEFAULT_COURSES;
      flashcards = DEFAULT_FLASHCARDS;
      quizzes = DEFAULT_QUIZZES;
      
      saveData();
      
      // UI refreshers
      renderDashboardCourses();
      renderCurriculumCourses();
      repopulateFlashcardDropdowns();
      resetFlashcardModule();
      resetQuizModule();
      
      alert("Application storage successfully reset.");
      playSynthBeep(220, "sawtooth", 0.3);
    }
  };
}
