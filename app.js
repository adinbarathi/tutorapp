/**
 * TUTORAPP - Learn & Teach with Top Sirs
 * Complete Client-Side Learning & Educator Platform
 */

// =============================================================================
// 1. DEFAULT SEED DATA
// =============================================================================

const INITIAL_SIRS = (typeof window !== "undefined" && window.ALL_SIRS_DATA) ? window.ALL_SIRS_DATA : ((typeof ALL_SIRS_DATA !== "undefined" && Array.isArray(ALL_SIRS_DATA)) ? ALL_SIRS_DATA : []);
const INITIAL_COURSES = (typeof window !== "undefined" && window.ALL_COURSES_DATA) ? window.ALL_COURSES_DATA : ((typeof ALL_COURSES_DATA !== "undefined" && Array.isArray(ALL_COURSES_DATA)) ? ALL_COURSES_DATA : []);

const INITIAL_STUDENTS = [
  {
    id: "student-arjun",
    name: "Arjun Sharma",
    avatar: "🎓",
    target: "B.Tech Computer Science & AI"
  },
  {
    id: "student-sneha",
    name: "Sneha Patel",
    avatar: "🎒",
    target: "Olympiad & Advanced Physics"
  }
];

const INITIAL_DOUBTS = [
  {
    id: "doubt-1",
    studentId: "student-arjun",
    studentName: "Arjun Sharma",
    sirId: "sir-raman",
    courseId: "course-linear-algebra",
    courseTitle: "Visual Linear Algebra & Vector Geometry",
    title: "Geometric intuition for negative determinants?",
    content: "Sir, in Lecture 3 on transformations, you explained that the determinant measures how area scales. What does it physically mean when the determinant is negative (-2 for instance)?",
    timestamp: "2 hours ago",
    status: "answered",
    answer: "Excellent question Arjun! When the determinant is negative, the orientation of space has been reversed (like turning a sheet of paper inside out, or looking at a coordinate grid through a mirror). The absolute value |det| still gives the area scaling factor, while the minus sign signifies an orientation flip!"
  },
  {
    id: "doubt-2",
    studentId: "student-sneha",
    studentName: "Sneha Patel",
    sirId: "sir-ananya",
    courseId: "course-fullstack-web",
    courseTitle: "Modern Full-Stack Web Development 2026",
    title: "Difference between Promises and async/await?",
    content: "Ma'am, does async/await run on a different thread compared to `.then()` chaining, or is it purely syntax sugar on top of the same microtask queue?",
    timestamp: "5 hours ago",
    status: "answered",
    answer: "It is 100% syntactic sugar on top of Promises! When the JavaScript engine reaches an `await`, it pauses execution of that async function and schedules the rest as a microtask when the Promise resolves. The underlying thread and event loop behavior are identical."
  },
  {
    id: "doubt-3",
    studentId: "student-arjun",
    studentName: "Arjun Sharma",
    sirId: "sir-vikram",
    courseId: "course-dsa-mastery",
    courseTitle: "DSA Masterclass: Graphs & Dynamic Programming",
    title: "Dijkstra algorithm with negative edge weights?",
    content: "Vikram Sir, why does Dijkstra fail on graphs with negative cycles or even single negative weights? Should we always switch to Bellman-Ford?",
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
    this.sirs = this.load("tutor_sirs", INITIAL_SIRS);
    this.students = this.load("tutor_students", INITIAL_STUDENTS);
    this.courses = this.load("tutor_courses", INITIAL_COURSES);
    this.doubts = this.load("tutor_doubts", INITIAL_DOUBTS);
    
    // User preferences & session
    this.currentRole = localStorage.getItem("tutor_role") || "student"; // 'teacher' or 'student'
    this.activeSirId = localStorage.getItem("tutor_active_sir") || this.sirs[0].id;
    this.activeStudentId = localStorage.getItem("tutor_active_student") || this.students[0].id;
    
    // Student tracking
    this.studentProgress = this.load("tutor_student_progress", {
      enrolledCourseIds: ["course-linear-algebra", "course-fullstack-web", "course-neso-digital-electronics", "course-google-ml"],
      completedLessonIds: ["lesson-la-1", "lesson-neso-de-1"],
      notes: {
        "lesson-la-1": "Vectors can be viewed as arrows, lists of coordinates, or abstract members of a vector space satisfying linear closure.",
        "lesson-neso-de-1": "Signals carry information. Digital signals offer superior noise immunity over continuous analog signals."
      },
      lastWatchedCourseId: "course-neso-digital-electronics",
      lastWatchedLessonId: "lesson-neso-de-1"
    });

    // Auto-merge new faculty and courses into existing localStorage stores
    INITIAL_SIRS.forEach(newSir => {
      if (!this.sirs.some(s => s.id === newSir.id)) {
        this.sirs.push(newSir);
      }
    });
    INITIAL_COURSES.forEach(newCourse => {
      const existing = this.courses.find(c => c.id === newCourse.id);
      if (!existing) {
        this.courses.push(newCourse);
      } else if (!existing.coverPhoto && newCourse.coverPhoto) {
        existing.coverPhoto = newCourse.coverPhoto;
      }
    });
    this.save();
  }

  load(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.warn(`Error loading ${key} from localStorage, using fallback:`, e);
      return fallback;
    }
  }

  save() {
    localStorage.setItem("tutor_sirs", JSON.stringify(this.sirs));
    localStorage.setItem("tutor_students", JSON.stringify(this.students));
    localStorage.setItem("tutor_courses", JSON.stringify(this.courses));
    localStorage.setItem("tutor_doubts", JSON.stringify(this.doubts));
    localStorage.setItem("tutor_role", this.currentRole);
    localStorage.setItem("tutor_active_sir", this.activeSirId);
    localStorage.setItem("tutor_active_student", this.activeStudentId);
    localStorage.setItem("tutor_student_progress", JSON.stringify(this.studentProgress));
  }

  resetDemo() {
    localStorage.clear();
    location.reload();
  }

  getActiveSir() {
    return this.sirs.find(s => s.id === this.activeSirId) || this.sirs[0];
  }

  getActiveStudent() {
    return this.students.find(s => s.id === this.activeStudentId) || this.students[0];
  }

  getSirById(id) {
    return this.sirs.find(s => s.id === id);
  }

  getCourseById(id) {
    return this.courses.find(c => c.id === id);
  }
}

const store = new Store();

// =============================================================================
// 3. UTILITY HELPERS
// =============================================================================

function extractYouTubeId(urlOrId) {
  if (!urlOrId) return "";
  const clean = urlOrId.trim();
  // If already 11-char alphanumeric
  if (/^[a-zA-Z0-9_-]{11}$/.test(clean)) {
    return clean;
  }
  // Standard watch URL: youtube.com/watch?v=ID
  const matchWatch = clean.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (matchWatch) return matchWatch[1];
  // Short URL: youtu.be/ID
  const matchShort = clean.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (matchShort) return matchShort[1];
  // Embed URL: youtube.com/embed/ID
  const matchEmbed = clean.match(/embed\/([a-zA-Z0-9_-]{11})/);
  if (matchEmbed) return matchEmbed[1];
  // Shorts URL: youtube.com/shorts/ID
  const matchShorts = clean.match(/shorts\/([a-zA-Z0-9_-]{11})/);
  if (matchShorts) return matchShorts[1];

  return "";
}

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  const icon = type === "success" ? "✓" : type === "error" ? "⚠️" : "ℹ️";
  toast.innerHTML = `<strong>${icon}</strong> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// =============================================================================
// 4. APP CONTROLLER & VIEW ROUTING
// =============================================================================

class AppController {
  constructor() {
    this.currentViewId = "view-sirs";
    this.selectedShowcaseSirId = null;
    this.activeClassroomCourseId = "course-linear-algebra";
    this.activeClassroomLessonId = "lesson-la-1";
    this.init();
  }

  init() {
    this.applyTheme();
    this.setupEventListeners();
    this.updateRoleUI();
    this.populateModalSelects();

    // Default view routing based on role
    if (store.currentRole === "teacher") {
      this.switchView("view-teacher-dashboard");
    } else {
      this.switchView("view-sirs");
    }

    this.renderAllViews();
  }

  applyTheme() {
    const savedTheme = localStorage.getItem("tutor_theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    const sunIcon = document.querySelector(".sun-icon");
    const moonIcon = document.querySelector(".moon-icon");
    if (savedTheme === "light") {
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
    } else {
      sunIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
    }
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem("tutor_theme", next);
    this.applyTheme();
    showToast(`Switched to ${next} theme`, "info");
  }

  setupEventListeners() {
    // Theme toggle
    document.getElementById("theme-toggle-btn")?.addEventListener("click", () => this.toggleTheme());

    // Role switcher modal triggers
    document.getElementById("role-switcher-btn")?.addEventListener("click", () => this.openRoleModal());
    document.getElementById("quick-switch-mode-btn")?.addEventListener("click", () => this.openRoleModal());
    document.getElementById("close-role-modal-btn")?.addEventListener("click", () => this.closeRoleModal());

    // Header Action Button (Dynamic)
    document.getElementById("header-action-btn")?.addEventListener("click", () => {
      if (store.currentRole === "teacher") {
        this.openAddCourseModal();
      } else {
        this.switchView("view-sirs");
      }
    });

    // Sidebar Mobile Toggle
    document.getElementById("sidebar-toggle")?.addEventListener("click", () => {
      document.getElementById("app-sidebar")?.classList.toggle("open");
    });

    // Brand Home Link
    document.getElementById("brand-home-link")?.addEventListener("click", (e) => {
      e.preventDefault();
      this.switchView(store.currentRole === "teacher" ? "view-teacher-dashboard" : "view-sirs");
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

    // Sir Showcase tabs
    document.querySelectorAll("[data-sir-tab]").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-sir-tab");
        document.querySelectorAll("[data-sir-tab]").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".sir-tab-content").forEach(c => c.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById(targetTab)?.classList.add("active");
      });
    });

    // Back to Sirs button
    document.getElementById("back-to-sirs-btn")?.addEventListener("click", () => {
      this.switchView("view-sirs");
    });

    // Subject Filter pills in Browse by Sir view
    document.querySelectorAll("#sirs-subject-filters .filter-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        document.querySelectorAll("#sirs-subject-filters .filter-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.renderSirsGrid(pill.getAttribute("data-subject"));
      });
    });

    // Classroom tabs
    document.querySelectorAll("[data-classroom-tab]").forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-classroom-tab");
        document.querySelectorAll("[data-classroom-tab]").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".classroom-tab-pane").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById(target)?.classList.add("active");
      });
    });

    // Notes auto-save & manual save in Classroom
    document.getElementById("save-notes-btn")?.addEventListener("click", () => this.saveCurrentNotes());
    document.getElementById("clear-notes-btn")?.addEventListener("click", () => {
      const textarea = document.getElementById("lesson-notes-textarea");
      if (textarea) textarea.value = "";
      this.saveCurrentNotes();
      showToast("Notes cleared", "info");
    });

    // Classroom mark lesson completed toggle
    document.getElementById("mark-lesson-complete-btn")?.addEventListener("click", () => {
      this.toggleLessonCompletion(this.activeClassroomLessonId);
    });

    // Classroom Quick Doubt form
    document.getElementById("classroom-quick-doubt-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleClassroomDoubtSubmit();
    });

    // Sir Showcase Doubt Form
    document.getElementById("ask-sir-doubt-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleSirShowcaseDoubtSubmit();
    });

    // Ask Doubt Modal trigger in Student Doubts view
    document.getElementById("open-ask-doubt-modal-btn")?.addEventListener("click", () => {
      this.switchView("view-sirs");
      showToast("Select any Sir to submit a question directly!", "info");
    });

    // Continue Learning Button in Student Dashboard
    document.getElementById("continue-learning-btn")?.addEventListener("click", () => {
      this.openClassroom(store.studentProgress.lastWatchedCourseId, store.studentProgress.lastWatchedLessonId);
    });

    // All Courses view filters
    document.getElementById("courses-filter-sir")?.addEventListener("change", () => this.renderAllCoursesGrid());
    document.getElementById("courses-filter-level")?.addEventListener("change", () => this.renderAllCoursesGrid());

    // Global Search
    const searchInput = document.getElementById("global-search-input");
    const clearSearchBtn = document.getElementById("clear-search-btn");
    searchInput?.addEventListener("input", (e) => {
      const q = e.target.value.trim();
      clearSearchBtn?.classList.toggle("hidden", !q);
      this.handleGlobalSearch(q);
    });
    clearSearchBtn?.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      clearSearchBtn.classList.add("hidden");
      this.renderAllViews();
    });

    // --- Teacher Actions ---
    document.getElementById("studio-add-course-btn")?.addEventListener("click", () => this.openAddCourseModal());
    document.getElementById("btn-create-course-header")?.addEventListener("click", () => this.openAddCourseModal());
    document.getElementById("studio-upload-yt-btn")?.addEventListener("click", () => this.switchView("view-teacher-youtube"));

    // Add Course Modal handlers
    document.getElementById("close-add-course-modal")?.addEventListener("click", () => this.closeAddCourseModal());
    document.getElementById("cancel-create-course-btn")?.addEventListener("click", () => this.closeAddCourseModal());
    document.getElementById("create-course-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleCreateCourse();
    });

    // YouTube Upload Form in Teacher view
    const ytUrlInput = document.getElementById("yt-video-url");
    ytUrlInput?.addEventListener("input", (e) => {
      this.previewYouTubeVideo(e.target.value);
    });
    document.getElementById("upload-youtube-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleUploadYouTubeLesson();
    });
    document.getElementById("yt-reset-btn")?.addEventListener("click", () => {
      document.getElementById("yt-preview-box")?.classList.add("hidden");
    });

    // Teacher Profile Edit form
    document.getElementById("edit-sir-profile-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleEditSirProfile();
    });

    // Teacher Doubts filter
    document.getElementById("teacher-doubt-filter")?.addEventListener("change", () => this.renderTeacherDoubtsList());

    // Role modal selection buttons
    document.getElementById("confirm-teacher-role-btn")?.addEventListener("click", () => {
      const select = document.getElementById("choose-teacher-select");
      if (select) {
        store.currentRole = "teacher";
        store.activeSirId = select.value;
        store.save();
        this.closeRoleModal();
        this.updateRoleUI();
        this.switchView("view-teacher-dashboard");
        this.renderAllViews();
        showToast(`Logged in as Teacher (${store.getActiveSir().name})!`, "success");
      }
    });

    document.getElementById("confirm-student-role-btn")?.addEventListener("click", () => {
      const select = document.getElementById("choose-student-select");
      if (select) {
        store.currentRole = "student";
        store.activeStudentId = select.value;
        store.save();
        this.closeRoleModal();
        this.updateRoleUI();
        this.switchView("view-sirs");
        this.renderAllViews();
        showToast(`Logged in as Student (${store.getActiveStudent().name})!`, "success");
      }
    });

    // New Sir Modal
    document.getElementById("create-new-teacher-trigger")?.addEventListener("click", () => {
      this.closeRoleModal();
      document.getElementById("new-sir-modal")?.classList.remove("hidden");
    });
    document.getElementById("close-new-sir-modal")?.addEventListener("click", () => {
      document.getElementById("new-sir-modal")?.classList.add("hidden");
    });
    document.getElementById("cancel-new-sir-btn")?.addEventListener("click", () => {
      document.getElementById("new-sir-modal")?.classList.add("hidden");
    });
    document.getElementById("create-sir-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleCreateNewSir();
    });

    // New Student Modal
    document.getElementById("create-new-student-trigger")?.addEventListener("click", () => {
      this.closeRoleModal();
      document.getElementById("new-student-modal")?.classList.remove("hidden");
    });
    document.getElementById("close-new-student-modal")?.addEventListener("click", () => {
      document.getElementById("new-student-modal")?.classList.add("hidden");
    });
    document.getElementById("cancel-new-student-btn")?.addEventListener("click", () => {
      document.getElementById("new-student-modal")?.classList.add("hidden");
    });
    document.getElementById("create-student-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleCreateNewStudent();
    });

    // Reset Demo Data & Backup
    document.getElementById("reset-demo-data-btn")?.addEventListener("click", () => {
      if (confirm("Reset all data to default demo state with verified Sirs and YouTube courses?")) {
        store.resetDemo();
      }
    });

    document.getElementById("export-data-btn")?.addEventListener("click", () => {
      const json = JSON.stringify({
        sirs: store.sirs,
        courses: store.courses,
        doubts: store.doubts,
        students: store.students
      }, null, 2);
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `tutorapp-backup-${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast("Data exported as JSON file!", "info");
    });
  }

  // ===========================================================================
  // 5. VIEW SWITCHING & ROLE MANAGEMENT
  // ===========================================================================

  switchView(viewId) {
    document.querySelectorAll(".content-view").forEach(v => v.classList.remove("active"));
    const target = document.getElementById(viewId);
    if (target) {
      target.classList.add("active");
      this.currentViewId = viewId;
    }

    // Update active nav button
    document.querySelectorAll(".nav-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-view") === viewId);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  updateRoleUI() {
    const isTeacher = store.currentRole === "teacher";
    const studentNav = document.getElementById("student-nav");
    const teacherNav = document.getElementById("teacher-nav");
    const roleIcon = document.getElementById("header-role-icon");
    const roleTitle = document.getElementById("header-role-title");
    const userName = document.getElementById("header-user-name");
    const headerActionBtn = document.getElementById("header-action-btn");
    const teaserTitle = document.getElementById("teaser-title");
    const teaserDesc = document.getElementById("teaser-desc");

    if (isTeacher) {
      studentNav?.classList.add("hidden");
      teacherNav?.classList.remove("hidden");
      const sir = store.getActiveSir();
      if (roleIcon) roleIcon.textContent = sir.avatar || "👨‍🏫";
      if (roleTitle) roleTitle.textContent = "Teacher Mode";
      if (userName) userName.textContent = sir.name;
      if (headerActionBtn) {
        headerActionBtn.querySelector(".btn-icon").textContent = "＋";
        headerActionBtn.querySelector(".btn-text").textContent = "Add Course";
      }
      if (teaserTitle) teaserTitle.textContent = "Student Mode";
      if (teaserDesc) teaserDesc.textContent = "Switch to student view to test your lessons as a learner.";
    } else {
      teacherNav?.classList.add("hidden");
      studentNav?.classList.remove("hidden");
      const student = store.getActiveStudent();
      if (roleIcon) roleIcon.textContent = student.avatar || "🎓";
      if (roleTitle) roleTitle.textContent = "Student Mode";
      if (userName) userName.textContent = student.name;
      if (headerActionBtn) {
        headerActionBtn.querySelector(".btn-icon").textContent = "👨‍🏫";
        headerActionBtn.querySelector(".btn-text").textContent = "Browse Sirs";
      }
      if (teaserTitle) teaserTitle.textContent = "Teacher Mode";
      if (teaserDesc) teaserDesc.textContent = "Switch to Sir mode to create courses and upload YouTube videos.";
    }

    this.updatePendingDoubtsCounter();
  }

  openRoleModal() {
    this.populateModalSelects();
    document.getElementById("role-modal")?.classList.remove("hidden");
  }

  closeRoleModal() {
    document.getElementById("role-modal")?.classList.add("hidden");
  }

  openAddCourseModal() {
    this.populateModalSelects();
    document.getElementById("add-course-modal")?.classList.remove("hidden");
  }

  closeAddCourseModal() {
    document.getElementById("add-course-modal")?.classList.add("hidden");
  }

  populateModalSelects() {
    // Populate Sir selectors
    const chooseSirSelect = document.getElementById("choose-teacher-select");
    const courseInstructorSelect = document.getElementById("new-course-instructor");
    const ytCourseSelect = document.getElementById("yt-course-select");
    const coursesFilterSir = document.getElementById("courses-filter-sir");
    const chooseStudentSelect = document.getElementById("choose-student-select");

    if (chooseSirSelect) {
      chooseSirSelect.innerHTML = store.sirs.map(s => 
        `<option value="${s.id}" ${s.id === store.activeSirId ? "selected" : ""}>${s.avatar} ${s.name} (${s.subject})</option>`
      ).join("");
    }

    if (courseInstructorSelect) {
      courseInstructorSelect.innerHTML = store.sirs.map(s => 
        `<option value="${s.id}" ${s.id === store.activeSirId ? "selected" : ""}>${s.avatar} ${s.name} - ${s.subject}</option>`
      ).join("");
    }

    if (ytCourseSelect) {
      // Courses for the active teacher or all courses if wanted
      const sir = store.getActiveSir();
      const myCourses = store.courses.filter(c => c.sirId === sir.id);
      const displayCourses = myCourses.length > 0 ? myCourses : store.courses;
      ytCourseSelect.innerHTML = displayCourses.map(c => 
        `<option value="${c.id}">${c.emoji} ${c.title}</option>`
      ).join("");
    }

    if (coursesFilterSir) {
      coursesFilterSir.innerHTML = `<option value="all">Filter by Sir: All</option>` +
        store.sirs.map(s => `<option value="${s.id}">${s.name}</option>`).join("");
    }

    if (chooseStudentSelect) {
      chooseStudentSelect.innerHTML = store.students.map(st => 
        `<option value="${st.id}" ${st.id === store.activeStudentId ? "selected" : ""}>${st.avatar} ${st.name}</option>`
      ).join("");
    }

    // Populate teacher settings form values
    const currentSir = store.getActiveSir();
    if (document.getElementById("sir-edit-name")) {
      document.getElementById("sir-edit-name").value = currentSir.name;
      document.getElementById("sir-edit-avatar").value = currentSir.avatar;
      document.getElementById("sir-edit-designation").value = currentSir.designation;
      document.getElementById("sir-edit-subject").value = currentSir.subject;
      document.getElementById("sir-edit-bio").value = currentSir.bio;
      document.getElementById("sir-edit-youtube").value = currentSir.ytChannel || "";
      document.getElementById("sir-edit-exp").value = currentSir.exp || "10+ Years";
    }
  }

  // ===========================================================================
  // 6. RENDER LOGIC: SIRS DIRECTORY & SHOWCASE
  // ===========================================================================

  renderAllViews() {
    this.renderSirsGrid();
    this.renderAllCoursesGrid();
    this.renderStudentDashboard();
    this.renderStudentDoubtsList();
    this.renderTeacherDashboard();
    this.renderTeacherStudioCourses();
    this.renderTeacherDoubtsList();
    this.renderTeacherRecentUploads();
    this.updatePendingDoubtsCounter();
  }

  renderSirsGrid(subjectFilter = "all") {
    const container = document.getElementById("sirs-grid-container");
    if (!container) return;

    let filtered = store.sirs;
    if (subjectFilter !== "all") {
      const q = subjectFilter.toLowerCase();
      filtered = filtered.filter(s => 
        s.subject.toLowerCase().includes(q) || 
        s.name.toLowerCase().includes(q)
      );
    }

    document.getElementById("stats-total-sirs").textContent = store.sirs.length;
    document.getElementById("stats-total-courses").textContent = store.courses.length;
    let totalVideos = 0;
    store.courses.forEach(c => totalVideos += (c.lessons ? c.lessons.length : 0));
    document.getElementById("stats-total-videos").textContent = totalVideos;

    if (filtered.length === 0) {
      container.innerHTML = `<div class="empty-state">No Sirs found in this category.</div>`;
      return;
    }

    container.innerHTML = filtered.map(sir => {
      const sirCourses = store.courses.filter(c => c.sirId === sir.id);
      let sirVideosCount = 0;
      sirCourses.forEach(c => sirVideosCount += (c.lessons ? c.lessons.length : 0));

      return `
        <div class="sir-card" data-sir-id="${sir.id}">
          <div class="sir-card-top">
            <div class="sir-avatar">${sir.avatar || "👨‍🏫"}</div>
            <div class="sir-info">
              <h3>
                ${sir.name}
                <svg class="verified-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </h3>
              <div class="sir-title">${sir.designation}</div>
            </div>
          </div>

          <p class="sir-bio">${sir.bio}</p>

          <div class="sir-meta-row">
            <div class="sir-meta-item">
              <strong>⭐ ${sir.rating || 4.9}</strong> (${sir.studentsCount || 1000}+ students)
            </div>
            <div class="sir-meta-item">
              <strong>${sirCourses.length}</strong> Courses • <strong>${sirVideosCount}</strong> Videos
            </div>
          </div>

          <div class="sir-card-actions">
            <button class="btn btn-primary btn-block open-sir-btn" data-sir-id="${sir.id}">
              <span>View Sir's Channel & Lectures</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      `;
    }).join("");

    container.querySelectorAll(".open-sir-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-sir-id");
        this.openSirShowcase(id);
      });
    });
  }

  openSirShowcase(sirId) {
    const sir = store.getSirById(sirId);
    if (!sir) return;
    this.selectedShowcaseSirId = sirId;

    const header = document.getElementById("sir-showcase-header");
    const sirCourses = store.courses.filter(c => c.sirId === sir.id);
    let totalVideos = 0;
    sirCourses.forEach(c => totalVideos += (c.lessons ? c.lessons.length : 0));

    if (header) {
      header.innerHTML = `
        <div class="sir-hero-avatar">${sir.avatar || "👨‍🏫"}</div>
        <div class="sir-hero-details">
          <h1>
            ${sir.name}
            <svg class="verified-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </h1>
          <div class="sir-hero-designation">${sir.designation}</div>
          <p class="sir-hero-bio">${sir.bio}</p>
          <div class="sir-hero-stats">
            <span>⭐ Rating: <strong>${sir.rating || 4.9} / 5.0</strong></span>
            <span>👥 Students: <strong>${sir.studentsCount || 1000}</strong></span>
            <span>📚 Courses: <strong>${sirCourses.length}</strong></span>
            <span>📹 YouTube Lessons: <strong>${totalVideos}</strong></span>
            <span>⏳ Exp: <strong>${sir.exp || "10+ Years"}</strong></span>
          </div>
        </div>
      `;
    }

    // Populate doubt course select with this Sir's courses
    const doubtSelect = document.getElementById("doubt-course-select");
    const askSirName = document.getElementById("ask-sir-name-target");
    if (askSirName) askSirName.textContent = sir.name;
    if (doubtSelect) {
      doubtSelect.innerHTML = sirCourses.map(c => `<option value="${c.id}">${c.title}</option>`).join("");
      if (sirCourses.length === 0) {
        doubtSelect.innerHTML = `<option value="general">General Inquiry</option>`;
      }
    }

    // Render Sir Courses
    const coursesContainer = document.getElementById("sir-courses-container");
    if (coursesContainer) {
      if (sirCourses.length === 0) {
        coursesContainer.innerHTML = `<div class="empty-state">No courses published yet by this Sir.</div>`;
      } else {
        coursesContainer.innerHTML = sirCourses.map(c => this.createCourseCardHTML(c)).join("");
        this.attachCourseCardActions(coursesContainer);
      }
    }

    // Render Sir Videos
    const videosContainer = document.getElementById("sir-videos-container");
    if (videosContainer) {
      const allLessons = [];
      sirCourses.forEach(c => {
        if (c.lessons) {
          c.lessons.forEach(l => {
            allLessons.push({ ...l, courseId: c.id, courseTitle: c.title });
          });
        }
      });

      if (allLessons.length === 0) {
        videosContainer.innerHTML = `<div class="empty-state">No YouTube lessons uploaded yet.</div>`;
      } else {
        videosContainer.innerHTML = allLessons.map((l, idx) => `
          <div class="video-list-item">
            <div class="video-item-left">
              <div class="yt-play-icon">▶</div>
              <div class="video-item-info">
                <h4>${l.title}</h4>
                <div class="video-item-sub">
                  <span>Course: <strong>${l.courseTitle}</strong></span>
                  <span>⏱️ ${l.duration || "15 mins"}</span>
                </div>
              </div>
            </div>
            <button class="btn btn-outline btn-sm play-lesson-btn" data-course-id="${l.courseId}" data-lesson-id="${l.id}">
              Play in Classroom
            </button>
          </div>
        `).join("");

        videosContainer.querySelectorAll(".play-lesson-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            const courseId = btn.getAttribute("data-course-id");
            const lessonId = btn.getAttribute("data-lesson-id");
            this.openClassroom(courseId, lessonId);
          });
        });
      }
    }

    this.switchView("view-sir-showcase");
  }

  // ===========================================================================
  // 7. RENDER LOGIC: COURSES & CLASSROOM
  // ===========================================================================

  createCourseCardHTML(course) {
    const sir = store.getSirById(course.sirId) || { name: "Educator Sir", avatar: "👨‍🏫" };
    const lessonCount = course.lessons ? course.lessons.length : 0;
    const isEnrolled = store.studentProgress.enrolledCourseIds.includes(course.id);

    // Calculate completion progress
    let completedInCourse = 0;
    if (course.lessons) {
      course.lessons.forEach(l => {
        if (store.studentProgress.completedLessonIds.includes(l.id)) {
          completedInCourse++;
        }
      });
    }
    const percent = lessonCount > 0 ? Math.round((completedInCourse / lessonCount) * 100) : 0;
    const bannerStyle = course.coverPhoto ? `background-image: url('${course.coverPhoto}');` : '';
    const bannerClass = course.coverPhoto ? 'has-cover' : (course.theme || 'theme-purple');

    return `
      <div class="course-card" data-course-id="${course.id}">
        <div class="course-card-banner ${bannerClass}" style="${bannerStyle}">
          <div class="course-emoji-icon">${course.emoji || '📚'}</div>
          <span class="course-level-badge">${course.level || 'Intermediate'}</span>
        </div>
        <div class="course-card-body">
          <span class="course-card-subject">${course.subject}</span>
          <h3 class="course-card-title">${course.title}</h3>
          
          <div class="course-card-teacher">
            <span>${sir.avatar}</span>
            <strong>${sir.name}</strong>
          </div>

          <p class="course-card-desc">${course.desc}</p>

          ${isEnrolled ? `
            <div class="course-progress-wrapper">
              <div class="course-progress-info">
                <span>Progress: ${completedInCourse}/${lessonCount} lessons</span>
                <span>${percent}%</span>
              </div>
              <div class="progress-bar-small">
                <div class="progress-fill" style="width: ${percent}%;"></div>
              </div>
            </div>
          ` : ''}

          <div class="course-card-meta">
            <span>📹 ${lessonCount} YouTube Lectures</span>
            <span>⭐ 4.9</span>
          </div>

          <div class="course-card-footer">
            ${isEnrolled ? `
              <button class="btn btn-primary btn-block open-course-player-btn" data-course-id="${course.id}">
                Resume Learning ▶
              </button>
            ` : `
              <button class="btn btn-primary btn-block enroll-course-btn" data-course-id="${course.id}">
                Enroll & Start Free
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }

  attachCourseCardActions(container) {
    container.querySelectorAll(".enroll-course-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-course-id");
        this.enrollInCourse(id);
      });
    });

    container.querySelectorAll(".open-course-player-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-course-id");
        this.openClassroom(id);
      });
    });
  }

  enrollInCourse(courseId) {
    if (!store.studentProgress.enrolledCourseIds.includes(courseId)) {
      store.studentProgress.enrolledCourseIds.push(courseId);
      store.save();
      showToast("Enrolled in course successfully!", "success");
      this.renderAllViews();
    }
    this.openClassroom(courseId);
  }

  renderAllCoursesGrid() {
    const container = document.getElementById("all-courses-grid");
    if (!container) return;

    const sirFilter = document.getElementById("courses-filter-sir")?.value || "all";
    const levelFilter = document.getElementById("courses-filter-level")?.value || "all";

    let filtered = store.courses;
    if (sirFilter !== "all") {
      filtered = filtered.filter(c => c.sirId === sirFilter);
    }
    if (levelFilter !== "all") {
      filtered = filtered.filter(c => c.level.toLowerCase() === levelFilter.toLowerCase());
    }

    if (filtered.length === 0) {
      container.innerHTML = `<div class="empty-state">No courses matching selected filters.</div>`;
      return;
    }

    container.innerHTML = filtered.map(c => this.createCourseCardHTML(c)).join("");
    this.attachCourseCardActions(container);
  }

  // ===========================================================================
  // 8. YOUTUBE CLASSROOM PLAYER LOGIC
  // ===========================================================================

  openClassroom(courseId, lessonId = null) {
    const course = store.getCourseById(courseId) || store.courses[0];
    if (!course || !course.lessons || course.lessons.length === 0) {
      showToast("This course does not have any YouTube lessons yet.", "info");
      return;
    }

    this.activeClassroomCourseId = course.id;
    const lesson = lessonId ? (course.lessons.find(l => l.id === lessonId) || course.lessons[0]) : course.lessons[0];
    this.activeClassroomLessonId = lesson.id;

    // Track last watched
    store.studentProgress.lastWatchedCourseId = course.id;
    store.studentProgress.lastWatchedLessonId = lesson.id;
    if (!store.studentProgress.enrolledCourseIds.includes(course.id)) {
      store.studentProgress.enrolledCourseIds.push(course.id);
    }
    store.save();

    this.renderClassroomPlayer(course, lesson);
    this.switchView("view-classroom");
  }

  renderClassroomPlayer(course, lesson) {
    const sir = store.getSirById(course.sirId) || { name: "Educator Sir" };
    const iframe = document.getElementById("youtube-player-iframe");
    const courseTitle = document.getElementById("player-course-title");
    const lessonTitle = document.getElementById("player-lesson-title");
    const teacherTag = document.getElementById("player-teacher-tag");
    const duration = document.getElementById("player-lesson-duration");
    const originalLink = document.getElementById("player-original-yt-link");
    const classroomTeacherLabel = document.getElementById("classroom-teacher-name-label");

    const ytId = lesson.ytVideoId || extractYouTubeId(lesson.ytUrl);

    if (iframe) {
      iframe.src = `https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&enablejsapi=1&rel=0`;
    }
    if (courseTitle) courseTitle.textContent = course.title;
    if (lessonTitle) lessonTitle.textContent = lesson.title;
    if (teacherTag) teacherTag.textContent = `👨‍🏫 ${sir.name}`;
    if (duration) duration.textContent = `⏱️ ${lesson.duration || "15 mins"}`;
    if (originalLink) {
      originalLink.href = lesson.ytUrl || `https://youtube.com/watch?v=${ytId}`;
    }
    if (classroomTeacherLabel) classroomTeacherLabel.textContent = sir.name;

    // Update Mark Complete button state
    const isCompleted = store.studentProgress.completedLessonIds.includes(lesson.id);
    const completeBtn = document.getElementById("mark-lesson-complete-btn");
    if (completeBtn) {
      completeBtn.classList.toggle("btn-primary", isCompleted);
      completeBtn.classList.toggle("btn-outline", !isCompleted);
      completeBtn.querySelector(".btn-text").textContent = isCompleted ? "Completed ✓" : "Mark Completed";
    }

    // Load saved notes for this lesson
    const textarea = document.getElementById("lesson-notes-textarea");
    if (textarea) {
      textarea.value = (store.studentProgress.notes && store.studentProgress.notes[lesson.id]) || "";
    }

    // Render Quiz for current lesson
    this.renderClassroomQuiz(lesson);

    // Render Resources
    this.renderClassroomResources(lesson);

    // Render Playlist Sidebar
    this.renderClassroomPlaylist(course, lesson);
  }

  renderClassroomPlaylist(course, activeLesson) {
    const list = document.getElementById("playlist-lessons-container");
    const title = document.getElementById("playlist-course-name");
    const progressLabel = document.getElementById("playlist-progress-label");
    const progressFill = document.getElementById("playlist-progress-fill");

    if (title) title.textContent = course.title;

    let completedCount = 0;
    const total = course.lessons ? course.lessons.length : 0;

    course.lessons.forEach(l => {
      if (store.studentProgress.completedLessonIds.includes(l.id)) {
        completedCount++;
      }
    });

    const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;
    if (progressLabel) progressLabel.textContent = `${completedCount} of ${total} completed (${percent}%)`;
    if (progressFill) progressFill.style.width = `${percent}%`;

    if (!list) return;
    list.innerHTML = (course.lessons || []).map((l, idx) => {
      const isActive = l.id === activeLesson.id;
      const isCompleted = store.studentProgress.completedLessonIds.includes(l.id);

      return `
        <div class="playlist-lesson-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" data-lesson-id="${l.id}">
          <div class="lesson-check-btn" title="Toggle completed">✓</div>
          <div class="playlist-lesson-info">
            <div class="playlist-lesson-title">${idx + 1}. ${l.title}</div>
            <div class="playlist-lesson-duration">⏱️ ${l.duration || "15 mins"}</div>
          </div>
        </div>
      `;
    }).join("");

    list.querySelectorAll(".playlist-lesson-item").forEach(item => {
      item.addEventListener("click", () => {
        const id = item.getAttribute("data-lesson-id");
        const nextLesson = course.lessons.find(l => l.id === id);
        if (nextLesson) {
          this.activeClassroomLessonId = nextLesson.id;
          this.renderClassroomPlayer(course, nextLesson);
        }
      });
    });
  }

  toggleLessonCompletion(lessonId) {
    const list = store.studentProgress.completedLessonIds;
    const idx = list.indexOf(lessonId);
    if (idx > -1) {
      list.splice(idx, 1);
      showToast("Marked as incomplete", "info");
    } else {
      list.push(lessonId);
      showToast("Lesson completed! Keep up the momentum! 🎉", "success");
    }
    store.save();

    const course = store.getCourseById(this.activeClassroomCourseId);
    const lesson = course.lessons.find(l => l.id === this.activeClassroomLessonId);
    if (course && lesson) {
      this.renderClassroomPlayer(course, lesson);
    }
    this.renderStudentDashboard();
  }

  saveCurrentNotes() {
    const textarea = document.getElementById("lesson-notes-textarea");
    if (!textarea) return;

    if (!store.studentProgress.notes) {
      store.studentProgress.notes = {};
    }
    store.studentProgress.notes[this.activeClassroomLessonId] = textarea.value;
    store.save();

    const status = document.getElementById("notes-save-status");
    if (status) {
      status.textContent = "Saved to browser ✓";
      setTimeout(() => { status.textContent = "Saved"; }, 2000);
    }
    showToast("Notes saved successfully!", "success");
  }

  renderClassroomQuiz(lesson) {
    const box = document.getElementById("classroom-quiz-container");
    if (!box) return;

    if (!lesson.quiz) {
      box.innerHTML = `<div class="empty-state">No concept check question attached to this lecture yet. Enjoy watching!</div>`;
      return;
    }

    const q = lesson.quiz;
    box.innerHTML = `
      <h3 class="quiz-question-title">${q.q}</h3>
      <div class="quiz-options-list">
        ${q.opts.map((opt, i) => `
          <button class="quiz-opt-btn" data-opt-index="${i}">
            <strong>${String.fromCharCode(65 + i)}.</strong> ${opt}
          </button>
        `).join("")}
      </div>
      <div class="quiz-feedback-box hidden" id="quiz-feedback">
        <p><strong>Explanation:</strong> ${q.exp || "Correct answer selected!"}</p>
      </div>
    `;

    box.querySelectorAll(".quiz-opt-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const selectedIdx = parseInt(btn.getAttribute("data-opt-index"));
        const feedback = document.getElementById("quiz-feedback");
        
        box.querySelectorAll(".quiz-opt-btn").forEach((b, idx) => {
          b.disabled = true;
          if (idx === q.correct) {
            b.classList.add("correct");
          } else if (idx === selectedIdx) {
            b.classList.add("incorrect");
          }
        });

        if (feedback) feedback.classList.remove("hidden");
        if (selectedIdx === q.correct) {
          showToast("Spot on! That's the correct concept! 🌟", "success");
        } else {
          showToast("Close! Review the explanation below.", "info");
        }
      });
    });
  }

  renderClassroomResources(lesson) {
    const container = document.getElementById("classroom-resources-container");
    if (!container) return;

    const resources = [];
    if (lesson.resourceLink) {
      resources.push({
        title: "Official Lecture Notes & External References",
        url: lesson.resourceLink,
        icon: "📄"
      });
    }
    resources.push({
      title: "YouTube High-Definition Stream Source",
      url: lesson.ytUrl,
      icon: "▶️"
    });

    container.innerHTML = resources.map(r => `
      <div class="resource-item">
        <div>
          <span>${r.icon}</span> <strong>${r.title}</strong>
        </div>
        <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-xs">
          Open Link ↗
        </a>
      </div>
    `).join("");
  }

  handleClassroomDoubtSubmit() {
    const text = document.getElementById("classroom-doubt-text")?.value.trim();
    if (!text) return;

    const course = store.getCourseById(this.activeClassroomCourseId);
    const student = store.getActiveStudent();

    const newDoubt = {
      id: "doubt-" + Date.now(),
      studentId: student.id,
      studentName: student.name,
      sirId: course.sirId,
      courseId: course.id,
      courseTitle: course.title,
      title: `Question on ${course.title}`,
      content: text,
      timestamp: "Just now",
      status: "pending",
      answer: null
    };

    store.doubts.unshift(newDoubt);
    store.save();

    document.getElementById("classroom-doubt-text").value = "";
    showToast("Your question was submitted to Sir! You can view replies in 'My Doubts'.", "success");
    this.renderStudentDoubtsList();
    this.updatePendingDoubtsCounter();
  }

  handleSirShowcaseDoubtSubmit() {
    const courseId = document.getElementById("doubt-course-select")?.value;
    const title = document.getElementById("doubt-title-input")?.value.trim();
    const content = document.getElementById("doubt-content-input")?.value.trim();

    if (!title || !content) {
      showToast("Please fill in both question title and description.", "error");
      return;
    }

    const course = store.getCourseById(courseId) || { id: "general", title: "General Subject" };
    const student = store.getActiveStudent();

    const newDoubt = {
      id: "doubt-" + Date.now(),
      studentId: student.id,
      studentName: student.name,
      sirId: this.selectedShowcaseSirId,
      courseId: course.id,
      courseTitle: course.title,
      title: title,
      content: content,
      timestamp: "Just now",
      status: "pending",
      answer: null
    };

    store.doubts.unshift(newDoubt);
    store.save();

    document.getElementById("ask-sir-doubt-form").reset();
    showToast("Your doubt was sent to Sir! He will review and answer.", "success");
    this.renderStudentDoubtsList();
    this.updatePendingDoubtsCounter();
  }

  // ===========================================================================
  // 9. STUDENT DASHBOARD & DOUBTS FEED
  // ===========================================================================

  renderStudentDashboard() {
    const enrolledIds = store.studentProgress.enrolledCourseIds || [];
    const completedIds = store.studentProgress.completedLessonIds || [];

    document.getElementById("student-stat-enrolled").textContent = enrolledIds.length;
    document.getElementById("student-stat-completed-lessons").textContent = completedIds.length;
    const myDoubts = store.doubts.filter(d => d.studentId === store.activeStudentId);
    document.getElementById("student-stat-doubts").textContent = myDoubts.length;

    // Continue banner
    const lastCourse = store.getCourseById(store.studentProgress.lastWatchedCourseId);
    if (lastCourse && lastCourse.lessons) {
      const lastLesson = lastCourse.lessons.find(l => l.id === store.studentProgress.lastWatchedLessonId) || lastCourse.lessons[0];
      document.getElementById("continue-course-title").textContent = lastCourse.title;
      document.getElementById("continue-lesson-title").textContent = `Next Lecture: ${lastLesson.title}`;
    }

    // Enrolled courses grid
    const container = document.getElementById("student-enrolled-courses-grid");
    if (!container) return;

    const enrolledCourses = store.courses.filter(c => enrolledIds.includes(c.id));
    if (enrolledCourses.length === 0) {
      container.innerHTML = `<div class="empty-state">You haven't enrolled in any courses yet. Browse by Sir to start!</div>`;
    } else {
      container.innerHTML = enrolledCourses.map(c => this.createCourseCardHTML(c)).join("");
      this.attachCourseCardActions(container);
    }
  }

  renderStudentDoubtsList() {
    const container = document.getElementById("student-doubts-list");
    if (!container) return;

    const myDoubts = store.doubts.filter(d => d.studentId === store.activeStudentId);
    if (myDoubts.length === 0) {
      container.innerHTML = `<div class="empty-state">No doubts asked yet. Reach out to any Sir with your questions!</div>`;
      return;
    }

    container.innerHTML = myDoubts.map(d => {
      const sir = store.getSirById(d.sirId) || { name: "Sir", avatar: "👨‍🏫" };
      return `
        <div class="doubt-card">
          <div class="doubt-card-header">
            <div>
              <span class="doubt-student-tag">Target: <strong>${sir.avatar} ${sir.name}</strong> • Course: ${d.courseTitle}</span>
              <h3 class="doubt-question-title">${d.title}</h3>
            </div>
            <span class="doubt-status-pill ${d.status}">${d.status}</span>
          </div>

          <p class="doubt-question-body">${d.content}</p>

          ${d.answer ? `
            <div class="doubt-reply-box">
              <div class="doubt-reply-header">
                <span>${sir.avatar}</span>
                <span>Response from ${sir.name}</span>
              </div>
              <p class="doubt-reply-content">${d.answer}</p>
            </div>
          ` : `
            <div class="doubt-reply-box" style="border-left-color: var(--warning);">
              <span style="font-size: 0.85rem; color: var(--warning);">⏳ Waiting for ${sir.name} to respond...</span>
            </div>
          `}
        </div>
      `;
    }).join("");
  }

  // ===========================================================================
  // 10. TEACHER STUDIO LOGIC & UPLOADS
  // ===========================================================================

  renderTeacherDashboard() {
    const sir = store.getActiveSir();
    const myCourses = store.courses.filter(c => c.sirId === sir.id);
    let totalLessons = 0;
    myCourses.forEach(c => totalLessons += (c.lessons ? c.lessons.length : 0));

    const pendingDoubts = store.doubts.filter(d => d.sirId === sir.id && d.status === "pending");

    document.getElementById("teacher-hero-name").textContent = sir.name;
    document.getElementById("t-stat-courses").textContent = myCourses.length;
    document.getElementById("t-stat-videos").textContent = totalLessons;
    document.getElementById("t-stat-students").textContent = (sir.studentsCount || 2400).toLocaleString();
    document.getElementById("t-stat-doubts").textContent = pendingDoubts.length;
  }

  renderTeacherStudioCourses() {
    const sir = store.getActiveSir();
    const myCourses = store.courses.filter(c => c.sirId === sir.id);

    const studioGrid = document.getElementById("teacher-studio-courses-grid");
    const allCoursesGrid = document.getElementById("teacher-all-courses-grid");

    const renderFn = (container) => {
      if (!container) return;
      if (myCourses.length === 0) {
        container.innerHTML = `<div class="empty-state">You haven't created any courses yet. Click "+ Add New Course" to get started!</div>`;
        return;
      }

      container.innerHTML = myCourses.map(c => {
        const bannerStyle = c.coverPhoto ? `background-image: url('${c.coverPhoto}');` : '';
        const bannerClass = c.coverPhoto ? 'has-cover' : (c.theme || 'theme-purple');
        return `
        <div class="course-card">
          <div class="course-card-banner ${bannerClass}" style="${bannerStyle}">
            <div class="course-emoji-icon">${c.emoji || '📚'}</div>
            <span class="course-level-badge">${c.level}</span>
          </div>
          <div class="course-card-body">
            <span class="course-card-subject">${c.subject}</span>
            <h3 class="course-card-title">${c.title}</h3>
            <p class="course-card-desc">${c.desc}</p>
            <div class="course-card-meta">
              <span>📹 ${c.lessons ? c.lessons.length : 0} Lessons</span>
            </div>
            <div class="course-card-footer">
              <button class="btn btn-primary btn-sm btn-block upload-to-course-btn" data-course-id="${c.id}">
                📹 Add YouTube Lesson
              </button>
              <button class="btn btn-outline btn-sm preview-as-student-btn" data-course-id="${c.id}">
                Preview ▶
              </button>
            </div>
          </div>
        </div>
        `;
      }).join("");

      container.querySelectorAll(".upload-to-course-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-course-id");
          const ytCourseSelect = document.getElementById("yt-course-select");
          if (ytCourseSelect) ytCourseSelect.value = id;
          this.switchView("view-teacher-youtube");
        });
      });

      container.querySelectorAll(".preview-as-student-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-course-id");
          this.openClassroom(id);
        });
      });
    };

    renderFn(studioGrid);
    renderFn(allCoursesGrid);
  }

  previewYouTubeVideo(urlOrId) {
    const id = extractYouTubeId(urlOrId);
    const box = document.getElementById("yt-preview-box");
    const iframe = document.getElementById("yt-preview-iframe");

    if (id && id.length === 11) {
      if (iframe) iframe.src = `https://www.youtube-nocookie.com/embed/${id}`;
      box?.classList.remove("hidden");
    } else {
      box?.classList.add("hidden");
    }
  }

  handleUploadYouTubeLesson() {
    const courseId = document.getElementById("yt-course-select")?.value;
    const url = document.getElementById("yt-video-url")?.value.trim();
    const title = document.getElementById("yt-video-title")?.value.trim();
    const duration = document.getElementById("yt-video-duration")?.value.trim() || "15 mins";
    const desc = document.getElementById("yt-video-desc")?.value.trim() || "";
    const resourceLink = document.getElementById("yt-resource-link")?.value.trim() || "";

    const ytId = extractYouTubeId(url);
    if (!ytId) {
      showToast("Invalid YouTube link or ID! Please check the URL.", "error");
      return;
    }

    const course = store.getCourseById(courseId);
    if (!course) {
      showToast("Selected course not found.", "error");
      return;
    }

    if (!course.lessons) course.lessons = [];

    const newLesson = {
      id: "lesson-" + Date.now(),
      title: title,
      ytUrl: url,
      ytVideoId: ytId,
      duration: duration,
      desc: desc,
      resourceLink: resourceLink,
      quiz: {
        q: `Concept check for: ${title}`,
        opts: ["Understood clearly", "Need to review timestamp", "Ready for practice questions", "Will ask Sir a doubt"],
        correct: 0,
        exp: "Great work completing this lecture!"
      }
    };

    course.lessons.push(newLesson);
    store.save();

    document.getElementById("upload-youtube-form").reset();
    document.getElementById("yt-preview-box")?.classList.add("hidden");

    showToast(`Published YouTube lesson to "${course.title}"!`, "success");
    this.renderAllViews();
    this.renderTeacherRecentUploads();
  }

  renderTeacherRecentUploads() {
    const container = document.getElementById("teacher-recent-yt-list");
    const countBadge = document.getElementById("teacher-yt-count-badge");
    if (!container) return;

    const sir = store.getActiveSir();
    const myCourses = store.courses.filter(c => c.sirId === sir.id);
    const uploads = [];

    myCourses.forEach(c => {
      if (c.lessons) {
        c.lessons.forEach(l => {
          uploads.push({ ...l, courseTitle: c.title });
        });
      }
    });

    if (countBadge) countBadge.textContent = `${uploads.length} videos`;

    if (uploads.length === 0) {
      container.innerHTML = `<div class="empty-state">No videos uploaded yet. Add your first YouTube lecture above!</div>`;
      return;
    }

    container.innerHTML = uploads.slice(-6).reverse().map(u => `
      <div class="recent-yt-item">
        <strong>${u.title}</strong>
        <span>Course: ${u.courseTitle} • ⏱️ ${u.duration}</span>
      </div>
    `).join("");
  }

  handleCreateCourse() {
    const title = document.getElementById("new-course-title")?.value.trim();
    const subject = document.getElementById("new-course-subject")?.value.trim();
    const level = document.getElementById("new-course-level")?.value;
    const instructor = document.getElementById("new-course-instructor")?.value;
    const desc = document.getElementById("new-course-desc")?.value.trim();
    const theme = document.getElementById("new-course-theme")?.value;
    const emoji = document.getElementById("new-course-emoji")?.value.trim() || "📐";
    const coverPhoto = document.getElementById("new-course-cover")?.value.trim() || "";

    if (!title || !subject || !desc) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    const newCourse = {
      id: "course-" + Date.now(),
      sirId: instructor,
      title: title,
      subject: subject,
      level: level,
      desc: desc,
      theme: theme,
      emoji: emoji,
      coverPhoto: coverPhoto,
      lessons: []
    };

    store.courses.unshift(newCourse);
    store.save();

    this.closeAddCourseModal();
    document.getElementById("create-course-form").reset();

    showToast(`Course "${title}" created successfully! Now attach YouTube video lessons.`, "success");
    this.populateModalSelects();
    this.renderAllViews();
    this.switchView("view-teacher-youtube");
  }

  renderTeacherDoubtsList() {
    const container = document.getElementById("teacher-doubts-list");
    if (!container) return;

    const filter = document.getElementById("teacher-doubt-filter")?.value || "all";
    const sir = store.getActiveSir();

    let myDoubts = store.doubts.filter(d => d.sirId === sir.id);
    if (filter === "pending") myDoubts = myDoubts.filter(d => d.status === "pending");
    if (filter === "answered") myDoubts = myDoubts.filter(d => d.status === "answered");

    if (myDoubts.length === 0) {
      container.innerHTML = `<div class="empty-state">No doubts matching the current filter.</div>`;
      return;
    }

    container.innerHTML = myDoubts.map(d => `
      <div class="doubt-card" data-doubt-id="${d.id}">
        <div class="doubt-card-header">
          <div>
            <span class="doubt-student-tag">Asked by: <strong>${d.studentName}</strong> • Course: ${d.courseTitle}</span>
            <h3 class="doubt-question-title">${d.title}</h3>
          </div>
          <span class="doubt-status-pill ${d.status}">${d.status}</span>
        </div>

        <p class="doubt-question-body">${d.content}</p>

        ${d.answer ? `
          <div class="doubt-reply-box">
            <div class="doubt-reply-header">
              <span>${sir.avatar}</span>
              <span>Your Official Answer:</span>
            </div>
            <p class="doubt-reply-content">${d.answer}</p>
          </div>
        ` : `
          <form class="teacher-answer-form" data-doubt-id="${d.id}">
            <textarea class="form-control" rows="3" placeholder="Write your explanation to ${d.studentName}..." required></textarea>
            <div style="display: flex; justify-content: flex-end;">
              <button type="submit" class="btn btn-primary btn-sm">
                <span>Send Answer to Student</span>
              </button>
            </div>
          </form>
        `}
      </div>
    `).join("");

    container.querySelectorAll(".teacher-answer-form").forEach(form => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const doubtId = form.getAttribute("data-doubt-id");
        const answerText = form.querySelector("textarea").value.trim();
        if (!answerText) return;

        const targetDoubt = store.doubts.find(d => d.id === doubtId);
        if (targetDoubt) {
          targetDoubt.status = "answered";
          targetDoubt.answer = answerText;
          store.save();
          showToast("Answer sent to student!", "success");
          this.renderTeacherDoubtsList();
          this.renderTeacherDashboard();
          this.updatePendingDoubtsCounter();
        }
      });
    });
  }

  handleEditSirProfile() {
    const sir = store.getActiveSir();
    sir.name = document.getElementById("sir-edit-name").value.trim();
    sir.avatar = document.getElementById("sir-edit-avatar").value.trim() || "👨‍🏫";
    sir.designation = document.getElementById("sir-edit-designation").value.trim();
    sir.subject = document.getElementById("sir-edit-subject").value.trim();
    sir.bio = document.getElementById("sir-edit-bio").value.trim();
    sir.ytChannel = document.getElementById("sir-edit-youtube").value.trim();
    sir.exp = document.getElementById("sir-edit-exp").value.trim();

    store.save();
    showToast("Profile settings saved successfully!", "success");
    this.updateRoleUI();
    this.renderAllViews();
  }

  handleCreateNewSir() {
    const name = document.getElementById("new-sir-name")?.value.trim();
    const avatar = document.getElementById("new-sir-avatar")?.value.trim() || "👨‍🏫";
    const designation = document.getElementById("new-sir-designation")?.value.trim();
    const bio = document.getElementById("new-sir-bio")?.value.trim() || "Passionate educator.";

    if (!name || !designation) {
      showToast("Please provide your name and designation.", "error");
      return;
    }

    const newSir = {
      id: "sir-" + Date.now(),
      name: name,
      avatar: avatar,
      designation: designation,
      subject: designation,
      bio: bio,
      rating: 5.0,
      studentsCount: 1,
      exp: "1 Year",
      ytChannel: ""
    };

    store.sirs.push(newSir);
    store.activeSirId = newSir.id;
    store.currentRole = "teacher";
    store.save();

    document.getElementById("new-sir-modal")?.classList.add("hidden");
    document.getElementById("create-sir-form").reset();

    showToast(`Welcome ${name}! Your Sir profile has been created.`, "success");
    this.updateRoleUI();
    this.populateModalSelects();
    this.switchView("view-teacher-dashboard");
    this.renderAllViews();
  }

  handleCreateNewStudent() {
    const name = document.getElementById("new-student-name")?.value.trim();
    const target = document.getElementById("new-student-target")?.value.trim() || "Lifelong Learner";

    if (!name) {
      showToast("Please enter your name.", "error");
      return;
    }

    const newStudent = {
      id: "student-" + Date.now(),
      name: name,
      avatar: "🎓",
      target: target
    };

    store.students.push(newStudent);
    store.activeStudentId = newStudent.id;
    store.currentRole = "student";
    store.save();

    document.getElementById("new-student-modal")?.classList.add("hidden");
    document.getElementById("create-student-form").reset();

    showToast(`Welcome ${name}! Student profile activated.`, "success");
    this.updateRoleUI();
    this.populateModalSelects();
    this.switchView("view-sirs");
    this.renderAllViews();
  }

  updatePendingDoubtsCounter() {
    const sir = store.getActiveSir();
    const pendingCount = store.doubts.filter(d => d.sirId === sir.id && d.status === "pending").length;
    const badge = document.getElementById("teacher-pending-doubts-count");
    if (badge) {
      badge.textContent = pendingCount;
      badge.style.display = pendingCount > 0 ? "inline-block" : "none";
    }
  }

  // ===========================================================================
  // 11. GLOBAL SEARCH
  // ===========================================================================

  handleGlobalSearch(query) {
    if (!query) {
      this.renderAllViews();
      return;
    }
    const q = query.toLowerCase();

    // Check if searching for Sirs
    const matchingSirs = store.sirs.filter(s => 
      s.name.toLowerCase().includes(q) || 
      s.subject.toLowerCase().includes(q) || 
      s.designation.toLowerCase().includes(q)
    );

    // Check if searching for courses
    const matchingCourses = store.courses.filter(c => 
      c.title.toLowerCase().includes(q) || 
      c.subject.toLowerCase().includes(q) ||
      (c.desc && c.desc.toLowerCase().includes(q))
    );

    if (this.currentViewId === "view-sirs") {
      const container = document.getElementById("sirs-grid-container");
      if (container) {
        if (matchingSirs.length === 0) {
          container.innerHTML = `<div class="empty-state">No teachers matching "${query}".</div>`;
        } else {
          container.innerHTML = matchingSirs.map(sir => {
            const sirCourses = store.courses.filter(c => c.sirId === sir.id);
            return `
              <div class="sir-card" data-sir-id="${sir.id}">
                <div class="sir-card-top">
                  <div class="sir-avatar">${sir.avatar || "👨‍🏫"}</div>
                  <div class="sir-info">
                    <h3>${sir.name}</h3>
                    <div class="sir-title">${sir.designation}</div>
                  </div>
                </div>
                <p class="sir-bio">${sir.bio}</p>
                <div class="sir-card-actions">
                  <button class="btn btn-primary btn-block open-sir-btn" data-sir-id="${sir.id}">
                    <span>View Sir's Channel & Lectures</span>
                  </button>
                </div>
              </div>
            `;
          }).join("");

          container.querySelectorAll(".open-sir-btn").forEach(btn => {
            btn.addEventListener("click", () => this.openSirShowcase(btn.getAttribute("data-sir-id")));
          });
        }
      }
    } else {
      const container = document.getElementById("all-courses-grid");
      if (container) {
        if (matchingCourses.length === 0) {
          container.innerHTML = `<div class="empty-state">No courses matching "${query}".</div>`;
        } else {
          container.innerHTML = matchingCourses.map(c => this.createCourseCardHTML(c)).join("");
          this.attachCourseCardActions(container);
        }
      }
    }
  }
}

// Instantiate on DOM load
document.addEventListener("DOMContentLoaded", () => {
  window.appController = new AppController();
});
