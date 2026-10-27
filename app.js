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

    this.save();
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
    if (viewId === "view-courses") {
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
      clearBtn.classList.add("hidden");
      this.renderCoursesGrid();
    });

    // Category Filter Pills
    document.querySelectorAll("#category-filter-bar .filter-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        document.querySelectorAll("#category-filter-bar .filter-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.selectedSubjectFilter = pill.getAttribute("data-subject") || "all";
        this.renderCoursesGrid();
      });
    });

    // Filter Dropdowns
    document.getElementById("courses-filter-provider")?.addEventListener("change", (e) => {
      this.selectedProviderFilter = e.target.value;
      this.renderCoursesGrid();
    });

    document.getElementById("courses-filter-level")?.addEventListener("change", (e) => {
      this.selectedLevelFilter = e.target.value;
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
  }

  populateFilterDropdowns() {
    const providerSelect = document.getElementById("courses-filter-provider");
    if (providerSelect) {
      providerSelect.innerHTML = `<option value="all">All Providers & Universities (${store.providers.length})</option>` +
        store.providers.map(p => `<option value="${p.id}">${p.shortName || p.name}</option>`).join("");
    }
  }

  renderAllViews() {
    this.renderCoursesGrid();
    this.renderInstitutionsGrid();
    this.renderClassroom();
    this.renderMyLearning();
    this.renderDoubts();
  }

  // --- 1. COURSES GRID (COURSERA STYLE) ---
  renderCoursesGrid() {
    const container = document.getElementById("all-courses-grid");
    const countLabel = document.getElementById("courses-count-label");
    if (!container) return;

    let list = store.courses;

    // Filter by subject / channel tag
    if (this.selectedSubjectFilter !== "all") {
      const q = this.selectedSubjectFilter.toLowerCase();
      list = list.filter(c => {
        const subj = (c.subject || "").toLowerCase();
        const inst = (c.institution || "").toLowerCase();
        const prov = (c.instructorName || "").toLowerCase();
        const title = (c.title || "").toLowerCase();
        return subj.includes(q) || inst.includes(q) || prov.includes(q) || title.includes(q);
      });
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

    if (countLabel) {
      countLabel.textContent = `Showing ${list.length} of ${store.courses.length} courses`;
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 4rem 2rem; text-align: center; background: var(--bg-card); border-radius: var(--radius-sm); border: 1px dashed var(--border-subtle);">
          <h3 style="margin-bottom: 0.5rem; color: var(--text-main);">No matching courses found</h3>
          <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Try adjusting your keyword or reset filters to browse all 124+ courses.</p>
          <button class="btn btn-primary" onclick="app.resetFilters()">Reset All Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(c => {
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
            <button class="btn btn-primary btn-xs" onclick="app.openClassroomCourse('${c.id}')">
              ${isEnrolled ? "Continue" : "Start Free"}
            </button>
          </div>
        </article>
      `;
    }).join("");
  }

  resetFilters() {
    this.searchQuery = "";
    this.selectedSubjectFilter = "all";
    this.selectedProviderFilter = "all";
    this.selectedLevelFilter = "all";

    const searchInput = document.getElementById("global-search-input");
    if (searchInput) searchInput.value = "";
    document.getElementById("clear-search-btn")?.classList.add("hidden");

    document.querySelectorAll("#category-filter-bar .filter-pill").forEach((p, idx) => {
      p.classList.toggle("active", idx === 0);
    });

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
    if (iframe && videoId) {
      const srcUrl = `https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&rel=0`;
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

    if (courseTitleEl) courseTitleEl.textContent = course.title;
    if (lessonTitleEl) lessonTitleEl.textContent = lesson.title;
    if (institutionTagEl) institutionTagEl.textContent = course.institution || course.instructorName;
    if (durationEl) durationEl.textContent = lesson.duration || "15 mins";
    if (directYtLink) {
      directYtLink.href = lesson.ytUrl || `https://www.youtube.com/watch?v=${videoId}`;
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

    if (nameEl) nameEl.textContent = course.title;

    const total = (course.lessons || []).length;
    let completedCount = 0;

    course.lessons.forEach(l => {
      if (store.isLessonCompleted(l.id)) completedCount++;
    });

    const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;
    if (labelEl) labelEl.textContent = `${completedCount} of ${total} completed (${percent}%)`;
    if (fillEl) fillEl.style.width = `${percent}%`;

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
