# TutorApp 🎓

A full-featured, production-ready educational platform built with modern HTML5, CSS3, and JavaScript where **Teachers (Sirs)** can publish structured courses, upload YouTube video lessons, and answer student doubts, and **Students** can access a curated catalog of **124+ courses** categorized **by each Sir / Channel**, watch embedded lectures with timestamped notes, and submit questions.

---

## 🌟 Key Features

### 🏛️ 1. Massive 124+ Free Course Catalog Across 21 Top Channels & Sirs
- **Pre-loaded with 124+ complete courses** spanning Computer Science, Web Development, Artificial Intelligence, Mathematics, Electronics, GATE Prep, and more.
- **21 Renowned Educators and Global Institutions Included**:
  - 🌐 **Google for Developers** (Android Kotlin, TensorFlow, Web Performance, Flutter, Gemini AI)
  - 🧩 **Code.org** (Intro to CS, How Computers Work, AI for Oceans, Hour of Code, Cybersecurity Basics)
  - ⚡ **Neso Academy** (Digital Electronics, C Programming, Theory of Computation, Operating Systems, Computer Organization, Microprocessors)
  - 🚀 **freeCodeCamp** (Full-Stack Web Dev, Python for Beginners, Responsive Web Design, JavaScript Algorithms, Data Analysis with Python)
  - 🎓 **CS50 Harvard** (David J. Malan's CS50x Intro to Computer Science, CS50 Python, CS50 Web, CS50 Cybersecurity)
  - 🏛️ **MIT OpenCourseWare** (Prof. Strang's Linear Algebra, Intro to Algorithms, Classical Mechanics, Physics 8.01)
  - 📐 **3Blue1Brown** (Essence of Linear Algebra, Essence of Calculus, Neural Networks Deep Dive)
  - 📊 **StatQuest with Josh Starmer** (Machine Learning Fundamentals, Neural Networks & Backprop, PCA & Data Reduction)
  - 🧠 **Abdul Bari** (Analysis of Algorithms, Dynamic Programming Masterclass, Sorting & Searching)
  - 🎯 **Gate Smashers** (DBMS Complete Gate Course, Operating Systems, Computer Networks, Theory of Computation)
  - ☕ **Chai aur Code (Hitesh Choudhary)** (JavaScript in Hindi, React JS Masterclass, Backend with Node.js)
  - 💻 **Traversy Media** (Web Development 2024 Roadmap, Node.js & Express REST API, Modern CSS & Flexbox/Grid)
  - 🥷 **The Net Ninja** (Complete Modern React & Hooks, TypeScript Tutorial, Next.js Full Course)
  - 🎒 **Bro Code** (Python Full Course for Free, C++ Masterclass, HTML & CSS Complete Guide)
  - 🌍 **Khan Academy** (Calculus 1, Organic Chemistry, World History)
  - 💡 **Kunal Kushwaha** (Complete Java & DSA Bootcamp, Git & GitHub Masterclass, DevOps & Cloud Fundamentals)
  - 🌟 **Apna College (Shradha Ma'am)** (Complete C++ with DSA, Full Stack Web Development)
  - ⚛️ **Physics Wallah (Alakh Pandey Sir)** (Physics Fundamentals for Class 11/12, Thermodynamics, Wave Optics)
  - 📜 **CrashCourse (Hank & John Green)** (Computer Science Crash Course, Biology, World History)
  - 🌲 **Stanford Online** (CS229 Machine Learning by Andrew Ng, Convolutional Neural Networks for Visual Recognition)
  - 🔬 **Prof. C. V. Raman Sir** (Quantum Mechanics & Classical Physics)
- **High-Definition Cover Photos**: Every single course includes a hand-picked, high-contrast Unsplash cover photo tailored to its topic.
- **Embedded Real YouTube Lectures**: Over 150 real, verified YouTube video lessons ready to play instantly in a distraction-free player.

---

### 👨‍🏫 2. Teacher / Sir Studio
- **Role Onboarding & Switcher**: Easily switch between Teacher and Student perspectives anytime.
- **Add & Organize Courses**: Define course titles, subject departments, difficulty levels, descriptions, custom cover photo URLs, and color themes.
- **YouTube Video Lesson Studio**:
  - Automatically parses standard YouTube URLs (`watch?v=`, `youtu.be`, `embed`, `shorts`, or direct 11-character video IDs).
  - **Live YouTube Embed Preview** while typing or pasting URLs.
  - Attach lecture notes, approximate durations, and external PDF/Google Drive resource links.
- **Doubts & Questions Q&A Desk**: View questions asked by students across your courses, write official responses, and update doubt statuses in real-time.
- **Sir Profile Customization**: Edit display name, academic designation, teaching philosophy/bio, avatar emoji, and experience.

---

### 🎓 3. Student Experience ("Access by Each Sir")
- **"Browse by Sir" Faculty Directory**:
  - Dedicated showcase cards for each Sir / Channel with teacher badges, student counts, course counts, and bios.
  - Subject filter pills (All, Google, Code.org, Neso Academy, CS50 Harvard, MIT OCW, freeCodeCamp, Computer Science, Web Dev, Mathematics, etc.).
- **Sir Showcase & Channel Page**:
  - View all courses and standalone YouTube video playlists created by a specific Sir.
  - "Ask Sir a Doubt" form that routes questions directly to that educator.
- **Distraction-Free YouTube Classroom**:
  - 16:9 responsive embedded YouTube video player with high-definition playback.
  - **Course Playlist Sidebar**: Switch lessons smoothly with one click and track completion progress with checkboxes.
  - **Live Timestamped Notes Pad**: Type notes while watching; notes automatically persist in your browser per lecture.
  - **Concept Quick-Check**: Interactive multiple-choice question per lecture with instant answer feedback and explanations.
  - **Teacher Resources & Slides**: Quick links to supplementary study materials.
  - **"Ask Sir on this Video"**: Instant doubt submission directly from the classroom.
- **Student Dashboard**:
  - "Continue Learning" banner to resume exactly where you left off.
  - Enrolled courses with real-time percentage progress bars.
  - Personal doubt history and teacher replies feed.

---

### ⚡ 4. Architecture & Persistence
- **Zero External Backend Required**: Pure client-side application running seamlessly in any modern web browser.
- **Full LocalStorage Persistence with Auto-Merge**: All user-added courses, custom edits, notes, progress, and doubts persist across browser refreshes while auto-merging newly published catalogue entries.
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
├── index.html        # Main semantic HTML structure, hero filters & modals
├── styles.css        # Responsive stylesheet with light/dark theme variables & cover overlays
├── courses-data.js   # 124+ detailed courses across 21 top educators with YouTube IDs & cover photos
├── app.js            # Application logic, YouTube parser, role management, classroom & stores
├── README.md         # Comprehensive documentation & feature guide
└── .gitignore        # Git ignore rules
```
