# TutorApp 🎓

A full-featured educational platform built with modern HTML5, CSS3, and JavaScript where **Teachers (Sirs)** can publish structured courses, upload YouTube video lessons, and answer questions, and **Students** can access curated curricula categorized **by each Sir**, watch embedded lectures with timestamped notes, and submit doubts.

---

## 🌟 Key Features

### 👨‍🏫 1. Teacher / Sir Studio
- **Role Onboarding & Switcher**: Easily switch between Teacher and Student perspectives anytime.
- **Add & Organize Courses**: Define course titles, subject departments (Physics, Computer Science, DSA, Chemistry, etc.), difficulty levels, descriptions, and custom color themes.
- **YouTube Video Lesson Studio**:
  - Automatically parses standard YouTube URLs (`watch?v=`, `youtu.be`, `embed`, `shorts`, or direct 11-character video IDs).
  - **Live YouTube Embed Preview** while typing or pasting URLs.
  - Attach lecture notes, approximate durations, and external PDF/Google Drive resource links.
- **Doubts & Questions Q&A Desk**: View questions asked by students across your courses, write official responses, and update doubt statuses in real-time.
- **Sir Profile Customization**: Edit display name, academic designation, teaching philosophy/bio, avatar emoji, and experience.

### 🎓 2. Student Experience ("Access by Each Sir")
- **"Browse by Sir" Directory**:
  - Dedicated showcase cards for each Sir (e.g. *Prof. C. V. Raman Sir*, *Ananya Ma'am*, *Vikram Sir*, *Dr. Meera Nambiar*).
  - Filter teachers by subject (Physics & Math, Computer Science, DSA, Chemistry).
  - Ratings, student count, total courses, and verified educator badges.
- **Sir Showcase & Channel Page**:
  - View all courses and standalone YouTube video playlists created by a specific Sir.
  - "Ask Sir a Doubt" form that routes questions directly to that educator.
- **Distraction-Free YouTube Classroom**:
  - 16:9 responsive embedded YouTube video player with high-definition playback.
  - **Course Playlist Sidebar**: Switch lessons smoothly with one click and track completion progress with checklists.
  - **Live Timestamped Notes Pad**: Type notes while watching; notes automatically persist in your browser per lecture.
  - **Concept Quick-Check**: Interactive multiple-choice question per lecture with instant answer feedback and explanations.
  - **Teacher Resources & Slides**: Quick links to supplementary study materials.
  - **"Ask Sir on this Video"**: Instant doubt submission directly from the classroom.
- **Student Dashboard**:
  - "Continue Learning" banner to resume exactly where you left off.
  - Enrolled courses with real-time percentage progress bars.
  - Personal doubt history and teacher replies feed.

### ⚡ 3. Architecture & Persistence
- **Zero External Backend Required**: Pure client-side application running seamlessly in any modern web browser.
- **Full LocalStorage Persistence**: All courses, videos, notes, progress, and doubts persist across browser refreshes.
- **Demo Data Seeded Out-of-the-Box**: Includes real, high-quality educational YouTube lectures (3Blue1Brown, freeCodeCamp, Abdul Bari DSA, Khan Academy).
- **Data Export & Reset**: Single-click "Reset Demo Data" and "Backup / Export Data" controls.
- **Responsive & Dual Theme**: Dark mode default with light mode toggle, designed for mobile, tablet, and desktop screens.

---

## 🚀 How to Run Locally

1. Open `index.html` directly in any web browser (Chrome, Edge, Firefox, Safari):
   ```bash
   # Double-click index.html or open via terminal:
   start index.html
   ```
2. Or serve via any local static web server (such as Python, Node, or VS Code Live Server):
   ```bash
   npx serve .
   # or
   python -m http.server 8080
   ```

---

## 📁 Project Structure

```
tutor-app/
├── index.html        # Main semantic HTML structure & modals
├── styles.css        # Responsive stylesheet with light/dark theme variables
├── app.js            # Application logic, YouTube parser, role management, and stores
├── README.md         # Documentation & guide
└── .gitignore        # Git ignore rules
```
