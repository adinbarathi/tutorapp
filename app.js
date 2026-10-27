/**
 * OPENCOURSES - Find 120+ Free Online Courses
 * Coursera-style Curated Free Educational Courses Platform
 */

// =============================================================================
// 1. DATA SOURCE RESOLUTION
// =============================================================================

const ALL_PROVIDERS = (typeof window !== "undefined" && window.ALL_PROVIDERS_DATA) 
  ? window.ALL_PROVIDERS_DATA 
  : ((typeof ALL_PROVIDERS_DATA !== "undefined" && Array.isArray(ALL_PROVIDERS_DATA)) ? ALL_PROVIDERS_DATA : []);

const ALL_COURSES = (typeof window !== "undefined" && window.ALL_COURSES_DATA) 
  ? window.ALL_COURSES_DATA 
  : ((typeof ALL_COURSES_DATA !== "undefined" && Array.isArray(ALL_COURSES_DATA)) ? ALL_COURSES_DATA : []);

const INITIAL_DOUBTS = [
  {
    id: "q-1",
    courseId: "course-google-ml",
    courseTitle: "Machine Learning Crash Course by Google",
    title: "How does gradient descent avoid local minima?",
    content: "When training deep neural networks with non-convex loss functions, does stochastic gradient descent (SGD) jump out of shallow local minima due to noisy batch approximations?",
    timestamp: "2 hours ago",
    status: "answered",
    answer: "Yes, exactly! Stochastic gradient descent introduces variance into gradient updates because each batch is a small sample. This stochastic noise often helps the optimizer escape saddle points and shallow local minima to find better global solutions."
  },
  {
    id: "q-2",
    courseId: "course-neso-digital-electronics",
    courseTitle: "Digital Electronics & Logic Design (Neso Academy)",
    title: "Difference between combinational and sequential circuits?",
    content: "In lecture 1 on logic gates, what is the fundamental architectural difference between combinational logic and sequential logic in terms of clock memory?",
    timestamp: "5 hours ago",
    status: "answered",
    answer: "Combinational circuits depend purely on current inputs with no feedback or memory elements (like AND gates, adders, and multiplexers). Sequential circuits include memory elements (flip-flops, registers) and depend on both current inputs and previous internal state, typically regulated by a clock signal."
  },
  {
    id: "q-3",
    courseId: "course-harvard-cs50x",
    courseTitle: "CS50x: Introduction to Computer Science (Harvard)",
    title: "Pointers and memory allocation in C?",
    content: "Why does freeing a pointer without setting it to NULL create a dangling pointer security vulnerability in C?",
    timestamp: "1 day ago",
    status: "pending",
    answer: null
  }
];

// =============================================================================
// 2. STATE MANAGER & PERSISTENCE
// =============================================================================

class Store {
  constructor() {
    this.providers = ALL_PROVIDERS;
    this.courses = ALL_COURSES;
    this.doubts = this.load("opencourses_doubts", INITIAL_DOUBTS);
    
    // User learning progress & enrolled courses
    this.progress = this.load("opencourses_progress", {
      enrolledCourseIds: [
        "course-google-ml",
        "course-harvard-cs50x",
        "course-neso-digital-electronics",
        "course-fcc-fullstack"
      ],
      completedLessonIds: ["gml-1", "cs50-1"],
      notes: {
        "gml-1": "Supervised learning maps input features X to target labels Y using loss minimization.",
        "cs50-1": "Computational thinking is the application of precise algorithms to solve problems efficiently."
      },
      lastWatchedCourseId: "course-google-ml",
      lastWatchedLessonId: "gml-1"
    });

    // Learner verification profile
    this.learner = this.load("opencourses_learner", {
      name: localStorage.getItem("opencourses_recipient_name") || "Arjun Sharma",
      email: "arjun.sharma@alumni.harvard.edu",
      verified: false,
      idType: "student"
    });

    this.save();
  }

  saveLearner(name, email, idType = "student") {
    this.learner = { name, email, idType, verified: true };
    localStorage.setItem("opencourses_learner", JSON.stringify(this.learner));
    localStorage.setItem("opencourses_recipient_name", name);
  }

  load(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.warn(`Error loading ${key}:`, e);
      return fallback;
    }
  }

  save() {
    localStorage.setItem("opencourses_doubts", JSON.stringify(this.doubts));
    localStorage.setItem("opencourses_progress", JSON.stringify(this.progress));
  }

  resetDemo() {
    localStorage.removeItem("opencourses_doubts");
    localStorage.removeItem("opencourses_progress");
    location.reload();
  }

  getProviderById(id) {
    return this.providers.find(p => p.id === id);
  }

  getCourseById(id) {
    return this.courses.find(c => c.id === id);
  }

  isEnrolled(courseId) {
    return this.progress.enrolledCourseIds.includes(courseId);
  }

  enroll(courseId) {
    if (!this.progress.enrolledCourseIds.includes(courseId)) {
      this.progress.enrolledCourseIds.push(courseId);
      this.save();
    }
  }

  isLessonCompleted(lessonId) {
    return this.progress.completedLessonIds.includes(lessonId);
  }

  toggleLessonComplete(lessonId) {
    const idx = this.progress.completedLessonIds.indexOf(lessonId);
    if (idx > -1) {
      this.progress.completedLessonIds.splice(idx, 1);
    } else {
      this.progress.completedLessonIds.push(lessonId);
    }
    this.save();
    return this.isLessonCompleted(lessonId);
  }

  saveNote(lessonId, text) {
    this.progress.notes[lessonId] = text;
    this.save();
  }

  getNote(lessonId) {
    return this.progress.notes[lessonId] || "";
  }

  setLastWatched(courseId, lessonId) {
    this.progress.lastWatchedCourseId = courseId;
    this.progress.lastWatchedLessonId = lessonId;
    this.enroll(courseId);
    this.save();
  }
}

const store = new Store();

// =============================================================================
// 3. UTILITY HELPERS
// =============================================================================

function extractYouTubeId(urlOrId) {
  if (!urlOrId) return "";
  const clean = urlOrId.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(clean)) {
    return clean;
  }
  const matchWatch = clean.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (matchWatch) return matchWatch[1];
  const matchShort = clean.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (matchShort) return matchShort[1];
  const matchEmbed = clean.match(/embed\/([a-zA-Z0-9_-]{11})/);
  if (matchEmbed) return matchEmbed[1];
  const matchShorts = clean.match(/shorts\/([a-zA-Z0-9_-]{11})/);
  if (matchShorts) return matchShorts[1];
  return "";
}

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// =============================================================================
// 4. APP CONTROLLER
// =============================================================================

class AppController {
  constructor() {
    this.currentViewId = "view-courses";
    this.selectedProviderId = null;
    this.activeCourseId = store.progress.lastWatchedCourseId || store.courses[0]?.id || "course-google-ml";
    this.activeLessonId = store.progress.lastWatchedLessonId || store.courses[0]?.lessons[0]?.id || "gml-1";
    this.searchQuery = "";
    this.selectedSubjectFilter = "all";
    this.selectedProviderFilter = "all";
    this.selectedLevelFilter = "all";
    this.selectedTypeFilter = "all";
    this.playlistPlayerMode = false;
    this.userInterests = JSON.parse(localStorage.getItem("opencourses_user_interests")) || null;
    this.backupVideoIds = ['rfscVS0vtbw', 'jS4aFq5-91M', 'fNk_zzaMoSs', 'HtSuA80QTyo', 'LfaMVlDaQ24', 'i_LwzRVP7bg'];
    this.mirrorIndex = 0;
    this.currentPage = 1;
    this.pageSize = 24;
    this.recipientName = localStorage.getItem("opencourses_recipient_name") || "Arjun Sharma";

    this.init();
  }

  init() {
    this.applyTheme();
    this.setupEventListeners();
    this.populateFilterDropdowns();
    this.renderAllViews();
  }

  applyTheme() {
    const savedTheme = localStorage.getItem("opencourses_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    const sunIcon = document.querySelector(".sun-icon");
    const moonIcon = document.querySelector(".moon-icon");
    if (savedTheme === "dark") {
      sunIcon?.classList.remove("hidden");
      moonIcon?.classList.add("hidden");
    } else {
      sunIcon?.classList.add("hidden");
      moonIcon?.classList.remove("hidden");
    }
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    localStorage.setItem("opencourses_theme", next);
    this.applyTheme();
    showToast(`Switched to ${next} theme`, "info");
  }

  switchView(viewId) {
    this.currentViewId = viewId;
    document.querySelectorAll(".content-view").forEach(v => v.classList.remove("active"));
    const target = document.getElementById(viewId);
    if (target) {
      target.classList.add("active");
    }

    // Update sidebar active buttons
    document.querySelectorAll(".nav-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-view") === viewId);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });

    // Refresh view specific content
    if (viewId === "view-fyp") {
      this.renderFypView();
    } else if (viewId === "view-courses") {
      this.renderCoursesGrid();
    } else if (viewId === "view-institutions") {
      this.renderInstitutionsGrid();
    } else if (viewId === "view-classroom") {
      this.renderClassroom();
    } else if (viewId === "view-my-learning") {
      this.renderMyLearning();
    } else if (viewId === "view-doubts") {
      this.renderDoubts();
    }
  }

  setupEventListeners() {
    // Theme toggle
    document.getElementById("theme-toggle-btn")?.addEventListener("click", () => this.toggleTheme());

    // Brand Home Link
    document.getElementById("brand-home-link")?.addEventListener("click", (e) => {
      e.preventDefault();
      this.switchView("view-courses");
    });

    // Mobile sidebar toggle
    document.getElementById("sidebar-toggle")?.addEventListener("click", () => {
      document.getElementById("app-sidebar")?.classList.toggle("open");
    });

    // Navigation buttons in sidebar
    document.querySelectorAll(".nav-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const view = btn.getAttribute("data-view");
        if (view) {
          this.switchView(view);
          document.getElementById("app-sidebar")?.classList.remove("open");
        }
      });
    });

    // Quick header button for My Learning
    document.getElementById("btn-quick-my-learning")?.addEventListener("click", () => {
      this.switchView("view-my-learning");
    });

    // Global Search Input
    const searchInput = document.getElementById("global-search-input");
    const clearBtn = document.getElementById("clear-search-btn");

    searchInput?.addEventListener("input", (e) => {
      this.searchQuery = e.target.value.trim().toLowerCase();
      this.currentPage = 1;
      clearBtn?.classList.toggle("hidden", !this.searchQuery);
      if (this.currentViewId !== "view-courses") {
        this.switchView("view-courses");
      } else {
        this.renderCoursesGrid();
      }
    });

    clearBtn?.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      this.searchQuery = "";
      this.currentPage = 1;
      clearBtn.classList.add("hidden");
      this.renderCoursesGrid();
    });

    // Category Filter Pills
    document.querySelectorAll("#category-filter-bar .filter-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        document.querySelectorAll("#category-filter-bar .filter-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.selectedSubjectFilter = pill.getAttribute("data-subject") || "all";
        this.currentPage = 1;
        this.renderCoursesGrid();
      });
    });

    // Filter Dropdowns
    document.getElementById("courses-filter-type")?.addEventListener("change", (e) => {
      this.selectedTypeFilter = e.target.value;
      this.currentPage = 1;
      this.renderCoursesGrid();
    });

    document.getElementById("courses-filter-provider")?.addEventListener("change", (e) => {
      this.selectedProviderFilter = e.target.value;
      this.currentPage = 1;
      this.renderCoursesGrid();
    });

    document.getElementById("courses-filter-level")?.addEventListener("change", (e) => {
      this.selectedLevelFilter = e.target.value;
      this.currentPage = 1;
      this.renderCoursesGrid();
    });

    // Back to institutions button
    document.getElementById("back-to-institutions-btn")?.addEventListener("click", () => {
      this.switchView("view-institutions");
    });

    // Reset Demo Data
    document.getElementById("reset-demo-data-btn")?.addEventListener("click", () => {
      if (confirm("Reset learning progress and saved notes to defaults?")) {
        store.resetDemo();
      }
    });

    // Export Data
    document.getElementById("export-data-btn")?.addEventListener("click", () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(store.progress, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "opencourses-learning-backup.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast("Learning backup downloaded", "info");
    });

    // Classroom Tabs
    document.querySelectorAll("[data-classroom-tab]").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-classroom-tab");
        document.querySelectorAll("[data-classroom-tab]").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".classroom-tab-pane").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById(targetTab)?.classList.add("active");
      });
    });

    // Notes Save
    document.getElementById("save-notes-btn")?.addEventListener("click", () => {
      const textarea = document.getElementById("lesson-notes-textarea");
      if (textarea && this.activeLessonId) {
        store.saveNote(this.activeLessonId, textarea.value);
        const status = document.getElementById("notes-save-status");
        if (status) {
          status.textContent = "Saved to browser";
          setTimeout(() => { status.textContent = "Saved"; }, 2000);
        }
        showToast("Study notes saved", "success");
      }
    });

    document.getElementById("clear-notes-btn")?.addEventListener("click", () => {
      const textarea = document.getElementById("lesson-notes-textarea");
      if (textarea && confirm("Clear your notes for this lecture?")) {
        textarea.value = "";
        store.saveNote(this.activeLessonId, "");
        showToast("Notes cleared", "info");
      }
    });

    // Mark Lesson Complete
    document.getElementById("mark-lesson-complete-btn")?.addEventListener("click", () => {
      if (this.activeLessonId) {
        const isDone = store.toggleLessonComplete(this.activeLessonId);
        this.updateLessonCompletionUI(isDone);
        this.updatePlaylistUI();
        showToast(isDone ? "Lesson completed" : "Marked as incomplete", "info");
      }
    });

    // Classroom Question Form
    document.getElementById("classroom-quick-doubt-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const textarea = document.getElementById("classroom-doubt-text");
      const content = textarea?.value.trim();
      if (!content) return;

      const course = store.getCourseById(this.activeCourseId);
      const newDoubt = {
        id: `q-${Date.now()}`,
        courseId: this.activeCourseId,
        courseTitle: course ? course.title : "Course Question",
        title: content.slice(0, 60) + (content.length > 60 ? "..." : ""),
        content: content,
        timestamp: "Just now",
        status: "pending",
        answer: null
      };

      store.doubts.unshift(newDoubt);
      store.save();
      textarea.value = "";
      showToast("Question submitted to Q&A Desk", "success");
    });

    // Continue Learning Resume Button
    document.getElementById("continue-learning-btn")?.addEventListener("click", () => {
      if (store.progress.lastWatchedCourseId && store.progress.lastWatchedLessonId) {
        this.openClassroomLesson(store.progress.lastWatchedCourseId, store.progress.lastWatchedLessonId);
      } else {
        const firstCourse = store.courses[0];
        if (firstCourse && firstCourse.lessons.length > 0) {
          this.openClassroomLesson(firstCourse.id, firstCourse.lessons[0].id);
        }
      }
    });

    // Ask Question Modal
    document.getElementById("open-ask-doubt-modal-btn")?.addEventListener("click", () => {
      const modal = document.getElementById("ask-doubt-modal");
      const select = document.getElementById("modal-doubt-course-select");
      if (select) {
        select.innerHTML = store.courses.map(c => `<option value="${c.id}">${c.title}</option>`).join("");
      }
      modal?.classList.remove("hidden");
    });

    document.getElementById("close-ask-doubt-modal-btn")?.addEventListener("click", () => {
      document.getElementById("ask-doubt-modal")?.classList.add("hidden");
    });

    document.getElementById("cancel-doubt-btn")?.addEventListener("click", () => {
      document.getElementById("ask-doubt-modal")?.classList.add("hidden");
    });

    document.getElementById("ask-modal-doubt-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const courseId = document.getElementById("modal-doubt-course-select")?.value;
      const title = document.getElementById("modal-doubt-title-input")?.value.trim();
      const content = document.getElementById("modal-doubt-content-input")?.value.trim();
      const course = store.getCourseById(courseId);

      if (!title || !content) return;

      const newDoubt = {
        id: `q-${Date.now()}`,
        courseId: courseId,
        courseTitle: course ? course.title : "General Topic",
        title: title,
        content: content,
        timestamp: "Just now",
        status: "pending",
        answer: null
      };

      store.doubts.unshift(newDoubt);
      store.save();

      document.getElementById("ask-doubt-modal")?.classList.add("hidden");
      document.getElementById("ask-modal-doubt-form")?.reset();
      this.renderDoubts();
      showToast("Question posted to Q&A Desk", "success");
    });

    // Certificate Modal Listeners
    const certRecipientInput = document.getElementById("cert-recipient-input");
    if (certRecipientInput) {
      certRecipientInput.value = this.recipientName;
      certRecipientInput.addEventListener("input", (e) => {
        this.recipientName = e.target.value.trim() || "Student Learner";
        localStorage.setItem("opencourses_recipient_name", this.recipientName);
        const displayName = document.getElementById("cert-display-name");
        if (displayName) displayName.textContent = this.recipientName;
      });
    }

    document.getElementById("close-cert-modal-btn")?.addEventListener("click", () => {
      document.getElementById("certificate-modal")?.classList.add("hidden");
    });

    document.getElementById("btn-print-cert")?.addEventListener("click", () => {
      window.print();
    });

    document.getElementById("btn-copy-cert-id")?.addEventListener("click", () => {
      const certIdEl = document.getElementById("cert-display-id");
      if (certIdEl && certIdEl.textContent) {
        navigator.clipboard?.writeText(certIdEl.textContent);
        showToast("Certificate ID copied to clipboard", "success");
      }
    });

    // Interests Modal Listeners
    document.getElementById("interests-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "interests-modal") this.closeInterestsModal();
    });

    // Learner Auth Modal Listeners
    document.getElementById("auth-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "auth-modal") document.getElementById("auth-modal")?.classList.add("hidden");
    });

    document.getElementById("close-auth-modal-btn")?.addEventListener("click", () => {
      document.getElementById("auth-modal")?.classList.add("hidden");
    });

    document.getElementById("learner-auth-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("auth-legal-name");
      const emailInput = document.getElementById("auth-email");
      const idTypeSelect = document.getElementById("auth-id-type");
      const submitBtn = document.getElementById("btn-submit-auth");
      const spinnerBox = document.getElementById("auth-verifying-state");
      const stepText = document.getElementById("auth-step-text");

      const name = nameInput?.value.trim() || "Student Learner";
      const email = emailInput?.value.trim() || "learner@university.edu";
      const idType = idTypeSelect?.value || "student";

      // Trigger realistic multi-step security verification animation
      if (submitBtn) submitBtn.classList.add("hidden");
      if (spinnerBox) spinnerBox.classList.remove("hidden");

      if (stepText) stepText.textContent = "Verifying curriculum lecture logs and module progress...";

      setTimeout(() => {
        if (stepText) stepText.textContent = "Validating cryptographic integrity & academic honor code...";
      }, 450);

      setTimeout(() => {
        if (stepText) stepText.textContent = "Digitally signing credential with OpenCourses Registry...";
      }, 900);

      setTimeout(() => {
        store.saveLearner(name, email, idType);
        this.recipientName = name;

        if (spinnerBox) spinnerBox.classList.add("hidden");
        if (submitBtn) submitBtn.classList.remove("hidden");
        document.getElementById("auth-modal")?.classList.add("hidden");

        showToast("Identity verified! Official certificate issued.", "success");

        if (this.pendingCertCourseId) {
          this.openCertificateModal(this.pendingCertCourseId);
          this.pendingCertCourseId = null;
        } else {
          this.openCertificateModal(this.activeCourseId);
        }
      }, 1350);
    });
  }

  populateFilterDropdowns() {
    const providerSelect = document.getElementById("courses-filter-provider");
    if (providerSelect) {
      providerSelect.innerHTML = `<option value="all">All Providers & Universities (${store.providers.length})</option>` +
        store.providers.map(p => `<option value="${p.id}">${p.shortName || p.name}</option>`).join("");
    }
  }

  renderAllViews() {
    this.renderFypView();
    this.renderCoursesGrid();
    this.renderInstitutionsGrid();
    this.renderClassroom();
    this.renderMyLearning();
    this.renderDoubts();
  }

  // --- FOR YOU (FYP) PERSONALIZED SUGGESTIONS ---
  renderFypView() {
    const fypGrid = document.getElementById("fyp-courses-grid");
    const emptyState = document.getElementById("fyp-empty-state");
    const tagsBar = document.getElementById("fyp-tags-bar");
    const subtitleEl = document.getElementById("fyp-subtitle");

    if (!fypGrid) return;

    if (!this.userInterests || !this.userInterests.fields || this.userInterests.fields.length === 0) {
      if (emptyState) emptyState.classList.remove("hidden");
      if (fypGrid) fypGrid.innerHTML = "";
      if (tagsBar) tagsBar.innerHTML = "";
      if (subtitleEl) subtitleEl.textContent = "Tell us what fields you want to learn to unlock personalized course suggestions.";
      return;
    }

    if (emptyState) emptyState.classList.add("hidden");

    // Render active interest tags
    const fields = this.userInterests.fields;
    const level = this.userInterests.level || "all";

    if (tagsBar) {
      tagsBar.innerHTML = fields.map(f => `
        <span class="fyp-tag-pill">
          <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          ${f}
        </span>
      `).join("") + (level !== "all" ? `
        <span class="fyp-tag-pill" style="border-color:var(--primary); background:var(--primary-light);">
          Level: ${level}
        </span>
      ` : "");
    }

    if (subtitleEl) {
      subtitleEl.textContent = `Curated based on your interests in ${fields.join(", ")}${level !== "all" ? ` (${level})` : ""}.`;
    }

    // Matching Algorithm
    const scoredCourses = store.courses.map(c => {
      let score = 0;
      let matchedReason = "";

      const cSubj = (c.subject || "").toLowerCase();
      const cTitle = (c.title || "").toLowerCase();
      const cDesc = (c.desc || "").toLowerCase();

      fields.forEach(f => {
        const fLower = f.toLowerCase();
        if (cSubj.includes(fLower)) {
          score += 10;
          if (!matchedReason) matchedReason = f;
        } else if (cTitle.includes(fLower) || cDesc.includes(fLower)) {
          score += 5;
          if (!matchedReason) matchedReason = f;
        }
      });

      if (level !== "all") {
        if ((c.level || "").toLowerCase() === level.toLowerCase()) {
          score += 4;
        }
      }

      return { course: c, score, matchedReason };
    });

    // Filter matched courses (score > 0)
    let fypList = scoredCourses.filter(item => item.score > 0);

    // If matches are few, fall back to top rated courses
    if (fypList.length === 0) {
      fypList = scoredCourses.slice(0, 24);
    }

    // Sort by score desc, then by provider rating desc
    fypList.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      const provA = store.getProviderById(a.course.providerId);
      const provB = store.getProviderById(b.course.providerId);
      const ratA = provA ? provA.rating : 4.9;
      const ratB = provB ? provB.rating : 4.9;
      return ratB - ratA;
    });

    const displayList = fypList.slice(0, 36);

    fypGrid.innerHTML = displayList.map(item => {
      const c = item.course;
      const provider = store.getProviderById(c.providerId);
      const providerCode = c.providerCode || (provider ? provider.code : "FREE");
      const providerName = c.institution || (provider ? provider.institution : "Top Provider");
      const lessonCount = (c.lessons || []).length;
      const isEnrolled = store.isEnrolled(c.id);
      const rating = provider ? provider.rating : 4.95;
      const matchLabel = item.matchedReason ? `Matches ${item.matchedReason}` : "Top Recommendation";

      return `
        <article class="course-card" data-course-id="${c.id}">
          <div class="course-card-cover" style="background-image: url('${c.coverPhoto}');">
            <div class="course-card-badge-row">
              <span class="badge-institution">
                <strong>${providerCode}</strong> ${providerName}
              </span>
              <span class="badge-fyp-match" title="Personalized recommendation">
                <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ${matchLabel}
              </span>
              <span class="badge-free">Free</span>
            </div>
          </div>
          <div class="course-card-body">
            <span class="course-institution-name">${providerName}</span>
            <h3 class="course-card-title" title="${c.title}">${c.title}</h3>
            <span class="course-instructor-name">${c.instructorName}</span>
            
            <div class="course-meta-pills">
              <span class="meta-pill level">${c.level || "All Levels"}</span>
              <span class="meta-pill">${c.subject || "Computer Science"}</span>
            </div>

            <div class="course-rating-row">
              <svg viewBox="0 0 24 24" fill="#e88d00" width="14" height="14" style="margin-right:2px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span class="rating-score">${rating}</span>
              <span class="rating-count">(Verified Course)</span>
            </div>
          </div>
          <div class="course-card-footer">
            <span class="lesson-count">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              ${lessonCount} lesson${lessonCount === 1 ? '' : 's'}
            </span>
            <div style="display:flex; align-items:center; gap:0.45rem;">
              <a href="${c.playlistUrl}" target="_blank" rel="noopener noreferrer" class="card-playlist-direct" title="Open YouTube Playlist directly" onclick="event.stopPropagation();">
                <svg viewBox="0 0 24 24" fill="currentColor" width="11" height="11"><path d="M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z"/></svg>
                Playlist
              </a>
              <button class="btn btn-primary btn-xs" onclick="app.openClassroomCourse('${c.id}')">
                ${isEnrolled ? "Continue" : "Start Free"}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  // --- INTERESTS MODAL HANDLERS ---
  openInterestsModal() {
    const modal = document.getElementById("interests-modal");
    if (!modal) return;

    // Pre-check fields if user already has preferences
    if (this.userInterests && this.userInterests.fields) {
      const activeFields = this.userInterests.fields;
      document.querySelectorAll("input[name='fyp-field']").forEach(input => {
        input.checked = activeFields.includes(input.value);
      });
      if (this.userInterests.level) {
        const lvlRadio = document.querySelector(`input[name='fyp-level'][value='${this.userInterests.level}']`);
        if (lvlRadio) lvlRadio.checked = true;
      }
    }

    modal.classList.remove("hidden");
  }

  closeInterestsModal() {
    document.getElementById("interests-modal")?.classList.add("hidden");
  }

  saveInterestsFromModal() {
    const checkedInputs = Array.from(document.querySelectorAll("input[name='fyp-field']:checked"));
    const selectedFields = checkedInputs.map(input => input.value);
    const selectedLevel = document.querySelector("input[name='fyp-level']:checked")?.value || "all";

    if (selectedFields.length === 0) {
      showToast("Please tick at least one field of interest to personalize your feed.", "warning");
      return;
    }

    this.userInterests = {
      fields: selectedFields,
      level: selectedLevel,
      updatedAt: new Date().toISOString()
    };

    localStorage.setItem("opencourses_user_interests", JSON.stringify(this.userInterests));
    this.closeInterestsModal();
    showToast("Preferences saved! Your FYP feed has been personalized.", "success");
    this.switchView("view-fyp");
    this.renderFypView();
  }

  toggleMirrorBackupVideo() {
    this.mirrorIndex = (this.mirrorIndex + 1) % this.backupVideoIds.length;
    const mirrorVid = this.backupVideoIds[this.mirrorIndex];
    const iframe = document.getElementById("youtube-player-iframe");
    if (iframe) {
      iframe.src = `https://www.youtube-nocookie.com/embed/${mirrorVid}?enablejsapi=1&rel=0`;
      showToast("Switched to verified backup mirror player", "info");
    }
  }

  // --- 1. COURSES GRID (COURSERA STYLE WITH PAGINATION) ---
  renderCoursesGrid() {
    const container = document.getElementById("all-courses-grid");
    const countLabel = document.getElementById("courses-count-label");
    const paginationContainer = document.getElementById("courses-pagination-container");
    if (!container) return;

    let list = store.courses;

    // Filter by subject / channel tag
    if (this.selectedSubjectFilter !== "all") {
      if (this.selectedSubjectFilter === "yt-courses") {
        list = list.filter(c => c.isYouTubeCourse || c.isOfficialPlaylist || c.playlistId);
      } else {
        const q = this.selectedSubjectFilter.toLowerCase();
        list = list.filter(c => {
          const subj = (c.subject || "").toLowerCase();
          const inst = (c.institution || "").toLowerCase();
          const prov = (c.instructorName || "").toLowerCase();
          const title = (c.title || "").toLowerCase();
          return subj.includes(q) || inst.includes(q) || prov.includes(q) || title.includes(q);
        });
      }
    }

    // Filter by format type dropdown
    if (this.selectedTypeFilter === "youtube-course") {
      list = list.filter(c => c.isYouTubeCourse);
    } else if (this.selectedTypeFilter === "playlists") {
      list = list.filter(c => c.isOfficialPlaylist || c.playlistId);
    }

    // Filter by provider dropdown
    if (this.selectedProviderFilter !== "all") {
      list = list.filter(c => c.providerId === this.selectedProviderFilter);
    }

    // Filter by level
    if (this.selectedLevelFilter !== "all") {
      list = list.filter(c => (c.level || "").toLowerCase() === this.selectedLevelFilter.toLowerCase());
    }

    // Filter by global search query
    if (this.searchQuery) {
      const q = this.searchQuery;
      list = list.filter(c => {
        return (c.title || "").toLowerCase().includes(q) ||
               (c.desc || "").toLowerCase().includes(q) ||
               (c.institution || "").toLowerCase().includes(q) ||
               (c.instructorName || "").toLowerCase().includes(q) ||
               (c.subject || "").toLowerCase().includes(q);
      });
    }

    const totalCount = list.length;
    const totalPages = Math.ceil(totalCount / this.pageSize) || 1;

    if (this.currentPage > totalPages) {
      this.currentPage = 1;
    }

    const startIdx = (this.currentPage - 1) * this.pageSize;
    const endIdx = Math.min(startIdx + this.pageSize, totalCount);
    const pagedList = list.slice(startIdx, endIdx);

    if (countLabel) {
      countLabel.textContent = totalCount > 0 
        ? `Showing ${startIdx + 1} - ${endIdx} of ${totalCount.toLocaleString()} courses` 
        : `0 courses found`;
    }

    if (totalCount === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 4rem 2rem; text-align: center; background: var(--bg-card); border-radius: var(--radius-sm); border: 1px dashed var(--border-subtle);">
          <h3 style="margin-bottom: 0.5rem; color: var(--text-main);">No matching courses found</h3>
          <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Try adjusting your keyword or reset filters to browse all 1,000+ courses.</p>
          <button class="btn btn-primary" onclick="app.resetFilters()">Reset All Filters</button>
        </div>
      `;
      if (paginationContainer) paginationContainer.innerHTML = "";
      return;
    }

    container.innerHTML = pagedList.map(c => {
      const provider = store.getProviderById(c.providerId);
      const providerCode = c.providerCode || (provider ? provider.code : "FREE");
      const providerName = c.institution || (provider ? provider.institution : "Top Provider");
      const lessonCount = (c.lessons || []).length;
      const isEnrolled = store.isEnrolled(c.id);
      const rating = provider ? provider.rating : 4.95;

      return `
        <article class="course-card" data-course-id="${c.id}">
          <div class="course-card-cover" style="background-image: url('${c.coverPhoto}');">
            <div class="course-card-badge-row">
              <span class="badge-institution">
                <strong>${providerCode}</strong> ${providerName}
              </span>
              <span class="badge-yt-playlist" title="Official YouTube Course Section / Playlist">
                <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10" style="vertical-align:-1px; margin-right:2px;"><path d="M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z"/></svg>Playlist
              </span>
              <span class="badge-free">Free</span>
            </div>
          </div>
          <div class="course-card-body">
            <span class="course-institution-name">${providerName}</span>
            <h3 class="course-card-title" title="${c.title}">${c.title}</h3>
            <span class="course-instructor-name">${c.instructorName}</span>
            
            <div class="course-meta-pills">
              <span class="meta-pill level">${c.level || "All Levels"}</span>
              <span class="meta-pill">${c.subject || "Computer Science"}</span>
            </div>

            <div class="course-rating-row">
              <svg viewBox="0 0 24 24" fill="#e88d00" width="14" height="14" style="margin-right:2px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span class="rating-score">${rating}</span>
              <span class="rating-count">(Verified Course)</span>
            </div>
          </div>
          <div class="course-card-footer">
            <span class="lesson-count">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              ${lessonCount} lesson${lessonCount === 1 ? '' : 's'}
            </span>
            <div style="display:flex; align-items:center; gap:0.45rem;">
              <a href="${c.playlistUrl}" target="_blank" rel="noopener noreferrer" class="card-playlist-direct" title="Open YouTube Playlist directly" onclick="event.stopPropagation();">
                <svg viewBox="0 0 24 24" fill="currentColor" width="11" height="11"><path d="M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z"/></svg>
                Playlist
              </a>
              <button class="btn btn-primary btn-xs" onclick="app.openClassroomCourse('${c.id}')">
                ${isEnrolled ? "Continue" : "Start Free"}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");

    // Render Pagination Controls
    if (paginationContainer) {
      if (totalPages <= 1) {
        paginationContainer.innerHTML = "";
      } else {
        let pagesHtml = "";
        
        // Prev button
        pagesHtml += `
          <button class="pagination-btn" ${this.currentPage === 1 ? 'disabled' : ''} onclick="app.setPage(${this.currentPage - 1})">
            Previous
          </button>
        `;

        // Page numbers (smart window around current page)
        const maxButtons = 5;
        let startPage = Math.max(1, this.currentPage - 2);
        let endPage = Math.min(totalPages, startPage + maxButtons - 1);
        if (endPage - startPage < maxButtons - 1) {
          startPage = Math.max(1, endPage - maxButtons + 1);
        }

        if (startPage > 1) {
          pagesHtml += `<button class="pagination-btn" onclick="app.setPage(1)">1</button>`;
          if (startPage > 2) pagesHtml += `<span class="pagination-info">...</span>`;
        }

        for (let p = startPage; p <= endPage; p++) {
          pagesHtml += `
            <button class="pagination-btn ${p === this.currentPage ? 'active' : ''}" onclick="app.setPage(${p})">
              ${p}
            </button>
          `;
        }

        if (endPage < totalPages) {
          if (endPage < totalPages - 1) pagesHtml += `<span class="pagination-info">...</span>`;
          pagesHtml += `<button class="pagination-btn" onclick="app.setPage(${totalPages})">${totalPages}</button>`;
        }

        // Next button
        pagesHtml += `
          <button class="pagination-btn" ${this.currentPage === totalPages ? 'disabled' : ''} onclick="app.setPage(${this.currentPage + 1})">
            Next
          </button>
        `;

        paginationContainer.innerHTML = pagesHtml;
      }
    }
  }

  setPage(pageNum) {
    this.currentPage = pageNum;
    this.renderCoursesGrid();
    const heading = document.querySelector("#view-courses .view-header");
    if (heading) {
      heading.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  resetFilters() {
    this.searchQuery = "";
    this.selectedSubjectFilter = "all";
    this.selectedProviderFilter = "all";
    this.selectedLevelFilter = "all";
    this.selectedTypeFilter = "all";
    this.playlistPlayerMode = false;
    this.currentPage = 1;

    const searchInput = document.getElementById("global-search-input");
    if (searchInput) searchInput.value = "";
    document.getElementById("clear-search-btn")?.classList.add("hidden");

    document.querySelectorAll("#category-filter-bar .filter-pill").forEach((p, idx) => {
      p.classList.toggle("active", idx === 0);
    });

    const typeSelect = document.getElementById("courses-filter-type");
    if (typeSelect) typeSelect.value = "all";

    const provSelect = document.getElementById("courses-filter-provider");
    if (provSelect) provSelect.value = "all";

    const lvlSelect = document.getElementById("courses-filter-level");
    if (lvlSelect) lvlSelect.value = "all";

    this.renderCoursesGrid();
  }

  // --- 2. INSTITUTIONS & PROVIDERS GRID ---
  renderInstitutionsGrid() {
    const container = document.getElementById("institutions-grid-container");
    if (!container) return;

    container.innerHTML = store.providers.map(p => {
      const courses = store.courses.filter(c => c.providerId === p.id);
      return `
        <article class="institution-card">
          <div class="institution-header-row">
            <div class="institution-badge-logo">${p.code || "EDU"}</div>
            <div class="institution-header-info">
              <h3>${p.name}</h3>
              <p>${p.institution || p.designation}</p>
            </div>
          </div>
          <p class="institution-bio">${p.bio}</p>
          <div class="institution-stats-row">
            <div class="institution-stats-left">
              <div class="inst-stat">
                <strong>${courses.length}</strong>
                <span>Courses</span>
              </div>
              <div class="inst-stat">
                <strong>${(p.studentsCount || 10000).toLocaleString()}+</strong>
                <span>Learners</span>
              </div>
              <div class="inst-stat">
                <strong>${p.rating}</strong>
                <span>Rating</span>
              </div>
            </div>
            <button class="btn btn-outline btn-sm" onclick="app.openInstitutionDetail('${p.id}')">
              View Courses
            </button>
          </div>
        </article>
      `;
    }).join("");
  }

  openInstitutionDetail(providerId) {
    const provider = store.getProviderById(providerId);
    if (!provider) return;

    this.selectedProviderId = providerId;
    const banner = document.getElementById("institution-hero-banner");
    const container = document.getElementById("institution-courses-container");
    const heading = document.getElementById("institution-courses-heading");

    const courses = store.courses.filter(c => c.providerId === providerId);

    if (banner) {
      banner.innerHTML = `
        <div class="hero-content">
          <span class="hero-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            Verified Provider Catalog
          </span>
          <h1>${provider.name}</h1>
          <p>${provider.bio}</p>
        </div>
        <div class="hero-stats-row">
          <div class="stat-item">
            <span class="stat-number">${courses.length}</span>
            <span class="stat-label">Free Courses</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">${(provider.studentsCount || 10000).toLocaleString()}+</span>
            <span class="stat-label">Active Learners</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">${provider.rating}</span>
            <span class="stat-label">Average Rating</span>
          </div>
          <div class="stat-item">
            <a href="${provider.ytChannel || '#'}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-xs" style="color: #fff; border-color: rgba(255,255,255,0.4); margin-top: 0.5rem;">
              Official Channel
            </a>
          </div>
        </div>
      `;
    }

    if (heading) {
      heading.textContent = `Courses from ${provider.shortName || provider.name}`;
    }

    if (container) {
      container.innerHTML = courses.map(c => `
        <article class="course-card" data-course-id="${c.id}">
          <div class="course-card-cover" style="background-image: url('${c.coverPhoto}');">
            <div class="course-card-badge-row">
              <span class="badge-institution"><strong>${provider.code}</strong> ${provider.shortName}</span>
              <span class="badge-free">Free</span>
            </div>
          </div>
          <div class="course-card-body">
            <span class="course-institution-name">${provider.institution}</span>
            <h3 class="course-card-title">${c.title}</h3>
            <span class="course-instructor-name">${c.instructorName}</span>
            <div class="course-meta-pills">
              <span class="meta-pill level">${c.level || "All Levels"}</span>
              <span class="meta-pill">${c.subject}</span>
            </div>
          </div>
          <div class="course-card-footer">
            <span class="lesson-count">${(c.lessons || []).length} lessons</span>
            <button class="btn btn-primary btn-xs" onclick="app.openClassroomCourse('${c.id}')">Start Learning</button>
          </div>
        </article>
      `).join("");
    }

    this.switchView("view-institution-detail");
  }

  // --- 3. CLASSROOM & DISTRACTION-FREE PLAYER ---
  openClassroomCourse(courseId) {
    const course = store.getCourseById(courseId);
    if (!course || !course.lessons || course.lessons.length === 0) return;
    this.openClassroomLesson(courseId, course.lessons[0].id);
  }

  openClassroomLesson(courseId, lessonId) {
    const course = store.getCourseById(courseId);
    if (!course) return;

    const lesson = (course.lessons || []).find(l => l.id === lessonId) || course.lessons[0];
    if (!lesson) return;

    this.activeCourseId = courseId;
    this.activeLessonId = lesson.id;
    store.setLastWatched(courseId, lesson.id);

    this.switchView("view-classroom");
    this.renderClassroom();
  }

  renderClassroom() {
    const course = store.getCourseById(this.activeCourseId);
    if (!course || !course.lessons || course.lessons.length === 0) return;

    const lesson = course.lessons.find(l => l.id === this.activeLessonId) || course.lessons[0];
    this.activeLessonId = lesson.id;

    // Update iframe player
    const iframe = document.getElementById("youtube-player-iframe");
    const videoId = lesson.ytVideoId || extractYouTubeId(lesson.ytUrl);
    if (iframe) {
      let srcUrl = `https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&rel=0`;
      if (this.playlistPlayerMode && course.playlistId) {
        srcUrl = `https://www.youtube-nocookie.com/embed/videoseries?list=${course.playlistId}&enablejsapi=1&rel=0`;
      }
      if (iframe.src !== srcUrl) {
        iframe.src = srcUrl;
      }
    }

    // Update lesson metadata bar
    const courseTitleEl = document.getElementById("player-course-title");
    const lessonTitleEl = document.getElementById("player-lesson-title");
    const institutionTagEl = document.getElementById("player-institution-tag");
    const durationEl = document.getElementById("player-lesson-duration");
    const directYtLink = document.getElementById("player-original-yt-link");
    const playlistYtLink = document.getElementById("player-playlist-yt-link");
    const modeLabel = document.getElementById("player-mode-label");

    if (courseTitleEl) courseTitleEl.textContent = course.title;
    if (lessonTitleEl) lessonTitleEl.textContent = lesson.title;
    if (institutionTagEl) institutionTagEl.textContent = course.institution || course.instructorName;
    if (durationEl) durationEl.textContent = lesson.duration || "15 mins";
    if (directYtLink) {
      directYtLink.href = lesson.ytUrl || `https://www.youtube.com/watch?v=${videoId}&list=${course.playlistId}`;
    }
    if (playlistYtLink) {
      playlistYtLink.href = course.playlistUrl || `https://www.youtube.com/playlist?list=${course.playlistId}`;
    }
    if (modeLabel) {
      modeLabel.textContent = this.playlistPlayerMode ? "Switch to Lecture Player" : "Switch to Full Playlist Stream";
    }

    // Update Mark Completed button
    const isCompleted = store.isLessonCompleted(lesson.id);
    this.updateLessonCompletionUI(isCompleted);

    // Update Playlist UI
    this.updatePlaylistUI();

    // Load Notes
    const notesArea = document.getElementById("lesson-notes-textarea");
    if (notesArea) {
      notesArea.value = store.getNote(lesson.id);
    }

    // Render Quiz
    this.renderQuiz(lesson.quiz);

    // Render Resources
    this.renderResources(lesson.resources);
  }

  togglePlaylistPlayerMode() {
    this.playlistPlayerMode = !this.playlistPlayerMode;
    const course = store.getCourseById(this.activeCourseId);
    if (!course) return;
    const lesson = (course.lessons || []).find(l => l.id === this.activeLessonId) || course.lessons[0];
    const iframe = document.getElementById("youtube-player-iframe");
    const modeLabel = document.getElementById("player-mode-label");

    if (modeLabel) {
      modeLabel.textContent = this.playlistPlayerMode ? "Switch to Lecture Player" : "Switch to Full Playlist Stream";
    }

    if (iframe) {
      if (this.playlistPlayerMode && course.playlistId) {
        iframe.src = `https://www.youtube-nocookie.com/embed/videoseries?list=${course.playlistId}&enablejsapi=1&rel=0`;
        showToast("Switched to Full Playlist Stream (Watch continuously)", "info");
      } else {
        const videoId = lesson.ytVideoId || extractYouTubeId(lesson.ytUrl);
        iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&rel=0`;
        showToast("Switched to Single Lecture Player", "info");
      }
    }
  }

  updateLessonCompletionUI(isCompleted) {
    const btn = document.getElementById("mark-lesson-complete-btn");
    if (!btn) return;

    if (isCompleted) {
      btn.classList.add("btn-primary");
      btn.classList.remove("btn-outline");
      btn.querySelector(".btn-text").textContent = "Completed";
    } else {
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-outline");
      btn.querySelector(".btn-text").textContent = "Mark Completed";
    }
  }

  updatePlaylistUI() {
    const course = store.getCourseById(this.activeCourseId);
    if (!course) return;

    const list = document.getElementById("playlist-lessons-container");
    const nameEl = document.getElementById("playlist-course-name");
    const labelEl = document.getElementById("playlist-progress-label");
    const fillEl = document.getElementById("playlist-progress-fill");

    if (nameEl) {
      nameEl.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:0.25rem;">
          <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.5px; color:#c4302b; font-weight:700; display:flex; align-items:center; gap:0.35rem;">
            <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z"/></svg>
            Official Course Playlist
          </span>
          <span style="font-size:0.95rem; font-weight:700; color:var(--text-main);">${course.title}</span>
        </div>
      `;
    }

    const total = (course.lessons || []).length;
    let completedCount = 0;

    course.lessons.forEach(l => {
      if (store.isLessonCompleted(l.id)) completedCount++;
    });

    const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;
    if (labelEl) labelEl.textContent = `${completedCount} of ${total} completed (${percent}%)`;
    if (fillEl) fillEl.style.width = `${percent}%`;

    // Check if course is 100% completed to unlock certificate banner
    const certBox = document.getElementById("classroom-cert-unlocked-box");
    if (certBox) {
      if (completedCount === total && total > 0) {
        certBox.classList.remove("hidden");
        certBox.innerHTML = `
          <div class="cert-claim-banner">
            <div class="cert-claim-left">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              <div>
                <h4>Course Completed 100%! Claim Your Official Certificate</h4>
                <p>Congratulations! You have completed all modules. Generate your verifiable certificate of completion.</p>
              </div>
            </div>
            <button class="btn btn-primary" onclick="app.requestClaimCertificate('${course.id}')" style="background: #fff; color: #0a8543; border-color: #fff; font-weight: 700;">
              Claim Certificate
            </button>
          </div>
        `;
      } else {
        certBox.classList.add("hidden");
      }
    }

    if (list) {
      list.innerHTML = (course.lessons || []).map((l, idx) => {
        const isDone = store.isLessonCompleted(l.id);
        const isActive = l.id === this.activeLessonId;
        return `
          <div class="playlist-lesson-item ${isActive ? 'active' : ''}" onclick="app.openClassroomLesson('${course.id}', '${l.id}')">
            <div class="playlist-item-left">
              <div class="lesson-check-box ${isDone ? 'checked' : ''}">
                ${isDone ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" width="12" height="12"><polyline points="20 6 9 17 4 12"/></svg>' : ''}
              </div>
              <div>
                <div class="playlist-item-title">${idx + 1}. ${l.title}</div>
                <div class="playlist-item-dur">${l.duration || '10 mins'}</div>
              </div>
            </div>
          </div>
        `;
      }).join("");
    }
  }

  renderQuiz(quiz) {
    const container = document.getElementById("classroom-quiz-container");
    if (!container) return;

    if (!quiz) {
      container.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem; color: var(--text-muted);">
          <p>No interactive concept check question attached to this lecture.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="quiz-question-title">${quiz.question}</div>
      <div class="quiz-options-list">
        ${quiz.options.map((opt, i) => `
          <div class="quiz-option-item" onclick="app.answerQuiz(${i}, ${quiz.correctIndex}, this)">
            <span style="font-weight: 700; color: var(--primary);">${String.fromCharCode(65 + i)}.</span>
            <span>${opt}</span>
          </div>
        `).join("")}
      </div>
      <div id="quiz-feedback-box" class="quiz-explanation-box hidden">
        <strong>Explanation:</strong> ${quiz.explanation}
      </div>
    `;
  }

  answerQuiz(selectedIndex, correctIndex, el) {
    const parent = el.closest(".quiz-options-list");
    if (!parent) return;

    parent.querySelectorAll(".quiz-option-item").forEach(item => {
      item.style.pointerEvents = "none";
    });

    const isCorrect = selectedIndex === correctIndex;
    el.classList.add(isCorrect ? "correct" : "incorrect");

    if (!isCorrect) {
      const correctEl = parent.children[correctIndex];
      if (correctEl) correctEl.classList.add("correct");
    }

    const feedbackBox = document.getElementById("quiz-feedback-box");
    if (feedbackBox) {
      feedbackBox.classList.remove("hidden");
    }

    showToast(isCorrect ? "Correct answer!" : "Incorrect. Review explanation below.", isCorrect ? "success" : "info");
  }

  renderResources(resources) {
    const container = document.getElementById("classroom-resources-container");
    if (!container) return;

    if (!resources || resources.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem; color: var(--text-muted);">
          <p>No external slide decks or PDF files linked for this lecture.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = resources.map(res => `
      <div class="resource-item">
        <div class="resource-left">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          <span>${res.title || "Supplemental Learning Material"}</span>
        </div>
        <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-xs">
          Open Resource
        </a>
      </div>
    `).join("");
  }

  // --- 4. MY LEARNING DASHBOARD ---
  renderMyLearning() {
    const enrolledIds = store.progress.enrolledCourseIds || [];
    const completedLessonIds = store.progress.completedLessonIds || [];
    const notesCount = Object.keys(store.progress.notes || {}).length;

    const statEnrolled = document.getElementById("student-stat-enrolled");
    const statFinished = document.getElementById("student-stat-completed-lessons");
    const statDoubts = document.getElementById("student-stat-doubts");

    if (statEnrolled) statEnrolled.textContent = enrolledIds.length;
    if (statFinished) statFinished.textContent = completedLessonIds.length;
    if (statDoubts) statDoubts.textContent = store.doubts.length;

    // Continue banner update
    const lastCourse = store.getCourseById(store.progress.lastWatchedCourseId);
    const continueTitle = document.getElementById("continue-course-title");
    const continueSub = document.getElementById("continue-lesson-title");

    if (lastCourse) {
      const lastLesson = (lastCourse.lessons || []).find(l => l.id === store.progress.lastWatchedLessonId) || lastCourse.lessons[0];
      if (continueTitle) continueTitle.textContent = lastCourse.title;
      if (continueSub) continueSub.textContent = lastLesson ? `Lesson: ${lastLesson.title}` : "Ready to continue learning";
    }

    // Render enrolled courses grid
    const enrolledGrid = document.getElementById("student-enrolled-courses-grid");
    if (!enrolledGrid) return;

    const enrolledCourses = store.courses.filter(c => enrolledIds.includes(c.id));

    if (enrolledCourses.length === 0) {
      enrolledGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 3rem 1rem; text-align: center; background: var(--bg-card); border-radius: var(--radius-sm); border: 1px dashed var(--border-subtle);">
          <p style="color: var(--text-muted); margin-bottom: 1rem;">You haven't enrolled in any courses yet.</p>
          <button class="btn btn-primary" onclick="app.switchView('view-courses')">Explore Free Courses</button>
        </div>
      `;
      return;
    }

    enrolledGrid.innerHTML = enrolledCourses.map(c => {
      const totalLessons = (c.lessons || []).length;
      let done = 0;
      (c.lessons || []).forEach(l => {
        if (store.isLessonCompleted(l.id)) done++;
      });
      const pct = totalLessons > 0 ? Math.round((done / totalLessons) * 100) : 0;

      return `
        <article class="course-card" data-course-id="${c.id}">
          <div class="course-card-cover" style="background-image: url('${c.coverPhoto}');">
            <div class="course-card-badge-row">
              <span class="badge-institution">${c.institution || "Provider"}</span>
              <span class="badge-free">${pct}% Done</span>
            </div>
          </div>
          <div class="course-card-body">
            <h3 class="course-card-title">${c.title}</h3>
            <span class="course-instructor-name">${c.instructorName}</span>
            <div class="progress-bar-small" style="margin-top: 0.75rem;">
              <div class="progress-fill" style="width: ${pct}%;"></div>
            </div>
          </div>
          <div class="course-card-footer">
            <span class="lesson-count">${done} / ${totalLessons} finished</span>
            <button class="btn btn-primary btn-xs" onclick="app.openClassroomCourse('${c.id}')">Resume</button>
          </div>
        </article>
      `;
    }).join("");

    // Render Certificates of Completion Gallery
    const certGrid = document.getElementById("student-certificates-grid");
    if (certGrid) {
      const completedCourses = enrolledCourses.filter(c => {
        const totalL = (c.lessons || []).length;
        if (totalL === 0) return false;
        let d = 0;
        c.lessons.forEach(l => { if (store.isLessonCompleted(l.id)) d++; });
        return d === totalL;
      });

      const certCourses = completedCourses.length > 0 
        ? completedCourses 
        : (enrolledCourses.length > 0 ? [enrolledCourses[0]] : [store.courses[0]]);

      certGrid.innerHTML = certCourses.map(c => {
        const isDone = completedCourses.includes(c);
        return `
          <article class="certificate-card">
            <div class="cert-card-header">
              <span class="badge-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                ${isDone ? 'Verified Completion' : 'Certificate Ready'}
              </span>
              <span style="font-size: 0.75rem; color: var(--text-muted);">OpenCourses Academy</span>
            </div>
            <h4 class="cert-card-title">${c.title}</h4>
            <div class="cert-card-inst">${c.institution || "Provider"}</div>
            <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.4;">
              Official non-affiliated certificate recognizing complete module study, lecture participation, and evaluation mastery.
            </p>
            <div class="cert-card-meta">
              <span>Status: ${isDone ? '100% Completed' : 'Eligible for Claim'}</span>
              <button class="btn btn-primary btn-xs" onclick="app.requestClaimCertificate('${c.id}')">
                View Certificate
              </button>
            </div>
          </article>
        `;
      }).join("");
    }
  }

  // --- REALISTIC CERTIFICATE CLAIM & AUTHENTICATION WORKFLOW ---
  requestClaimCertificate(courseId) {
    const course = store.getCourseById(courseId) || store.courses[0];
    if (!course) return;

    this.pendingCertCourseId = course.id;

    // Check if user has completed learner identity verification
    if (store.learner && store.learner.verified) {
      this.openCertificateModal(course.id);
      return;
    }

    // Open realistic Coursera-style identity verification & sign-in modal
    const modal = document.getElementById("auth-modal");
    const targetTitle = document.getElementById("auth-target-course-title");
    const targetInst = document.getElementById("auth-target-course-inst");
    const nameInput = document.getElementById("auth-legal-name");
    const emailInput = document.getElementById("auth-email");

    if (targetTitle) targetTitle.textContent = course.title;
    if (targetInst) targetInst.textContent = `${course.institution} • Open Academic Curriculum`;
    if (nameInput) nameInput.value = (store.learner && store.learner.name) || this.recipientName || "Arjun Sharma";
    if (emailInput) emailInput.value = (store.learner && store.learner.email) || "learner@university.edu";

    modal?.classList.remove("hidden");
  }

  // --- TAILORED UNIVERSAL CERTIFICATE GENERATOR (A4 LANDSCAPE) ---
  openCertificateModal(courseId) {
    const course = store.getCourseById(courseId) || store.courses[0];
    if (!course) return;

    this.activeCertCourseId = course.id;
    const provider = store.getProviderById(course.providerId);
    const instName = course.institution || (provider ? provider.name : "Top University");
    const provId = (course.providerId || "").toLowerCase();
    const subj = (course.subject || "").toLowerCase();

    const certPaper = document.getElementById("certificate-print-area");
    const crestBox = document.getElementById("cert-institution-crest-box");
    const nameInput = document.getElementById("cert-recipient-input");
    const displayName = document.getElementById("cert-display-name");
    const displayCourse = document.getElementById("cert-display-course");
    const displaySpecialty = document.getElementById("cert-display-specialty");
    const displayInst = document.getElementById("cert-display-institution");
    const displayMotto = document.getElementById("cert-motto-tag");
    const displayId = document.getElementById("cert-display-id");
    const displayHash = document.getElementById("cert-display-hash");
    const displayDate = document.getElementById("cert-display-date");
    const displayDean = document.getElementById("cert-sig-dean");

    // 1. Determine tailored design theme, motto, specialization & dean per course
    let themeClass = "cert-theme-tech";
    let motto = "VERITAS ET SAPIENTIA • OPEN CURRICULUM FOR ALL";
    let specialty = "Specialization in Computer Science & Applied Technology";
    let deanName = "Prof. David J. Malan, Ph.D.";
    let crestSvg = "";

    if (provId.includes("harvard") || provId.includes("oxford") || provId.includes("cambridge") || provId.includes("yale") || provId.includes("princeton") || provId.includes("columbia") || provId.includes("penn")) {
      themeClass = "cert-theme-ivy";
      motto = "VERITAS ET SAPIENTIA • EXCELLENCE IN SCHOLARSHIP";
      specialty = `Honors Specialization in ${course.subject}`;
      deanName = "Prof. David J. Malan, Ph.D.";
      crestSvg = `
        <svg viewBox="0 0 100 100" fill="none" width="48" height="48">
          <path d="M50 8L82 20V52C82 72 50 92 50 92C50 92 18 72 18 52V20L50 8Z" fill="#8B0000" stroke="#C5A059" stroke-width="4"/>
          <path d="M35 38H65M35 48H65M35 58H55" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
          <circle cx="50" cy="50" r="32" stroke="#C5A059" stroke-width="1.5" stroke-dasharray="4 2"/>
        </svg>
      `;
    } else if (provId.includes("mit") || provId.includes("berkeley") || provId.includes("cmu") || provId.includes("caltech") || provId.includes("gatech") || provId.includes("iit")) {
      themeClass = "cert-theme-stem";
      motto = "MENS ET MANUS • SCIENCE, TECHNOLOGY & ENGINEERING";
      specialty = `Rigorous Engineering Specialization in ${course.subject}`;
      deanName = "Prof. Gilbert Strang, Sc.D.";
      crestSvg = `
        <svg viewBox="0 0 100 100" fill="none" width="48" height="48">
          <circle cx="50" cy="50" r="42" fill="#002147" stroke="#8A1B29" stroke-width="4"/>
          <circle cx="50" cy="50" r="28" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="6 3"/>
          <path d="M50 22V78M22 50H78M30 30L70 70M70 30L30 70" stroke="#8A1B29" stroke-width="2.5"/>
          <circle cx="50" cy="50" r="10" fill="#8A1B29"/>
        </svg>
      `;
    } else if (provId.includes("stanford") || provId.includes("uw") || provId.includes("cornell") || provId.includes("duke")) {
      themeClass = "cert-theme-stanford";
      motto = "DIE LUFT DER FREIHEIT WEHT • INNOVATION & AI ADVANCEMENT";
      specialty = `Artificial Intelligence & Machine Learning Track`;
      deanName = "Prof. Andrew Ng, Ph.D.";
      crestSvg = `
        <svg viewBox="0 0 100 100" fill="none" width="48" height="48">
          <circle cx="50" cy="50" r="42" fill="#8C1515" stroke="#007C56" stroke-width="4"/>
          <path d="M50 20L58 38H54L62 56H57L66 76H34L43 56H38L46 38H42L50 20Z" fill="#007C56"/>
          <circle cx="50" cy="50" r="36" stroke="#FFFFFF" stroke-width="1.5"/>
        </svg>
      `;
    } else if (provId.includes("3b1b") || provId.includes("statquest") || provId.includes("khan") || provId.includes("abdulbari") || provId.includes("neso") || subj.includes("math")) {
      themeClass = "cert-theme-math";
      motto = "INTUITION, BEAUTY & RIGOR • FOUNDATIONAL SCIENCES";
      specialty = `Advanced Mathematical & Theoretical Foundations Track`;
      deanName = "Grant Sanderson, B.S. & Academic Chair";
      crestSvg = `
        <svg viewBox="0 0 100 100" fill="none" width="48" height="48">
          <circle cx="50" cy="50" r="42" fill="#1E3A8A" stroke="#D97706" stroke-width="4"/>
          <circle cx="50" cy="50" r="24" stroke="#D97706" stroke-width="2"/>
          <polygon points="50,18 78,68 22,68" stroke="#FFFFFF" stroke-width="3" fill="none"/>
        </svg>
      `;
    } else {
      // Tech & Industry Leaders (Google, Microsoft, AWS, IBM, Linux, freeCodeCamp)
      themeClass = "cert-theme-tech";
      motto = "OPEN SYSTEMS • INDUSTRY PRODUCTION EXCELLENCE";
      specialty = `Enterprise Software & Cloud Specialization in ${course.subject}`;
      deanName = "Chief Technical Fellow & Academic Director";
      crestSvg = `
        <svg viewBox="0 0 100 100" fill="none" width="48" height="48">
          <polygon points="50,10 88,32 88,68 50,90 12,68 12,32" fill="#0056D2" stroke="#06b6d4" stroke-width="4"/>
          <polyline points="32,50 45,63 70,38" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
    }

    // Apply tailored theme class to certificate paper
    if (certPaper) {
      certPaper.className = `certificate-paper ${themeClass}`;
    }

    // Inject crest
    if (crestBox) {
      crestBox.innerHTML = crestSvg;
    }

    // Populate data fields
    const currentName = (store.learner && store.learner.name) || this.recipientName || "Arjun Sharma";
    if (nameInput) nameInput.value = currentName;
    if (displayName) displayName.textContent = currentName;
    if (displayCourse) displayCourse.textContent = course.title;
    if (displaySpecialty) displaySpecialty.textContent = specialty;
    if (displayInst) displayInst.textContent = `Authorized by ${instName} • Open Curriculum`;
    if (displayMotto) displayMotto.textContent = motto;
    if (displayDean) displayDean.textContent = deanName;

    // Unique Certificate Verification ID & Cryptographic SHA-256 Hash
    const hashNum = Math.abs(course.id.split("").reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0));
    const certId = `OC-${course.providerCode || 'VER'}-2026-${hashNum.toString(16).toUpperCase().padStart(4, "0")}`;
    if (displayId) displayId.textContent = certId;

    // Pseudo-realistic SHA-256 string
    const hexParts = [
      (hashNum * 7919).toString(16).padStart(8, "0"),
      (hashNum * 104729).toString(16).padStart(8, "0"),
      (hashNum * 65537).toString(16).padStart(8, "0")
    ].join("");
    if (displayHash) displayHash.textContent = `SHA-256: ${hexParts.slice(0, 8)}...${hexParts.slice(-8)}`;

    const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    if (displayDate) displayDate.textContent = today;

    // Open Modal
    document.getElementById("certificate-modal")?.classList.remove("hidden");
  }

  // --- 5. LEARNER Q&A / DOUBTS ---
  renderDoubts() {
    const list = document.getElementById("student-doubts-list");
    if (!list) return;

    if (store.doubts.length === 0) {
      list.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; background: var(--bg-card); border-radius: var(--radius-sm); border: 1px dashed var(--border-subtle);">
          <p style="color: var(--text-muted);">No questions submitted yet. Have a doubt? Ask using the button above.</p>
        </div>
      `;
      return;
    }

    list.innerHTML = store.doubts.map(d => `
      <div style="background: var(--bg-card); border: 1px solid var(--border-card); border-radius: var(--radius-sm); padding: 1.25rem; margin-bottom: 1rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--primary); text-transform: uppercase;">${d.courseTitle}</span>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${d.timestamp}</span>
        </div>
        <h3 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-main);">${d.title}</h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 0.75rem;">${d.content}</p>
        
        ${d.answer ? `
          <div style="background: var(--bg-subtle); border-left: 3px solid var(--success); padding: 0.85rem 1rem; border-radius: var(--radius-xs); margin-top: 0.75rem;">
            <div style="font-size: 0.75rem; font-weight: 700; color: var(--success); margin-bottom: 0.25rem;">Official Explanation</div>
            <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">${d.answer}</p>
          </div>
        ` : `
          <div style="font-size: 0.78rem; color: var(--warning); font-weight: 600; margin-top: 0.5rem;">Awaiting instructor response</div>
        `}
      </div>
    `).join("");
  }
}

// Global instance for inline onclick handlers
let app;
document.addEventListener("DOMContentLoaded", () => {
  app = new AppController();
  window.app = app;
});
