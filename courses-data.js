// =============================================================================
// TUTORAPP COMPREHENSIVE COURSE & EDUCATOR DATASET
// Total Sirs/Channels: 21
// Total Courses: 124
// =============================================================================

const ALL_SIRS_DATA = [
  {
    "id": "sir-google",
    "name": "Google for Developers & Google Cloud",
    "avatar": "🌐",
    "designation": "Official Google Developer Education & Cloud Engineering",
    "subject": "Google AI, Cloud & Python",
    "bio": "Official free engineering, AI, and cloud computing courses built by Google engineers, research scientists, and Developer Advocates. Master Machine Learning, TensorFlow, Google Cloud, Android, and Python.",
    "rating": 4.98,
    "studentsCount": 38400,
    "exp": "Official Google Program",
    "ytChannel": "https://www.youtube.com/@GoogleDevelopers"
  },
  {
    "id": "sir-codeorg",
    "name": "Code.org Academy",
    "avatar": "🤖",
    "designation": "Computer Science Principles & Foundational Tech",
    "subject": "Code.org CS Principles & Internet",
    "bio": "Code.org provides world-renowned computer science curricula taught by Bill Gates, Mark Zuckerberg, and leading AI pioneers. Demystifying how computers, code, and the internet work.",
    "rating": 4.95,
    "studentsCount": 29800,
    "exp": "Global Educational Non-profit",
    "ytChannel": "https://www.youtube.com/@CodeOrg"
  },
  {
    "id": "sir-neso",
    "name": "Neso Academy (Er. Himanshu Sir)",
    "avatar": "🎓",
    "designation": "Engineering & Computer Science Academic Faculty",
    "subject": "Digital Electronics, OS & C Programming",
    "bio": "Millions of engineering students worldwide learn Digital Electronics, Operating Systems, C Programming, and Theory of Computation through Neso Academy's signature animated lectures.",
    "rating": 4.99,
    "studentsCount": 34200,
    "exp": "10+ Years",
    "ytChannel": "https://www.youtube.com/@nesoacademy"
  },
  {
    "id": "sir-freecodecamp",
    "name": "freeCodeCamp.org (Quincy Larson & Faculty)",
    "avatar": "🔥",
    "designation": "Global Open Source Coding & Tech Curriculum",
    "subject": "Full-Stack Web, Python, Docker & Rust",
    "bio": "Free, open-source programming education that has helped hundreds of thousands of people become professional software engineers. Comprehensive full-length courses on every modern tech stack.",
    "rating": 4.99,
    "studentsCount": 92000,
    "exp": "12+ Years",
    "ytChannel": "https://www.youtube.com/@freecodecamp"
  },
  {
    "id": "sir-cs50",
    "name": "CS50 - Harvard University (Prof. David J. Malan)",
    "avatar": "🏛️",
    "designation": "Gordon McKay Professor of the Practice of Computer Science at Harvard",
    "subject": "Computer Science, Python, AI & Web",
    "bio": "Harvard University's legendary introduction to the intellectual enterprises of computer science and the art of programming. Energetic, rigorous, and unforgettable lectures.",
    "rating": 4.99,
    "studentsCount": 78500,
    "exp": "Harvard Faculty",
    "ytChannel": "https://www.youtube.com/@cs50"
  },
  {
    "id": "sir-mit",
    "name": "MIT OpenCourseWare (Prof. Gilbert Strang & MIT)",
    "avatar": "🔬",
    "designation": "Massachusetts Institute of Technology Faculty",
    "subject": "Linear Algebra, Calculus, Algorithms & Physics",
    "bio": "Unlocking knowledge from MIT classrooms to the world. Featuring world-celebrated masterclasses by Prof. Gilbert Strang (Linear Algebra 18.06), Walter Lewin (Physics 8.01), and Erik Demaine.",
    "rating": 4.98,
    "studentsCount": 61000,
    "exp": "MIT Faculty",
    "ytChannel": "https://www.youtube.com/@mitocw"
  },
  {
    "id": "sir-khan",
    "name": "Khan Academy (Sal Khan)",
    "avatar": "🌿",
    "designation": "Founder of Khan Academy & Global Educator",
    "subject": "Calculus, Physics, Chemistry & Economics",
    "bio": "A free, world-class education for anyone, anywhere. Intuitive black-canvas visual breakdowns of calculus, physics, chemistry, biology, and economics by Sal Khan.",
    "rating": 4.97,
    "studentsCount": 84000,
    "exp": "16+ Years",
    "ytChannel": "https://www.youtube.com/@khanacademy"
  },
  {
    "id": "sir-abdulbari",
    "name": "Abdul Bari",
    "avatar": "👨‍🏫",
    "designation": "Algorithms, Data Structures & TOC Specialist",
    "subject": "Algorithms & Data Structures",
    "bio": "The beloved educator whose whiteboard explanations of Dynamic Programming, Divide and Conquer, Graph Theory, and Master Theorem have rescued millions of engineering students.",
    "rating": 4.99,
    "studentsCount": 46000,
    "exp": "15+ Years",
    "ytChannel": "https://www.youtube.com/@abdulbari"
  },
  {
    "id": "sir-3blue1brown",
    "name": "3Blue1Brown (Grant Sanderson)",
    "avatar": "📐",
    "designation": "Mathematical Visualization & Stanford Alum",
    "subject": "Visual Math, Linear Algebra, Neural Nets",
    "bio": "Grant Sanderson creates visually rich mathematical animations exploring the essence of linear algebra, calculus, neural networks, and differential equations.",
    "rating": 4.99,
    "studentsCount": 52000,
    "exp": "10+ Years",
    "ytChannel": "https://www.youtube.com/@3blue1brown"
  },
  {
    "id": "sir-statquest",
    "name": "StatQuest with Josh Starmer",
    "avatar": "📊",
    "designation": "Data Science, Machine Learning & Statistics Educator",
    "subject": "Machine Learning, Neural Nets, Statistics",
    "bio": "BAM! Josh Starmer breaks down complex machine learning and statistical concepts into bite-sized, crystal-clear visual intuition without unnecessary jargon.",
    "rating": 4.97,
    "studentsCount": 31000,
    "exp": "11+ Years",
    "ytChannel": "https://www.youtube.com/@statquest"
  },
  {
    "id": "sir-gatesmashers",
    "name": "Gate Smashers (Varun Singla Sir)",
    "avatar": "⚡",
    "designation": "GATE, University CS & Core Engineering Mentor",
    "subject": "DBMS, Computer Networks, Operating Systems",
    "bio": "India's highest rated core computer science channel. Crystal-clear Hindi/English engineering lectures for DBMS, Operating Systems, Computer Networks, and Theory of Computation.",
    "rating": 4.98,
    "studentsCount": 41000,
    "exp": "9+ Years",
    "ytChannel": "https://www.youtube.com/@GateSmashers"
  },
  {
    "id": "sir-chaiaurcode",
    "name": "Chai aur Code (Hitesh Choudhary Sir)",
    "avatar": "☕",
    "designation": "Senior Software Architect & Open Source Educator",
    "subject": "JavaScript, React, Node.js, Next.js, Python",
    "bio": "Practical coding over chai. Industry-grade production projects covering JavaScript from scratch, backend microservices, full-stack React/Next.js, and API architecture.",
    "rating": 4.99,
    "studentsCount": 37500,
    "exp": "14+ Years",
    "ytChannel": "https://www.youtube.com/@chaiaurcode"
  },
  {
    "id": "sir-traversy",
    "name": "Traversy Media (Brad Traversy)",
    "avatar": "💻",
    "designation": "Full-Stack Web Engineering Specialist",
    "subject": "React, Node.js, MERN, Docker & Tailwind",
    "bio": "Brad Traversy teaches clean, practical web development from front to back. Real-world project builds, zero fluff, and modern industry standards.",
    "rating": 4.96,
    "studentsCount": 45000,
    "exp": "13+ Years",
    "ytChannel": "https://www.youtube.com/@TraversyMedia"
  },
  {
    "id": "sir-netninja",
    "name": "The Net Ninja (Shaun Pelling)",
    "avatar": "🥷",
    "designation": "Modern Frontend, Mobile & Cloud Faculty",
    "subject": "Flutter, Vue.js, Svelte, TypeScript & Firebase",
    "bio": "Black-belt level web tutorials. Complete step-by-step masterclasses on Flutter mobile development, Vue 3, SvelteKit, TypeScript, and modern GraphQL.",
    "rating": 4.97,
    "studentsCount": 33000,
    "exp": "11+ Years",
    "ytChannel": "https://www.youtube.com/@NetNinja"
  },
  {
    "id": "sir-crashcourse",
    "name": "CrashCourse (Hank Green & John Green)",
    "avatar": "🚀",
    "designation": "Educational Storytellers & Science Communicators",
    "subject": "Computer Science, Physics, Chemistry, Biology",
    "bio": "High-energy, beautifully animated educational courses covering Computer Science (Carrie Anne Philbin), Physics, Chemistry, Astronomy, and World History.",
    "rating": 4.96,
    "studentsCount": 59000,
    "exp": "14+ Years",
    "ytChannel": "https://www.youtube.com/@crashcourse"
  },
  {
    "id": "sir-brocode",
    "name": "Bro Code",
    "avatar": "🍕",
    "designation": "Multi-Language Programming Instructor",
    "subject": "Python, C++, Java, C#, SQL & Web",
    "bio": "Clear, beginner-friendly 10-hour complete masterclasses covering Python, C++, Java, C#, and JavaScript with code breakdowns, visual slides, and exercises.",
    "rating": 4.95,
    "studentsCount": 42000,
    "exp": "8+ Years",
    "ytChannel": "https://www.youtube.com/@BroCodez"
  },
  {
    "id": "sir-kunal",
    "name": "Kunal Kushwaha",
    "avatar": "🛡️",
    "designation": "DevOps & Open Source Evangelist",
    "subject": "DSA in Java, DevOps, Docker & Kubernetes",
    "bio": "Founder of WeMakeDevs. Taught over 100,000 students Data Structures & Algorithms in Java and the complete DevOps & Cloud Native engineering roadmap.",
    "rating": 4.94,
    "studentsCount": 27000,
    "exp": "6+ Years",
    "ytChannel": "https://www.youtube.com/@KunalKushwaha"
  },
  {
    "id": "sir-apnacollege",
    "name": "Apna College (Shradha Didi & Aman Sir)",
    "avatar": "✨",
    "designation": "Tech Placements & Software Engineering Faculty",
    "subject": "C++ DSA, Java, Web Development Alpha",
    "bio": "Ex-Microsoft engineer Shradha Khapra teaches complete C++ DSA, Full-Stack Web Development, and Java placement courses for college undergraduates.",
    "rating": 4.95,
    "studentsCount": 65000,
    "exp": "7+ Years",
    "ytChannel": "https://www.youtube.com/@ApnaCollegeOfficial"
  },
  {
    "id": "sir-physicswallah",
    "name": "Physics Wallah (Alakh Pandey Sir)",
    "avatar": "🎯",
    "designation": "Fundamental Physics & Mechanics Guru",
    "subject": "Physics: Mechanics, Electromagnetism & Optics",
    "bio": "Alakh Pandey Sir's raw whiteboard lectures that sparked an education revolution. Building deep, unbreakable intuition for Newton's laws, electromagnetism, and optics.",
    "rating": 4.98,
    "studentsCount": 89000,
    "exp": "12+ Years",
    "ytChannel": "https://www.youtube.com/@PhysicsWallah"
  },
  {
    "id": "sir-stanford",
    "name": "Stanford Online (Prof. Andrew Ng & Faculty)",
    "avatar": "🌲",
    "designation": "Stanford University School of Engineering",
    "subject": "AI, Machine Learning & Deep Learning",
    "bio": "Pioneering machine learning and artificial intelligence education from Stanford University. Learn directly from Prof. Andrew Ng and Stanford's computer science faculty.",
    "rating": 4.99,
    "studentsCount": 71000,
    "exp": "Stanford University",
    "ytChannel": "https://www.youtube.com/@stanfordonline"
  },
  {
    "id": "sir-raman",
    "name": "Prof. C. V. Raman Sir",
    "avatar": "👨‍🏫",
    "designation": "Senior Professor of Theoretical Physics & Applied Mathematics",
    "subject": "Physics & Mathematics",
    "bio": "Teaching physics and deep mathematical intuition for over 22 years. Believer in learning through visualization, thought experiments, and fundamental geometry.",
    "rating": 4.96,
    "studentsCount": 14500,
    "exp": "22 Years",
    "ytChannel": "https://youtube.com/@3blue1brown"
  }
];

const ALL_COURSES_DATA = [
  {
    "id": "course-google-ml",
    "sirId": "sir-google",
    "title": "Machine Learning Crash Course by Google",
    "subject": "Google AI & ML",
    "level": "Intermediate",
    "desc": "Official fast-paced, practical Google introduction to machine learning fundamentals, loss functions, gradient descent, and neural networks.",
    "theme": "theme-amber",
    "emoji": "🧠",
    "coverPhoto": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "gml-1",
        "title": "Machine Learning Recipes #1: Hello World (Google)",
        "ytUrl": "https://www.youtube.com/watch?v=cKxRvEZd3Mw",
        "ytVideoId": "cKxRvEZd3Mw",
        "duration": "7 mins",
        "desc": "Supervised classification with decision trees in Python.",
        "quiz": {
          "q": "Key concept check for: Machine Learning Recipes #1: Hello World (Google)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Machine Learning Recipes #1: Hello World (Google)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=cKxRvEZd3Mw"
      },
      {
        "id": "gml-2",
        "title": "ML Crash Course: Intro & Problem Framing",
        "ytUrl": "https://www.youtube.com/watch?v=SAUeGtyLsrk",
        "ytVideoId": "SAUeGtyLsrk",
        "duration": "10 mins",
        "desc": "Supervised vs unsupervised learning and model evaluation.",
        "quiz": {
          "q": "Key concept check for: ML Crash Course: Intro & Problem Framing",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"ML Crash Course: Intro & Problem Framing\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=SAUeGtyLsrk"
      },
      {
        "id": "gml-3",
        "title": "ML Crash Course: Gradient Descent & Loss",
        "ytUrl": "https://www.youtube.com/watch?v=QoK1nNAURw4",
        "ytVideoId": "QoK1nNAURw4",
        "duration": "12 mins",
        "desc": "Minimizing loss across convex parameter spaces.",
        "quiz": {
          "q": "Key concept check for: ML Crash Course: Gradient Descent & Loss",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"ML Crash Course: Gradient Descent & Loss\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=QoK1nNAURw4"
      },
      {
        "id": "gml-4",
        "title": "Decision Trees from Scratch (Google Developers)",
        "ytUrl": "https://www.youtube.com/watch?v=LDRbO9a6XPU",
        "ytVideoId": "LDRbO9a6XPU",
        "duration": "11 mins",
        "desc": "Building recursive decision tree partitioning with Gini impurity.",
        "quiz": {
          "q": "Key concept check for: Decision Trees from Scratch (Google Developers)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Decision Trees from Scratch (Google Developers)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=LDRbO9a6XPU"
      }
    ]
  },
  {
    "id": "course-google-python",
    "sirId": "sir-google",
    "title": "Google Python Class for Developers",
    "subject": "Google Python & Cloud",
    "level": "Beginner",
    "desc": "Google's internal Python class for software engineers: strings, lists, sorting, file I/O, regex, and cloud automation.",
    "theme": "theme-emerald",
    "emoji": "🐍",
    "coverPhoto": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "gpy-1",
        "title": "Google Python Class: Day 1 Part 1 (Nick Parlante)",
        "ytUrl": "https://www.youtube.com/watch?v=tKTZoB2Vjuk",
        "ytVideoId": "tKTZoB2Vjuk",
        "duration": "43 mins",
        "desc": "Python variables, strings, methods, slicing, and scripts.",
        "quiz": {
          "q": "Key concept check for: Google Python Class: Day 1 Part 1 (Nick Parlante)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Google Python Class: Day 1 Part 1 (Nick Parlante)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=tKTZoB2Vjuk"
      },
      {
        "id": "gpy-2",
        "title": "Google Python Class: Day 1 Part 2 (Lists & Sorting)",
        "ytUrl": "https://www.youtube.com/watch?v=EPYupizJYQI",
        "ytVideoId": "EPYupizJYQI",
        "duration": "42 mins",
        "desc": "List mutability, sorting with lambda keys, loops.",
        "quiz": {
          "q": "Key concept check for: Google Python Class: Day 1 Part 2 (Lists & Sorting)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Google Python Class: Day 1 Part 2 (Lists & Sorting)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=EPYupizJYQI"
      }
    ]
  },
  {
    "id": "course-google-cloud-arch",
    "sirId": "sir-google",
    "title": "Google Cloud Platform Architecture Fundamentals",
    "subject": "Google Cloud & DevOps",
    "level": "Intermediate",
    "desc": "Understand Compute Engine, Google Kubernetes Engine (GKE), Cloud Storage, and IAM security permissions.",
    "theme": "theme-blue",
    "emoji": "☁️",
    "coverPhoto": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "gca-1",
        "title": "Introduction to Google Cloud Infrastructure",
        "ytUrl": "https://www.youtube.com/watch?v=EN4fEbcFZ_E",
        "ytVideoId": "EN4fEbcFZ_E",
        "duration": "32 mins",
        "desc": "Regions, zones, virtual machines, and cloud storage buckets.",
        "quiz": {
          "q": "Key concept check for: Introduction to Google Cloud Infrastructure",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Introduction to Google Cloud Infrastructure\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=EN4fEbcFZ_E"
      }
    ]
  },
  {
    "id": "course-google-cybersecurity",
    "sirId": "sir-google",
    "title": "Google Cybersecurity Professional Foundations",
    "subject": "Cybersecurity & Security",
    "level": "Beginner",
    "desc": "Network security, SIEM tools, security operations centers, threat modeling, and Linux terminal command line defense.",
    "theme": "theme-purple",
    "emoji": "🛡️",
    "coverPhoto": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "gsec-1",
        "title": "Python for Cybersecurity Log Analysis (Google)",
        "ytUrl": "https://www.youtube.com/watch?v=4pe1fn3Gus0",
        "ytVideoId": "4pe1fn3Gus0",
        "duration": "22 mins",
        "desc": "Reading authentication log files and parsing malicious IP traffic.",
        "quiz": {
          "q": "Key concept check for: Python for Cybersecurity Log Analysis (Google)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Python for Cybersecurity Log Analysis (Google)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=4pe1fn3Gus0"
      }
    ]
  },
  {
    "id": "course-google-tensorflow",
    "sirId": "sir-google",
    "title": "TensorFlow & Keras Deep Learning Masterclass",
    "subject": "Deep Learning & AI",
    "level": "Advanced",
    "desc": "Build convolutional neural networks (CNNs), recurrent networks, and transfer learning pipelines using TensorFlow 2.x.",
    "theme": "theme-amber",
    "emoji": "⚡",
    "coverPhoto": "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "gtf-1",
        "title": "TensorFlow 2.0 Full Tutorial: Python Neural Networks",
        "ytUrl": "https://www.youtube.com/watch?v=tPYj3fFJGjk",
        "ytVideoId": "tPYj3fFJGjk",
        "duration": "45 mins",
        "desc": "Tensors, dense layers, activation functions, and training models with Keras.",
        "quiz": {
          "q": "Key concept check for: TensorFlow 2.0 Full Tutorial: Python Neural Networks",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"TensorFlow 2.0 Full Tutorial: Python Neural Networks\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=tPYj3fFJGjk"
      }
    ]
  },
  {
    "id": "course-google-android",
    "sirId": "sir-google",
    "title": "Modern Android App Development with Kotlin & Jetpack",
    "subject": "Mobile Development",
    "level": "Intermediate",
    "desc": "Build Android applications using Kotlin, Jetpack Compose UI declarative layouts, ViewModel, and Coroutines.",
    "theme": "theme-emerald",
    "emoji": "📱",
    "coverPhoto": "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "gand-1",
        "title": "Android Jetpack Compose Essentials",
        "ytUrl": "https://www.youtube.com/watch?v=mJgBOIoGihA",
        "ytVideoId": "mJgBOIoGihA",
        "duration": "25 mins",
        "desc": "Declarative UI programming in modern Android.",
        "quiz": {
          "q": "Key concept check for: Android Jetpack Compose Essentials",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Android Jetpack Compose Essentials\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=mJgBOIoGihA"
      }
    ]
  },
  {
    "id": "course-google-data-analytics",
    "sirId": "sir-google",
    "title": "Google Data Analytics Professional Foundation",
    "subject": "Data Science & Analytics",
    "level": "Beginner",
    "desc": "Data cleaning, spreadsheets, SQL database queries, R programming basics, and Tableau data storytelling.",
    "theme": "theme-blue",
    "emoji": "📈",
    "coverPhoto": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "gda-1",
        "title": "The Data Analysis Process: Ask, Prepare, Process",
        "ytUrl": "https://www.youtube.com/watch?v=sPyZALF1tPc",
        "ytVideoId": "sPyZALF1tPc",
        "duration": "20 mins",
        "desc": "The end-to-end framework used by professional Google analysts.",
        "quiz": {
          "q": "Key concept check for: The Data Analysis Process: Ask, Prepare, Process",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"The Data Analysis Process: Ask, Prepare, Process\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=sPyZALF1tPc"
      }
    ]
  },
  {
    "id": "course-google-web-dev",
    "sirId": "sir-google",
    "title": "Google Web Vitals & High Performance Web Engineering",
    "subject": "Web Development",
    "level": "Advanced",
    "desc": "Master Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), Interaction to Next Paint (INP), and PWA engineering.",
    "theme": "theme-rose",
    "emoji": "🚀",
    "coverPhoto": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "gweb-1",
        "title": "Core Web Vitals & Web Performance Optimization",
        "ytUrl": "https://www.youtube.com/watch?v=Oe421EPjeBE",
        "ytVideoId": "Oe421EPjeBE",
        "duration": "26 mins",
        "desc": "Auditing web performance, asset compression, and render-blocking resources.",
        "quiz": {
          "q": "Key concept check for: Core Web Vitals & Web Performance Optimization",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Core Web Vitals & Web Performance Optimization\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=Oe421EPjeBE"
      }
    ]
  },
  {
    "id": "course-codeorg-cs-principles",
    "sirId": "sir-codeorg",
    "title": "Computer Science Principles: How Computers Work",
    "subject": "Code.org Computer Science",
    "level": "Beginner",
    "desc": "Code.org foundational curriculum taught by Bill Gates, Nat Brown, and tech pioneers: input, memory, CPU processing, binary numbers, and microchips.",
    "theme": "theme-blue",
    "emoji": "🖥️",
    "coverPhoto": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "corg-1",
        "title": "Introducing How Computers Work (Code.org)",
        "ytUrl": "https://www.youtube.com/watch?v=OAx_6-wdslM",
        "ytVideoId": "OAx_6-wdslM",
        "duration": "2 mins",
        "desc": "Bill Gates introduces the fundamental concepts behind computers.",
        "quiz": {
          "q": "Key concept check for: Introducing How Computers Work (Code.org)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Introducing How Computers Work (Code.org)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=OAx_6-wdslM"
      },
      {
        "id": "corg-2",
        "title": "What Makes a Computer, a Computer? (Code.org)",
        "ytUrl": "https://www.youtube.com/watch?v=mCq8-xTH7jA",
        "ytVideoId": "mCq8-xTH7jA",
        "duration": "5 mins",
        "desc": "How historical computing engines evolved into programmable machines.",
        "quiz": {
          "q": "Key concept check for: What Makes a Computer, a Computer? (Code.org)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"What Makes a Computer, a Computer? (Code.org)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=mCq8-xTH7jA"
      },
      {
        "id": "corg-3",
        "title": "Binary & Data: 0s and 1s Explained (Code.org)",
        "ytUrl": "https://www.youtube.com/watch?v=USCBCmwMCDA",
        "ytVideoId": "USCBCmwMCDA",
        "duration": "6 mins",
        "desc": "How text, pixels, colors, and audio sound waves are stored in binary bits.",
        "quiz": {
          "q": "Key concept check for: Binary & Data: 0s and 1s Explained (Code.org)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Binary & Data: 0s and 1s Explained (Code.org)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=USCBCmwMCDA"
      },
      {
        "id": "corg-4",
        "title": "Circuits and Logic: Inside the Microchip (Code.org)",
        "ytUrl": "https://www.youtube.com/watch?v=ZoqMiFKspAA",
        "ytVideoId": "ZoqMiFKspAA",
        "duration": "5 mins",
        "desc": "Bill Gates explains how microscopic transistors act as electronic switches.",
        "quiz": {
          "q": "Key concept check for: Circuits and Logic: Inside the Microchip (Code.org)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Circuits and Logic: Inside the Microchip (Code.org)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=ZoqMiFKspAA"
      }
    ]
  },
  {
    "id": "course-codeorg-internet",
    "sirId": "sir-codeorg",
    "title": "How the Internet Works: From Wires to Cloud",
    "subject": "Code.org Networking",
    "level": "Beginner",
    "desc": "Vint Cerf (co-designer of TCP/IP) and Code.org faculty demystify the global internet: fiber optic cables, packets, IP addressing, DNS, and HTTP.",
    "theme": "theme-rose",
    "emoji": "🌐",
    "coverPhoto": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "cinet-1",
        "title": "What is the Internet? (Code.org)",
        "ytUrl": "https://www.youtube.com/watch?v=Dxcc6ycZ73M",
        "ytVideoId": "Dxcc6ycZ73M",
        "duration": "4 mins",
        "desc": "Vint Cerf explains open internet protocols connecting distributed networks.",
        "quiz": {
          "q": "Key concept check for: What is the Internet? (Code.org)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"What is the Internet? (Code.org)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=Dxcc6ycZ73M"
      },
      {
        "id": "cinet-2",
        "title": "The Internet: Wires, Cables & Wifi (Code.org)",
        "ytUrl": "https://www.youtube.com/watch?v=ZhEf7e4kopM",
        "ytVideoId": "ZhEf7e4kopM",
        "duration": "7 mins",
        "desc": "How data travels physically across copper cables, fiber optic lines, and radio waves.",
        "quiz": {
          "q": "Key concept check for: The Internet: Wires, Cables & Wifi (Code.org)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"The Internet: Wires, Cables & Wifi (Code.org)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=ZhEf7e4kopM"
      },
      {
        "id": "cinet-3",
        "title": "The Internet: Packets, Routing & Reliability",
        "ytUrl": "https://www.youtube.com/watch?v=AYdF7b3nMto",
        "ytVideoId": "AYdF7b3nMto",
        "duration": "7 mins",
        "desc": "Packet switching, dynamic routing, packet loss, and TCP acknowledgement verification.",
        "quiz": {
          "q": "Key concept check for: The Internet: Packets, Routing & Reliability",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"The Internet: Packets, Routing & Reliability\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=AYdF7b3nMto"
      }
    ]
  },
  {
    "id": "course-codeorg-ai-ethics",
    "sirId": "sir-codeorg",
    "title": "AI for Oceans: Machine Learning & Ethics",
    "subject": "Artificial Intelligence",
    "level": "Beginner",
    "desc": "Interactive curriculum demonstrating machine learning classification models, training bias, and ethical algorithmic decision making.",
    "theme": "theme-emerald",
    "emoji": "🐟",
    "coverPhoto": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "caie-1",
        "title": "Machine Learning & AI for Oceans",
        "ytUrl": "https://www.youtube.com/watch?v=cKxRvEZd3Mw",
        "ytVideoId": "cKxRvEZd3Mw",
        "duration": "10 mins",
        "desc": "Training an image recognition model to clean oceans from pollution.",
        "quiz": {
          "q": "Key concept check for: Machine Learning & AI for Oceans",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Machine Learning & AI for Oceans\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=cKxRvEZd3Mw"
      }
    ]
  },
  {
    "id": "course-codeorg-encryption",
    "sirId": "sir-codeorg",
    "title": "Cryptography & Cybersecurity for Students",
    "subject": "Cybersecurity",
    "level": "Beginner",
    "desc": "From Caesar ciphers and symmetric encryption to modern public key cryptography, SSL/TLS, and cyber safety.",
    "theme": "theme-purple",
    "emoji": "🔐",
    "coverPhoto": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "ccrypt-1",
        "title": "Encryption & Public Key Cryptography",
        "ytUrl": "https://www.youtube.com/watch?v=ZoqMiFKspAA",
        "ytVideoId": "ZoqMiFKspAA",
        "duration": "12 mins",
        "desc": "How public and private keys allow secure internet banking without shared secrets.",
        "quiz": {
          "q": "Key concept check for: Encryption & Public Key Cryptography",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Encryption & Public Key Cryptography\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=ZoqMiFKspAA"
      }
    ]
  },
  {
    "id": "course-codeorg-applab",
    "sirId": "sir-codeorg",
    "title": "Building Mobile Apps with JavaScript & App Lab",
    "subject": "App Development",
    "level": "Beginner",
    "desc": "Create interactive mobile web apps with visual UI drag-and-drop combined with real JavaScript event-driven code.",
    "theme": "theme-amber",
    "emoji": "📲",
    "coverPhoto": "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "capp-1",
        "title": "Event Driven Programming in App Lab",
        "ytUrl": "https://www.youtube.com/watch?v=mJgBOIoGihA",
        "ytVideoId": "mJgBOIoGihA",
        "duration": "15 mins",
        "desc": "Buttons, clicks, variables, and screen transitions in JavaScript.",
        "quiz": {
          "q": "Key concept check for: Event Driven Programming in App Lab",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Event Driven Programming in App Lab\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=mJgBOIoGihA"
      }
    ]
  },
  {
    "id": "course-codeorg-animation",
    "sirId": "sir-codeorg",
    "title": "Game Design & Creative Animation in Game Lab",
    "subject": "Game Development",
    "level": "Beginner",
    "desc": "Sprite animation, 2D coordinate collision detection, velocity vectors, and building custom arcade games in JavaScript.",
    "theme": "theme-rose",
    "emoji": "🎮",
    "coverPhoto": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "cgame-1",
        "title": "The Draw Loop & 2D Sprite Collisions",
        "ytUrl": "https://www.youtube.com/watch?v=mU6anWqZJcc",
        "ytVideoId": "mU6anWqZJcc",
        "duration": "18 mins",
        "desc": "Building game frames at 60 FPS using the draw loop and sprite physics.",
        "quiz": {
          "q": "Key concept check for: The Draw Loop & 2D Sprite Collisions",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"The Draw Loop & 2D Sprite Collisions\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=mU6anWqZJcc"
      }
    ]
  },
  {
    "id": "course-neso-digital-electronics",
    "sirId": "sir-neso",
    "title": "Digital Electronics Masterclass by Neso Academy",
    "subject": "Digital Electronics",
    "level": "Beginner",
    "desc": "The world-famous series by Neso Academy. Learn signals, analog vs digital, fundamental logic gates (AND, OR, NOT, NAND, NOR, XOR), truth tables, and Boolean simplification.",
    "theme": "theme-emerald",
    "emoji": "⚡",
    "coverPhoto": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "neso-de-1",
        "title": "What is Signal? (Signals & Systems / Digital Basics)",
        "ytUrl": "https://www.youtube.com/watch?v=M0mx8S05v60",
        "ytVideoId": "M0mx8S05v60",
        "duration": "8 mins",
        "desc": "Definition of a physical signal, continuous variables, discrete representations.",
        "quiz": {
          "q": "Key concept check for: What is Signal? (Signals & Systems / Digital Basics)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"What is Signal? (Signals & Systems / Digital Basics)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=M0mx8S05v60"
      },
      {
        "id": "neso-de-2",
        "title": "What is an Analog Signal? vs Digital Signals",
        "ytUrl": "https://www.youtube.com/watch?v=F5h3z8p9dPg",
        "ytVideoId": "F5h3z8p9dPg",
        "duration": "10 mins",
        "desc": "Comparing analog precision with noise-resilient digital binary levels.",
        "quiz": {
          "q": "Key concept check for: What is an Analog Signal? vs Digital Signals",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"What is an Analog Signal? vs Digital Signals\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=F5h3z8p9dPg"
      },
      {
        "id": "neso-de-3",
        "title": "Logic Gates (Part 1) - AND, OR, NOT Gates",
        "ytUrl": "https://www.youtube.com/watch?v=xDARFvArIpc",
        "ytVideoId": "xDARFvArIpc",
        "duration": "12 mins",
        "desc": "Basic logic gates: symbols, boolean expressions, operational truth tables.",
        "quiz": {
          "q": "Key concept check for: Logic Gates (Part 1) - AND, OR, NOT Gates",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Logic Gates (Part 1) - AND, OR, NOT Gates\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=xDARFvArIpc"
      },
      {
        "id": "neso-de-4",
        "title": "Logic Gates (Part 2) - NAND, NOR, XOR, XNOR",
        "ytUrl": "https://www.youtube.com/watch?v=iogRGu7nbJw",
        "ytVideoId": "iogRGu7nbJw",
        "duration": "14 mins",
        "desc": "Universal logic gates and XOR parity truth tables.",
        "quiz": {
          "q": "Key concept check for: Logic Gates (Part 2) - NAND, NOR, XOR, XNOR",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Logic Gates (Part 2) - NAND, NOR, XOR, XNOR\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=iogRGu7nbJw"
      }
    ]
  },
  {
    "id": "course-neso-os",
    "sirId": "sir-neso",
    "title": "Operating Systems Architecture & Process Management",
    "subject": "Operating Systems",
    "level": "Intermediate",
    "desc": "Complete operating systems course by Neso Academy: system calls, dual-mode CPU operation, process control blocks (PCB), and process scheduling states.",
    "theme": "theme-purple",
    "emoji": "💻",
    "coverPhoto": "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "neso-os-1",
        "title": "Introduction to Operating Systems",
        "ytUrl": "https://www.youtube.com/watch?v=vBURTt97EkA",
        "ytVideoId": "vBURTt97EkA",
        "duration": "11 mins",
        "desc": "The bridge between user applications and computer hardware.",
        "quiz": {
          "q": "Key concept check for: Introduction to Operating Systems",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Introduction to Operating Systems\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=vBURTt97EkA"
      },
      {
        "id": "neso-os-2",
        "title": "Basics of OS (Computer System Operation)",
        "ytUrl": "https://www.youtube.com/watch?v=VjPgYcQqqN0",
        "ytVideoId": "VjPgYcQqqN0",
        "duration": "13 mins",
        "desc": "Bootstrap, BIOS, interrupts, traps, and user vs kernel modes.",
        "quiz": {
          "q": "Key concept check for: Basics of OS (Computer System Operation)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Basics of OS (Computer System Operation)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=VjPgYcQqqN0"
      },
      {
        "id": "neso-os-3",
        "title": "Process Management (Processes and Threads)",
        "ytUrl": "https://www.youtube.com/watch?v=OrM7nZcxXZU",
        "ytVideoId": "OrM7nZcxXZU",
        "duration": "15 mins",
        "desc": "Program in execution. Memory layout: Text, Data, Heap, Stack.",
        "quiz": {
          "q": "Key concept check for: Process Management (Processes and Threads)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Process Management (Processes and Threads)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=OrM7nZcxXZU"
      },
      {
        "id": "neso-os-4",
        "title": "Process State Transitions & PCB Diagram",
        "ytUrl": "https://www.youtube.com/watch?v=jZ_6PXoaoxo",
        "ytVideoId": "jZ_6PXoaoxo",
        "duration": "14 mins",
        "desc": "Five-state process model: New, Ready, Running, Waiting, Terminated.",
        "quiz": {
          "q": "Key concept check for: Process State Transitions & PCB Diagram",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Process State Transitions & PCB Diagram\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=jZ_6PXoaoxo"
      }
    ]
  },
  {
    "id": "course-neso-c",
    "sirId": "sir-neso",
    "title": "C Programming Masterclass: From Zero to Systems",
    "subject": "C Programming",
    "level": "Beginner",
    "desc": "Understand C programming at the memory level: compilation pipeline, variables, memory pointers, functions, and structs.",
    "theme": "theme-blue",
    "emoji": "⚙️",
    "coverPhoto": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "neso-c-1",
        "title": "C Programming – Features & The First C Program",
        "ytUrl": "https://www.youtube.com/watch?v=rLf3jnHxSmU",
        "ytVideoId": "rLf3jnHxSmU",
        "duration": "16 mins",
        "desc": "Dennis Ritchie's design of C, preprocessor directives, and gcc compilation.",
        "quiz": {
          "q": "Key concept check for: C Programming – Features & The First C Program",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"C Programming – Features & The First C Program\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=rLf3jnHxSmU"
      },
      {
        "id": "neso-c-2",
        "title": "Introduction to Variables & Memory Storage",
        "ytUrl": "https://www.youtube.com/watch?v=fO4FwJOShdc",
        "ytVideoId": "fO4FwJOShdc",
        "duration": "14 mins",
        "desc": "Variables naming memory locations, byte widths, unsigned vs signed types.",
        "quiz": {
          "q": "Key concept check for: Introduction to Variables & Memory Storage",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Introduction to Variables & Memory Storage\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=fO4FwJOShdc"
      },
      {
        "id": "neso-c-3",
        "title": "Introduction to Programming and Data Structures",
        "ytUrl": "https://www.youtube.com/watch?v=4OGMB4Fhh50",
        "ytVideoId": "4OGMB4Fhh50",
        "duration": "18 mins",
        "desc": "Contiguous arrays, memory addresses, and pointer dereferencing fundamentals.",
        "quiz": {
          "q": "Key concept check for: Introduction to Programming and Data Structures",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Introduction to Programming and Data Structures\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=4OGMB4Fhh50"
      }
    ]
  },
  {
    "id": "course-neso-toc",
    "sirId": "sir-neso",
    "title": "Theory of Computation & Automata by Neso Academy",
    "subject": "Theory of Computation",
    "level": "Advanced",
    "desc": "Deterministic Finite Automata (DFA), NFA, Regular Expressions, Context-Free Grammars (CFG), and Turing Machines.",
    "theme": "theme-amber",
    "emoji": "🌀",
    "coverPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "neso-toc-1",
        "title": "Introduction to Theory of Computation & Languages",
        "ytUrl": "https://www.youtube.com/watch?v=58N2N7zJGrQ",
        "ytVideoId": "58N2N7zJGrQ",
        "duration": "12 mins",
        "desc": "Alphabets, strings, formal languages, and mathematical models of computation.",
        "quiz": {
          "q": "Key concept check for: Introduction to Theory of Computation & Languages",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Introduction to Theory of Computation & Languages\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=58N2N7zJGrQ"
      }
    ]
  },
  {
    "id": "course-neso-networks",
    "sirId": "sir-neso",
    "title": "Computer Networks & The OSI Model by Neso Academy",
    "subject": "Computer Networks",
    "level": "Intermediate",
    "desc": "7 Layers of the OSI model, TCP/IP stack, physical transmission media, framing, error detection (CRC), and flow control.",
    "theme": "theme-rose",
    "emoji": "📡",
    "coverPhoto": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "neso-cn-1",
        "title": "The 7 Layers of OSI Model Explained",
        "ytUrl": "https://www.youtube.com/watch?v=IPvYjXCsTg8",
        "ytVideoId": "IPvYjXCsTg8",
        "duration": "16 mins",
        "desc": "Physical, Data Link, Network, Transport, Session, Presentation, Application.",
        "quiz": {
          "q": "Key concept check for: The 7 Layers of OSI Model Explained",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"The 7 Layers of OSI Model Explained\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=IPvYjXCsTg8"
      }
    ]
  },
  {
    "id": "course-neso-coa",
    "sirId": "sir-neso",
    "title": "Computer Organization & Architecture (COA)",
    "subject": "Computer Architecture",
    "level": "Intermediate",
    "desc": "Instruction sets, CPU pipelining, cache memory mapping (direct, associative), hazard handling, and Von Neumann architecture.",
    "theme": "theme-purple",
    "emoji": "🖩",
    "coverPhoto": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "neso-coa-1",
        "title": "Von Neumann Architecture vs Harvard Architecture",
        "ytUrl": "https://www.youtube.com/watch?v=VjPgYcQqqN0",
        "ytVideoId": "VjPgYcQqqN0",
        "duration": "14 mins",
        "desc": "Shared memory for instructions and data vs separate bus architectures.",
        "quiz": {
          "q": "Key concept check for: Von Neumann Architecture vs Harvard Architecture",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Von Neumann Architecture vs Harvard Architecture\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=VjPgYcQqqN0"
      }
    ]
  },
  {
    "id": "course-neso-dbms",
    "sirId": "sir-neso",
    "title": "Database Management Systems (DBMS) Foundations",
    "subject": "Database Systems",
    "level": "Beginner",
    "desc": "Relational data model, SQL queries, ER modeling, normalization forms (1NF, 2NF, 3NF, BCNF), and ACID transaction properties.",
    "theme": "theme-emerald",
    "emoji": "🗄️",
    "coverPhoto": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "neso-db-1",
        "title": "ACID Properties in Database Transactions",
        "ytUrl": "https://www.youtube.com/watch?v=bka20Q9nwnM",
        "ytVideoId": "bka20Q9nwnM",
        "duration": "15 mins",
        "desc": "Atomicity, Consistency, Isolation, and Durability.",
        "quiz": {
          "q": "Key concept check for: ACID Properties in Database Transactions",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"ACID Properties in Database Transactions\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=bka20Q9nwnM"
      }
    ]
  },
  {
    "id": "course-neso-microprocessors",
    "sirId": "sir-neso",
    "title": "8085 & 8086 Microprocessors Architecture",
    "subject": "Microprocessors",
    "level": "Advanced",
    "desc": "Register sets, pin diagrams, memory interfacing, assembly language programming, interrupts, and peripheral chips (8255 PPI).",
    "theme": "theme-amber",
    "emoji": "🔌",
    "coverPhoto": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "neso-mp-1",
        "title": "8085 Microprocessor Architecture & Bus Structure",
        "ytUrl": "https://www.youtube.com/watch?v=M0mx8S05v60",
        "ytVideoId": "M0mx8S05v60",
        "duration": "16 mins",
        "desc": "Accumulator, ALU, program counter, and multiplexed address/data buses.",
        "quiz": {
          "q": "Key concept check for: 8085 Microprocessor Architecture & Bus Structure",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"8085 Microprocessor Architecture & Bus Structure\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=M0mx8S05v60"
      }
    ]
  },
  {
    "id": "course-fcc-python",
    "sirId": "sir-freecodecamp",
    "title": "Scientific Computing with Python Full Course",
    "subject": "Python Programming",
    "level": "Beginner",
    "desc": "Complete 4-hour Python curriculum from freeCodeCamp: variables, conditionals, functions, loops, regex, object-oriented programming, and network sockets.",
    "theme": "theme-emerald",
    "emoji": "🐍",
    "coverPhoto": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "fcc-py-1",
        "title": "Python for Beginners - Full Course [Programming Tutorial]",
        "ytUrl": "https://www.youtube.com/watch?v=rfscVS0vtbw",
        "ytVideoId": "rfscVS0vtbw",
        "duration": "4 hours",
        "desc": "Complete intro to Python syntax, functions, and data structures.",
        "quiz": {
          "q": "Key concept check for: Python for Beginners - Full Course [Programming Tutorial]",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Python for Beginners - Full Course [Programming Tutorial]\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=rfscVS0vtbw"
      }
    ]
  },
  {
    "id": "course-fcc-javascript",
    "sirId": "sir-freecodecamp",
    "title": "JavaScript Algorithms & Data Structures Masterclass",
    "subject": "JavaScript",
    "level": "Beginner",
    "desc": "Complete freeCodeCamp JavaScript course: basic JS, ES6 modern syntax, regular expressions, debugging, basic data structures, and algorithmic scripting.",
    "theme": "theme-amber",
    "emoji": "💛",
    "coverPhoto": "https://images.unsplash.com/photo-1579468118864-ddb9f074d3d9?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "fcc-js-1",
        "title": "JavaScript Programming - Full Course for Beginners",
        "ytUrl": "https://www.youtube.com/watch?v=jS4aFq5-91M",
        "ytVideoId": "jS4aFq5-91M",
        "duration": "7 hours",
        "desc": "Variables, arrays, objects, functions, DOM manipulation, and algorithms.",
        "quiz": {
          "q": "Key concept check for: JavaScript Programming - Full Course for Beginners",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"JavaScript Programming - Full Course for Beginners\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=jS4aFq5-91M"
      }
    ]
  },
  {
    "id": "course-fcc-responsive-web",
    "sirId": "sir-freecodecamp",
    "title": "Responsive Web Design: HTML5 & Modern CSS3",
    "subject": "Web Development",
    "level": "Beginner",
    "desc": "Learn HTML5 semantics, CSS custom properties, responsive media queries, Flexbox layout, CSS Grid, and accessibility (a11y).",
    "theme": "theme-blue",
    "emoji": "🎨",
    "coverPhoto": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "fcc-rwd-1",
        "title": "HTML & CSS Full Course for Beginners",
        "ytUrl": "https://www.youtube.com/watch?v=mU6anWqZJcc",
        "ytVideoId": "mU6anWqZJcc",
        "duration": "11 hours",
        "desc": "Build responsive websites with semantic markup and modern CSS.",
        "quiz": {
          "q": "Key concept check for: HTML & CSS Full Course for Beginners",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"HTML & CSS Full Course for Beginners\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=mU6anWqZJcc"
      }
    ]
  },
  {
    "id": "course-fcc-docker",
    "sirId": "sir-freecodecamp",
    "title": "Docker & Containerization Tutorial for Beginners",
    "subject": "DevOps & Cloud",
    "level": "Intermediate",
    "desc": "Learn Docker containers, Dockerfile creation, image layering, volume persistence, network bridges, and multi-container Docker Compose.",
    "theme": "theme-purple",
    "emoji": "🐳",
    "coverPhoto": "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "fcc-doc-1",
        "title": "Docker Tutorial for Beginners [Full Course]",
        "ytUrl": "https://www.youtube.com/watch?v=fqMOX6JJhGo",
        "ytVideoId": "fqMOX6JJhGo",
        "duration": "2 hours",
        "desc": "Containerize full stack applications and run with Docker Compose.",
        "quiz": {
          "q": "Key concept check for: Docker Tutorial for Beginners [Full Course]",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Docker Tutorial for Beginners [Full Course]\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=fqMOX6JJhGo"
      }
    ]
  },
  {
    "id": "course-fcc-rust",
    "sirId": "sir-freecodecamp",
    "title": "Rust Programming Language Masterclass",
    "subject": "Rust & Systems",
    "level": "Advanced",
    "desc": "Memory safety without garbage collection: ownership, borrowing rules, lifetimes, structs, traits, error handling, and concurrency.",
    "theme": "theme-rose",
    "emoji": "🦀",
    "coverPhoto": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "fcc-rust-1",
        "title": "Rust Programming Course for Beginners",
        "ytUrl": "https://www.youtube.com/watch?v=MsocPEZBd-M",
        "ytVideoId": "MsocPEZBd-M",
        "duration": "13 hours",
        "desc": "Zero cost abstractions and fearless concurrency in Rust.",
        "quiz": {
          "q": "Key concept check for: Rust Programming Course for Beginners",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Rust Programming Course for Beginners\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=MsocPEZBd-M"
      }
    ]
  },
  {
    "id": "course-fcc-sql",
    "sirId": "sir-freecodecamp",
    "title": "SQL & Relational Database Design Full Course",
    "subject": "Database & SQL",
    "level": "Beginner",
    "desc": "PostgreSQL and MySQL database design: SELECT, JOINs, aggregations, subqueries, indexes, transactions, and schema normal forms.",
    "theme": "theme-emerald",
    "emoji": "🗄️",
    "coverPhoto": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "fcc-sql-1",
        "title": "SQL Tutorial - Full Database Course for Beginners",
        "ytUrl": "https://www.youtube.com/watch?v=HXV3zeQKqGY",
        "ytVideoId": "HXV3zeQKqGY",
        "duration": "4 hours",
        "desc": "Querying, schema setup, relationships, and joins in SQL.",
        "quiz": {
          "q": "Key concept check for: SQL Tutorial - Full Database Course for Beginners",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"SQL Tutorial - Full Database Course for Beginners\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=HXV3zeQKqGY"
      }
    ]
  },
  {
    "id": "course-fcc-react",
    "sirId": "sir-freecodecamp",
    "title": "React 19 & Next.js Full Stack Engineering",
    "subject": "Frontend Engineering",
    "level": "Intermediate",
    "desc": "Component architecture, JSX, hooks (useState, useEffect, useMemo), server components, routing, and state management.",
    "theme": "theme-blue",
    "emoji": "⚛️",
    "coverPhoto": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "fcc-react-1",
        "title": "React Course - Beginner's Tutorial for React JavaScript",
        "ytUrl": "https://www.youtube.com/watch?v=bMknfKXIFA8",
        "ytVideoId": "bMknfKXIFA8",
        "duration": "12 hours",
        "desc": "Build enterprise web applications with React components and hooks.",
        "quiz": {
          "q": "Key concept check for: React Course - Beginner's Tutorial for React JavaScript",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"React Course - Beginner's Tutorial for React JavaScript\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=bMknfKXIFA8"
      }
    ]
  },
  {
    "id": "course-fcc-git",
    "sirId": "sir-freecodecamp",
    "title": "Git and GitHub for Beginners - Crash Course",
    "subject": "Version Control & Git",
    "level": "Beginner",
    "desc": "Version control fundamentals: git init, commits, branches, merges, rebase, remote origin, pull requests, and resolving merge conflicts.",
    "theme": "theme-amber",
    "emoji": "🐙",
    "coverPhoto": "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "fcc-git-1",
        "title": "Git and GitHub for Beginners - Full Course",
        "ytUrl": "https://www.youtube.com/watch?v=RGOj5yH7evk",
        "ytVideoId": "RGOj5yH7evk",
        "duration": "1 hour",
        "desc": "Track code changes and collaborate globally on GitHub.",
        "quiz": {
          "q": "Key concept check for: Git and GitHub for Beginners - Full Course",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Git and GitHub for Beginners - Full Course\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=RGOj5yH7evk"
      }
    ]
  },
  {
    "id": "course-cs50x",
    "sirId": "sir-cs50",
    "title": "CS50x: Introduction to Computer Science (Harvard)",
    "subject": "Harvard Computer Science",
    "level": "Beginner",
    "desc": "Harvard University's introduction to computer science and programming. Covers C, memory pointers, arrays, data structures, algorithms, Python, SQL, and web development.",
    "theme": "theme-rose",
    "emoji": "🏛️",
    "coverPhoto": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "cs50-1",
        "title": "CS50 2026 - Lecture 0 - Computational Thinking & Scratch",
        "ytUrl": "https://www.youtube.com/watch?v=3lpq9q6N8-k",
        "ytVideoId": "3lpq9q6N8-k",
        "duration": "2 hours",
        "desc": "David Malan on binary, ASCII, abstraction, and algorithms.",
        "quiz": {
          "q": "Key concept check for: CS50 2026 - Lecture 0 - Computational Thinking & Scratch",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"CS50 2026 - Lecture 0 - Computational Thinking & Scratch\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=3lpq9q6N8-k"
      },
      {
        "id": "cs50-2",
        "title": "CS50 2026 - Lecture 1 - C Programming & Compilers",
        "ytUrl": "https://www.youtube.com/watch?v=4yO_2kFhP6k",
        "ytVideoId": "4yO_2kFhP6k",
        "duration": "2 hours",
        "desc": "Syntax, data types, conditional branching, and command line tools.",
        "quiz": {
          "q": "Key concept check for: CS50 2026 - Lecture 1 - C Programming & Compilers",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"CS50 2026 - Lecture 1 - C Programming & Compilers\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=4yO_2kFhP6k"
      },
      {
        "id": "cs50-3",
        "title": "CS50 2026 - Lecture 4 - Memory & Pointers",
        "ytUrl": "https://www.youtube.com/watch?v=nvOz82hFf10",
        "ytVideoId": "nvOz82hFf10",
        "duration": "2 hours",
        "desc": "Hexadecimal, pointer addresses, malloc, free, and memory leakage.",
        "quiz": {
          "q": "Key concept check for: CS50 2026 - Lecture 4 - Memory & Pointers",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"CS50 2026 - Lecture 4 - Memory & Pointers\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=nvOz82hFf10"
      }
    ]
  },
  {
    "id": "course-cs50-python",
    "sirId": "sir-cs50",
    "title": "CS50P: Introduction to Programming with Python",
    "subject": "Python Programming",
    "level": "Beginner",
    "desc": "Learn Python from Harvard University: functions, variables, conditionals, loops, exceptions, libraries, unit tests, file I/O, regex, and object-oriented programming.",
    "theme": "theme-emerald",
    "emoji": "🐍",
    "coverPhoto": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "cs50p-1",
        "title": "CS50 Python - Functions, Variables & Expressions",
        "ytUrl": "https://www.youtube.com/watch?v=nLRL_NcnK-4",
        "ytVideoId": "nLRL_NcnK-4",
        "duration": "2 hours",
        "desc": "David J. Malan teaches clean Python fundamentals.",
        "quiz": {
          "q": "Key concept check for: CS50 Python - Functions, Variables & Expressions",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"CS50 Python - Functions, Variables & Expressions\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=nLRL_NcnK-4"
      }
    ]
  },
  {
    "id": "course-cs50-ai",
    "sirId": "sir-cs50",
    "title": "CS50AI: Introduction to Artificial Intelligence with Python",
    "subject": "Artificial Intelligence",
    "level": "Intermediate",
    "desc": "Search algorithms (A*, minimax), knowledge representation, propositional logic, probability, Bayesian networks, neural networks, and reinforcement learning.",
    "theme": "theme-amber",
    "emoji": "🤖",
    "coverPhoto": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "cs50ai-1",
        "title": "CS50 AI - Lecture 0: Search Algorithms & Minimax",
        "ytUrl": "https://www.youtube.com/watch?v=WbzNPA_X1CQ",
        "ytVideoId": "WbzNPA_X1CQ",
        "duration": "1 hour",
        "desc": "Depth-first, breadth-first, A* heuristic search, and game playing.",
        "quiz": {
          "q": "Key concept check for: CS50 AI - Lecture 0: Search Algorithms & Minimax",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"CS50 AI - Lecture 0: Search Algorithms & Minimax\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=WbzNPA_X1CQ"
      }
    ]
  },
  {
    "id": "course-cs50-web",
    "sirId": "sir-cs50",
    "title": "CS50W: Web Programming with Python and JavaScript",
    "subject": "Full-Stack Web",
    "level": "Intermediate",
    "desc": "Database design, scalability, security, user experience with Django, React, RESTful APIs, GitHub Actions CI/CD, and cloud deployments.",
    "theme": "theme-blue",
    "emoji": "🕸️",
    "coverPhoto": "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "cs50w-1",
        "title": "CS50 Web - Django Models, Views & Templates",
        "ytUrl": "https://www.youtube.com/watch?v=w8q0C-C1js4",
        "ytVideoId": "w8q0C-C1js4",
        "duration": "2 hours",
        "desc": "Backend web development in Python with Django framework.",
        "quiz": {
          "q": "Key concept check for: CS50 Web - Django Models, Views & Templates",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"CS50 Web - Django Models, Views & Templates\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=w8q0C-C1js4"
      }
    ]
  },
  {
    "id": "course-cs50-sql",
    "sirId": "sir-cs50",
    "title": "CS50SQL: Introduction to Databases with SQL",
    "subject": "Database & SQL",
    "level": "Beginner",
    "desc": "Design schemas, optimize queries with B-tree indexes, views, triggers, and transactions using SQLite, PostgreSQL, and MySQL.",
    "theme": "theme-purple",
    "emoji": "💾",
    "coverPhoto": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "cs50sql-1",
        "title": "CS50 SQL - Relating Tables with Primary & Foreign Keys",
        "ytUrl": "https://www.youtube.com/watch?v=HXV3zeQKqGY",
        "ytVideoId": "HXV3zeQKqGY",
        "duration": "2 hours",
        "desc": "Entity relationships, normalization, and relational integrity.",
        "quiz": {
          "q": "Key concept check for: CS50 SQL - Relating Tables with Primary & Foreign Keys",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"CS50 SQL - Relating Tables with Primary & Foreign Keys\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=HXV3zeQKqGY"
      }
    ]
  },
  {
    "id": "course-cs50-cybersecurity",
    "sirId": "sir-cs50",
    "title": "CS50 Cybersecurity: Digital Defense & Privacy",
    "subject": "Cybersecurity",
    "level": "Beginner",
    "desc": "Understanding password hashing, two-factor authentication, phishing defense, public Wi-Fi risks, cryptography, and network intrusion prevention.",
    "theme": "theme-rose",
    "emoji": "🔒",
    "coverPhoto": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "cs50sec-1",
        "title": "CS50 Cybersecurity - Threat Modeling & Authentication",
        "ytUrl": "https://www.youtube.com/watch?v=nvOz82hFf10",
        "ytVideoId": "nvOz82hFf10",
        "duration": "2 hours",
        "desc": "How attacks occur and how software protects sensitive user information.",
        "quiz": {
          "q": "Key concept check for: CS50 Cybersecurity - Threat Modeling & Authentication",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"CS50 Cybersecurity - Threat Modeling & Authentication\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=nvOz82hFf10"
      }
    ]
  },
  {
    "id": "course-mit-linear-algebra",
    "sirId": "sir-mit",
    "title": "MIT 18.06: Linear Algebra by Prof. Gilbert Strang",
    "subject": "MIT Mathematics",
    "level": "Intermediate",
    "desc": "The world's most famous linear algebra course: row operations, column spaces, nullspaces, orthogonality, eigenvalues, eigenvectors, and SVD.",
    "theme": "theme-purple",
    "emoji": "📐",
    "coverPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "mit-la-1",
        "title": "MIT 18.06 - Lecture 1: The Geometry of Linear Equations",
        "ytUrl": "https://www.youtube.com/watch?v=7UJ4CFRGd-U",
        "ytVideoId": "7UJ4CFRGd-U",
        "duration": "40 mins",
        "desc": "Row picture vs Column picture by Prof. Gilbert Strang.",
        "quiz": {
          "q": "Key concept check for: MIT 18.06 - Lecture 1: The Geometry of Linear Equations",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"MIT 18.06 - Lecture 1: The Geometry of Linear Equations\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=7UJ4CFRGd-U"
      },
      {
        "id": "mit-la-2",
        "title": "MIT 18.06 - Lecture 2: Elimination with Matrices",
        "ytUrl": "https://www.youtube.com/watch?v=QVKj3LADCnA",
        "ytVideoId": "QVKj3LADCnA",
        "duration": "47 mins",
        "desc": "Gaussian elimination, matrix multiplication, inverse matrices.",
        "quiz": {
          "q": "Key concept check for: MIT 18.06 - Lecture 2: Elimination with Matrices",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"MIT 18.06 - Lecture 2: Elimination with Matrices\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=QVKj3LADCnA"
      }
    ]
  },
  {
    "id": "course-mit-physics-mechanics",
    "sirId": "sir-mit",
    "title": "MIT 8.01: Classical Mechanics by Prof. Walter Lewin",
    "subject": "MIT Physics",
    "level": "Beginner",
    "desc": "Newton's laws, gravitation, circular motion, conservation of momentum, energy, rotational dynamics, harmonic oscillators, and fluid mechanics.",
    "theme": "theme-blue",
    "emoji": "🪐",
    "coverPhoto": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "mit-phys-1",
        "title": "MIT 8.01 - Lecture 1: Measurements, Uncertainties & Vectors",
        "ytUrl": "https://www.youtube.com/watch?v=wWnfJ0-xXRE",
        "ytVideoId": "wWnfJ0-xXRE",
        "duration": "50 mins",
        "desc": "The beauty of physical units and vectors.",
        "quiz": {
          "q": "Key concept check for: MIT 8.01 - Lecture 1: Measurements, Uncertainties & Vectors",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"MIT 8.01 - Lecture 1: Measurements, Uncertainties & Vectors\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=wWnfJ0-xXRE"
      }
    ]
  },
  {
    "id": "course-mit-calculus",
    "sirId": "sir-mit",
    "title": "MIT 18.01: Single Variable Calculus",
    "subject": "MIT Mathematics",
    "level": "Beginner",
    "desc": "Differentiation, optimization, Riemann sums, integration techniques, fundamental theorem of calculus, and Taylor series approximations.",
    "theme": "theme-emerald",
    "emoji": "📈",
    "coverPhoto": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "mit-calc-1",
        "title": "MIT 18.01 - Lecture 1: Derivatives and Rates of Change",
        "ytUrl": "https://www.youtube.com/watch?v=7K1sB05pE0A",
        "ytVideoId": "7K1sB05pE0A",
        "duration": "48 mins",
        "desc": "Geometric intuition behind slopes, tangents, and velocity limits.",
        "quiz": {
          "q": "Key concept check for: MIT 18.01 - Lecture 1: Derivatives and Rates of Change",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"MIT 18.01 - Lecture 1: Derivatives and Rates of Change\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=7K1sB05pE0A"
      }
    ]
  },
  {
    "id": "course-mit-algorithms",
    "sirId": "sir-mit",
    "title": "MIT 6.006: Introduction to Algorithms",
    "subject": "MIT Computer Science",
    "level": "Intermediate",
    "desc": "Erik Demaine and Srini Devadas teach algorithmic thinking: sorting (merge, heap), binary search trees, hashing, shortest paths, and dynamic programming.",
    "theme": "theme-amber",
    "emoji": "⚡",
    "coverPhoto": "https://images.unsplash.com/photo-1516116211227-bbc988d8b13d?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "mit-algo-1",
        "title": "MIT 6.006 - Lecture 1: Algorithmic Thinking & Peak Finding",
        "ytUrl": "https://www.youtube.com/watch?v=HtSuA80QTyo",
        "ytVideoId": "HtSuA80QTyo",
        "duration": "50 mins",
        "desc": "1D and 2D peak finding algorithms and asymptotic complexity.",
        "quiz": {
          "q": "Key concept check for: MIT 6.006 - Lecture 1: Algorithmic Thinking & Peak Finding",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"MIT 6.006 - Lecture 1: Algorithmic Thinking & Peak Finding\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=HtSuA80QTyo"
      }
    ]
  },
  {
    "id": "course-mit-electromagnetism",
    "sirId": "sir-mit",
    "title": "MIT 8.02: Electricity & Magnetism by Prof. Walter Lewin",
    "subject": "MIT Physics",
    "level": "Intermediate",
    "desc": "Coulomb's Law, electric fields, Gauss's Law, electric potential, capacitance, magnetic fields, Ampere's Law, Faraday's Law, and Maxwell's equations.",
    "theme": "theme-rose",
    "emoji": "⚡",
    "coverPhoto": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "mit-em-1",
        "title": "MIT 8.02 - Lecture 1: What Holds Our World Together?",
        "ytUrl": "https://www.youtube.com/watch?v=3omwHv3Cmog",
        "ytVideoId": "3omwHv3Cmog",
        "duration": "52 mins",
        "desc": "Electric charges, Coulomb's law, and electrostatic experiments.",
        "quiz": {
          "q": "Key concept check for: MIT 8.02 - Lecture 1: What Holds Our World Together?",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"MIT 8.02 - Lecture 1: What Holds Our World Together?\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=3omwHv3Cmog"
      }
    ]
  },
  {
    "id": "course-mit-multivariable-calc",
    "sirId": "sir-mit",
    "title": "MIT 18.02: Multivariable Calculus",
    "subject": "MIT Mathematics",
    "level": "Intermediate",
    "desc": "Vectors, partial derivatives, double & triple integrals, line integrals, Green's theorem, divergence theorem, and Stokes' theorem in 3D space.",
    "theme": "theme-purple",
    "emoji": "🌐",
    "coverPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "mit-mc-1",
        "title": "MIT 18.02 - Lecture 1: Dot Products & Projections in 3D",
        "ytUrl": "https://www.youtube.com/watch?v=k7RM-ot2NWY",
        "ytVideoId": "k7RM-ot2NWY",
        "duration": "45 mins",
        "desc": "Visualizing coordinate planes and scalar products in Euclidean space.",
        "quiz": {
          "q": "Key concept check for: MIT 18.02 - Lecture 1: Dot Products & Projections in 3D",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"MIT 18.02 - Lecture 1: Dot Products & Projections in 3D\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=k7RM-ot2NWY"
      }
    ]
  },
  {
    "id": "course-mit-quantum-physics",
    "sirId": "sir-mit",
    "title": "MIT 8.04: Quantum Physics I",
    "subject": "MIT Physics",
    "level": "Advanced",
    "desc": "Wave-particle duality, Schrödinger equation, wave packets, probability currents, potential wells, tunneling, and quantum harmonic oscillators.",
    "theme": "theme-blue",
    "emoji": "⚛️",
    "coverPhoto": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "mit-qp-1",
        "title": "MIT 8.04 - Lecture 1: The Wave-Particle Paradox",
        "ytUrl": "https://www.youtube.com/watch?v=bka20Q9nwnM",
        "ytVideoId": "bka20Q9nwnM",
        "duration": "50 mins",
        "desc": "Photoelectric effect and the breakdown of classical mechanics.",
        "quiz": {
          "q": "Key concept check for: MIT 8.04 - Lecture 1: The Wave-Particle Paradox",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"MIT 8.04 - Lecture 1: The Wave-Particle Paradox\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=bka20Q9nwnM"
      }
    ]
  },
  {
    "id": "course-khan-calculus",
    "sirId": "sir-khan",
    "title": "AP Calculus AB & BC: Limits & Integrals by Sal Khan",
    "subject": "Calculus",
    "level": "Beginner",
    "desc": "Sal Khan's intuitive blackboard breakdowns: limits, epsilon-delta definitions, product & chain rules, Riemann integration, and area between curves.",
    "theme": "theme-emerald",
    "emoji": "📈",
    "coverPhoto": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "khan-calc-1",
        "title": "Introduction to Limits & Continuity (Khan Academy)",
        "ytUrl": "https://www.youtube.com/watch?v=WUvTyaaNkzM",
        "ytVideoId": "WUvTyaaNkzM",
        "duration": "12 mins",
        "desc": "Approaching infinity and holes in functions intuitively.",
        "quiz": {
          "q": "Key concept check for: Introduction to Limits & Continuity (Khan Academy)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Introduction to Limits & Continuity (Khan Academy)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=WUvTyaaNkzM"
      }
    ]
  },
  {
    "id": "course-khan-physics",
    "sirId": "sir-khan",
    "title": "Physics: Kinematics, Forces & Energy (Khan Academy)",
    "subject": "Physics",
    "level": "Beginner",
    "desc": "1D & 2D kinematics, projectile motion, Newton's three laws, friction, centripetal force, and conservation of mechanical energy.",
    "theme": "theme-blue",
    "emoji": "🚀",
    "coverPhoto": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "khan-phys-1",
        "title": "1D Motion & Displacement Vectors (Khan Academy)",
        "ytUrl": "https://www.youtube.com/watch?v=wWnfJ0-xXRE",
        "ytVideoId": "wWnfJ0-xXRE",
        "duration": "14 mins",
        "desc": "Differentiating distance traveled vs net displacement.",
        "quiz": {
          "q": "Key concept check for: 1D Motion & Displacement Vectors (Khan Academy)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"1D Motion & Displacement Vectors (Khan Academy)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=wWnfJ0-xXRE"
      }
    ]
  },
  {
    "id": "course-khan-chemistry",
    "sirId": "sir-khan",
    "title": "General & Organic Chemistry Foundations",
    "subject": "Chemistry",
    "level": "Beginner",
    "desc": "Atomic structure, electron configurations, periodic trends, stoichiometry, chemical equilibrium, acids and bases, and hybridization.",
    "theme": "theme-rose",
    "emoji": "🧪",
    "coverPhoto": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "khan-chem-1",
        "title": "Orbitals, Hybridization & Valence Electrons",
        "ytUrl": "https://www.youtube.com/watch?v=bka20Q9nwnM",
        "ytVideoId": "bka20Q9nwnM",
        "duration": "15 mins",
        "desc": "SP3, SP2, and SP hybridization geometry.",
        "quiz": {
          "q": "Key concept check for: Orbitals, Hybridization & Valence Electrons",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Orbitals, Hybridization & Valence Electrons\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=bka20Q9nwnM"
      }
    ]
  },
  {
    "id": "course-khan-biology",
    "sirId": "sir-khan",
    "title": "Biology: Cells, Genetics & Molecular Evolution",
    "subject": "Biology",
    "level": "Beginner",
    "desc": "Cell membrane transport, cellular respiration (glycolysis, Krebs cycle), DNA replication, transcription, translation, and Mendelian genetics.",
    "theme": "theme-emerald",
    "emoji": "🧬",
    "coverPhoto": "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "khan-bio-1",
        "title": "Cellular Respiration & ATP Production",
        "ytUrl": "https://www.youtube.com/watch?v=00jbG_cfGuQ",
        "ytVideoId": "00jbG_cfGuQ",
        "duration": "16 mins",
        "desc": "Energy conversion inside the mitochondria.",
        "quiz": {
          "q": "Key concept check for: Cellular Respiration & ATP Production",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Cellular Respiration & ATP Production\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=00jbG_cfGuQ"
      }
    ]
  },
  {
    "id": "course-khan-macroeconomics",
    "sirId": "sir-khan",
    "title": "Macroeconomics: GDP, Inflation & Monetary Policy",
    "subject": "Economics",
    "level": "Beginner",
    "desc": "Measuring national income, Gross Domestic Product, consumer price index (CPI), aggregate demand/supply, and Federal Reserve central banking.",
    "theme": "theme-amber",
    "emoji": "🏦",
    "coverPhoto": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "khan-econ-1",
        "title": "Gross Domestic Product (GDP) Explained",
        "ytUrl": "https://www.youtube.com/watch?v=11gA0Y876p0",
        "ytVideoId": "11gA0Y876p0",
        "duration": "12 mins",
        "desc": "Components of GDP: C + I + G + (X - M).",
        "quiz": {
          "q": "Key concept check for: Gross Domestic Product (GDP) Explained",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Gross Domestic Product (GDP) Explained\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=11gA0Y876p0"
      }
    ]
  },
  {
    "id": "course-khan-statistics",
    "sirId": "sir-khan",
    "title": "Probability & Statistics: Normal Distributions to P-Values",
    "subject": "Statistics",
    "level": "Intermediate",
    "desc": "Standard deviation, z-scores, central limit theorem, confidence intervals, hypothesis testing, and linear regression correlation.",
    "theme": "theme-purple",
    "emoji": "📊",
    "coverPhoto": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "khan-stat-1",
        "title": "The Central Limit Theorem & Normal Distribution",
        "ytUrl": "https://www.youtube.com/watch?v=JNm3M9cqWyc",
        "ytVideoId": "JNm3M9cqWyc",
        "duration": "13 mins",
        "desc": "Why sample means approximate a bell curve.",
        "quiz": {
          "q": "Key concept check for: The Central Limit Theorem & Normal Distribution",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"The Central Limit Theorem & Normal Distribution\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=JNm3M9cqWyc"
      }
    ]
  },
  {
    "id": "course-khan-world-history",
    "sirId": "sir-khan",
    "title": "World History: Ancient Civilizations to Modern Global Era",
    "subject": "History",
    "level": "Beginner",
    "desc": "From the agricultural revolution in Mesopotamia to the Renaissance, Enlightenment, Industrial Revolution, and 20th-century geopolitical transformations.",
    "theme": "theme-rose",
    "emoji": "🏛️",
    "coverPhoto": "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "khan-hist-1",
        "title": "The Dawn of Human Agriculture and Settlement",
        "ytUrl": "https://www.youtube.com/watch?v=Yocja_N5s1I",
        "ytVideoId": "Yocja_N5s1I",
        "duration": "11 mins",
        "desc": "How farming created cities, governments, and written culture.",
        "quiz": {
          "q": "Key concept check for: The Dawn of Human Agriculture and Settlement",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"The Dawn of Human Agriculture and Settlement\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=Yocja_N5s1I"
      }
    ]
  },
  {
    "id": "course-bari-algorithms",
    "sirId": "sir-abdulbari",
    "title": "Algorithms Analysis & Master Theorem by Abdul Bari",
    "subject": "Algorithms",
    "level": "Intermediate",
    "desc": "Whiteboard breakdowns of time & space complexity, asymptotic notations (Big O, Omega, Theta), recurrence relations, and Master Theorem.",
    "theme": "theme-amber",
    "emoji": "⚡",
    "coverPhoto": "https://images.unsplash.com/photo-1516116211227-bbc988d8b13d?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "bari-algo-1",
        "title": "Introduction to Algorithms Analysis & Big O",
        "ytUrl": "https://www.youtube.com/watch?v=0IAPZzGSbME",
        "ytVideoId": "0IAPZzGSbME",
        "duration": "25 mins",
        "desc": "Understanding algorithmic steps and growth rates.",
        "quiz": {
          "q": "Key concept check for: Introduction to Algorithms Analysis & Big O",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Introduction to Algorithms Analysis & Big O\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=0IAPZzGSbME"
      },
      {
        "id": "bari-algo-2",
        "title": "Master Theorem for Divide & Conquer Recurrences",
        "ytUrl": "https://www.youtube.com/watch?v=2Rr2tW9zvRg",
        "ytVideoId": "2Rr2tW9zvRg",
        "duration": "28 mins",
        "desc": "Three cases of the Master Theorem with proof.",
        "quiz": {
          "q": "Key concept check for: Master Theorem for Divide & Conquer Recurrences",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Master Theorem for Divide & Conquer Recurrences\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=2Rr2tW9zvRg"
      }
    ]
  },
  {
    "id": "course-bari-dp",
    "sirId": "sir-abdulbari",
    "title": "Dynamic Programming Masterclass by Abdul Bari",
    "subject": "Dynamic Programming",
    "level": "Advanced",
    "desc": "The gold standard: 0/1 Knapsack, Multi-stage Graphs, All-Pairs Shortest Path (Floyd-Warshall), Matrix Chain Multiplication, and Traveling Salesman.",
    "theme": "theme-rose",
    "emoji": "🧩",
    "coverPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "bari-dp-1",
        "title": "Dynamic Programming: 0/1 Knapsack Problem",
        "ytUrl": "https://www.youtube.com/watch?v=nLmhmB6NzcM",
        "ytVideoId": "nLmhmB6NzcM",
        "duration": "32 mins",
        "desc": "Tabulation matrix construction and decision formulas.",
        "quiz": {
          "q": "Key concept check for: Dynamic Programming: 0/1 Knapsack Problem",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Dynamic Programming: 0/1 Knapsack Problem\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=nLmhmB6NzcM"
      },
      {
        "id": "bari-dp-2",
        "title": "Matrix Chain Multiplication (MCM) Explained",
        "ytUrl": "https://www.youtube.com/watch?v=prx1psByp7U",
        "ytVideoId": "prx1psByp7U",
        "duration": "35 mins",
        "desc": "Parenthesization cost minimization via optimal substructure.",
        "quiz": {
          "q": "Key concept check for: Matrix Chain Multiplication (MCM) Explained",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Matrix Chain Multiplication (MCM) Explained\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=prx1psByp7U"
      }
    ]
  },
  {
    "id": "course-bari-graphs",
    "sirId": "sir-abdulbari",
    "title": "Graph Algorithms: Shortest Paths & Spanning Trees",
    "subject": "Graph Theory",
    "level": "Intermediate",
    "desc": "Prim's & Kruskal's Minimum Spanning Trees, Dijkstra's algorithm, Bellman-Ford negative cycle detection, and topological sorting.",
    "theme": "theme-purple",
    "emoji": "🕸️",
    "coverPhoto": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "bari-graph-1",
        "title": "Dijkstra's Shortest Path Algorithm on Whiteboard",
        "ytUrl": "https://www.youtube.com/watch?v=XB4MIexjvY0",
        "ytVideoId": "XB4MIexjvY0",
        "duration": "30 mins",
        "desc": "Greedy relaxation of distances using priority queues.",
        "quiz": {
          "q": "Key concept check for: Dijkstra's Shortest Path Algorithm on Whiteboard",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Dijkstra's Shortest Path Algorithm on Whiteboard\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=XB4MIexjvY0"
      },
      {
        "id": "bari-graph-2",
        "title": "Bellman-Ford Algorithm & Negative Edge Weights",
        "ytUrl": "https://www.youtube.com/watch?v=FtN3BYH2Zes",
        "ytVideoId": "FtN3BYH2Zes",
        "duration": "26 mins",
        "desc": "V-1 iterations of edge relaxation and cycle identification.",
        "quiz": {
          "q": "Key concept check for: Bellman-Ford Algorithm & Negative Edge Weights",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Bellman-Ford Algorithm & Negative Edge Weights\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=FtN3BYH2Zes"
      }
    ]
  },
  {
    "id": "course-bari-trees",
    "sirId": "sir-abdulbari",
    "title": "Trees & Binary Search Trees in C/C++ by Abdul Bari",
    "subject": "Data Structures",
    "level": "Intermediate",
    "desc": "Binary Trees, BST properties, AVL Trees (LL, RR, LR, RL rotations), B-Trees, and Red-Black Trees.",
    "theme": "theme-emerald",
    "emoji": "🌲",
    "coverPhoto": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "bari-tree-1",
        "title": "AVL Trees: Balancing Factors & Rotations",
        "ytUrl": "https://www.youtube.com/watch?v=jDM6_TnYIqE",
        "ytVideoId": "jDM6_TnYIqE",
        "duration": "36 mins",
        "desc": "Maintaining O(log N) balance through height checks.",
        "quiz": {
          "q": "Key concept check for: AVL Trees: Balancing Factors & Rotations",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"AVL Trees: Balancing Factors & Rotations\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=jDM6_TnYIqE"
      }
    ]
  },
  {
    "id": "course-bari-sorting",
    "sirId": "sir-abdulbari",
    "title": "Sorting Algorithms Demystified by Abdul Bari",
    "subject": "Sorting Algorithms",
    "level": "Beginner",
    "desc": "Bubble, Insertion, Selection, QuickSort (partition algorithm), MergeSort, HeapSort, and linear time Count/Radix Sort.",
    "theme": "theme-blue",
    "emoji": "🔢",
    "coverPhoto": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "bari-sort-1",
        "title": "QuickSort Algorithm: Lomuto vs Hoare Partitioning",
        "ytUrl": "https://www.youtube.com/watch?v=7h1s2SojIRw",
        "ytVideoId": "7h1s2SojIRw",
        "duration": "28 mins",
        "desc": "Pivot selection, recursion tree, and worst-case avoidance.",
        "quiz": {
          "q": "Key concept check for: QuickSort Algorithm: Lomuto vs Hoare Partitioning",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"QuickSort Algorithm: Lomuto vs Hoare Partitioning\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=7h1s2SojIRw"
      }
    ]
  },
  {
    "id": "course-bari-greedy",
    "sirId": "sir-abdulbari",
    "title": "Greedy Technique & Huffman Coding by Abdul Bari",
    "subject": "Greedy Algorithms",
    "level": "Intermediate",
    "desc": "Greedy choice property: Fractional Knapsack, Job Sequencing with Deadlines, Optimal Merge Patterns, and Huffman Lossless Compression.",
    "theme": "theme-amber",
    "emoji": "💰",
    "coverPhoto": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "bari-greedy-1",
        "title": "Huffman Coding Compression Algorithm",
        "ytUrl": "https://www.youtube.com/watch?v=co4_ahEDCho",
        "ytVideoId": "co4_ahEDCho",
        "duration": "26 mins",
        "desc": "Variable-length prefix coding based on symbol frequency.",
        "quiz": {
          "q": "Key concept check for: Huffman Coding Compression Algorithm",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Huffman Coding Compression Algorithm\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=co4_ahEDCho"
      }
    ]
  },
  {
    "id": "course-3b1b-linear-algebra",
    "sirId": "sir-3blue1brown",
    "title": "Essence of Linear Algebra by 3Blue1Brown",
    "subject": "Visual Mathematics",
    "level": "Intermediate",
    "desc": "Geometric visualization of vectors, linear combinations, span, basis vectors, matrix transformations, determinants, dot products, and eigenvectors.",
    "theme": "theme-purple",
    "emoji": "📐",
    "coverPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "3b1b-la-1",
        "title": "Vectors, what even are they? (3Blue1Brown)",
        "ytUrl": "https://www.youtube.com/watch?v=fNk_zzaMoSs",
        "ytVideoId": "fNk_zzaMoSs",
        "duration": "10 mins",
        "desc": "Physics vs computer science vs math views on vectors.",
        "quiz": {
          "q": "Key concept check for: Vectors, what even are they? (3Blue1Brown)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Vectors, what even are they? (3Blue1Brown)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=fNk_zzaMoSs"
      },
      {
        "id": "3b1b-la-2",
        "title": "Linear Combinations, Span, and Basis (3Blue1Brown)",
        "ytUrl": "https://www.youtube.com/watch?v=k7RM-ot2NWY",
        "ytVideoId": "k7RM-ot2NWY",
        "duration": "10 mins",
        "desc": "Basis vectors i-hat and j-hat and vector spaces.",
        "quiz": {
          "q": "Key concept check for: Linear Combinations, Span, and Basis (3Blue1Brown)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Linear Combinations, Span, and Basis (3Blue1Brown)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=k7RM-ot2NWY"
      },
      {
        "id": "3b1b-la-3",
        "title": "Linear Transformations and Matrices (3Blue1Brown)",
        "ytUrl": "https://www.youtube.com/watch?v=kYB8IZa5AuE",
        "ytVideoId": "kYB8IZa5AuE",
        "duration": "11 mins",
        "desc": "Grid mapping and matrix multiplication intuition.",
        "quiz": {
          "q": "Key concept check for: Linear Transformations and Matrices (3Blue1Brown)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Linear Transformations and Matrices (3Blue1Brown)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=kYB8IZa5AuE"
      }
    ]
  },
  {
    "id": "course-3b1b-calculus",
    "sirId": "sir-3blue1brown",
    "title": "Essence of Calculus by 3Blue1Brown",
    "subject": "Visual Mathematics",
    "level": "Beginner",
    "desc": "Visualizing derivatives, integrals, the fundamental theorem of calculus, exponential functions, chain rule, and higher derivatives.",
    "theme": "theme-blue",
    "emoji": "📈",
    "coverPhoto": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "3b1b-calc-1",
        "title": "The Essence of Calculus (3Blue1Brown)",
        "ytUrl": "https://www.youtube.com/watch?v=WUvTyaaNkzM",
        "ytVideoId": "WUvTyaaNkzM",
        "duration": "17 mins",
        "desc": "Circle area unrolled into rings to discover derivative intuition.",
        "quiz": {
          "q": "Key concept check for: The Essence of Calculus (3Blue1Brown)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"The Essence of Calculus (3Blue1Brown)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=WUvTyaaNkzM"
      }
    ]
  },
  {
    "id": "course-3b1b-neural-networks",
    "sirId": "sir-3blue1brown",
    "title": "Neural Networks & Deep Learning Visualized",
    "subject": "Deep Learning & AI",
    "level": "Intermediate",
    "desc": "What is a neural network? Visualizing weights, biases, cost functions, gradient descent, and backpropagation calculus.",
    "theme": "theme-amber",
    "emoji": "🧠",
    "coverPhoto": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "3b1b-nn-1",
        "title": "But what is a neural network? (3Blue1Brown)",
        "ytUrl": "https://www.youtube.com/watch?v=aircAruvnKk",
        "ytVideoId": "aircAruvnKk",
        "duration": "19 mins",
        "desc": "Multi-layer perceptron recognizing handwritten digits.",
        "quiz": {
          "q": "Key concept check for: But what is a neural network? (3Blue1Brown)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"But what is a neural network? (3Blue1Brown)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=aircAruvnKk"
      }
    ]
  },
  {
    "id": "course-3b1b-differential-equations",
    "sirId": "sir-3blue1brown",
    "title": "Differential Equations: Solving the Universe's Equations",
    "subject": "Differential Equations",
    "level": "Advanced",
    "desc": "Pendulums, heat equation, Fourier series, wave propagation, phase space, and linear ODE systems.",
    "theme": "theme-rose",
    "emoji": "🌊",
    "coverPhoto": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "3b1b-de-1",
        "title": "Differential Equations: Mechanics & Pendulums",
        "ytUrl": "https://www.youtube.com/watch?v=p_di4Zn4wz4",
        "ytVideoId": "p_di4Zn4wz4",
        "duration": "18 mins",
        "desc": "Physical laws written as relationships between derivatives.",
        "quiz": {
          "q": "Key concept check for: Differential Equations: Mechanics & Pendulums",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Differential Equations: Mechanics & Pendulums\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=p_di4Zn4wz4"
      }
    ]
  },
  {
    "id": "course-3b1b-cryptography",
    "sirId": "sir-3blue1brown",
    "title": "How Cryptography & Bitcoin Actually Work",
    "subject": "Cryptography & Math",
    "level": "Intermediate",
    "desc": "SHA-256 hash functions, digital signatures, ledger decentralization, and proof of work mathematical consensus.",
    "theme": "theme-emerald",
    "emoji": "🪙",
    "coverPhoto": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "3b1b-btc-1",
        "title": "How does Bitcoin actually work? (3Blue1Brown)",
        "ytUrl": "https://www.youtube.com/watch?v=bBC-nXj3U4s",
        "ytVideoId": "bBC-nXj3U4s",
        "duration": "26 mins",
        "desc": "The mathematics of cryptographic ledgers without central trust.",
        "quiz": {
          "q": "Key concept check for: How does Bitcoin actually work? (3Blue1Brown)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"How does Bitcoin actually work? (3Blue1Brown)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=bBC-nXj3U4s"
      }
    ]
  },
  {
    "id": "course-3b1b-fourier",
    "sirId": "sir-3blue1brown",
    "title": "The Fourier Transform & Frequency Domain Visualization",
    "subject": "Signal Processing & Math",
    "level": "Advanced",
    "desc": "Winding frequencies around the complex plane, sound wave decomposition, FFT algorithms, and signal filtering.",
    "theme": "theme-purple",
    "emoji": "🎶",
    "coverPhoto": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "3b1b-ft-1",
        "title": "The Remarkable Fourier Transform Visualized",
        "ytUrl": "https://www.youtube.com/watch?v=spUNpyF58BY",
        "ytVideoId": "spUNpyF58BY",
        "duration": "21 mins",
        "desc": "Decomposing complex time-series signals into pure sinusoids.",
        "quiz": {
          "q": "Key concept check for: The Remarkable Fourier Transform Visualized",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"The Remarkable Fourier Transform Visualized\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=spUNpyF58BY"
      }
    ]
  },
  {
    "id": "course-sq-ml-fundamentals",
    "sirId": "sir-statquest",
    "title": "Machine Learning Fundamentals with StatQuest",
    "subject": "Machine Learning",
    "level": "Beginner",
    "desc": "Josh Starmer breaks down Bias & Variance, ROC curves, AUC, Cross-Validation, and Confusion Matrices without confusing math.",
    "theme": "theme-amber",
    "emoji": "📊",
    "coverPhoto": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "sq-ml-1",
        "title": "Machine Learning: Bias and Variance Clearly Explained",
        "ytUrl": "https://www.youtube.com/watch?v=EuBBz3bI-aA",
        "ytVideoId": "EuBBz3bI-aA",
        "duration": "10 mins",
        "desc": "Underfitting (high bias) vs Overfitting (high variance).",
        "quiz": {
          "q": "Key concept check for: Machine Learning: Bias and Variance Clearly Explained",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Machine Learning: Bias and Variance Clearly Explained\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=EuBBz3bI-aA"
      }
    ]
  },
  {
    "id": "course-sq-decision-trees",
    "sirId": "sir-statquest",
    "title": "Decision Trees, Random Forests & AdaBoost",
    "subject": "Ensemble Learning",
    "level": "Intermediate",
    "desc": "BAM! Learn how single decision trees combine into Random Forests and AdaBoost ensemble predictors.",
    "theme": "theme-emerald",
    "emoji": "🌲",
    "coverPhoto": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "sq-rf-1",
        "title": "Random Forests Part 1 - Building, Using and Evaluating",
        "ytUrl": "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ",
        "ytVideoId": "J4Wdy0Wc_xQ",
        "duration": "10 mins",
        "desc": "Bagging, out-of-bag error, and feature randomness.",
        "quiz": {
          "q": "Key concept check for: Random Forests Part 1 - Building, Using and Evaluating",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Random Forests Part 1 - Building, Using and Evaluating\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ"
      }
    ]
  },
  {
    "id": "course-sq-pca",
    "sirId": "sir-statquest",
    "title": "Principal Component Analysis (PCA) Step-by-Step",
    "subject": "Dimensionality Reduction",
    "level": "Intermediate",
    "desc": "Dimension reduction explained visually: projections, singular vectors, eigenvalues, and scree plots.",
    "theme": "theme-blue",
    "emoji": "📉",
    "coverPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "sq-pca-1",
        "title": "Principal Component Analysis (PCA) Clearly Explained",
        "ytUrl": "https://www.youtube.com/watch?v=FgakZw6K1QQ",
        "ytVideoId": "FgakZw6K1QQ",
        "duration": "18 mins",
        "desc": "Finding optimal lines of maximum variance in high-D data.",
        "quiz": {
          "q": "Key concept check for: Principal Component Analysis (PCA) Clearly Explained",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Principal Component Analysis (PCA) Clearly Explained\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=FgakZw6K1QQ"
      }
    ]
  },
  {
    "id": "course-sq-neural-nets",
    "sirId": "sir-statquest",
    "title": "Neural Networks & Backpropagation Step-by-Step",
    "subject": "Neural Networks",
    "level": "Intermediate",
    "desc": "Connecting basic linear regression to activation functions, multi-layer weights, chain rule, and backpropagation step-by-step.",
    "theme": "theme-purple",
    "emoji": "🧠",
    "coverPhoto": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "sq-nn-1",
        "title": "Neural Networks Part 1: Inside the Black Box",
        "ytUrl": "https://www.youtube.com/watch?v=CqOfi41LfDw",
        "ytVideoId": "CqOfi41LfDw",
        "duration": "12 mins",
        "desc": "How simple curves fit complex non-linear functions.",
        "quiz": {
          "q": "Key concept check for: Neural Networks Part 1: Inside the Black Box",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Neural Networks Part 1: Inside the Black Box\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=CqOfi41LfDw"
      }
    ]
  },
  {
    "id": "course-sq-transformers",
    "sirId": "sir-statquest",
    "title": "Transformers & Attention Mechanism for LLMs",
    "subject": "Generative AI & LLMs",
    "level": "Advanced",
    "desc": "Self-attention, query-key-value matrices, multi-head attention, positional encodings, and the architecture powering modern GPTs.",
    "theme": "theme-rose",
    "emoji": "✨",
    "coverPhoto": "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "sq-tf-1",
        "title": "Attention is All You Need: Transformer Architecture",
        "ytUrl": "https://www.youtube.com/watch?v=zxQyTK8quyY",
        "ytVideoId": "zxQyTK8quyY",
        "duration": "20 mins",
        "desc": "Dot product attention and token context vectors.",
        "quiz": {
          "q": "Key concept check for: Attention is All You Need: Transformer Architecture",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Attention is All You Need: Transformer Architecture\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=zxQyTK8quyY"
      }
    ]
  },
  {
    "id": "course-sq-logistic-regression",
    "sirId": "sir-statquest",
    "title": "Logistic Regression & Maximum Likelihood",
    "subject": "Statistical Classification",
    "level": "Beginner",
    "desc": "Sigmoid curves, log-odds ratios, maximum likelihood estimation, Wald test, and deviance.",
    "theme": "theme-emerald",
    "emoji": "🎯",
    "coverPhoto": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "sq-lr-1",
        "title": "Logistic Regression Details Part 1: Coefficients",
        "ytUrl": "https://www.youtube.com/watch?v=vN5cNN2-HWE",
        "ytVideoId": "vN5cNN2-HWE",
        "duration": "10 mins",
        "desc": "Transforming probabilities into log(odds) lines.",
        "quiz": {
          "q": "Key concept check for: Logistic Regression Details Part 1: Coefficients",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Logistic Regression Details Part 1: Coefficients\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=vN5cNN2-HWE"
      }
    ]
  },
  {
    "id": "course-gs-dbms",
    "sirId": "sir-gatesmashers",
    "title": "Complete DBMS Masterclass by Gate Smashers",
    "subject": "Database Systems",
    "level": "Beginner",
    "desc": "Varun Singla Sir covers Relational Model, Functional Dependencies, Canonical Covers, Normalization (1NF, 2NF, 3NF, BCNF), and Concurrency Control.",
    "theme": "theme-emerald",
    "emoji": "🗄️",
    "coverPhoto": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "gs-db-1",
        "title": "Introduction to DBMS & File Systems vs DBMS",
        "ytUrl": "https://www.youtube.com/watch?v=3EJlovevfcA",
        "ytVideoId": "3EJlovevfcA",
        "duration": "14 mins",
        "desc": "Why databases matter and data redundancy elimination.",
        "quiz": {
          "q": "Key concept check for: Introduction to DBMS & File Systems vs DBMS",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Introduction to DBMS & File Systems vs DBMS\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=3EJlovevfcA"
      },
      {
        "id": "gs-db-2",
        "title": "Functional Dependencies & Attribute Closure",
        "ytUrl": "https://www.youtube.com/watch?v=pDfy4eE6lF8",
        "ytVideoId": "pDfy4eE6lF8",
        "duration": "16 mins",
        "desc": "Finding candidate keys using Armstrong's axioms.",
        "quiz": {
          "q": "Key concept check for: Functional Dependencies & Attribute Closure",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Functional Dependencies & Attribute Closure\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=pDfy4eE6lF8"
      }
    ]
  },
  {
    "id": "course-gs-cn",
    "sirId": "sir-gatesmashers",
    "title": "Computer Networks Complete Roadmap (Gate Smashers)",
    "subject": "Computer Networks",
    "level": "Intermediate",
    "desc": "Subnetting, VLSM, Routing algorithms (Distance Vector, Link State), TCP Congestion Control (Slow Start, AIMD), and IP Header anatomy.",
    "theme": "theme-blue",
    "emoji": "📡",
    "coverPhoto": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "gs-cn-1",
        "title": "IPv4 Addressing and Subnetting Made Easy",
        "ytUrl": "https://www.youtube.com/watch?v=VwN91x5iWiQ",
        "ytVideoId": "VwN91x5iWiQ",
        "duration": "18 mins",
        "desc": "Classful vs Classless Inter-Domain Routing (CIDR).",
        "quiz": {
          "q": "Key concept check for: IPv4 Addressing and Subnetting Made Easy",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"IPv4 Addressing and Subnetting Made Easy\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=VwN91x5iWiQ"
      }
    ]
  },
  {
    "id": "course-gs-os",
    "sirId": "sir-gatesmashers",
    "title": "Operating Systems: CPU Scheduling & Synchronization",
    "subject": "Operating Systems",
    "level": "Intermediate",
    "desc": "Critical section problem, Peterson's algorithm, Semaphores (Mutex, Counting), Dining Philosophers, and Banker's Deadlock Avoidance.",
    "theme": "theme-purple",
    "emoji": "💻",
    "coverPhoto": "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "gs-os-1",
        "title": "Process Synchronization & Semaphores Explained",
        "ytUrl": "https://www.youtube.com/watch?v=ph2hz_o_rSU",
        "ytVideoId": "ph2hz_o_rSU",
        "duration": "15 mins",
        "desc": "Mutual exclusion, progress, and bounded waiting criteria.",
        "quiz": {
          "q": "Key concept check for: Process Synchronization & Semaphores Explained",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Process Synchronization & Semaphores Explained\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=ph2hz_o_rSU"
      }
    ]
  },
  {
    "id": "course-gs-toc",
    "sirId": "sir-gatesmashers",
    "title": "Theory of Computation (TOC) for University & GATE",
    "subject": "Theory of Computation",
    "level": "Advanced",
    "desc": "DFA minimization, Myhill-Nerode theorem, Pumping Lemma for Regular Languages, Pushdown Automata, and Turing decidability.",
    "theme": "theme-amber",
    "emoji": "🌀",
    "coverPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "gs-toc-1",
        "title": "DFA Construction Problems Made Easy",
        "ytUrl": "https://www.youtube.com/watch?v=4ZhsCJ9b7tU",
        "ytVideoId": "4ZhsCJ9b7tU",
        "duration": "16 mins",
        "desc": "Handling string ending conditions and binary divisibility.",
        "quiz": {
          "q": "Key concept check for: DFA Construction Problems Made Easy",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"DFA Construction Problems Made Easy\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=4ZhsCJ9b7tU"
      }
    ]
  },
  {
    "id": "course-gs-se",
    "sirId": "sir-gatesmashers",
    "title": "Software Engineering & Agile Development (Gate Smashers)",
    "subject": "Software Engineering",
    "level": "Beginner",
    "desc": "SDLC phases, Waterfall, Spiral, Agile Scrum, User Stories, Sprint Planning, Testing methodologies (Black box vs White box).",
    "theme": "theme-rose",
    "emoji": "📋",
    "coverPhoto": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "gs-se-1",
        "title": "Software Development Life Cycle (SDLC) Models",
        "ytUrl": "https://www.youtube.com/watch?v=u7bT9WqE-84",
        "ytVideoId": "u7bT9WqE-84",
        "duration": "14 mins",
        "desc": "Requirements analysis through maintenance.",
        "quiz": {
          "q": "Key concept check for: Software Development Life Cycle (SDLC) Models",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Software Development Life Cycle (SDLC) Models\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=u7bT9WqE-84"
      }
    ]
  },
  {
    "id": "course-gs-discrete-math",
    "sirId": "sir-gatesmashers",
    "title": "Discrete Mathematics: Logic, Set Theory & Graph Theory",
    "subject": "Discrete Mathematics",
    "level": "Intermediate",
    "desc": "Propositional and predicate calculus, relations, equivalence classes, partial order sets (Hasse diagrams), and tree colorings.",
    "theme": "theme-emerald",
    "emoji": "🔢",
    "coverPhoto": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "gs-dm-1",
        "title": "Equivalence Relations & Partial Order Sets (Poset)",
        "ytUrl": "https://www.youtube.com/watch?v=q6g4hT6e6vA",
        "ytVideoId": "q6g4hT6e6vA",
        "duration": "15 mins",
        "desc": "Reflexive, symmetric, and transitive verification.",
        "quiz": {
          "q": "Key concept check for: Equivalence Relations & Partial Order Sets (Poset)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Equivalence Relations & Partial Order Sets (Poset)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=q6g4hT6e6vA"
      }
    ]
  },
  {
    "id": "course-chai-javascript",
    "sirId": "sir-chaiaurcode",
    "title": "JavaScript in Hindi: Chai aur JavaScript Master Series",
    "subject": "JavaScript",
    "level": "Beginner",
    "desc": "Hitesh Choudhary Sir's industry-famous series: closures, execution contexts, call stack, prototype inheritance, DOM events, Promises, and modern ES6.",
    "theme": "theme-amber",
    "emoji": "☕",
    "coverPhoto": "https://images.unsplash.com/photo-1579468118864-ddb9f074d3d9?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "chai-js-1",
        "title": "JavaScript Execution Context & Call Stack (Chai aur Code)",
        "ytUrl": "https://www.youtube.com/watch?v=ByhtOfLGdaU",
        "ytVideoId": "ByhtOfLGdaU",
        "duration": "28 mins",
        "desc": "Memory creation phase and execution phase step-by-step.",
        "quiz": {
          "q": "Key concept check for: JavaScript Execution Context & Call Stack (Chai aur Code)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"JavaScript Execution Context & Call Stack (Chai aur Code)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=ByhtOfLGdaU"
      },
      {
        "id": "chai-js-2",
        "title": "DOM Manipulation & Events in JavaScript",
        "ytUrl": "https://www.youtube.com/watch?v=_TjtAyMkiTI",
        "ytVideoId": "_TjtAyMkiTI",
        "duration": "32 mins",
        "desc": "Event bubbling, capturing, and practical project builds.",
        "quiz": {
          "q": "Key concept check for: DOM Manipulation & Events in JavaScript",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"DOM Manipulation & Events in JavaScript\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=_TjtAyMkiTI"
      }
    ]
  },
  {
    "id": "course-chai-react",
    "sirId": "sir-chaiaurcode",
    "title": "React JS in Hindi: Chai aur React with Projects",
    "subject": "React & Frontend",
    "level": "Intermediate",
    "desc": "Building mental models in React: custom hooks, props, Tailwind integration, Context API, Redux Toolkit, and currency converter / password generator apps.",
    "theme": "theme-blue",
    "emoji": "⚛️",
    "coverPhoto": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "chai-react-1",
        "title": "Why React? Virtual DOM & Reconciliation Fiber",
        "ytUrl": "https://www.youtube.com/watch?v=kAOuj68hpFs",
        "ytVideoId": "kAOuj68hpFs",
        "duration": "25 mins",
        "desc": "Understanding diffing algorithms and why UI updates trigger re-renders.",
        "quiz": {
          "q": "Key concept check for: Why React? Virtual DOM & Reconciliation Fiber",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Why React? Virtual DOM & Reconciliation Fiber\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=kAOuj68hpFs"
      }
    ]
  },
  {
    "id": "course-chai-backend",
    "sirId": "sir-chaiaurcode",
    "title": "Production-Grade Node.js & Express Backend Series",
    "subject": "Backend Engineering",
    "level": "Advanced",
    "desc": "Production video hosting backend: MongoDB aggregation pipelines, JWT authentication, access & refresh tokens, Cloudinary file uploads, and middleware.",
    "theme": "theme-emerald",
    "emoji": "🚀",
    "coverPhoto": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "chai-be-1",
        "title": "Professional Express Project Setup & Prettier Setup",
        "ytUrl": "https://www.youtube.com/watch?v=9B4CVd3U3vM",
        "ytVideoId": "9B4CVd3U3vM",
        "duration": "35 mins",
        "desc": "Industry standard folder structuring and async error handler wrappers.",
        "quiz": {
          "q": "Key concept check for: Professional Express Project Setup & Prettier Setup",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Professional Express Project Setup & Prettier Setup\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=9B4CVd3U3vM"
      }
    ]
  },
  {
    "id": "course-chai-python",
    "sirId": "sir-chaiaurcode",
    "title": "Python in Hindi: Chai aur Python Zero to Hero",
    "subject": "Python Programming",
    "level": "Beginner",
    "desc": "Python internal memory management, mutable vs immutable reference counts, decorators, generators, and building CLI tools.",
    "theme": "theme-purple",
    "emoji": "🐍",
    "coverPhoto": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "chai-py-1",
        "title": "How Python Works Behind the Scenes (Bytecode & PVM)",
        "ytUrl": "https://www.youtube.com/watch?v=f7Bf-b88P-E",
        "ytVideoId": "f7Bf-b88P-E",
        "duration": "30 mins",
        "desc": "Python virtual machine and memory allocation model.",
        "quiz": {
          "q": "Key concept check for: How Python Works Behind the Scenes (Bytecode & PVM)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"How Python Works Behind the Scenes (Bytecode & PVM)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=f7Bf-b88P-E"
      }
    ]
  },
  {
    "id": "course-chai-nextjs",
    "sirId": "sir-chaiaurcode",
    "title": "Next.js Full Stack App Router Masterclass",
    "subject": "Next.js Fullstack",
    "level": "Advanced",
    "desc": "Next.js App Router, Server Actions, Zod validation, NextAuth v5 authentication, Resend email APIs, and MongoDB integrations.",
    "theme": "theme-rose",
    "emoji": "▲",
    "coverPhoto": "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "chai-next-1",
        "title": "Full Stack Next.js with Server Actions & Database",
        "ytUrl": "https://www.youtube.com/watch?v=OgSnZqA0BwQ",
        "ytVideoId": "OgSnZqA0BwQ",
        "duration": "40 mins",
        "desc": "Building scalable production applications with Next.js App Router.",
        "quiz": {
          "q": "Key concept check for: Full Stack Next.js with Server Actions & Database",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Full Stack Next.js with Server Actions & Database\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=OgSnZqA0BwQ"
      }
    ]
  },
  {
    "id": "course-chai-git",
    "sirId": "sir-chaiaurcode",
    "title": "Git & GitHub Masterclass: Production Workflows",
    "subject": "DevOps & Git",
    "level": "Beginner",
    "desc": "Git rebase vs merge, cherry-pick, stash, pull request etiquette, resolving merge conflicts, and contributing to open-source projects.",
    "theme": "theme-blue",
    "emoji": "🐙",
    "coverPhoto": "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "chai-git-1",
        "title": "Git and GitHub Full Course in Hindi (Chai aur Code)",
        "ytUrl": "https://www.youtube.com/watch?v=apGV9Kg7ics",
        "ytVideoId": "apGV9Kg7ics",
        "duration": "45 mins",
        "desc": "Real branch management and pull request workflows.",
        "quiz": {
          "q": "Key concept check for: Git and GitHub Full Course in Hindi (Chai aur Code)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Git and GitHub Full Course in Hindi (Chai aur Code)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=apGV9Kg7ics"
      }
    ]
  },
  {
    "id": "course-trav-react",
    "sirId": "sir-traversy",
    "title": "React Front to Back: Modern React & Hooks",
    "subject": "Frontend Engineering",
    "level": "Beginner",
    "desc": "Brad Traversy's famous intro: functional components, state, props, useEffect, custom context, and building full CRUD applications.",
    "theme": "theme-blue",
    "emoji": "⚛️",
    "coverPhoto": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "trav-react-1",
        "title": "React Crash Course for Beginners (Traversy Media)",
        "ytUrl": "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
        "ytVideoId": "w7ejDZ8SWv8",
        "duration": "1 hour 45 mins",
        "desc": "Build a modern task tracker web application in React.",
        "quiz": {
          "q": "Key concept check for: React Crash Course for Beginners (Traversy Media)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"React Crash Course for Beginners (Traversy Media)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=w7ejDZ8SWv8"
      }
    ]
  },
  {
    "id": "course-trav-node",
    "sirId": "sir-traversy",
    "title": "Node.js API Masterclass with Express & MongoDB",
    "subject": "Backend Development",
    "level": "Intermediate",
    "desc": "Build a production RESTful API: custom controllers, Mongoose schemas, advanced querying (pagination, filtering, geocoding), and JWT auth.",
    "theme": "theme-emerald",
    "emoji": "🟢",
    "coverPhoto": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "trav-node-1",
        "title": "Node.js & Express Crash Course (Traversy Media)",
        "ytUrl": "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
        "ytVideoId": "fBNz5xF-Kx4",
        "duration": "1 hour 30 mins",
        "desc": "HTTP modules, path routing, and Express middleware.",
        "quiz": {
          "q": "Key concept check for: Node.js & Express Crash Course (Traversy Media)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Node.js & Express Crash Course (Traversy Media)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=fBNz5xF-Kx4"
      }
    ]
  },
  {
    "id": "course-trav-html-css",
    "sirId": "sir-traversy",
    "title": "Modern HTML5 & CSS3 From The Beginning",
    "subject": "Web Foundations",
    "level": "Beginner",
    "desc": "Semantic tags, forms, tables, CSS variables, Flexbox layouts, CSS Grid systems, animations, and deploying on Netlify.",
    "theme": "theme-purple",
    "emoji": "🎨",
    "coverPhoto": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "trav-html-1",
        "title": "HTML5 Crash Course For Absolute Beginners",
        "ytUrl": "https://www.youtube.com/watch?v=UB1O30fR-EE",
        "ytVideoId": "UB1O30fR-EE",
        "duration": "1 hour",
        "desc": "HTML syntax, elements, headings, paragraphs, and links.",
        "quiz": {
          "q": "Key concept check for: HTML5 Crash Course For Absolute Beginners",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"HTML5 Crash Course For Absolute Beginners\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=UB1O30fR-EE"
      }
    ]
  },
  {
    "id": "course-trav-tailwind",
    "sirId": "sir-traversy",
    "title": "Tailwind CSS Crash Course: Utility-First Styling",
    "subject": "CSS Frameworks",
    "level": "Beginner",
    "desc": "Master utility classes: flex, grid, spacing, typography, hover/focus states, dark mode variants, and responsive breakpoints.",
    "theme": "theme-rose",
    "emoji": "🌊",
    "coverPhoto": "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "trav-tw-1",
        "title": "Tailwind CSS Crash Course (Traversy Media)",
        "ytUrl": "https://www.youtube.com/watch?v=dFgzv2bhCA8",
        "ytVideoId": "dFgzv2bhCA8",
        "duration": "1 hour 20 mins",
        "desc": "Build a responsive landing page without writing custom CSS.",
        "quiz": {
          "q": "Key concept check for: Tailwind CSS Crash Course (Traversy Media)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Tailwind CSS Crash Course (Traversy Media)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=dFgzv2bhCA8"
      }
    ]
  },
  {
    "id": "course-trav-mern",
    "sirId": "sir-traversy",
    "title": "MERN Stack E-Commerce from Scratch (Traversy)",
    "subject": "Full-Stack Web",
    "level": "Advanced",
    "desc": "Complete eCommerce platform: Redux Toolkit state management, PayPal payment integration, admin product dashboards, and order tracking.",
    "theme": "theme-amber",
    "emoji": "🛒",
    "coverPhoto": "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "trav-mern-1",
        "title": "MERN Stack Crash Course: Full Tutorial",
        "ytUrl": "https://www.youtube.com/watch?v=-0exw-9YJBo",
        "ytVideoId": "-0exw-9YJBo",
        "duration": "2 hours",
        "desc": "Connecting React frontend with Express backend and Mongo database.",
        "quiz": {
          "q": "Key concept check for: MERN Stack Crash Course: Full Tutorial",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"MERN Stack Crash Course: Full Tutorial\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=-0exw-9YJBo"
      }
    ]
  },
  {
    "id": "course-trav-typescript",
    "sirId": "sir-traversy",
    "title": "TypeScript Crash Course for JavaScript Developers",
    "subject": "TypeScript",
    "level": "Intermediate",
    "desc": "Static type safety: primitive types, union types, interfaces, type aliases, generics, enums, and compiling TS to JS.",
    "theme": "theme-blue",
    "emoji": "📘",
    "coverPhoto": "https://images.unsplash.com/photo-1516116211227-bbc988d8b13d?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "trav-ts-1",
        "title": "TypeScript Crash Course (Traversy Media)",
        "ytUrl": "https://www.youtube.com/watch?v=BCg4U1FzODs",
        "ytVideoId": "BCg4U1FzODs",
        "duration": "50 mins",
        "desc": "Eliminating runtime type bugs using compile-time TypeScript checks.",
        "quiz": {
          "q": "Key concept check for: TypeScript Crash Course (Traversy Media)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"TypeScript Crash Course (Traversy Media)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=BCg4U1FzODs"
      }
    ]
  },
  {
    "id": "course-ninja-flutter",
    "sirId": "sir-netninja",
    "title": "Flutter & Dart Mobile App Masterclass (Net Ninja)",
    "subject": "Mobile Engineering",
    "level": "Intermediate",
    "desc": "Shaun Pelling teaches Google Flutter: stateless vs stateful widgets, layout rows/columns, async Dart, and building iOS & Android native apps.",
    "theme": "theme-blue",
    "emoji": "📱",
    "coverPhoto": "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "ninja-fl-1",
        "title": "Flutter Tutorial for Beginners #1 - Intro",
        "ytUrl": "https://www.youtube.com/watch?v=1ukSR1GRtMU",
        "ytVideoId": "1ukSR1GRtMU",
        "duration": "10 mins",
        "desc": "Setting up Flutter SDK and compiling first mobile screen.",
        "quiz": {
          "q": "Key concept check for: Flutter Tutorial for Beginners #1 - Intro",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Flutter Tutorial for Beginners #1 - Intro\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=1ukSR1GRtMU"
      }
    ]
  },
  {
    "id": "course-ninja-vue",
    "sirId": "sir-netninja",
    "title": "Vue 3 & Composition API Complete Tutorial",
    "subject": "Frontend Frameworks",
    "level": "Beginner",
    "desc": "Vue 3 reactivity, template syntax, v-model, v-for, components, props, custom events, Vue Router, and Composition API (ref, reactive).",
    "theme": "theme-emerald",
    "emoji": "💚",
    "coverPhoto": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "ninja-vue-1",
        "title": "Vue 3 Tutorial for Beginners #1 - Intro to Vue",
        "ytUrl": "https://www.youtube.com/watch?v=YrxBCBibVo0",
        "ytVideoId": "YrxBCBibVo0",
        "duration": "12 mins",
        "desc": "Vue component architecture and clean progressive enhancement.",
        "quiz": {
          "q": "Key concept check for: Vue 3 Tutorial for Beginners #1 - Intro to Vue",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Vue 3 Tutorial for Beginners #1 - Intro to Vue\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=YrxBCBibVo0"
      }
    ]
  },
  {
    "id": "course-ninja-svelte",
    "sirId": "sir-netninja",
    "title": "Svelte & SvelteKit: The No-Virtual-DOM Framework",
    "subject": "Modern Frontend",
    "level": "Intermediate",
    "desc": "Compile-time UI: reactive declarations with $: syntax, stores, component bindings, transitions, and SvelteKit file-based routing.",
    "theme": "theme-rose",
    "emoji": "🔥",
    "coverPhoto": "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "ninja-svelte-1",
        "title": "Svelte Tutorial for Beginners #1 - Introduction",
        "ytUrl": "https://www.youtube.com/watch?v=ujbEHBfLECc",
        "ytVideoId": "ujbEHBfLECc",
        "duration": "10 mins",
        "desc": "Why compiling UI components at build time outperforms virtual DOM.",
        "quiz": {
          "q": "Key concept check for: Svelte Tutorial for Beginners #1 - Introduction",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Svelte Tutorial for Beginners #1 - Introduction\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=ujbEHBfLECc"
      }
    ]
  },
  {
    "id": "course-ninja-firebase",
    "sirId": "sir-netninja",
    "title": "Google Firebase & Firestore Full Stack Masterclass",
    "subject": "Cloud & Serverless",
    "level": "Intermediate",
    "desc": "Cloud Firestore NoSQL real-time listeners, Firebase Authentication (OAuth, Email), Cloud Storage, and Security Rules.",
    "theme": "theme-amber",
    "emoji": "🔥",
    "coverPhoto": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "ninja-fb-1",
        "title": "Firebase & Firestore Tutorial #1 - What is Firebase?",
        "ytUrl": "https://www.youtube.com/watch?v=9zdvmgGsww0",
        "ytVideoId": "9zdvmgGsww0",
        "duration": "12 mins",
        "desc": "Setting up real-time serverless database backends.",
        "quiz": {
          "q": "Key concept check for: Firebase & Firestore Tutorial #1 - What is Firebase?",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Firebase & Firestore Tutorial #1 - What is Firebase?\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=9zdvmgGsww0"
      }
    ]
  },
  {
    "id": "course-ninja-graphql",
    "sirId": "sir-netninja",
    "title": "GraphQL & Apollo Client Full Course (Net Ninja)",
    "subject": "API Design",
    "level": "Advanced",
    "desc": "Over-fetching and under-fetching elimination: schema definition language, queries, mutations, resolvers, and Apollo Client caching.",
    "theme": "theme-purple",
    "emoji": "◈",
    "coverPhoto": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "ninja-gql-1",
        "title": "GraphQL Tutorial #1 - Introduction to GraphQL",
        "ytUrl": "https://www.youtube.com/watch?v=ed8SzALpx1Q",
        "ytVideoId": "ed8SzALpx1Q",
        "duration": "14 mins",
        "desc": "Why GraphQL declarative data fetching improves mobile APIs.",
        "quiz": {
          "q": "Key concept check for: GraphQL Tutorial #1 - Introduction to GraphQL",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"GraphQL Tutorial #1 - Introduction to GraphQL\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=ed8SzALpx1Q"
      }
    ]
  },
  {
    "id": "course-ninja-typescript",
    "sirId": "sir-netninja",
    "title": "TypeScript Masterclass: Strict Types to Generics",
    "subject": "TypeScript",
    "level": "Intermediate",
    "desc": "DOM typecasting, interfaces vs types, classes, access modifiers (public, private, readonly), generics, and enums in real projects.",
    "theme": "theme-blue",
    "emoji": "🛡️",
    "coverPhoto": "https://images.unsplash.com/photo-1516116211227-bbc988d8b13d?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "ninja-ts-1",
        "title": "TypeScript Tutorial #1 - Introduction & Setup",
        "ytUrl": "https://www.youtube.com/watch?v=2pZmKW9-I_k",
        "ytVideoId": "2pZmKW9-I_k",
        "duration": "10 mins",
        "desc": "Configuring tsconfig.json and real-time watching.",
        "quiz": {
          "q": "Key concept check for: TypeScript Tutorial #1 - Introduction & Setup",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"TypeScript Tutorial #1 - Introduction & Setup\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=2pZmKW9-I_k"
      }
    ]
  },
  {
    "id": "course-crash-cs",
    "sirId": "sir-crashcourse",
    "title": "CrashCourse Computer Science with Carrie Anne Philbin",
    "subject": "Computer Science",
    "level": "Beginner",
    "desc": "From early mechanical punch cards through logic gates, CPUs, registers, operating systems, graphics, internet, cryptography, and artificial intelligence.",
    "theme": "theme-blue",
    "emoji": "🚀",
    "coverPhoto": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "crash-cs-1",
        "title": "Early Computing: Crash Course Computer Science #1",
        "ytUrl": "https://www.youtube.com/watch?v=O5nskjZ_GoI",
        "ytVideoId": "O5nskjZ_GoI",
        "duration": "12 mins",
        "desc": "Abacus, Charles Babbage's Difference Engine, and Ada Lovelace.",
        "quiz": {
          "q": "Key concept check for: Early Computing: Crash Course Computer Science #1",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Early Computing: Crash Course Computer Science #1\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=O5nskjZ_GoI"
      },
      {
        "id": "crash-cs-2",
        "title": "Electronic Computing & Transistors - Crash Course #2",
        "ytUrl": "https://www.youtube.com/watch?v=LN0ucKNX0hc",
        "ytVideoId": "LN0ucKNX0hc",
        "duration": "11 mins",
        "desc": "Electromechanical relays, vacuum tubes, and silicon transistors.",
        "quiz": {
          "q": "Key concept check for: Electronic Computing & Transistors - Crash Course #2",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Electronic Computing & Transistors - Crash Course #2\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=LN0ucKNX0hc"
      }
    ]
  },
  {
    "id": "course-crash-physics",
    "sirId": "sir-crashcourse",
    "title": "CrashCourse Physics with Dr. Shini Somara",
    "subject": "Physics",
    "level": "Beginner",
    "desc": "Motion in a straight line, derivatives in physics, circular motion, work & energy, collisions, rotational inertia, thermodynamics, and optics.",
    "theme": "theme-rose",
    "emoji": "⚛️",
    "coverPhoto": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "crash-phys-1",
        "title": "Motion in a Straight Line: Crash Course Physics #1",
        "ytUrl": "https://www.youtube.com/watch?v=ZM8ECpBQS5x",
        "ytVideoId": "ZM8ECpBQS5x",
        "duration": "10 mins",
        "desc": "Position, velocity, and acceleration kinematics.",
        "quiz": {
          "q": "Key concept check for: Motion in a Straight Line: Crash Course Physics #1",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Motion in a Straight Line: Crash Course Physics #1\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=ZM8ECpBQS5x"
      }
    ]
  },
  {
    "id": "course-crash-chemistry",
    "sirId": "sir-crashcourse",
    "title": "CrashCourse Chemistry with Hank Green",
    "subject": "Chemistry",
    "level": "Beginner",
    "desc": "Hank Green explains atomic structure, periodic table trends, stoichiometry, enthalpy, entropy, ideal gases, and chemical kinetics.",
    "theme": "theme-emerald",
    "emoji": "🧪",
    "coverPhoto": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "crash-chem-1",
        "title": "The Nucleus & Periodic Table: Crash Course Chemistry #1",
        "ytUrl": "https://www.youtube.com/watch?v=FSyAehMdpyI",
        "ytVideoId": "FSyAehMdpyI",
        "duration": "11 mins",
        "desc": "Protons, neutrons, atomic mass, and Mendeleev's periodic genius.",
        "quiz": {
          "q": "Key concept check for: The Nucleus & Periodic Table: Crash Course Chemistry #1",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"The Nucleus & Periodic Table: Crash Course Chemistry #1\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=FSyAehMdpyI"
      }
    ]
  },
  {
    "id": "course-crash-biology",
    "sirId": "sir-crashcourse",
    "title": "CrashCourse Biology: Life & Molecular Machines",
    "subject": "Biology",
    "level": "Beginner",
    "desc": "Carbon chemistry, cell membranes, photosynthesis, cellular energy (ATP), DNA structure, mitosis, meiosis, and heredity.",
    "theme": "theme-purple",
    "emoji": "🧬",
    "coverPhoto": "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "crash-bio-1",
        "title": "That's Why Carbon is a Tramp: Crash Course Biology #1",
        "ytUrl": "https://www.youtube.com/watch?v=QnQe0xW_JY4",
        "ytVideoId": "QnQe0xW_JY4",
        "duration": "12 mins",
        "desc": "Why carbon's 4 valence electrons enable all biological complexity.",
        "quiz": {
          "q": "Key concept check for: That's Why Carbon is a Tramp: Crash Course Biology #1",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"That's Why Carbon is a Tramp: Crash Course Biology #1\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=QnQe0xW_JY4"
      }
    ]
  },
  {
    "id": "course-crash-astronomy",
    "sirId": "sir-crashcourse",
    "title": "CrashCourse Astronomy with Phil Plait",
    "subject": "Astronomy",
    "level": "Beginner",
    "desc": "Telescopes, naked-eye sky observation, the Solar System, the Sun, stellar lifecycles, supernovae, black holes, and the Big Bang.",
    "theme": "theme-amber",
    "emoji": "🌌",
    "coverPhoto": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "crash-astro-1",
        "title": "Introduction to Astronomy: Crash Course Astronomy #1",
        "ytUrl": "https://www.youtube.com/watch?v=0rHUDWjR5gg",
        "ytVideoId": "0rHUDWjR5gg",
        "duration": "12 mins",
        "desc": "How humans measure distance and time across the cosmos.",
        "quiz": {
          "q": "Key concept check for: Introduction to Astronomy: Crash Course Astronomy #1",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Introduction to Astronomy: Crash Course Astronomy #1\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=0rHUDWjR5gg"
      }
    ]
  },
  {
    "id": "course-crash-psychology",
    "sirId": "sir-crashcourse",
    "title": "CrashCourse Psychology with Hank Green",
    "subject": "Psychology",
    "level": "Beginner",
    "desc": "The brain, nervous system, memory formation, cognitive biases, perception, developmental psychology, and psychological research methods.",
    "theme": "theme-blue",
    "emoji": "🧠",
    "coverPhoto": "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "crash-psych-1",
        "title": "Meet Your Master - Getting to Know Your Brain",
        "ytUrl": "https://www.youtube.com/watch?v=vo4pMVb0R6M",
        "ytVideoId": "vo4pMVb0R6M",
        "duration": "10 mins",
        "desc": "Neurons, synapses, neurotransmitters, and central nervous architecture.",
        "quiz": {
          "q": "Key concept check for: Meet Your Master - Getting to Know Your Brain",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Meet Your Master - Getting to Know Your Brain\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=vo4pMVb0R6M"
      }
    ]
  },
  {
    "id": "course-bro-python",
    "sirId": "sir-brocode",
    "title": "Python Full Course for Free (12 Hours) by Bro Code",
    "subject": "Python Programming",
    "level": "Beginner",
    "desc": "From zero programming knowledge to building real games and applications in Python: variables, loops, OOP, file handling, and GUI widgets.",
    "theme": "theme-emerald",
    "emoji": "🐍",
    "coverPhoto": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "bro-py-1",
        "title": "Python Full Course for Free [12 Hours Tutorial]",
        "ytUrl": "https://www.youtube.com/watch?v=IXK_pA0wT8g",
        "ytVideoId": "IXK_pA0wT8g",
        "duration": "12 hours",
        "desc": "Comprehensive step-by-step masterclass covering every Python concept.",
        "quiz": {
          "q": "Key concept check for: Python Full Course for Free [12 Hours Tutorial]",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Python Full Course for Free [12 Hours Tutorial]\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=IXK_pA0wT8g"
      }
    ]
  },
  {
    "id": "course-bro-cpp",
    "sirId": "sir-brocode",
    "title": "C++ Full Course for Beginners (Bro Code)",
    "subject": "C++ Programming",
    "level": "Beginner",
    "desc": "Variables, pointers, references, memory addresses, dynamic memory (new/delete), classes, inheritance, constructors, and polymorphism in C++.",
    "theme": "theme-blue",
    "emoji": "⚡",
    "coverPhoto": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "bro-cpp-1",
        "title": "C++ Full Course for Free (10 Hours)",
        "ytUrl": "https://www.youtube.com/watch?v=-TkoO8ZNYEQ",
        "ytVideoId": "-TkoO8ZNYEQ",
        "duration": "10 hours",
        "desc": "Master C++ syntax, memory pointers, and object-oriented architecture.",
        "quiz": {
          "q": "Key concept check for: C++ Full Course for Free (10 Hours)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"C++ Full Course for Free (10 Hours)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=-TkoO8ZNYEQ"
      }
    ]
  },
  {
    "id": "course-bro-java",
    "sirId": "sir-brocode",
    "title": "Java Full Course for Free (Bro Code)",
    "subject": "Java Programming",
    "level": "Beginner",
    "desc": "Java Virtual Machine, object oriented design, encapsulation, inheritance, abstract classes, interfaces, exception handling, and multithreading.",
    "theme": "theme-amber",
    "emoji": "☕",
    "coverPhoto": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "bro-java-1",
        "title": "Java Full Course for Free (12 Hours)",
        "ytUrl": "https://www.youtube.com/watch?v=xk4_1vDrzzo",
        "ytVideoId": "xk4_1vDrzzo",
        "duration": "12 hours",
        "desc": "Complete Java programming course from basic types to graphical apps.",
        "quiz": {
          "q": "Key concept check for: Java Full Course for Free (12 Hours)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Java Full Course for Free (12 Hours)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=xk4_1vDrzzo"
      }
    ]
  },
  {
    "id": "course-bro-csharp",
    "sirId": "sir-brocode",
    "title": "C# Full Course for Beginners (Bro Code)",
    "subject": "C# Programming",
    "level": "Beginner",
    "desc": "C# language features, .NET framework, LINQ, lambda expressions, generics, properties, and building desktop & Unity game code.",
    "theme": "theme-purple",
    "emoji": "🎯",
    "coverPhoto": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "bro-cs-1",
        "title": "C# Full Course for Free (10 Hours)",
        "ytUrl": "https://www.youtube.com/watch?v=M576WGiDBdQ",
        "ytVideoId": "M576WGiDBdQ",
        "duration": "10 hours",
        "desc": "All fundamental and object-oriented features of modern C#.",
        "quiz": {
          "q": "Key concept check for: C# Full Course for Free (10 Hours)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"C# Full Course for Free (10 Hours)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=M576WGiDBdQ"
      }
    ]
  },
  {
    "id": "course-bro-javascript",
    "sirId": "sir-brocode",
    "title": "JavaScript Full Course for Beginners (Bro Code)",
    "subject": "JavaScript",
    "level": "Beginner",
    "desc": "Variables, DOM manipulation, ES6 arrow functions, array methods (map, filter, reduce), async/await, and building browser games.",
    "theme": "theme-amber",
    "emoji": "💛",
    "coverPhoto": "https://images.unsplash.com/photo-1579468118864-ddb9f074d3d9?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "bro-js-1",
        "title": "JavaScript Full Course for Free (12 Hours)",
        "ytUrl": "https://www.youtube.com/watch?v=lfmg-EJ8gm4",
        "ytVideoId": "lfmg-EJ8gm4",
        "duration": "12 hours",
        "desc": "Complete hands-on JavaScript tutorial with interactive browser projects.",
        "quiz": {
          "q": "Key concept check for: JavaScript Full Course for Free (12 Hours)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"JavaScript Full Course for Free (12 Hours)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=lfmg-EJ8gm4"
      }
    ]
  },
  {
    "id": "course-bro-html-css",
    "sirId": "sir-brocode",
    "title": "HTML & CSS Full Course for Beginners (Bro Code)",
    "subject": "Web Foundations",
    "level": "Beginner",
    "desc": "Structuring pages, semantic tags, forms, tables, flexbox, grid, animations, and building responsive portfolio websites.",
    "theme": "theme-rose",
    "emoji": "🌐",
    "coverPhoto": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "bro-html-1",
        "title": "HTML & CSS Full Course - Beginner to Pro",
        "ytUrl": "https://www.youtube.com/watch?v=HGTJBPNC-Gw",
        "ytVideoId": "HGTJBPNC-Gw",
        "duration": "10 hours",
        "desc": "Everything you need to master styling and structuring web pages.",
        "quiz": {
          "q": "Key concept check for: HTML & CSS Full Course - Beginner to Pro",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"HTML & CSS Full Course - Beginner to Pro\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=HGTJBPNC-Gw"
      }
    ]
  },
  {
    "id": "course-kunal-dsa",
    "sirId": "sir-kunal",
    "title": "Complete Java + DSA Bootcamp by Kunal Kushwaha",
    "subject": "DSA in Java",
    "level": "Intermediate",
    "desc": "Kunal Kushwaha's famous open-source Java bootcamp: recursion, dynamic programming, trees, heaps, binary search on answers, and LeetCode problem solving.",
    "theme": "theme-blue",
    "emoji": "🛡️",
    "coverPhoto": "https://images.unsplash.com/photo-1516116211227-bbc988d8b13d?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "kunal-dsa-1",
        "title": "Binary Search Explained: Time Complexity & LeetCode",
        "ytUrl": "https://www.youtube.com/watch?v=f6UU7V3szVw",
        "ytVideoId": "f6UU7V3szVw",
        "duration": "1 hour 30 mins",
        "desc": "Floor/ceiling of numbers, infinite arrays, and binary search patterns.",
        "quiz": {
          "q": "Key concept check for: Binary Search Explained: Time Complexity & LeetCode",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Binary Search Explained: Time Complexity & LeetCode\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=f6UU7V3szVw"
      }
    ]
  },
  {
    "id": "course-kunal-devops",
    "sirId": "sir-kunal",
    "title": "Complete DevOps Bootcamp: Linux, Docker, K8s & CI/CD",
    "subject": "DevOps & Cloud Native",
    "level": "Advanced",
    "desc": "Comprehensive roadmap: Bash scripting, networking, Docker containerization, Kubernetes orchestrations, Helm, Terraform, and GitHub Actions.",
    "theme": "theme-emerald",
    "emoji": "🚢",
    "coverPhoto": "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "kunal-devops-1",
        "title": "Complete DevOps Bootcamp Introduction",
        "ytUrl": "https://www.youtube.com/watch?v=Wvf0mBNGjXY",
        "ytVideoId": "Wvf0mBNGjXY",
        "duration": "1 hour",
        "desc": "Understanding the role of DevOps and modern cloud native engineering.",
        "quiz": {
          "q": "Key concept check for: Complete DevOps Bootcamp Introduction",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Complete DevOps Bootcamp Introduction\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=Wvf0mBNGjXY"
      }
    ]
  },
  {
    "id": "course-kunal-git",
    "sirId": "sir-kunal",
    "title": "Complete Git and GitHub Tutorial with Real Projects",
    "subject": "Version Control",
    "level": "Beginner",
    "desc": "From basic commits to managing complex open source repositories: branching, rebasing, squashing commits, and pull request workflows.",
    "theme": "theme-amber",
    "emoji": "🐙",
    "coverPhoto": "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "kunal-git-1",
        "title": "Git and GitHub Tutorial For Beginners (Kunal Kushwaha)",
        "ytUrl": "https://www.youtube.com/watch?v=apGV9Kg7ics",
        "ytVideoId": "apGV9Kg7ics",
        "duration": "1 hour 45 mins",
        "desc": "Everything you need to know about Git and open source contributions.",
        "quiz": {
          "q": "Key concept check for: Git and GitHub Tutorial For Beginners (Kunal Kushwaha)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Git and GitHub Tutorial For Beginners (Kunal Kushwaha)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=apGV9Kg7ics"
      }
    ]
  },
  {
    "id": "course-kunal-recursion",
    "sirId": "sir-kunal",
    "title": "Mastering Recursion & Backtracking by Kunal Kushwaha",
    "subject": "Algorithms",
    "level": "Intermediate",
    "desc": "Recursion trees, base condition formulation, subset generation, permutations, N-Queens problem, and Sudoku solver algorithms.",
    "theme": "theme-rose",
    "emoji": "🔄",
    "coverPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "kunal-rec-1",
        "title": "Recursion for Beginners: Recursion Tree Visuals",
        "ytUrl": "https://www.youtube.com/watch?v=M2uO2nMT0Bk",
        "ytVideoId": "M2uO2nMT0Bk",
        "duration": "1 hour 20 mins",
        "desc": "Understanding call stack frames and unwinding states.",
        "quiz": {
          "q": "Key concept check for: Recursion for Beginners: Recursion Tree Visuals",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Recursion for Beginners: Recursion Tree Visuals\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=M2uO2nMT0Bk"
      }
    ]
  },
  {
    "id": "course-kunal-oop",
    "sirId": "sir-kunal",
    "title": "Object-Oriented Programming (OOP) in Java",
    "subject": "Java & OOP",
    "level": "Beginner",
    "desc": "Classes, objects, constructors, this & super keywords, four pillars of OOP (Encapsulation, Abstraction, Inheritance, Polymorphism), and access controls.",
    "theme": "theme-purple",
    "emoji": "☕",
    "coverPhoto": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "kunal-oop-1",
        "title": "OOP 1: Introduction, Concepts & Classes in Java",
        "ytUrl": "https://www.youtube.com/watch?v=BSVKUk58Kwg",
        "ytVideoId": "BSVKUk58Kwg",
        "duration": "1 hour 15 mins",
        "desc": "Understanding objects as heap allocations and references.",
        "quiz": {
          "q": "Key concept check for: OOP 1: Introduction, Concepts & Classes in Java",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"OOP 1: Introduction, Concepts & Classes in Java\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=BSVKUk58Kwg"
      }
    ]
  },
  {
    "id": "course-apna-cpp",
    "sirId": "sir-apnacollege",
    "title": "Complete C++ DSA Course by Shradha Khapra",
    "subject": "C++ & Data Structures",
    "level": "Beginner",
    "desc": "Shradha Didi's comprehensive C++ DSA placement course: loops, functions, arrays, vectors, binary search, linked lists, stacks, queues, and trees.",
    "theme": "theme-blue",
    "emoji": "✨",
    "coverPhoto": "https://images.unsplash.com/photo-1516116211227-bbc988d8b13d?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "apna-cpp-1",
        "title": "C++ Full Course | C++ Tutorial for Beginners (Shradha Didi)",
        "ytUrl": "https://www.youtube.com/watch?v=z9bZufPHFLU",
        "ytVideoId": "z9bZufPHFLU",
        "duration": "10 hours",
        "desc": "Complete foundational programming in C++ for college placements.",
        "quiz": {
          "q": "Key concept check for: C++ Full Course | C++ Tutorial for Beginners (Shradha Didi)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"C++ Full Course | C++ Tutorial for Beginners (Shradha Didi)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=z9bZufPHFLU"
      }
    ]
  },
  {
    "id": "course-apna-web",
    "sirId": "sir-apnacollege",
    "title": "Full Stack Web Development Alpha: HTML, CSS & JS",
    "subject": "Full-Stack Web",
    "level": "Beginner",
    "desc": "Complete web development series: semantic HTML, responsive CSS Grid, JavaScript DOM manipulation, APIs, Node.js, Express, and MongoDB database projects.",
    "theme": "theme-emerald",
    "emoji": "🌐",
    "coverPhoto": "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "apna-web-1",
        "title": "Web Development Full Course (HTML, CSS, JS) - Apna College",
        "ytUrl": "https://www.youtube.com/watch?v=l1EssrLxt7E",
        "ytVideoId": "l1EssrLxt7E",
        "duration": "11 hours",
        "desc": "Learn to build modern responsive websites from scratch.",
        "quiz": {
          "q": "Key concept check for: Web Development Full Course (HTML, CSS, JS) - Apna College",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Web Development Full Course (HTML, CSS, JS) - Apna College\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=l1EssrLxt7E"
      }
    ]
  },
  {
    "id": "course-apna-java",
    "sirId": "sir-apnacollege",
    "title": "Java + DSA Placement Course by Apna College",
    "subject": "Java & Data Structures",
    "level": "Intermediate",
    "desc": "Java fundamentals, bit manipulation, recursion, divide and conquer, back-tracking, ArrayLists, LinkedLists, Binary Trees, and Tries.",
    "theme": "theme-amber",
    "emoji": "☕",
    "coverPhoto": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "apna-java-1",
        "title": "Java Full Course in Hindi | Java Tutorial (Apna College)",
        "ytUrl": "https://www.youtube.com/watch?v=yRpLlJmRo2w",
        "ytVideoId": "yRpLlJmRo2w",
        "duration": "8 hours",
        "desc": "Complete Java syntax, OOP, and data structure algorithms.",
        "quiz": {
          "q": "Key concept check for: Java Full Course in Hindi | Java Tutorial (Apna College)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Java Full Course in Hindi | Java Tutorial (Apna College)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=yRpLlJmRo2w"
      }
    ]
  },
  {
    "id": "course-apna-python",
    "sirId": "sir-apnacollege",
    "title": "Python for Beginners Full Course (Apna College)",
    "subject": "Python Programming",
    "level": "Beginner",
    "desc": "Python variables, strings, conditional logic, loops, lists, tuples, sets, dictionaries, functions, and file I/O operations.",
    "theme": "theme-purple",
    "emoji": "🐍",
    "coverPhoto": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "apna-py-1",
        "title": "Python Full Course - Learn Python in 8 Hours",
        "ytUrl": "https://www.youtube.com/watch?v=ERCMXc8x7mc",
        "ytVideoId": "ERCMXc8x7mc",
        "duration": "8 hours",
        "desc": "Comprehensive step-by-step tutorial on Python fundamentals.",
        "quiz": {
          "q": "Key concept check for: Python Full Course - Learn Python in 8 Hours",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Python Full Course - Learn Python in 8 Hours\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=ERCMXc8x7mc"
      }
    ]
  },
  {
    "id": "course-apna-sql",
    "sirId": "sir-apnacollege",
    "title": "Complete SQL and Database Placement Course",
    "subject": "Database & SQL",
    "level": "Beginner",
    "desc": "SQL queries, aggregate functions, group by, joins, subqueries, primary/foreign keys, database views, and interview questions.",
    "theme": "theme-rose",
    "emoji": "🗄️",
    "coverPhoto": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "apna-sql-1",
        "title": "SQL Full Course in One Video | DBMS & MySQL",
        "ytUrl": "https://www.youtube.com/watch?v=hlGoQC332VM",
        "ytVideoId": "hlGoQC332VM",
        "duration": "4 hours",
        "desc": "Master relational database management and complex queries.",
        "quiz": {
          "q": "Key concept check for: SQL Full Course in One Video | DBMS & MySQL",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"SQL Full Course in One Video | DBMS & MySQL\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=hlGoQC332VM"
      }
    ]
  },
  {
    "id": "course-pw-mechanics",
    "sirId": "sir-physicswallah",
    "title": "Complete Mechanics for Class 11 & JEE/NEET (PW)",
    "subject": "Physics Mechanics",
    "level": "Beginner",
    "desc": "Alakh Pandey Sir's legendary whiteboard lectures: Newton's Laws of Motion (NLM), Friction, Work Power Energy, and Center of Mass.",
    "theme": "theme-rose",
    "emoji": "🎯",
    "coverPhoto": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "pw-mech-1",
        "title": "Newton's Laws of Motion 01: First Law & Inertia (PW)",
        "ytUrl": "https://www.youtube.com/watch?v=wWnfJ0-xXRE",
        "ytVideoId": "wWnfJ0-xXRE",
        "duration": "1 hour",
        "desc": "Inertia, free body diagrams (FBD), and tension forces.",
        "quiz": {
          "q": "Key concept check for: Newton's Laws of Motion 01: First Law & Inertia (PW)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Newton's Laws of Motion 01: First Law & Inertia (PW)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=wWnfJ0-xXRE"
      }
    ]
  },
  {
    "id": "course-pw-electrostatics",
    "sirId": "sir-physicswallah",
    "title": "Electrostatics & Electric Fields by Alakh Pandey",
    "subject": "Physics Electromagnetism",
    "level": "Intermediate",
    "desc": "Coulomb's Law, Electric Field Lines, Electric Dipole, Gauss's Theorem and its applications, Electric Potential, and Capacitors.",
    "theme": "theme-blue",
    "emoji": "⚡",
    "coverPhoto": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "pw-elec-1",
        "title": "Electrostatics 01: Electric Charges & Coulomb's Law",
        "ytUrl": "https://www.youtube.com/watch?v=3omwHv3Cmog",
        "ytVideoId": "3omwHv3Cmog",
        "duration": "1 hour 15 mins",
        "desc": "Quantization of charge and electrostatic force vectors.",
        "quiz": {
          "q": "Key concept check for: Electrostatics 01: Electric Charges & Coulomb's Law",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Electrostatics 01: Electric Charges & Coulomb's Law\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=3omwHv3Cmog"
      }
    ]
  },
  {
    "id": "course-pw-optics",
    "sirId": "sir-physicswallah",
    "title": "Ray Optics & Optical Instruments by Physics Wallah",
    "subject": "Physics Optics",
    "level": "Intermediate",
    "desc": "Reflection at spherical surfaces, Snell's law of refraction, total internal reflection (TIR), thin lens formula, prisms, and microscopes.",
    "theme": "theme-amber",
    "emoji": "🔬",
    "coverPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "pw-opt-1",
        "title": "Ray Optics 01: Reflection of Light & Spherical Mirrors",
        "ytUrl": "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
        "ytVideoId": "w7ejDZ8SWv8",
        "duration": "1 hour 20 mins",
        "desc": "Mirror formula and sign convention derivations.",
        "quiz": {
          "q": "Key concept check for: Ray Optics 01: Reflection of Light & Spherical Mirrors",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Ray Optics 01: Reflection of Light & Spherical Mirrors\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=w7ejDZ8SWv8"
      }
    ]
  },
  {
    "id": "course-pw-current",
    "sirId": "sir-physicswallah",
    "title": "Current Electricity & Circuit Laws (Physics Wallah)",
    "subject": "Physics Electricity",
    "level": "Intermediate",
    "desc": "Drift velocity, Ohm's law, temperature dependence, Kirchhoff's current & voltage laws (KCL/KVL), Wheatstone bridge, and potentiometers.",
    "theme": "theme-emerald",
    "emoji": "🔋",
    "coverPhoto": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "pw-curr-1",
        "title": "Current Electricity 01: Electric Current & Drift Velocity",
        "ytUrl": "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
        "ytVideoId": "fBNz5xF-Kx4",
        "duration": "1 hour 10 mins",
        "desc": "Electron mobility, relaxation time, and microscopic Ohm's law.",
        "quiz": {
          "q": "Key concept check for: Current Electricity 01: Electric Current & Drift Velocity",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Current Electricity 01: Electric Current & Drift Velocity\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=fBNz5xF-Kx4"
      }
    ]
  },
  {
    "id": "course-pw-thermo",
    "sirId": "sir-physicswallah",
    "title": "Thermodynamics & Kinetic Theory of Gases (PW)",
    "subject": "Thermodynamics",
    "level": "Intermediate",
    "desc": "Zeroth, First & Second laws of thermodynamics, isothermal/adiabatic processes, Carnot cycle, heat engines, and entropy.",
    "theme": "theme-purple",
    "emoji": "🔥",
    "coverPhoto": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "pw-therm-1",
        "title": "Thermodynamics 01: Work Done, Heat & First Law",
        "ytUrl": "https://www.youtube.com/watch?v=bka20Q9nwnM",
        "ytVideoId": "bka20Q9nwnM",
        "duration": "1 hour 15 mins",
        "desc": "P-V diagrams, indicator diagrams, and cyclic process work.",
        "quiz": {
          "q": "Key concept check for: Thermodynamics 01: Work Done, Heat & First Law",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Thermodynamics 01: Work Done, Heat & First Law\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=bka20Q9nwnM"
      }
    ]
  },
  {
    "id": "course-stanford-ml",
    "sirId": "sir-stanford",
    "title": "CS229: Machine Learning by Prof. Andrew Ng (Stanford)",
    "subject": "Stanford Machine Learning",
    "level": "Advanced",
    "desc": "Prof. Andrew Ng's legendary Stanford CS229: linear regression, logistic regression, SVMs, kernel tricks, EM algorithm, factor analysis, and PCA.",
    "theme": "theme-purple",
    "emoji": "🌲",
    "coverPhoto": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "stan-ml-1",
        "title": "Stanford CS229: Machine Learning - Lecture 1 (Andrew Ng)",
        "ytUrl": "https://www.youtube.com/watch?v=PPLop4L2eGk",
        "ytVideoId": "PPLop4L2eGk",
        "duration": "1 hour 15 mins",
        "desc": "Overview of machine learning, supervised vs unsupervised learning.",
        "quiz": {
          "q": "Key concept check for: Stanford CS229: Machine Learning - Lecture 1 (Andrew Ng)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Stanford CS229: Machine Learning - Lecture 1 (Andrew Ng)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=PPLop4L2eGk"
      },
      {
        "id": "stan-ml-2",
        "title": "Stanford CS229: Linear Regression & Gradient Descent",
        "ytUrl": "https://www.youtube.com/watch?v=4b4MUYve_U8",
        "ytVideoId": "4b4MUYve_U8",
        "duration": "1 hour 15 mins",
        "desc": "Batch gradient descent, stochastic gradient descent, and normal equations.",
        "quiz": {
          "q": "Key concept check for: Stanford CS229: Linear Regression & Gradient Descent",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Stanford CS229: Linear Regression & Gradient Descent\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=4b4MUYve_U8"
      }
    ]
  },
  {
    "id": "course-stanford-deep-learning",
    "sirId": "sir-stanford",
    "title": "CS230: Deep Learning by Prof. Andrew Ng (Stanford)",
    "subject": "Deep Learning",
    "level": "Advanced",
    "desc": "Deep neural networks, hyperparameter tuning, batch normalization, convolutional neural networks (CNNs), and sequence models (RNNs/LSTMs).",
    "theme": "theme-blue",
    "emoji": "🧠",
    "coverPhoto": "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "stan-dl-1",
        "title": "Stanford CS230: Deep Learning - Lecture 1 (Andrew Ng)",
        "ytUrl": "https://www.youtube.com/watch?v=PySo_6S4ZAg",
        "ytVideoId": "PySo_6S4ZAg",
        "duration": "1 hour 10 mins",
        "desc": "Intuition behind deep representation learning.",
        "quiz": {
          "q": "Key concept check for: Stanford CS230: Deep Learning - Lecture 1 (Andrew Ng)",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Stanford CS230: Deep Learning - Lecture 1 (Andrew Ng)\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=PySo_6S4ZAg"
      }
    ]
  },
  {
    "id": "course-stanford-nlp",
    "sirId": "sir-stanford",
    "title": "CS224N: Natural Language Processing with Deep Learning",
    "subject": "NLP & AI",
    "level": "Advanced",
    "desc": "Word vectors (word2vec, GloVe), neural dependency parsing, language modeling, RNNs, Seq2Seq with attention, and transformer architectures.",
    "theme": "theme-rose",
    "emoji": "💬",
    "coverPhoto": "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "stan-nlp-1",
        "title": "Stanford CS224N: NLP with Deep Learning - Lecture 1",
        "ytUrl": "https://www.youtube.com/watch?v=rmVRLeJRkl4",
        "ytVideoId": "rmVRLeJRkl4",
        "duration": "1 hour 15 mins",
        "desc": "Word meanings, continuous vector representations, and word2vec.",
        "quiz": {
          "q": "Key concept check for: Stanford CS224N: NLP with Deep Learning - Lecture 1",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Stanford CS224N: NLP with Deep Learning - Lecture 1\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=rmVRLeJRkl4"
      }
    ]
  },
  {
    "id": "course-stanford-crypto",
    "sirId": "sir-stanford",
    "title": "CS255: Introduction to Cryptography (Stanford)",
    "subject": "Cryptography",
    "level": "Advanced",
    "desc": "Prof. Dan Boneh teaches symmetric ciphers (AES), block cipher modes (CBC, CTR), MACs, RSA, elliptic curve cryptography, and zero-knowledge proofs.",
    "theme": "theme-amber",
    "emoji": "🔐",
    "coverPhoto": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "stan-crypto-1",
        "title": "Stanford Cryptography: One-Time Pad & Stream Ciphers",
        "ytUrl": "https://www.youtube.com/watch?v=ZoqMiFKspAA",
        "ytVideoId": "ZoqMiFKspAA",
        "duration": "1 hour",
        "desc": "Information-theoretic security and pseudo-random generators.",
        "quiz": {
          "q": "Key concept check for: Stanford Cryptography: One-Time Pad & Stream Ciphers",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Stanford Cryptography: One-Time Pad & Stream Ciphers\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=ZoqMiFKspAA"
      }
    ]
  },
  {
    "id": "course-stanford-convex-opt",
    "sirId": "sir-stanford",
    "title": "EE364A: Convex Optimization by Prof. Stephen Boyd",
    "subject": "Optimization & Math",
    "level": "Advanced",
    "desc": "Convex sets, convex functions, linear programming, quadratic programming, duality theory, KKT conditions, and interior-point methods.",
    "theme": "theme-emerald",
    "emoji": "📐",
    "coverPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "lessons": [
      {
        "id": "stan-opt-1",
        "title": "Stanford EE364A: Convex Optimization I - Lecture 1",
        "ytUrl": "https://www.youtube.com/watch?v=McLq1hEq3UY",
        "ytVideoId": "McLq1hEq3UY",
        "duration": "1 hour 15 mins",
        "desc": "Convex optimization problem formulation and applications.",
        "quiz": {
          "q": "Key concept check for: Stanford EE364A: Convex Optimization I - Lecture 1",
          "opts": [
            "Understood the fundamental principle and derivation",
            "Need to review the lecture timestamp notes",
            "Ready for practical implementation exercises",
            "Will post a doubt to Sir for clarification"
          ],
          "correct": 0,
          "exp": "Great job engaging with \"Stanford EE364A: Convex Optimization I - Lecture 1\"! Continue practicing to solidify your intuition."
        },
        "resourceLink": "https://www.youtube.com/watch?v=McLq1hEq3UY"
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.ALL_SIRS_DATA = ALL_SIRS_DATA;
  window.ALL_COURSES_DATA = ALL_COURSES_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { ALL_SIRS_DATA, ALL_COURSES_DATA };
}
