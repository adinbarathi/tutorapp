# OpenCourses - 100% Free Online Courses Platform

OpenCourses is a professional, Coursera-inspired open education web application built with modern HTML5, CSS3, and JavaScript. It aggregates **124+ verified free courses** and **150+ video lectures** from world-renowned universities, tech pioneers, and premier educators (Google, Harvard University, MIT, Stanford, Code.org, Neso Academy, freeCodeCamp, and more) into a single, distraction-free learning experience.

---

## Key Highlights & Features

### 1. Coursera-Inspired Design System
- **Signature Coursera Palette**: Designed with Coursera royal blue (`#0056D2`), deep blue hover states (`#00419e`), crisp white cards (`#ffffff`), and clean off-white background canvas (`#f5f7fa`).
- **Zero Emojis / Clean Professional UI**: Removed all generic AI emojis and replaced with clean, crisp SVG iconography, typography-driven institution monograms, and verified academic badges.
- **Academic Typography**: Clean layout using Plus Jakarta Sans, high-contrast course cards, level pills, and verified rating indicators.
- **Dual Theme Support**: Light theme by default, with accessible dark theme option.

---

### 2. Dedicated Free Course Discovery Platform
- **Pivot to Pure Learning Platform**: Removed dual-role / teacher switching portals to create a focused, high-utility **Find Free Courses Online** destination.
- **124+ Free Courses Across 21 Leading Institutions & Providers**:
  - **Google for Developers**: Machine Learning, TensorFlow, Android Kotlin, Flutter, Gemini AI
  - **Harvard University (CS50)**: CS50x Intro to CS, CS50 Python, CS50 Web, CS50 Cybersecurity
  - **MIT OpenCourseWare**: Prof. Strang's Linear Algebra, Intro to Algorithms, Classical Mechanics
  - **Stanford Online**: Machine Learning (Andrew Ng), Deep Learning for Computer Vision
  - **Code.org**: Computer Science Discoveries, How Computers Work, AI for Oceans, Internet Fundamentals
  - **Neso Academy**: Digital Electronics, Operating Systems, C Programming, Theory of Computation
  - **freeCodeCamp.org**: Full-Stack Web Development, Responsive Web Design, Python Data Analysis
  - **3Blue1Brown**: Essence of Linear Algebra, Essence of Calculus, Neural Networks
  - **StatQuest with Josh Starmer**: Machine Learning Fundamentals, Neural Networks, PCA
  - **Abdul Bari**: Analysis & Design of Algorithms, Dynamic Programming Masterclass
  - **Gate Smashers**: DBMS Complete GATE Course, Operating Systems, Computer Networks
  - **Chai aur Code**: Modern JavaScript, React JS Masterclass, Backend with Node.js
  - **Traversy Media**: Modern Web Development Roadmap, Node.js & Express REST APIs
  - **The Net Ninja**: Modern React & Hooks, TypeScript, Next.js Full Course
  - **Bro Code**: Python Full Course, C++ Masterclass, HTML & CSS Complete Guide
  - **Khan Academy**: Calculus 1, Organic Chemistry, World History
  - **Kunal Kushwaha**: Complete Java & DSA Bootcamp, Git & GitHub Masterclass
  - **Apna College**: Complete C++ with DSA, Full-Stack Web Development
  - **Physics Wallah**: Fundamentals of Physics, Thermodynamics, Wave Optics
  - **CrashCourse**: Computer Science, Biology, World History
  - **Prof. C. V. Raman**: Quantum Mechanics & Theoretical Physics

---

### 3. Distraction-Free Video Classroom
- **16:9 Responsive Embedded Video Player**: High-definition YouTube playback with zero external distractions.
- **Curriculum Playlist Sidebar**: One-click lesson switching with real-time completion checkmarks and progress bars.
- **Timestamped Personal Notes Pad**: Take lecture notes while watching; notes automatically persist in your browser.
- **Interactive Concept Quick-Check**: Multiple-choice question per lecture with instant answer feedback and conceptual explanations.
- **Supplemental Study Resources**: Direct links to slide decks, code repositories, and documentation.

---

### 4. My Learning Dashboard & Persistence
- **Zero Backend Required**: Runs completely in the browser without any build tools or server installation.
- **LocalStorage Persistence**: Enrolled courses, finished lessons, personal notes, and question history persist automatically across sessions.
- **One-Click Data Backup & Reset**: Export your learning progress to a JSON backup file or reset demo data anytime.

---

## Project Structure

```
tutor-app/
├── index.html        # Semantic HTML layout, Coursera header, hero, filter bar & modals
├── styles.css        # Coursera design system (#0056D2), responsive cards & player styling
├── courses-data.js   # Curated dataset with 124 courses and 21 institutions (zero emojis)
├── app.js            # Controller: catalog search, filtering, classroom player, notes, quiz, & store
└── README.md         # Documentation & guide
```

---

## How to Run Locally

Open `index.html` directly in any web browser:

```bash
# On Windows PowerShell / Command Prompt:
start index.html

# Or serve via any local static server:
npx serve .
# or
python -m http.server 8080
```
