// =============================================================================
// FREE COURSES ONLINE - COMPREHENSIVE COURSE & INSTITUTION DATASET
// Total Institutions & Providers: 21
// Total Free Courses: 124
// Coursera-style Curated Free Educational Courses
// =============================================================================

const ALL_PROVIDERS_DATA = [
  {
    "id": "sir-google",
    "name": "Google for Developers & Google Cloud",
    "code": "GOOG",
    "institution": "Google for Developers",
    "shortName": "Google",
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
    "code": "CODE",
    "institution": "Code.org",
    "shortName": "Code.org",
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
    "code": "NESO",
    "institution": "Neso Academy",
    "shortName": "Neso Academy",
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
    "code": "FCC",
    "institution": "freeCodeCamp.org",
    "shortName": "freeCodeCamp",
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
    "code": "CS50",
    "institution": "Harvard University",
    "shortName": "Harvard CS50",
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
    "code": "MIT",
    "institution": "MIT OpenCourseWare",
    "shortName": "MIT OCW",
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
    "code": "KHAN",
    "institution": "Khan Academy",
    "shortName": "Khan Academy",
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
    "code": "BARI",
    "institution": "Algorithms Masterclass",
    "shortName": "Abdul Bari",
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
    "code": "3B1B",
    "institution": "3Blue1Brown",
    "shortName": "3Blue1Brown",
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
    "code": "STAT",
    "institution": "StatQuest",
    "shortName": "StatQuest",
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
    "code": "GS",
    "institution": "Gate Smashers",
    "shortName": "Gate Smashers",
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
    "code": "CHAI",
    "institution": "Chai aur Code",
    "shortName": "Chai aur Code",
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
    "code": "TRAV",
    "institution": "Traversy Media",
    "shortName": "Traversy Media",
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
    "code": "NN",
    "institution": "The Net Ninja",
    "shortName": "Net Ninja",
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
    "code": "CRASH",
    "institution": "CrashCourse",
    "shortName": "CrashCourse",
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
    "code": "BRO",
    "institution": "Bro Code",
    "shortName": "Bro Code",
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
    "code": "KUN",
    "institution": "Kunal Kushwaha",
    "shortName": "Kunal Kushwaha",
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
    "code": "APNA",
    "institution": "Apna College",
    "shortName": "Apna College",
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
    "code": "PW",
    "institution": "Physics Wallah",
    "shortName": "Physics Wallah",
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
    "code": "STAN",
    "institution": "Stanford Online",
    "shortName": "Stanford",
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
    "code": "PHYS",
    "institution": "Physics & Math Institute",
    "shortName": "Prof. Raman",
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
    "providerId": "sir-google",
    "institution": "Google for Developers",
    "instructorName": "Google for Developers & Google Cloud",
    "providerCode": "GOOG",
    "title": "Machine Learning Crash Course by Google",
    "subject": "Google AI & ML",
    "level": "Intermediate",
    "desc": "Official fast-paced, practical Google introduction to machine learning fundamentals, loss functions, gradient descent, and neural networks.",
    "coverPhoto": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "gml-1",
        "title": "Machine Learning Recipes #1: Hello World (Google)",
        "ytUrl": "https://www.youtube.com/watch?v=cKxRvEZd3Mw",
        "ytVideoId": "cKxRvEZd3Mw",
        "duration": "7 mins",
        "desc": "Supervised classification with decision trees in Python.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "gml-2",
        "title": "ML Crash Course: Intro & Problem Framing",
        "ytUrl": "https://www.youtube.com/watch?v=SAUeGtyLsrk",
        "ytVideoId": "SAUeGtyLsrk",
        "duration": "10 mins",
        "desc": "Supervised vs unsupervised learning and model evaluation.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "gml-3",
        "title": "ML Crash Course: Gradient Descent & Loss",
        "ytUrl": "https://www.youtube.com/watch?v=QoK1nNAURw4",
        "ytVideoId": "QoK1nNAURw4",
        "duration": "12 mins",
        "desc": "Minimizing loss across convex parameter spaces.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "gml-4",
        "title": "Decision Trees from Scratch (Google Developers)",
        "ytUrl": "https://www.youtube.com/watch?v=LDRbO9a6XPU",
        "ytVideoId": "LDRbO9a6XPU",
        "duration": "11 mins",
        "desc": "Building recursive decision tree partitioning with Gini impurity.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-google-python",
    "providerId": "sir-google",
    "institution": "Google for Developers",
    "instructorName": "Google for Developers & Google Cloud",
    "providerCode": "GOOG",
    "title": "Google Python Class for Developers",
    "subject": "Google Python & Cloud",
    "level": "Beginner",
    "desc": "Google's internal Python class for software engineers: strings, lists, sorting, file I/O, regex, and cloud automation.",
    "coverPhoto": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "gpy-1",
        "title": "Google Python Class: Day 1 Part 1 (Nick Parlante)",
        "ytUrl": "https://www.youtube.com/watch?v=tKTZoB2Vjuk",
        "ytVideoId": "tKTZoB2Vjuk",
        "duration": "43 mins",
        "desc": "Python variables, strings, methods, slicing, and scripts.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "gpy-2",
        "title": "Google Python Class: Day 1 Part 2 (Lists & Sorting)",
        "ytUrl": "https://www.youtube.com/watch?v=EPYupizJYQI",
        "ytVideoId": "EPYupizJYQI",
        "duration": "42 mins",
        "desc": "List mutability, sorting with lambda keys, loops.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-google-cloud-arch",
    "providerId": "sir-google",
    "institution": "Google for Developers",
    "instructorName": "Google for Developers & Google Cloud",
    "providerCode": "GOOG",
    "title": "Google Cloud Platform Architecture Fundamentals",
    "subject": "Google Cloud & DevOps",
    "level": "Intermediate",
    "desc": "Understand Compute Engine, Google Kubernetes Engine (GKE), Cloud Storage, and IAM security permissions.",
    "coverPhoto": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "gca-1",
        "title": "Introduction to Google Cloud Infrastructure",
        "ytUrl": "https://www.youtube.com/watch?v=EN4fEbcFZ_E",
        "ytVideoId": "EN4fEbcFZ_E",
        "duration": "32 mins",
        "desc": "Regions, zones, virtual machines, and cloud storage buckets.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-google-cybersecurity",
    "providerId": "sir-google",
    "institution": "Google for Developers",
    "instructorName": "Google for Developers & Google Cloud",
    "providerCode": "GOOG",
    "title": "Google Cybersecurity Professional Foundations",
    "subject": "Cybersecurity & Security",
    "level": "Beginner",
    "desc": "Network security, SIEM tools, security operations centers, threat modeling, and Linux terminal command line defense.",
    "coverPhoto": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "gsec-1",
        "title": "Python for Cybersecurity Log Analysis (Google)",
        "ytUrl": "https://www.youtube.com/watch?v=4pe1fn3Gus0",
        "ytVideoId": "4pe1fn3Gus0",
        "duration": "22 mins",
        "desc": "Reading authentication log files and parsing malicious IP traffic.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-google-tensorflow",
    "providerId": "sir-google",
    "institution": "Google for Developers",
    "instructorName": "Google for Developers & Google Cloud",
    "providerCode": "GOOG",
    "title": "TensorFlow & Keras Deep Learning Masterclass",
    "subject": "Deep Learning & AI",
    "level": "Advanced",
    "desc": "Build convolutional neural networks (CNNs), recurrent networks, and transfer learning pipelines using TensorFlow 2.x.",
    "coverPhoto": "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "gtf-1",
        "title": "TensorFlow 2.0 Full Tutorial: Python Neural Networks",
        "ytUrl": "https://www.youtube.com/watch?v=tPYj3fFJGjk",
        "ytVideoId": "tPYj3fFJGjk",
        "duration": "45 mins",
        "desc": "Tensors, dense layers, activation functions, and training models with Keras.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-google-android",
    "providerId": "sir-google",
    "institution": "Google for Developers",
    "instructorName": "Google for Developers & Google Cloud",
    "providerCode": "GOOG",
    "title": "Modern Android App Development with Kotlin & Jetpack",
    "subject": "Mobile Development",
    "level": "Intermediate",
    "desc": "Build Android applications using Kotlin, Jetpack Compose UI declarative layouts, ViewModel, and Coroutines.",
    "coverPhoto": "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "gand-1",
        "title": "Android Jetpack Compose Essentials",
        "ytUrl": "https://www.youtube.com/watch?v=mJgBOIoGihA",
        "ytVideoId": "mJgBOIoGihA",
        "duration": "25 mins",
        "desc": "Declarative UI programming in modern Android.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-google-data-analytics",
    "providerId": "sir-google",
    "institution": "Google for Developers",
    "instructorName": "Google for Developers & Google Cloud",
    "providerCode": "GOOG",
    "title": "Google Data Analytics Professional Foundation",
    "subject": "Data Science & Analytics",
    "level": "Beginner",
    "desc": "Data cleaning, spreadsheets, SQL database queries, R programming basics, and Tableau data storytelling.",
    "coverPhoto": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "gda-1",
        "title": "The Data Analysis Process: Ask, Prepare, Process",
        "ytUrl": "https://www.youtube.com/watch?v=sPyZALF1tPc",
        "ytVideoId": "sPyZALF1tPc",
        "duration": "20 mins",
        "desc": "The end-to-end framework used by professional Google analysts.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-google-web-dev",
    "providerId": "sir-google",
    "institution": "Google for Developers",
    "instructorName": "Google for Developers & Google Cloud",
    "providerCode": "GOOG",
    "title": "Google Web Vitals & High Performance Web Engineering",
    "subject": "Web Development",
    "level": "Advanced",
    "desc": "Master Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), Interaction to Next Paint (INP), and PWA engineering.",
    "coverPhoto": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "gweb-1",
        "title": "Core Web Vitals & Web Performance Optimization",
        "ytUrl": "https://www.youtube.com/watch?v=Oe421EPjeBE",
        "ytVideoId": "Oe421EPjeBE",
        "duration": "26 mins",
        "desc": "Auditing web performance, asset compression, and render-blocking resources.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-codeorg-cs-principles",
    "providerId": "sir-codeorg",
    "institution": "Code.org",
    "instructorName": "Code.org Academy",
    "providerCode": "CODE",
    "title": "Computer Science Principles: How Computers Work",
    "subject": "Code.org Computer Science",
    "level": "Beginner",
    "desc": "Code.org foundational curriculum taught by Bill Gates, Nat Brown, and tech pioneers: input, memory, CPU processing, binary numbers, and microchips.",
    "coverPhoto": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "corg-1",
        "title": "Introducing How Computers Work (Code.org)",
        "ytUrl": "https://www.youtube.com/watch?v=OAx_6-wdslM",
        "ytVideoId": "OAx_6-wdslM",
        "duration": "2 mins",
        "desc": "Bill Gates introduces the fundamental concepts behind computers.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "corg-2",
        "title": "What Makes a Computer, a Computer? (Code.org)",
        "ytUrl": "https://www.youtube.com/watch?v=mCq8-xTH7jA",
        "ytVideoId": "mCq8-xTH7jA",
        "duration": "5 mins",
        "desc": "How historical computing engines evolved into programmable machines.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "corg-3",
        "title": "Binary & Data: 0s and 1s Explained (Code.org)",
        "ytUrl": "https://www.youtube.com/watch?v=USCBCmwMCDA",
        "ytVideoId": "USCBCmwMCDA",
        "duration": "6 mins",
        "desc": "How text, pixels, colors, and audio sound waves are stored in binary bits.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "corg-4",
        "title": "Circuits and Logic: Inside the Microchip (Code.org)",
        "ytUrl": "https://www.youtube.com/watch?v=ZoqMiFKspAA",
        "ytVideoId": "ZoqMiFKspAA",
        "duration": "5 mins",
        "desc": "Bill Gates explains how microscopic transistors act as electronic switches.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-codeorg-internet",
    "providerId": "sir-codeorg",
    "institution": "Code.org",
    "instructorName": "Code.org Academy",
    "providerCode": "CODE",
    "title": "How the Internet Works: From Wires to Cloud",
    "subject": "Code.org Networking",
    "level": "Beginner",
    "desc": "Vint Cerf (co-designer of TCP/IP) and Code.org faculty demystify the global internet: fiber optic cables, packets, IP addressing, DNS, and HTTP.",
    "coverPhoto": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "cinet-1",
        "title": "What is the Internet? (Code.org)",
        "ytUrl": "https://www.youtube.com/watch?v=Dxcc6ycZ73M",
        "ytVideoId": "Dxcc6ycZ73M",
        "duration": "4 mins",
        "desc": "Vint Cerf explains open internet protocols connecting distributed networks.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "cinet-2",
        "title": "The Internet: Wires, Cables & Wifi (Code.org)",
        "ytUrl": "https://www.youtube.com/watch?v=ZhEf7e4kopM",
        "ytVideoId": "ZhEf7e4kopM",
        "duration": "7 mins",
        "desc": "How data travels physically across copper cables, fiber optic lines, and radio waves.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "cinet-3",
        "title": "The Internet: Packets, Routing & Reliability",
        "ytUrl": "https://www.youtube.com/watch?v=AYdF7b3nMto",
        "ytVideoId": "AYdF7b3nMto",
        "duration": "7 mins",
        "desc": "Packet switching, dynamic routing, packet loss, and TCP acknowledgement verification.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-codeorg-ai-ethics",
    "providerId": "sir-codeorg",
    "institution": "Code.org",
    "instructorName": "Code.org Academy",
    "providerCode": "CODE",
    "title": "AI for Oceans: Machine Learning & Ethics",
    "subject": "Artificial Intelligence",
    "level": "Beginner",
    "desc": "Interactive curriculum demonstrating machine learning classification models, training bias, and ethical algorithmic decision making.",
    "coverPhoto": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "caie-1",
        "title": "Machine Learning & AI for Oceans",
        "ytUrl": "https://www.youtube.com/watch?v=cKxRvEZd3Mw",
        "ytVideoId": "cKxRvEZd3Mw",
        "duration": "10 mins",
        "desc": "Training an image recognition model to clean oceans from pollution.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-codeorg-encryption",
    "providerId": "sir-codeorg",
    "institution": "Code.org",
    "instructorName": "Code.org Academy",
    "providerCode": "CODE",
    "title": "Cryptography & Cybersecurity for Students",
    "subject": "Cybersecurity",
    "level": "Beginner",
    "desc": "From Caesar ciphers and symmetric encryption to modern public key cryptography, SSL/TLS, and cyber safety.",
    "coverPhoto": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "ccrypt-1",
        "title": "Encryption & Public Key Cryptography",
        "ytUrl": "https://www.youtube.com/watch?v=ZoqMiFKspAA",
        "ytVideoId": "ZoqMiFKspAA",
        "duration": "12 mins",
        "desc": "How public and private keys allow secure internet banking without shared secrets.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-codeorg-applab",
    "providerId": "sir-codeorg",
    "institution": "Code.org",
    "instructorName": "Code.org Academy",
    "providerCode": "CODE",
    "title": "Building Mobile Apps with JavaScript & App Lab",
    "subject": "App Development",
    "level": "Beginner",
    "desc": "Create interactive mobile web apps with visual UI drag-and-drop combined with real JavaScript event-driven code.",
    "coverPhoto": "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "capp-1",
        "title": "Event Driven Programming in App Lab",
        "ytUrl": "https://www.youtube.com/watch?v=mJgBOIoGihA",
        "ytVideoId": "mJgBOIoGihA",
        "duration": "15 mins",
        "desc": "Buttons, clicks, variables, and screen transitions in JavaScript.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-codeorg-animation",
    "providerId": "sir-codeorg",
    "institution": "Code.org",
    "instructorName": "Code.org Academy",
    "providerCode": "CODE",
    "title": "Game Design & Creative Animation in Game Lab",
    "subject": "Game Development",
    "level": "Beginner",
    "desc": "Sprite animation, 2D coordinate collision detection, velocity vectors, and building custom arcade games in JavaScript.",
    "coverPhoto": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "cgame-1",
        "title": "The Draw Loop & 2D Sprite Collisions",
        "ytUrl": "https://www.youtube.com/watch?v=mU6anWqZJcc",
        "ytVideoId": "mU6anWqZJcc",
        "duration": "18 mins",
        "desc": "Building game frames at 60 FPS using the draw loop and sprite physics.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-neso-digital-electronics",
    "providerId": "sir-neso",
    "institution": "Neso Academy",
    "instructorName": "Neso Academy (Er. Himanshu Sir)",
    "providerCode": "NESO",
    "title": "Digital Electronics Masterclass by Neso Academy",
    "subject": "Digital Electronics",
    "level": "Beginner",
    "desc": "The world-famous series by Neso Academy. Learn signals, analog vs digital, fundamental logic gates (AND, OR, NOT, NAND, NOR, XOR), truth tables, and Boolean simplification.",
    "coverPhoto": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "neso-de-1",
        "title": "What is Signal? (Signals & Systems / Digital Basics)",
        "ytUrl": "https://www.youtube.com/watch?v=M0mx8S05v60",
        "ytVideoId": "M0mx8S05v60",
        "duration": "8 mins",
        "desc": "Definition of a physical signal, continuous variables, discrete representations.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "neso-de-2",
        "title": "What is an Analog Signal? vs Digital Signals",
        "ytUrl": "https://www.youtube.com/watch?v=F5h3z8p9dPg",
        "ytVideoId": "F5h3z8p9dPg",
        "duration": "10 mins",
        "desc": "Comparing analog precision with noise-resilient digital binary levels.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "neso-de-3",
        "title": "Logic Gates (Part 1) - AND, OR, NOT Gates",
        "ytUrl": "https://www.youtube.com/watch?v=xDARFvArIpc",
        "ytVideoId": "xDARFvArIpc",
        "duration": "12 mins",
        "desc": "Basic logic gates: symbols, boolean expressions, operational truth tables.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "neso-de-4",
        "title": "Logic Gates (Part 2) - NAND, NOR, XOR, XNOR",
        "ytUrl": "https://www.youtube.com/watch?v=iogRGu7nbJw",
        "ytVideoId": "iogRGu7nbJw",
        "duration": "14 mins",
        "desc": "Universal logic gates and XOR parity truth tables.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-neso-os",
    "providerId": "sir-neso",
    "institution": "Neso Academy",
    "instructorName": "Neso Academy (Er. Himanshu Sir)",
    "providerCode": "NESO",
    "title": "Operating Systems Architecture & Process Management",
    "subject": "Operating Systems",
    "level": "Intermediate",
    "desc": "Complete operating systems course by Neso Academy: system calls, dual-mode CPU operation, process control blocks (PCB), and process scheduling states.",
    "coverPhoto": "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "neso-os-1",
        "title": "Introduction to Operating Systems",
        "ytUrl": "https://www.youtube.com/watch?v=vBURTt97EkA",
        "ytVideoId": "vBURTt97EkA",
        "duration": "11 mins",
        "desc": "The bridge between user applications and computer hardware.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "neso-os-2",
        "title": "Basics of OS (Computer System Operation)",
        "ytUrl": "https://www.youtube.com/watch?v=VjPgYcQqqN0",
        "ytVideoId": "VjPgYcQqqN0",
        "duration": "13 mins",
        "desc": "Bootstrap, BIOS, interrupts, traps, and user vs kernel modes.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "neso-os-3",
        "title": "Process Management (Processes and Threads)",
        "ytUrl": "https://www.youtube.com/watch?v=OrM7nZcxXZU",
        "ytVideoId": "OrM7nZcxXZU",
        "duration": "15 mins",
        "desc": "Program in execution. Memory layout: Text, Data, Heap, Stack.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "neso-os-4",
        "title": "Process State Transitions & PCB Diagram",
        "ytUrl": "https://www.youtube.com/watch?v=jZ_6PXoaoxo",
        "ytVideoId": "jZ_6PXoaoxo",
        "duration": "14 mins",
        "desc": "Five-state process model: New, Ready, Running, Waiting, Terminated.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-neso-c",
    "providerId": "sir-neso",
    "institution": "Neso Academy",
    "instructorName": "Neso Academy (Er. Himanshu Sir)",
    "providerCode": "NESO",
    "title": "C Programming Masterclass: From Zero to Systems",
    "subject": "C Programming",
    "level": "Beginner",
    "desc": "Understand C programming at the memory level: compilation pipeline, variables, memory pointers, functions, and structs.",
    "coverPhoto": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "neso-c-1",
        "title": "C Programming – Features & The First C Program",
        "ytUrl": "https://www.youtube.com/watch?v=rLf3jnHxSmU",
        "ytVideoId": "rLf3jnHxSmU",
        "duration": "16 mins",
        "desc": "Dennis Ritchie's design of C, preprocessor directives, and gcc compilation.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "neso-c-2",
        "title": "Introduction to Variables & Memory Storage",
        "ytUrl": "https://www.youtube.com/watch?v=fO4FwJOShdc",
        "ytVideoId": "fO4FwJOShdc",
        "duration": "14 mins",
        "desc": "Variables naming memory locations, byte widths, unsigned vs signed types.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "neso-c-3",
        "title": "Introduction to Programming and Data Structures",
        "ytUrl": "https://www.youtube.com/watch?v=4OGMB4Fhh50",
        "ytVideoId": "4OGMB4Fhh50",
        "duration": "18 mins",
        "desc": "Contiguous arrays, memory addresses, and pointer dereferencing fundamentals.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-neso-toc",
    "providerId": "sir-neso",
    "institution": "Neso Academy",
    "instructorName": "Neso Academy (Er. Himanshu Sir)",
    "providerCode": "NESO",
    "title": "Theory of Computation & Automata by Neso Academy",
    "subject": "Theory of Computation",
    "level": "Advanced",
    "desc": "Deterministic Finite Automata (DFA), NFA, Regular Expressions, Context-Free Grammars (CFG), and Turing Machines.",
    "coverPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "neso-toc-1",
        "title": "Introduction to Theory of Computation & Languages",
        "ytUrl": "https://www.youtube.com/watch?v=58N2N7zJGrQ",
        "ytVideoId": "58N2N7zJGrQ",
        "duration": "12 mins",
        "desc": "Alphabets, strings, formal languages, and mathematical models of computation.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-neso-networks",
    "providerId": "sir-neso",
    "institution": "Neso Academy",
    "instructorName": "Neso Academy (Er. Himanshu Sir)",
    "providerCode": "NESO",
    "title": "Computer Networks & The OSI Model by Neso Academy",
    "subject": "Computer Networks",
    "level": "Intermediate",
    "desc": "7 Layers of the OSI model, TCP/IP stack, physical transmission media, framing, error detection (CRC), and flow control.",
    "coverPhoto": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "neso-cn-1",
        "title": "The 7 Layers of OSI Model Explained",
        "ytUrl": "https://www.youtube.com/watch?v=IPvYjXCsTg8",
        "ytVideoId": "IPvYjXCsTg8",
        "duration": "16 mins",
        "desc": "Physical, Data Link, Network, Transport, Session, Presentation, Application.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-neso-coa",
    "providerId": "sir-neso",
    "institution": "Neso Academy",
    "instructorName": "Neso Academy (Er. Himanshu Sir)",
    "providerCode": "NESO",
    "title": "Computer Organization & Architecture (COA)",
    "subject": "Computer Architecture",
    "level": "Intermediate",
    "desc": "Instruction sets, CPU pipelining, cache memory mapping (direct, associative), hazard handling, and Von Neumann architecture.",
    "coverPhoto": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "neso-coa-1",
        "title": "Von Neumann Architecture vs Harvard Architecture",
        "ytUrl": "https://www.youtube.com/watch?v=VjPgYcQqqN0",
        "ytVideoId": "VjPgYcQqqN0",
        "duration": "14 mins",
        "desc": "Shared memory for instructions and data vs separate bus architectures.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-neso-dbms",
    "providerId": "sir-neso",
    "institution": "Neso Academy",
    "instructorName": "Neso Academy (Er. Himanshu Sir)",
    "providerCode": "NESO",
    "title": "Database Management Systems (DBMS) Foundations",
    "subject": "Database Systems",
    "level": "Beginner",
    "desc": "Relational data model, SQL queries, ER modeling, normalization forms (1NF, 2NF, 3NF, BCNF), and ACID transaction properties.",
    "coverPhoto": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "neso-db-1",
        "title": "ACID Properties in Database Transactions",
        "ytUrl": "https://www.youtube.com/watch?v=bka20Q9nwnM",
        "ytVideoId": "bka20Q9nwnM",
        "duration": "15 mins",
        "desc": "Atomicity, Consistency, Isolation, and Durability.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-neso-microprocessors",
    "providerId": "sir-neso",
    "institution": "Neso Academy",
    "instructorName": "Neso Academy (Er. Himanshu Sir)",
    "providerCode": "NESO",
    "title": "8085 & 8086 Microprocessors Architecture",
    "subject": "Microprocessors",
    "level": "Advanced",
    "desc": "Register sets, pin diagrams, memory interfacing, assembly language programming, interrupts, and peripheral chips (8255 PPI).",
    "coverPhoto": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "neso-mp-1",
        "title": "8085 Microprocessor Architecture & Bus Structure",
        "ytUrl": "https://www.youtube.com/watch?v=M0mx8S05v60",
        "ytVideoId": "M0mx8S05v60",
        "duration": "16 mins",
        "desc": "Accumulator, ALU, program counter, and multiplexed address/data buses.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-fcc-python",
    "providerId": "sir-freecodecamp",
    "institution": "freeCodeCamp.org",
    "instructorName": "freeCodeCamp.org (Quincy Larson & Faculty)",
    "providerCode": "FCC",
    "title": "Scientific Computing with Python Full Course",
    "subject": "Python Programming",
    "level": "Beginner",
    "desc": "Complete 4-hour Python curriculum from freeCodeCamp: variables, conditionals, functions, loops, regex, object-oriented programming, and network sockets.",
    "coverPhoto": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "fcc-py-1",
        "title": "Python for Beginners - Full Course [Programming Tutorial]",
        "ytUrl": "https://www.youtube.com/watch?v=rfscVS0vtbw",
        "ytVideoId": "rfscVS0vtbw",
        "duration": "4 hours",
        "desc": "Complete intro to Python syntax, functions, and data structures.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-fcc-javascript",
    "providerId": "sir-freecodecamp",
    "institution": "freeCodeCamp.org",
    "instructorName": "freeCodeCamp.org (Quincy Larson & Faculty)",
    "providerCode": "FCC",
    "title": "JavaScript Algorithms & Data Structures Masterclass",
    "subject": "JavaScript",
    "level": "Beginner",
    "desc": "Complete freeCodeCamp JavaScript course: basic JS, ES6 modern syntax, regular expressions, debugging, basic data structures, and algorithmic scripting.",
    "coverPhoto": "https://images.unsplash.com/photo-1579468118864-ddb9f074d3d9?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "fcc-js-1",
        "title": "JavaScript Programming - Full Course for Beginners",
        "ytUrl": "https://www.youtube.com/watch?v=jS4aFq5-91M",
        "ytVideoId": "jS4aFq5-91M",
        "duration": "7 hours",
        "desc": "Variables, arrays, objects, functions, DOM manipulation, and algorithms.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-fcc-responsive-web",
    "providerId": "sir-freecodecamp",
    "institution": "freeCodeCamp.org",
    "instructorName": "freeCodeCamp.org (Quincy Larson & Faculty)",
    "providerCode": "FCC",
    "title": "Responsive Web Design: HTML5 & Modern CSS3",
    "subject": "Web Development",
    "level": "Beginner",
    "desc": "Learn HTML5 semantics, CSS custom properties, responsive media queries, Flexbox layout, CSS Grid, and accessibility (a11y).",
    "coverPhoto": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "fcc-rwd-1",
        "title": "HTML & CSS Full Course for Beginners",
        "ytUrl": "https://www.youtube.com/watch?v=mU6anWqZJcc",
        "ytVideoId": "mU6anWqZJcc",
        "duration": "11 hours",
        "desc": "Build responsive websites with semantic markup and modern CSS.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-fcc-docker",
    "providerId": "sir-freecodecamp",
    "institution": "freeCodeCamp.org",
    "instructorName": "freeCodeCamp.org (Quincy Larson & Faculty)",
    "providerCode": "FCC",
    "title": "Docker & Containerization Tutorial for Beginners",
    "subject": "DevOps & Cloud",
    "level": "Intermediate",
    "desc": "Learn Docker containers, Dockerfile creation, image layering, volume persistence, network bridges, and multi-container Docker Compose.",
    "coverPhoto": "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "fcc-doc-1",
        "title": "Docker Tutorial for Beginners [Full Course]",
        "ytUrl": "https://www.youtube.com/watch?v=fqMOX6JJhGo",
        "ytVideoId": "fqMOX6JJhGo",
        "duration": "2 hours",
        "desc": "Containerize full stack applications and run with Docker Compose.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-fcc-rust",
    "providerId": "sir-freecodecamp",
    "institution": "freeCodeCamp.org",
    "instructorName": "freeCodeCamp.org (Quincy Larson & Faculty)",
    "providerCode": "FCC",
    "title": "Rust Programming Language Masterclass",
    "subject": "Rust & Systems",
    "level": "Advanced",
    "desc": "Memory safety without garbage collection: ownership, borrowing rules, lifetimes, structs, traits, error handling, and concurrency.",
    "coverPhoto": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "fcc-rust-1",
        "title": "Rust Programming Course for Beginners",
        "ytUrl": "https://www.youtube.com/watch?v=MsocPEZBd-M",
        "ytVideoId": "MsocPEZBd-M",
        "duration": "13 hours",
        "desc": "Zero cost abstractions and fearless concurrency in Rust.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-fcc-sql",
    "providerId": "sir-freecodecamp",
    "institution": "freeCodeCamp.org",
    "instructorName": "freeCodeCamp.org (Quincy Larson & Faculty)",
    "providerCode": "FCC",
    "title": "SQL & Relational Database Design Full Course",
    "subject": "Database & SQL",
    "level": "Beginner",
    "desc": "PostgreSQL and MySQL database design: SELECT, JOINs, aggregations, subqueries, indexes, transactions, and schema normal forms.",
    "coverPhoto": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "fcc-sql-1",
        "title": "SQL Tutorial - Full Database Course for Beginners",
        "ytUrl": "https://www.youtube.com/watch?v=HXV3zeQKqGY",
        "ytVideoId": "HXV3zeQKqGY",
        "duration": "4 hours",
        "desc": "Querying, schema setup, relationships, and joins in SQL.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-fcc-react",
    "providerId": "sir-freecodecamp",
    "institution": "freeCodeCamp.org",
    "instructorName": "freeCodeCamp.org (Quincy Larson & Faculty)",
    "providerCode": "FCC",
    "title": "React 19 & Next.js Full Stack Engineering",
    "subject": "Frontend Engineering",
    "level": "Intermediate",
    "desc": "Component architecture, JSX, hooks (useState, useEffect, useMemo), server components, routing, and state management.",
    "coverPhoto": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "fcc-react-1",
        "title": "React Course - Beginner's Tutorial for React JavaScript",
        "ytUrl": "https://www.youtube.com/watch?v=bMknfKXIFA8",
        "ytVideoId": "bMknfKXIFA8",
        "duration": "12 hours",
        "desc": "Build enterprise web applications with React components and hooks.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-fcc-git",
    "providerId": "sir-freecodecamp",
    "institution": "freeCodeCamp.org",
    "instructorName": "freeCodeCamp.org (Quincy Larson & Faculty)",
    "providerCode": "FCC",
    "title": "Git and GitHub for Beginners - Crash Course",
    "subject": "Version Control & Git",
    "level": "Beginner",
    "desc": "Version control fundamentals: git init, commits, branches, merges, rebase, remote origin, pull requests, and resolving merge conflicts.",
    "coverPhoto": "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "fcc-git-1",
        "title": "Git and GitHub for Beginners - Full Course",
        "ytUrl": "https://www.youtube.com/watch?v=RGOj5yH7evk",
        "ytVideoId": "RGOj5yH7evk",
        "duration": "1 hour",
        "desc": "Track code changes and collaborate globally on GitHub.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-cs50x",
    "providerId": "sir-cs50",
    "institution": "Harvard University",
    "instructorName": "CS50 - Harvard University (Prof. David J. Malan)",
    "providerCode": "CS50",
    "title": "CS50x: Introduction to Computer Science (Harvard)",
    "subject": "Harvard Computer Science",
    "level": "Beginner",
    "desc": "Harvard University's introduction to computer science and programming. Covers C, memory pointers, arrays, data structures, algorithms, Python, SQL, and web development.",
    "coverPhoto": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "cs50-1",
        "title": "CS50 2026 - Lecture 0 - Computational Thinking & Scratch",
        "ytUrl": "https://www.youtube.com/watch?v=3lpq9q6N8-k",
        "ytVideoId": "3lpq9q6N8-k",
        "duration": "2 hours",
        "desc": "David Malan on binary, ASCII, abstraction, and algorithms.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "cs50-2",
        "title": "CS50 2026 - Lecture 1 - C Programming & Compilers",
        "ytUrl": "https://www.youtube.com/watch?v=4yO_2kFhP6k",
        "ytVideoId": "4yO_2kFhP6k",
        "duration": "2 hours",
        "desc": "Syntax, data types, conditional branching, and command line tools.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "cs50-3",
        "title": "CS50 2026 - Lecture 4 - Memory & Pointers",
        "ytUrl": "https://www.youtube.com/watch?v=nvOz82hFf10",
        "ytVideoId": "nvOz82hFf10",
        "duration": "2 hours",
        "desc": "Hexadecimal, pointer addresses, malloc, free, and memory leakage.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-cs50-python",
    "providerId": "sir-cs50",
    "institution": "Harvard University",
    "instructorName": "CS50 - Harvard University (Prof. David J. Malan)",
    "providerCode": "CS50",
    "title": "CS50P: Introduction to Programming with Python",
    "subject": "Python Programming",
    "level": "Beginner",
    "desc": "Learn Python from Harvard University: functions, variables, conditionals, loops, exceptions, libraries, unit tests, file I/O, regex, and object-oriented programming.",
    "coverPhoto": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "cs50p-1",
        "title": "CS50 Python - Functions, Variables & Expressions",
        "ytUrl": "https://www.youtube.com/watch?v=nLRL_NcnK-4",
        "ytVideoId": "nLRL_NcnK-4",
        "duration": "2 hours",
        "desc": "David J. Malan teaches clean Python fundamentals.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-cs50-ai",
    "providerId": "sir-cs50",
    "institution": "Harvard University",
    "instructorName": "CS50 - Harvard University (Prof. David J. Malan)",
    "providerCode": "CS50",
    "title": "CS50AI: Introduction to Artificial Intelligence with Python",
    "subject": "Artificial Intelligence",
    "level": "Intermediate",
    "desc": "Search algorithms (A*, minimax), knowledge representation, propositional logic, probability, Bayesian networks, neural networks, and reinforcement learning.",
    "coverPhoto": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "cs50ai-1",
        "title": "CS50 AI - Lecture 0: Search Algorithms & Minimax",
        "ytUrl": "https://www.youtube.com/watch?v=WbzNPA_X1CQ",
        "ytVideoId": "WbzNPA_X1CQ",
        "duration": "1 hour",
        "desc": "Depth-first, breadth-first, A* heuristic search, and game playing.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-cs50-web",
    "providerId": "sir-cs50",
    "institution": "Harvard University",
    "instructorName": "CS50 - Harvard University (Prof. David J. Malan)",
    "providerCode": "CS50",
    "title": "CS50W: Web Programming with Python and JavaScript",
    "subject": "Full-Stack Web",
    "level": "Intermediate",
    "desc": "Database design, scalability, security, user experience with Django, React, RESTful APIs, GitHub Actions CI/CD, and cloud deployments.",
    "coverPhoto": "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "cs50w-1",
        "title": "CS50 Web - Django Models, Views & Templates",
        "ytUrl": "https://www.youtube.com/watch?v=w8q0C-C1js4",
        "ytVideoId": "w8q0C-C1js4",
        "duration": "2 hours",
        "desc": "Backend web development in Python with Django framework.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-cs50-sql",
    "providerId": "sir-cs50",
    "institution": "Harvard University",
    "instructorName": "CS50 - Harvard University (Prof. David J. Malan)",
    "providerCode": "CS50",
    "title": "CS50SQL: Introduction to Databases with SQL",
    "subject": "Database & SQL",
    "level": "Beginner",
    "desc": "Design schemas, optimize queries with B-tree indexes, views, triggers, and transactions using SQLite, PostgreSQL, and MySQL.",
    "coverPhoto": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "cs50sql-1",
        "title": "CS50 SQL - Relating Tables with Primary & Foreign Keys",
        "ytUrl": "https://www.youtube.com/watch?v=HXV3zeQKqGY",
        "ytVideoId": "HXV3zeQKqGY",
        "duration": "2 hours",
        "desc": "Entity relationships, normalization, and relational integrity.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-cs50-cybersecurity",
    "providerId": "sir-cs50",
    "institution": "Harvard University",
    "instructorName": "CS50 - Harvard University (Prof. David J. Malan)",
    "providerCode": "CS50",
    "title": "CS50 Cybersecurity: Digital Defense & Privacy",
    "subject": "Cybersecurity",
    "level": "Beginner",
    "desc": "Understanding password hashing, two-factor authentication, phishing defense, public Wi-Fi risks, cryptography, and network intrusion prevention.",
    "coverPhoto": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "cs50sec-1",
        "title": "CS50 Cybersecurity - Threat Modeling & Authentication",
        "ytUrl": "https://www.youtube.com/watch?v=nvOz82hFf10",
        "ytVideoId": "nvOz82hFf10",
        "duration": "2 hours",
        "desc": "How attacks occur and how software protects sensitive user information.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-mit-linear-algebra",
    "providerId": "sir-mit",
    "institution": "MIT OpenCourseWare",
    "instructorName": "MIT OpenCourseWare (Prof. Gilbert Strang & MIT)",
    "providerCode": "MIT",
    "title": "MIT 18.06: Linear Algebra by Prof. Gilbert Strang",
    "subject": "MIT Mathematics",
    "level": "Intermediate",
    "desc": "The world's most famous linear algebra course: row operations, column spaces, nullspaces, orthogonality, eigenvalues, eigenvectors, and SVD.",
    "coverPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "mit-la-1",
        "title": "MIT 18.06 - Lecture 1: The Geometry of Linear Equations",
        "ytUrl": "https://www.youtube.com/watch?v=7UJ4CFRGd-U",
        "ytVideoId": "7UJ4CFRGd-U",
        "duration": "40 mins",
        "desc": "Row picture vs Column picture by Prof. Gilbert Strang.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "mit-la-2",
        "title": "MIT 18.06 - Lecture 2: Elimination with Matrices",
        "ytUrl": "https://www.youtube.com/watch?v=QVKj3LADCnA",
        "ytVideoId": "QVKj3LADCnA",
        "duration": "47 mins",
        "desc": "Gaussian elimination, matrix multiplication, inverse matrices.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-mit-physics-mechanics",
    "providerId": "sir-mit",
    "institution": "MIT OpenCourseWare",
    "instructorName": "MIT OpenCourseWare (Prof. Gilbert Strang & MIT)",
    "providerCode": "MIT",
    "title": "MIT 8.01: Classical Mechanics by Prof. Walter Lewin",
    "subject": "MIT Physics",
    "level": "Beginner",
    "desc": "Newton's laws, gravitation, circular motion, conservation of momentum, energy, rotational dynamics, harmonic oscillators, and fluid mechanics.",
    "coverPhoto": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "mit-phys-1",
        "title": "MIT 8.01 - Lecture 1: Measurements, Uncertainties & Vectors",
        "ytUrl": "https://www.youtube.com/watch?v=wWnfJ0-xXRE",
        "ytVideoId": "wWnfJ0-xXRE",
        "duration": "50 mins",
        "desc": "The beauty of physical units and vectors.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-mit-calculus",
    "providerId": "sir-mit",
    "institution": "MIT OpenCourseWare",
    "instructorName": "MIT OpenCourseWare (Prof. Gilbert Strang & MIT)",
    "providerCode": "MIT",
    "title": "MIT 18.01: Single Variable Calculus",
    "subject": "MIT Mathematics",
    "level": "Beginner",
    "desc": "Differentiation, optimization, Riemann sums, integration techniques, fundamental theorem of calculus, and Taylor series approximations.",
    "coverPhoto": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "mit-calc-1",
        "title": "MIT 18.01 - Lecture 1: Derivatives and Rates of Change",
        "ytUrl": "https://www.youtube.com/watch?v=7K1sB05pE0A",
        "ytVideoId": "7K1sB05pE0A",
        "duration": "48 mins",
        "desc": "Geometric intuition behind slopes, tangents, and velocity limits.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-mit-algorithms",
    "providerId": "sir-mit",
    "institution": "MIT OpenCourseWare",
    "instructorName": "MIT OpenCourseWare (Prof. Gilbert Strang & MIT)",
    "providerCode": "MIT",
    "title": "MIT 6.006: Introduction to Algorithms",
    "subject": "MIT Computer Science",
    "level": "Intermediate",
    "desc": "Erik Demaine and Srini Devadas teach algorithmic thinking: sorting (merge, heap), binary search trees, hashing, shortest paths, and dynamic programming.",
    "coverPhoto": "https://images.unsplash.com/photo-1516116211227-bbc988d8b13d?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "mit-algo-1",
        "title": "MIT 6.006 - Lecture 1: Algorithmic Thinking & Peak Finding",
        "ytUrl": "https://www.youtube.com/watch?v=HtSuA80QTyo",
        "ytVideoId": "HtSuA80QTyo",
        "duration": "50 mins",
        "desc": "1D and 2D peak finding algorithms and asymptotic complexity.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-mit-electromagnetism",
    "providerId": "sir-mit",
    "institution": "MIT OpenCourseWare",
    "instructorName": "MIT OpenCourseWare (Prof. Gilbert Strang & MIT)",
    "providerCode": "MIT",
    "title": "MIT 8.02: Electricity & Magnetism by Prof. Walter Lewin",
    "subject": "MIT Physics",
    "level": "Intermediate",
    "desc": "Coulomb's Law, electric fields, Gauss's Law, electric potential, capacitance, magnetic fields, Ampere's Law, Faraday's Law, and Maxwell's equations.",
    "coverPhoto": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "mit-em-1",
        "title": "MIT 8.02 - Lecture 1: What Holds Our World Together?",
        "ytUrl": "https://www.youtube.com/watch?v=3omwHv3Cmog",
        "ytVideoId": "3omwHv3Cmog",
        "duration": "52 mins",
        "desc": "Electric charges, Coulomb's law, and electrostatic experiments.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-mit-multivariable-calc",
    "providerId": "sir-mit",
    "institution": "MIT OpenCourseWare",
    "instructorName": "MIT OpenCourseWare (Prof. Gilbert Strang & MIT)",
    "providerCode": "MIT",
    "title": "MIT 18.02: Multivariable Calculus",
    "subject": "MIT Mathematics",
    "level": "Intermediate",
    "desc": "Vectors, partial derivatives, double & triple integrals, line integrals, Green's theorem, divergence theorem, and Stokes' theorem in 3D space.",
    "coverPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "mit-mc-1",
        "title": "MIT 18.02 - Lecture 1: Dot Products & Projections in 3D",
        "ytUrl": "https://www.youtube.com/watch?v=k7RM-ot2NWY",
        "ytVideoId": "k7RM-ot2NWY",
        "duration": "45 mins",
        "desc": "Visualizing coordinate planes and scalar products in Euclidean space.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-mit-quantum-physics",
    "providerId": "sir-mit",
    "institution": "MIT OpenCourseWare",
    "instructorName": "MIT OpenCourseWare (Prof. Gilbert Strang & MIT)",
    "providerCode": "MIT",
    "title": "MIT 8.04: Quantum Physics I",
    "subject": "MIT Physics",
    "level": "Advanced",
    "desc": "Wave-particle duality, Schrödinger equation, wave packets, probability currents, potential wells, tunneling, and quantum harmonic oscillators.",
    "coverPhoto": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "mit-qp-1",
        "title": "MIT 8.04 - Lecture 1: The Wave-Particle Paradox",
        "ytUrl": "https://www.youtube.com/watch?v=bka20Q9nwnM",
        "ytVideoId": "bka20Q9nwnM",
        "duration": "50 mins",
        "desc": "Photoelectric effect and the breakdown of classical mechanics.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-khan-calculus",
    "providerId": "sir-khan",
    "institution": "Khan Academy",
    "instructorName": "Khan Academy (Sal Khan)",
    "providerCode": "KHAN",
    "title": "AP Calculus AB & BC: Limits & Integrals by Sal Khan",
    "subject": "Calculus",
    "level": "Beginner",
    "desc": "Sal Khan's intuitive blackboard breakdowns: limits, epsilon-delta definitions, product & chain rules, Riemann integration, and area between curves.",
    "coverPhoto": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "khan-calc-1",
        "title": "Introduction to Limits & Continuity (Khan Academy)",
        "ytUrl": "https://www.youtube.com/watch?v=WUvTyaaNkzM",
        "ytVideoId": "WUvTyaaNkzM",
        "duration": "12 mins",
        "desc": "Approaching infinity and holes in functions intuitively.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-khan-physics",
    "providerId": "sir-khan",
    "institution": "Khan Academy",
    "instructorName": "Khan Academy (Sal Khan)",
    "providerCode": "KHAN",
    "title": "Physics: Kinematics, Forces & Energy (Khan Academy)",
    "subject": "Physics",
    "level": "Beginner",
    "desc": "1D & 2D kinematics, projectile motion, Newton's three laws, friction, centripetal force, and conservation of mechanical energy.",
    "coverPhoto": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "khan-phys-1",
        "title": "1D Motion & Displacement Vectors (Khan Academy)",
        "ytUrl": "https://www.youtube.com/watch?v=wWnfJ0-xXRE",
        "ytVideoId": "wWnfJ0-xXRE",
        "duration": "14 mins",
        "desc": "Differentiating distance traveled vs net displacement.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-khan-chemistry",
    "providerId": "sir-khan",
    "institution": "Khan Academy",
    "instructorName": "Khan Academy (Sal Khan)",
    "providerCode": "KHAN",
    "title": "General & Organic Chemistry Foundations",
    "subject": "Chemistry",
    "level": "Beginner",
    "desc": "Atomic structure, electron configurations, periodic trends, stoichiometry, chemical equilibrium, acids and bases, and hybridization.",
    "coverPhoto": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "khan-chem-1",
        "title": "Orbitals, Hybridization & Valence Electrons",
        "ytUrl": "https://www.youtube.com/watch?v=bka20Q9nwnM",
        "ytVideoId": "bka20Q9nwnM",
        "duration": "15 mins",
        "desc": "SP3, SP2, and SP hybridization geometry.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-khan-biology",
    "providerId": "sir-khan",
    "institution": "Khan Academy",
    "instructorName": "Khan Academy (Sal Khan)",
    "providerCode": "KHAN",
    "title": "Biology: Cells, Genetics & Molecular Evolution",
    "subject": "Biology",
    "level": "Beginner",
    "desc": "Cell membrane transport, cellular respiration (glycolysis, Krebs cycle), DNA replication, transcription, translation, and Mendelian genetics.",
    "coverPhoto": "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "khan-bio-1",
        "title": "Cellular Respiration & ATP Production",
        "ytUrl": "https://www.youtube.com/watch?v=00jbG_cfGuQ",
        "ytVideoId": "00jbG_cfGuQ",
        "duration": "16 mins",
        "desc": "Energy conversion inside the mitochondria.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-khan-macroeconomics",
    "providerId": "sir-khan",
    "institution": "Khan Academy",
    "instructorName": "Khan Academy (Sal Khan)",
    "providerCode": "KHAN",
    "title": "Macroeconomics: GDP, Inflation & Monetary Policy",
    "subject": "Economics",
    "level": "Beginner",
    "desc": "Measuring national income, Gross Domestic Product, consumer price index (CPI), aggregate demand/supply, and Federal Reserve central banking.",
    "coverPhoto": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "khan-econ-1",
        "title": "Gross Domestic Product (GDP) Explained",
        "ytUrl": "https://www.youtube.com/watch?v=11gA0Y876p0",
        "ytVideoId": "11gA0Y876p0",
        "duration": "12 mins",
        "desc": "Components of GDP: C + I + G + (X - M).",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-khan-statistics",
    "providerId": "sir-khan",
    "institution": "Khan Academy",
    "instructorName": "Khan Academy (Sal Khan)",
    "providerCode": "KHAN",
    "title": "Probability & Statistics: Normal Distributions to P-Values",
    "subject": "Statistics",
    "level": "Intermediate",
    "desc": "Standard deviation, z-scores, central limit theorem, confidence intervals, hypothesis testing, and linear regression correlation.",
    "coverPhoto": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "khan-stat-1",
        "title": "The Central Limit Theorem & Normal Distribution",
        "ytUrl": "https://www.youtube.com/watch?v=JNm3M9cqWyc",
        "ytVideoId": "JNm3M9cqWyc",
        "duration": "13 mins",
        "desc": "Why sample means approximate a bell curve.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-khan-world-history",
    "providerId": "sir-khan",
    "institution": "Khan Academy",
    "instructorName": "Khan Academy (Sal Khan)",
    "providerCode": "KHAN",
    "title": "World History: Ancient Civilizations to Modern Global Era",
    "subject": "History",
    "level": "Beginner",
    "desc": "From the agricultural revolution in Mesopotamia to the Renaissance, Enlightenment, Industrial Revolution, and 20th-century geopolitical transformations.",
    "coverPhoto": "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "khan-hist-1",
        "title": "The Dawn of Human Agriculture and Settlement",
        "ytUrl": "https://www.youtube.com/watch?v=Yocja_N5s1I",
        "ytVideoId": "Yocja_N5s1I",
        "duration": "11 mins",
        "desc": "How farming created cities, governments, and written culture.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-bari-algorithms",
    "providerId": "sir-abdulbari",
    "institution": "Algorithms Masterclass",
    "instructorName": "Abdul Bari",
    "providerCode": "BARI",
    "title": "Algorithms Analysis & Master Theorem by Abdul Bari",
    "subject": "Algorithms",
    "level": "Intermediate",
    "desc": "Whiteboard breakdowns of time & space complexity, asymptotic notations (Big O, Omega, Theta), recurrence relations, and Master Theorem.",
    "coverPhoto": "https://images.unsplash.com/photo-1516116211227-bbc988d8b13d?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "bari-algo-1",
        "title": "Introduction to Algorithms Analysis & Big O",
        "ytUrl": "https://www.youtube.com/watch?v=0IAPZzGSbME",
        "ytVideoId": "0IAPZzGSbME",
        "duration": "25 mins",
        "desc": "Understanding algorithmic steps and growth rates.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "bari-algo-2",
        "title": "Master Theorem for Divide & Conquer Recurrences",
        "ytUrl": "https://www.youtube.com/watch?v=2Rr2tW9zvRg",
        "ytVideoId": "2Rr2tW9zvRg",
        "duration": "28 mins",
        "desc": "Three cases of the Master Theorem with proof.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-bari-dp",
    "providerId": "sir-abdulbari",
    "institution": "Algorithms Masterclass",
    "instructorName": "Abdul Bari",
    "providerCode": "BARI",
    "title": "Dynamic Programming Masterclass by Abdul Bari",
    "subject": "Dynamic Programming",
    "level": "Advanced",
    "desc": "The gold standard: 0/1 Knapsack, Multi-stage Graphs, All-Pairs Shortest Path (Floyd-Warshall), Matrix Chain Multiplication, and Traveling Salesman.",
    "coverPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "bari-dp-1",
        "title": "Dynamic Programming: 0/1 Knapsack Problem",
        "ytUrl": "https://www.youtube.com/watch?v=nLmhmB6NzcM",
        "ytVideoId": "nLmhmB6NzcM",
        "duration": "32 mins",
        "desc": "Tabulation matrix construction and decision formulas.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "bari-dp-2",
        "title": "Matrix Chain Multiplication (MCM) Explained",
        "ytUrl": "https://www.youtube.com/watch?v=prx1psByp7U",
        "ytVideoId": "prx1psByp7U",
        "duration": "35 mins",
        "desc": "Parenthesization cost minimization via optimal substructure.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-bari-graphs",
    "providerId": "sir-abdulbari",
    "institution": "Algorithms Masterclass",
    "instructorName": "Abdul Bari",
    "providerCode": "BARI",
    "title": "Graph Algorithms: Shortest Paths & Spanning Trees",
    "subject": "Graph Theory",
    "level": "Intermediate",
    "desc": "Prim's & Kruskal's Minimum Spanning Trees, Dijkstra's algorithm, Bellman-Ford negative cycle detection, and topological sorting.",
    "coverPhoto": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "bari-graph-1",
        "title": "Dijkstra's Shortest Path Algorithm on Whiteboard",
        "ytUrl": "https://www.youtube.com/watch?v=XB4MIexjvY0",
        "ytVideoId": "XB4MIexjvY0",
        "duration": "30 mins",
        "desc": "Greedy relaxation of distances using priority queues.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "bari-graph-2",
        "title": "Bellman-Ford Algorithm & Negative Edge Weights",
        "ytUrl": "https://www.youtube.com/watch?v=FtN3BYH2Zes",
        "ytVideoId": "FtN3BYH2Zes",
        "duration": "26 mins",
        "desc": "V-1 iterations of edge relaxation and cycle identification.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-bari-trees",
    "providerId": "sir-abdulbari",
    "institution": "Algorithms Masterclass",
    "instructorName": "Abdul Bari",
    "providerCode": "BARI",
    "title": "Trees & Binary Search Trees in C/C++ by Abdul Bari",
    "subject": "Data Structures",
    "level": "Intermediate",
    "desc": "Binary Trees, BST properties, AVL Trees (LL, RR, LR, RL rotations), B-Trees, and Red-Black Trees.",
    "coverPhoto": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "bari-tree-1",
        "title": "AVL Trees: Balancing Factors & Rotations",
        "ytUrl": "https://www.youtube.com/watch?v=jDM6_TnYIqE",
        "ytVideoId": "jDM6_TnYIqE",
        "duration": "36 mins",
        "desc": "Maintaining O(log N) balance through height checks.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-bari-sorting",
    "providerId": "sir-abdulbari",
    "institution": "Algorithms Masterclass",
    "instructorName": "Abdul Bari",
    "providerCode": "BARI",
    "title": "Sorting Algorithms Demystified by Abdul Bari",
    "subject": "Sorting Algorithms",
    "level": "Beginner",
    "desc": "Bubble, Insertion, Selection, QuickSort (partition algorithm), MergeSort, HeapSort, and linear time Count/Radix Sort.",
    "coverPhoto": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "bari-sort-1",
        "title": "QuickSort Algorithm: Lomuto vs Hoare Partitioning",
        "ytUrl": "https://www.youtube.com/watch?v=7h1s2SojIRw",
        "ytVideoId": "7h1s2SojIRw",
        "duration": "28 mins",
        "desc": "Pivot selection, recursion tree, and worst-case avoidance.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-bari-greedy",
    "providerId": "sir-abdulbari",
    "institution": "Algorithms Masterclass",
    "instructorName": "Abdul Bari",
    "providerCode": "BARI",
    "title": "Greedy Technique & Huffman Coding by Abdul Bari",
    "subject": "Greedy Algorithms",
    "level": "Intermediate",
    "desc": "Greedy choice property: Fractional Knapsack, Job Sequencing with Deadlines, Optimal Merge Patterns, and Huffman Lossless Compression.",
    "coverPhoto": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "bari-greedy-1",
        "title": "Huffman Coding Compression Algorithm",
        "ytUrl": "https://www.youtube.com/watch?v=co4_ahEDCho",
        "ytVideoId": "co4_ahEDCho",
        "duration": "26 mins",
        "desc": "Variable-length prefix coding based on symbol frequency.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-3b1b-linear-algebra",
    "providerId": "sir-3blue1brown",
    "institution": "3Blue1Brown",
    "instructorName": "3Blue1Brown (Grant Sanderson)",
    "providerCode": "3B1B",
    "title": "Essence of Linear Algebra by 3Blue1Brown",
    "subject": "Visual Mathematics",
    "level": "Intermediate",
    "desc": "Geometric visualization of vectors, linear combinations, span, basis vectors, matrix transformations, determinants, dot products, and eigenvectors.",
    "coverPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "3b1b-la-1",
        "title": "Vectors, what even are they? (3Blue1Brown)",
        "ytUrl": "https://www.youtube.com/watch?v=fNk_zzaMoSs",
        "ytVideoId": "fNk_zzaMoSs",
        "duration": "10 mins",
        "desc": "Physics vs computer science vs math views on vectors.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "3b1b-la-2",
        "title": "Linear Combinations, Span, and Basis (3Blue1Brown)",
        "ytUrl": "https://www.youtube.com/watch?v=k7RM-ot2NWY",
        "ytVideoId": "k7RM-ot2NWY",
        "duration": "10 mins",
        "desc": "Basis vectors i-hat and j-hat and vector spaces.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "3b1b-la-3",
        "title": "Linear Transformations and Matrices (3Blue1Brown)",
        "ytUrl": "https://www.youtube.com/watch?v=kYB8IZa5AuE",
        "ytVideoId": "kYB8IZa5AuE",
        "duration": "11 mins",
        "desc": "Grid mapping and matrix multiplication intuition.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-3b1b-calculus",
    "providerId": "sir-3blue1brown",
    "institution": "3Blue1Brown",
    "instructorName": "3Blue1Brown (Grant Sanderson)",
    "providerCode": "3B1B",
    "title": "Essence of Calculus by 3Blue1Brown",
    "subject": "Visual Mathematics",
    "level": "Beginner",
    "desc": "Visualizing derivatives, integrals, the fundamental theorem of calculus, exponential functions, chain rule, and higher derivatives.",
    "coverPhoto": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "3b1b-calc-1",
        "title": "The Essence of Calculus (3Blue1Brown)",
        "ytUrl": "https://www.youtube.com/watch?v=WUvTyaaNkzM",
        "ytVideoId": "WUvTyaaNkzM",
        "duration": "17 mins",
        "desc": "Circle area unrolled into rings to discover derivative intuition.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-3b1b-neural-networks",
    "providerId": "sir-3blue1brown",
    "institution": "3Blue1Brown",
    "instructorName": "3Blue1Brown (Grant Sanderson)",
    "providerCode": "3B1B",
    "title": "Neural Networks & Deep Learning Visualized",
    "subject": "Deep Learning & AI",
    "level": "Intermediate",
    "desc": "What is a neural network? Visualizing weights, biases, cost functions, gradient descent, and backpropagation calculus.",
    "coverPhoto": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "3b1b-nn-1",
        "title": "But what is a neural network? (3Blue1Brown)",
        "ytUrl": "https://www.youtube.com/watch?v=aircAruvnKk",
        "ytVideoId": "aircAruvnKk",
        "duration": "19 mins",
        "desc": "Multi-layer perceptron recognizing handwritten digits.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-3b1b-differential-equations",
    "providerId": "sir-3blue1brown",
    "institution": "3Blue1Brown",
    "instructorName": "3Blue1Brown (Grant Sanderson)",
    "providerCode": "3B1B",
    "title": "Differential Equations: Solving the Universe's Equations",
    "subject": "Differential Equations",
    "level": "Advanced",
    "desc": "Pendulums, heat equation, Fourier series, wave propagation, phase space, and linear ODE systems.",
    "coverPhoto": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "3b1b-de-1",
        "title": "Differential Equations: Mechanics & Pendulums",
        "ytUrl": "https://www.youtube.com/watch?v=p_di4Zn4wz4",
        "ytVideoId": "p_di4Zn4wz4",
        "duration": "18 mins",
        "desc": "Physical laws written as relationships between derivatives.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-3b1b-cryptography",
    "providerId": "sir-3blue1brown",
    "institution": "3Blue1Brown",
    "instructorName": "3Blue1Brown (Grant Sanderson)",
    "providerCode": "3B1B",
    "title": "How Cryptography & Bitcoin Actually Work",
    "subject": "Cryptography & Math",
    "level": "Intermediate",
    "desc": "SHA-256 hash functions, digital signatures, ledger decentralization, and proof of work mathematical consensus.",
    "coverPhoto": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "3b1b-btc-1",
        "title": "How does Bitcoin actually work? (3Blue1Brown)",
        "ytUrl": "https://www.youtube.com/watch?v=bBC-nXj3U4s",
        "ytVideoId": "bBC-nXj3U4s",
        "duration": "26 mins",
        "desc": "The mathematics of cryptographic ledgers without central trust.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-3b1b-fourier",
    "providerId": "sir-3blue1brown",
    "institution": "3Blue1Brown",
    "instructorName": "3Blue1Brown (Grant Sanderson)",
    "providerCode": "3B1B",
    "title": "The Fourier Transform & Frequency Domain Visualization",
    "subject": "Signal Processing & Math",
    "level": "Advanced",
    "desc": "Winding frequencies around the complex plane, sound wave decomposition, FFT algorithms, and signal filtering.",
    "coverPhoto": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "3b1b-ft-1",
        "title": "The Remarkable Fourier Transform Visualized",
        "ytUrl": "https://www.youtube.com/watch?v=spUNpyF58BY",
        "ytVideoId": "spUNpyF58BY",
        "duration": "21 mins",
        "desc": "Decomposing complex time-series signals into pure sinusoids.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-sq-ml-fundamentals",
    "providerId": "sir-statquest",
    "institution": "StatQuest",
    "instructorName": "StatQuest with Josh Starmer",
    "providerCode": "STAT",
    "title": "Machine Learning Fundamentals with StatQuest",
    "subject": "Machine Learning",
    "level": "Beginner",
    "desc": "Josh Starmer breaks down Bias & Variance, ROC curves, AUC, Cross-Validation, and Confusion Matrices without confusing math.",
    "coverPhoto": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "sq-ml-1",
        "title": "Machine Learning: Bias and Variance Clearly Explained",
        "ytUrl": "https://www.youtube.com/watch?v=EuBBz3bI-aA",
        "ytVideoId": "EuBBz3bI-aA",
        "duration": "10 mins",
        "desc": "Underfitting (high bias) vs Overfitting (high variance).",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-sq-decision-trees",
    "providerId": "sir-statquest",
    "institution": "StatQuest",
    "instructorName": "StatQuest with Josh Starmer",
    "providerCode": "STAT",
    "title": "Decision Trees, Random Forests & AdaBoost",
    "subject": "Ensemble Learning",
    "level": "Intermediate",
    "desc": "BAM! Learn how single decision trees combine into Random Forests and AdaBoost ensemble predictors.",
    "coverPhoto": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "sq-rf-1",
        "title": "Random Forests Part 1 - Building, Using and Evaluating",
        "ytUrl": "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ",
        "ytVideoId": "J4Wdy0Wc_xQ",
        "duration": "10 mins",
        "desc": "Bagging, out-of-bag error, and feature randomness.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-sq-pca",
    "providerId": "sir-statquest",
    "institution": "StatQuest",
    "instructorName": "StatQuest with Josh Starmer",
    "providerCode": "STAT",
    "title": "Principal Component Analysis (PCA) Step-by-Step",
    "subject": "Dimensionality Reduction",
    "level": "Intermediate",
    "desc": "Dimension reduction explained visually: projections, singular vectors, eigenvalues, and scree plots.",
    "coverPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "sq-pca-1",
        "title": "Principal Component Analysis (PCA) Clearly Explained",
        "ytUrl": "https://www.youtube.com/watch?v=FgakZw6K1QQ",
        "ytVideoId": "FgakZw6K1QQ",
        "duration": "18 mins",
        "desc": "Finding optimal lines of maximum variance in high-D data.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-sq-neural-nets",
    "providerId": "sir-statquest",
    "institution": "StatQuest",
    "instructorName": "StatQuest with Josh Starmer",
    "providerCode": "STAT",
    "title": "Neural Networks & Backpropagation Step-by-Step",
    "subject": "Neural Networks",
    "level": "Intermediate",
    "desc": "Connecting basic linear regression to activation functions, multi-layer weights, chain rule, and backpropagation step-by-step.",
    "coverPhoto": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "sq-nn-1",
        "title": "Neural Networks Part 1: Inside the Black Box",
        "ytUrl": "https://www.youtube.com/watch?v=CqOfi41LfDw",
        "ytVideoId": "CqOfi41LfDw",
        "duration": "12 mins",
        "desc": "How simple curves fit complex non-linear functions.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-sq-transformers",
    "providerId": "sir-statquest",
    "institution": "StatQuest",
    "instructorName": "StatQuest with Josh Starmer",
    "providerCode": "STAT",
    "title": "Transformers & Attention Mechanism for LLMs",
    "subject": "Generative AI & LLMs",
    "level": "Advanced",
    "desc": "Self-attention, query-key-value matrices, multi-head attention, positional encodings, and the architecture powering modern GPTs.",
    "coverPhoto": "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "sq-tf-1",
        "title": "Attention is All You Need: Transformer Architecture",
        "ytUrl": "https://www.youtube.com/watch?v=zxQyTK8quyY",
        "ytVideoId": "zxQyTK8quyY",
        "duration": "20 mins",
        "desc": "Dot product attention and token context vectors.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-sq-logistic-regression",
    "providerId": "sir-statquest",
    "institution": "StatQuest",
    "instructorName": "StatQuest with Josh Starmer",
    "providerCode": "STAT",
    "title": "Logistic Regression & Maximum Likelihood",
    "subject": "Statistical Classification",
    "level": "Beginner",
    "desc": "Sigmoid curves, log-odds ratios, maximum likelihood estimation, Wald test, and deviance.",
    "coverPhoto": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "sq-lr-1",
        "title": "Logistic Regression Details Part 1: Coefficients",
        "ytUrl": "https://www.youtube.com/watch?v=vN5cNN2-HWE",
        "ytVideoId": "vN5cNN2-HWE",
        "duration": "10 mins",
        "desc": "Transforming probabilities into log(odds) lines.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-gs-dbms",
    "providerId": "sir-gatesmashers",
    "institution": "Gate Smashers",
    "instructorName": "Gate Smashers (Varun Singla Sir)",
    "providerCode": "GS",
    "title": "Complete DBMS Masterclass by Gate Smashers",
    "subject": "Database Systems",
    "level": "Beginner",
    "desc": "Varun Singla Sir covers Relational Model, Functional Dependencies, Canonical Covers, Normalization (1NF, 2NF, 3NF, BCNF), and Concurrency Control.",
    "coverPhoto": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "gs-db-1",
        "title": "Introduction to DBMS & File Systems vs DBMS",
        "ytUrl": "https://www.youtube.com/watch?v=3EJlovevfcA",
        "ytVideoId": "3EJlovevfcA",
        "duration": "14 mins",
        "desc": "Why databases matter and data redundancy elimination.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "gs-db-2",
        "title": "Functional Dependencies & Attribute Closure",
        "ytUrl": "https://www.youtube.com/watch?v=pDfy4eE6lF8",
        "ytVideoId": "pDfy4eE6lF8",
        "duration": "16 mins",
        "desc": "Finding candidate keys using Armstrong's axioms.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-gs-cn",
    "providerId": "sir-gatesmashers",
    "institution": "Gate Smashers",
    "instructorName": "Gate Smashers (Varun Singla Sir)",
    "providerCode": "GS",
    "title": "Computer Networks Complete Roadmap (Gate Smashers)",
    "subject": "Computer Networks",
    "level": "Intermediate",
    "desc": "Subnetting, VLSM, Routing algorithms (Distance Vector, Link State), TCP Congestion Control (Slow Start, AIMD), and IP Header anatomy.",
    "coverPhoto": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "gs-cn-1",
        "title": "IPv4 Addressing and Subnetting Made Easy",
        "ytUrl": "https://www.youtube.com/watch?v=VwN91x5iWiQ",
        "ytVideoId": "VwN91x5iWiQ",
        "duration": "18 mins",
        "desc": "Classful vs Classless Inter-Domain Routing (CIDR).",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-gs-os",
    "providerId": "sir-gatesmashers",
    "institution": "Gate Smashers",
    "instructorName": "Gate Smashers (Varun Singla Sir)",
    "providerCode": "GS",
    "title": "Operating Systems: CPU Scheduling & Synchronization",
    "subject": "Operating Systems",
    "level": "Intermediate",
    "desc": "Critical section problem, Peterson's algorithm, Semaphores (Mutex, Counting), Dining Philosophers, and Banker's Deadlock Avoidance.",
    "coverPhoto": "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "gs-os-1",
        "title": "Process Synchronization & Semaphores Explained",
        "ytUrl": "https://www.youtube.com/watch?v=ph2hz_o_rSU",
        "ytVideoId": "ph2hz_o_rSU",
        "duration": "15 mins",
        "desc": "Mutual exclusion, progress, and bounded waiting criteria.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-gs-toc",
    "providerId": "sir-gatesmashers",
    "institution": "Gate Smashers",
    "instructorName": "Gate Smashers (Varun Singla Sir)",
    "providerCode": "GS",
    "title": "Theory of Computation (TOC) for University & GATE",
    "subject": "Theory of Computation",
    "level": "Advanced",
    "desc": "DFA minimization, Myhill-Nerode theorem, Pumping Lemma for Regular Languages, Pushdown Automata, and Turing decidability.",
    "coverPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "gs-toc-1",
        "title": "DFA Construction Problems Made Easy",
        "ytUrl": "https://www.youtube.com/watch?v=4ZhsCJ9b7tU",
        "ytVideoId": "4ZhsCJ9b7tU",
        "duration": "16 mins",
        "desc": "Handling string ending conditions and binary divisibility.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-gs-se",
    "providerId": "sir-gatesmashers",
    "institution": "Gate Smashers",
    "instructorName": "Gate Smashers (Varun Singla Sir)",
    "providerCode": "GS",
    "title": "Software Engineering & Agile Development (Gate Smashers)",
    "subject": "Software Engineering",
    "level": "Beginner",
    "desc": "SDLC phases, Waterfall, Spiral, Agile Scrum, User Stories, Sprint Planning, Testing methodologies (Black box vs White box).",
    "coverPhoto": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "gs-se-1",
        "title": "Software Development Life Cycle (SDLC) Models",
        "ytUrl": "https://www.youtube.com/watch?v=u7bT9WqE-84",
        "ytVideoId": "u7bT9WqE-84",
        "duration": "14 mins",
        "desc": "Requirements analysis through maintenance.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-gs-discrete-math",
    "providerId": "sir-gatesmashers",
    "institution": "Gate Smashers",
    "instructorName": "Gate Smashers (Varun Singla Sir)",
    "providerCode": "GS",
    "title": "Discrete Mathematics: Logic, Set Theory & Graph Theory",
    "subject": "Discrete Mathematics",
    "level": "Intermediate",
    "desc": "Propositional and predicate calculus, relations, equivalence classes, partial order sets (Hasse diagrams), and tree colorings.",
    "coverPhoto": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "gs-dm-1",
        "title": "Equivalence Relations & Partial Order Sets (Poset)",
        "ytUrl": "https://www.youtube.com/watch?v=q6g4hT6e6vA",
        "ytVideoId": "q6g4hT6e6vA",
        "duration": "15 mins",
        "desc": "Reflexive, symmetric, and transitive verification.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-chai-javascript",
    "providerId": "sir-chaiaurcode",
    "institution": "Chai aur Code",
    "instructorName": "Chai aur Code (Hitesh Choudhary Sir)",
    "providerCode": "CHAI",
    "title": "JavaScript in Hindi: Chai aur JavaScript Master Series",
    "subject": "JavaScript",
    "level": "Beginner",
    "desc": "Hitesh Choudhary Sir's industry-famous series: closures, execution contexts, call stack, prototype inheritance, DOM events, Promises, and modern ES6.",
    "coverPhoto": "https://images.unsplash.com/photo-1579468118864-ddb9f074d3d9?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "chai-js-1",
        "title": "JavaScript Execution Context & Call Stack (Chai aur Code)",
        "ytUrl": "https://www.youtube.com/watch?v=ByhtOfLGdaU",
        "ytVideoId": "ByhtOfLGdaU",
        "duration": "28 mins",
        "desc": "Memory creation phase and execution phase step-by-step.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "chai-js-2",
        "title": "DOM Manipulation & Events in JavaScript",
        "ytUrl": "https://www.youtube.com/watch?v=_TjtAyMkiTI",
        "ytVideoId": "_TjtAyMkiTI",
        "duration": "32 mins",
        "desc": "Event bubbling, capturing, and practical project builds.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-chai-react",
    "providerId": "sir-chaiaurcode",
    "institution": "Chai aur Code",
    "instructorName": "Chai aur Code (Hitesh Choudhary Sir)",
    "providerCode": "CHAI",
    "title": "React JS in Hindi: Chai aur React with Projects",
    "subject": "React & Frontend",
    "level": "Intermediate",
    "desc": "Building mental models in React: custom hooks, props, Tailwind integration, Context API, Redux Toolkit, and currency converter / password generator apps.",
    "coverPhoto": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "chai-react-1",
        "title": "Why React? Virtual DOM & Reconciliation Fiber",
        "ytUrl": "https://www.youtube.com/watch?v=kAOuj68hpFs",
        "ytVideoId": "kAOuj68hpFs",
        "duration": "25 mins",
        "desc": "Understanding diffing algorithms and why UI updates trigger re-renders.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-chai-backend",
    "providerId": "sir-chaiaurcode",
    "institution": "Chai aur Code",
    "instructorName": "Chai aur Code (Hitesh Choudhary Sir)",
    "providerCode": "CHAI",
    "title": "Production-Grade Node.js & Express Backend Series",
    "subject": "Backend Engineering",
    "level": "Advanced",
    "desc": "Production video hosting backend: MongoDB aggregation pipelines, JWT authentication, access & refresh tokens, Cloudinary file uploads, and middleware.",
    "coverPhoto": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "chai-be-1",
        "title": "Professional Express Project Setup & Prettier Setup",
        "ytUrl": "https://www.youtube.com/watch?v=9B4CVd3U3vM",
        "ytVideoId": "9B4CVd3U3vM",
        "duration": "35 mins",
        "desc": "Industry standard folder structuring and async error handler wrappers.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-chai-python",
    "providerId": "sir-chaiaurcode",
    "institution": "Chai aur Code",
    "instructorName": "Chai aur Code (Hitesh Choudhary Sir)",
    "providerCode": "CHAI",
    "title": "Python in Hindi: Chai aur Python Zero to Hero",
    "subject": "Python Programming",
    "level": "Beginner",
    "desc": "Python internal memory management, mutable vs immutable reference counts, decorators, generators, and building CLI tools.",
    "coverPhoto": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "chai-py-1",
        "title": "How Python Works Behind the Scenes (Bytecode & PVM)",
        "ytUrl": "https://www.youtube.com/watch?v=f7Bf-b88P-E",
        "ytVideoId": "f7Bf-b88P-E",
        "duration": "30 mins",
        "desc": "Python virtual machine and memory allocation model.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-chai-nextjs",
    "providerId": "sir-chaiaurcode",
    "institution": "Chai aur Code",
    "instructorName": "Chai aur Code (Hitesh Choudhary Sir)",
    "providerCode": "CHAI",
    "title": "Next.js Full Stack App Router Masterclass",
    "subject": "Next.js Fullstack",
    "level": "Advanced",
    "desc": "Next.js App Router, Server Actions, Zod validation, NextAuth v5 authentication, Resend email APIs, and MongoDB integrations.",
    "coverPhoto": "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "chai-next-1",
        "title": "Full Stack Next.js with Server Actions & Database",
        "ytUrl": "https://www.youtube.com/watch?v=OgSnZqA0BwQ",
        "ytVideoId": "OgSnZqA0BwQ",
        "duration": "40 mins",
        "desc": "Building scalable production applications with Next.js App Router.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-chai-git",
    "providerId": "sir-chaiaurcode",
    "institution": "Chai aur Code",
    "instructorName": "Chai aur Code (Hitesh Choudhary Sir)",
    "providerCode": "CHAI",
    "title": "Git & GitHub Masterclass: Production Workflows",
    "subject": "DevOps & Git",
    "level": "Beginner",
    "desc": "Git rebase vs merge, cherry-pick, stash, pull request etiquette, resolving merge conflicts, and contributing to open-source projects.",
    "coverPhoto": "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "chai-git-1",
        "title": "Git and GitHub Full Course in Hindi (Chai aur Code)",
        "ytUrl": "https://www.youtube.com/watch?v=apGV9Kg7ics",
        "ytVideoId": "apGV9Kg7ics",
        "duration": "45 mins",
        "desc": "Real branch management and pull request workflows.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-trav-react",
    "providerId": "sir-traversy",
    "institution": "Traversy Media",
    "instructorName": "Traversy Media (Brad Traversy)",
    "providerCode": "TRAV",
    "title": "React Front to Back: Modern React & Hooks",
    "subject": "Frontend Engineering",
    "level": "Beginner",
    "desc": "Brad Traversy's famous intro: functional components, state, props, useEffect, custom context, and building full CRUD applications.",
    "coverPhoto": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "trav-react-1",
        "title": "React Crash Course for Beginners (Traversy Media)",
        "ytUrl": "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
        "ytVideoId": "w7ejDZ8SWv8",
        "duration": "1 hour 45 mins",
        "desc": "Build a modern task tracker web application in React.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-trav-node",
    "providerId": "sir-traversy",
    "institution": "Traversy Media",
    "instructorName": "Traversy Media (Brad Traversy)",
    "providerCode": "TRAV",
    "title": "Node.js API Masterclass with Express & MongoDB",
    "subject": "Backend Development",
    "level": "Intermediate",
    "desc": "Build a production RESTful API: custom controllers, Mongoose schemas, advanced querying (pagination, filtering, geocoding), and JWT auth.",
    "coverPhoto": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "trav-node-1",
        "title": "Node.js & Express Crash Course (Traversy Media)",
        "ytUrl": "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
        "ytVideoId": "fBNz5xF-Kx4",
        "duration": "1 hour 30 mins",
        "desc": "HTTP modules, path routing, and Express middleware.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-trav-html-css",
    "providerId": "sir-traversy",
    "institution": "Traversy Media",
    "instructorName": "Traversy Media (Brad Traversy)",
    "providerCode": "TRAV",
    "title": "Modern HTML5 & CSS3 From The Beginning",
    "subject": "Web Foundations",
    "level": "Beginner",
    "desc": "Semantic tags, forms, tables, CSS variables, Flexbox layouts, CSS Grid systems, animations, and deploying on Netlify.",
    "coverPhoto": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "trav-html-1",
        "title": "HTML5 Crash Course For Absolute Beginners",
        "ytUrl": "https://www.youtube.com/watch?v=UB1O30fR-EE",
        "ytVideoId": "UB1O30fR-EE",
        "duration": "1 hour",
        "desc": "HTML syntax, elements, headings, paragraphs, and links.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-trav-tailwind",
    "providerId": "sir-traversy",
    "institution": "Traversy Media",
    "instructorName": "Traversy Media (Brad Traversy)",
    "providerCode": "TRAV",
    "title": "Tailwind CSS Crash Course: Utility-First Styling",
    "subject": "CSS Frameworks",
    "level": "Beginner",
    "desc": "Master utility classes: flex, grid, spacing, typography, hover/focus states, dark mode variants, and responsive breakpoints.",
    "coverPhoto": "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "trav-tw-1",
        "title": "Tailwind CSS Crash Course (Traversy Media)",
        "ytUrl": "https://www.youtube.com/watch?v=dFgzv2bhCA8",
        "ytVideoId": "dFgzv2bhCA8",
        "duration": "1 hour 20 mins",
        "desc": "Build a responsive landing page without writing custom CSS.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-trav-mern",
    "providerId": "sir-traversy",
    "institution": "Traversy Media",
    "instructorName": "Traversy Media (Brad Traversy)",
    "providerCode": "TRAV",
    "title": "MERN Stack E-Commerce from Scratch (Traversy)",
    "subject": "Full-Stack Web",
    "level": "Advanced",
    "desc": "Complete eCommerce platform: Redux Toolkit state management, PayPal payment integration, admin product dashboards, and order tracking.",
    "coverPhoto": "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "trav-mern-1",
        "title": "MERN Stack Crash Course: Full Tutorial",
        "ytUrl": "https://www.youtube.com/watch?v=-0exw-9YJBo",
        "ytVideoId": "-0exw-9YJBo",
        "duration": "2 hours",
        "desc": "Connecting React frontend with Express backend and Mongo database.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-trav-typescript",
    "providerId": "sir-traversy",
    "institution": "Traversy Media",
    "instructorName": "Traversy Media (Brad Traversy)",
    "providerCode": "TRAV",
    "title": "TypeScript Crash Course for JavaScript Developers",
    "subject": "TypeScript",
    "level": "Intermediate",
    "desc": "Static type safety: primitive types, union types, interfaces, type aliases, generics, enums, and compiling TS to JS.",
    "coverPhoto": "https://images.unsplash.com/photo-1516116211227-bbc988d8b13d?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "trav-ts-1",
        "title": "TypeScript Crash Course (Traversy Media)",
        "ytUrl": "https://www.youtube.com/watch?v=BCg4U1FzODs",
        "ytVideoId": "BCg4U1FzODs",
        "duration": "50 mins",
        "desc": "Eliminating runtime type bugs using compile-time TypeScript checks.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-ninja-flutter",
    "providerId": "sir-netninja",
    "institution": "The Net Ninja",
    "instructorName": "The Net Ninja (Shaun Pelling)",
    "providerCode": "NN",
    "title": "Flutter & Dart Mobile App Masterclass (Net Ninja)",
    "subject": "Mobile Engineering",
    "level": "Intermediate",
    "desc": "Shaun Pelling teaches Google Flutter: stateless vs stateful widgets, layout rows/columns, async Dart, and building iOS & Android native apps.",
    "coverPhoto": "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "ninja-fl-1",
        "title": "Flutter Tutorial for Beginners #1 - Intro",
        "ytUrl": "https://www.youtube.com/watch?v=1ukSR1GRtMU",
        "ytVideoId": "1ukSR1GRtMU",
        "duration": "10 mins",
        "desc": "Setting up Flutter SDK and compiling first mobile screen.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-ninja-vue",
    "providerId": "sir-netninja",
    "institution": "The Net Ninja",
    "instructorName": "The Net Ninja (Shaun Pelling)",
    "providerCode": "NN",
    "title": "Vue 3 & Composition API Complete Tutorial",
    "subject": "Frontend Frameworks",
    "level": "Beginner",
    "desc": "Vue 3 reactivity, template syntax, v-model, v-for, components, props, custom events, Vue Router, and Composition API (ref, reactive).",
    "coverPhoto": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "ninja-vue-1",
        "title": "Vue 3 Tutorial for Beginners #1 - Intro to Vue",
        "ytUrl": "https://www.youtube.com/watch?v=YrxBCBibVo0",
        "ytVideoId": "YrxBCBibVo0",
        "duration": "12 mins",
        "desc": "Vue component architecture and clean progressive enhancement.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-ninja-svelte",
    "providerId": "sir-netninja",
    "institution": "The Net Ninja",
    "instructorName": "The Net Ninja (Shaun Pelling)",
    "providerCode": "NN",
    "title": "Svelte & SvelteKit: The No-Virtual-DOM Framework",
    "subject": "Modern Frontend",
    "level": "Intermediate",
    "desc": "Compile-time UI: reactive declarations with $: syntax, stores, component bindings, transitions, and SvelteKit file-based routing.",
    "coverPhoto": "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "ninja-svelte-1",
        "title": "Svelte Tutorial for Beginners #1 - Introduction",
        "ytUrl": "https://www.youtube.com/watch?v=ujbEHBfLECc",
        "ytVideoId": "ujbEHBfLECc",
        "duration": "10 mins",
        "desc": "Why compiling UI components at build time outperforms virtual DOM.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-ninja-firebase",
    "providerId": "sir-netninja",
    "institution": "The Net Ninja",
    "instructorName": "The Net Ninja (Shaun Pelling)",
    "providerCode": "NN",
    "title": "Google Firebase & Firestore Full Stack Masterclass",
    "subject": "Cloud & Serverless",
    "level": "Intermediate",
    "desc": "Cloud Firestore NoSQL real-time listeners, Firebase Authentication (OAuth, Email), Cloud Storage, and Security Rules.",
    "coverPhoto": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "ninja-fb-1",
        "title": "Firebase & Firestore Tutorial #1 - What is Firebase?",
        "ytUrl": "https://www.youtube.com/watch?v=9zdvmgGsww0",
        "ytVideoId": "9zdvmgGsww0",
        "duration": "12 mins",
        "desc": "Setting up real-time serverless database backends.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-ninja-graphql",
    "providerId": "sir-netninja",
    "institution": "The Net Ninja",
    "instructorName": "The Net Ninja (Shaun Pelling)",
    "providerCode": "NN",
    "title": "GraphQL & Apollo Client Full Course (Net Ninja)",
    "subject": "API Design",
    "level": "Advanced",
    "desc": "Over-fetching and under-fetching elimination: schema definition language, queries, mutations, resolvers, and Apollo Client caching.",
    "coverPhoto": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "ninja-gql-1",
        "title": "GraphQL Tutorial #1 - Introduction to GraphQL",
        "ytUrl": "https://www.youtube.com/watch?v=ed8SzALpx1Q",
        "ytVideoId": "ed8SzALpx1Q",
        "duration": "14 mins",
        "desc": "Why GraphQL declarative data fetching improves mobile APIs.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-ninja-typescript",
    "providerId": "sir-netninja",
    "institution": "The Net Ninja",
    "instructorName": "The Net Ninja (Shaun Pelling)",
    "providerCode": "NN",
    "title": "TypeScript Masterclass: Strict Types to Generics",
    "subject": "TypeScript",
    "level": "Intermediate",
    "desc": "DOM typecasting, interfaces vs types, classes, access modifiers (public, private, readonly), generics, and enums in real projects.",
    "coverPhoto": "https://images.unsplash.com/photo-1516116211227-bbc988d8b13d?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "ninja-ts-1",
        "title": "TypeScript Tutorial #1 - Introduction & Setup",
        "ytUrl": "https://www.youtube.com/watch?v=2pZmKW9-I_k",
        "ytVideoId": "2pZmKW9-I_k",
        "duration": "10 mins",
        "desc": "Configuring tsconfig.json and real-time watching.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-crash-cs",
    "providerId": "sir-crashcourse",
    "institution": "CrashCourse",
    "instructorName": "CrashCourse (Hank Green & John Green)",
    "providerCode": "CRASH",
    "title": "CrashCourse Computer Science with Carrie Anne Philbin",
    "subject": "Computer Science",
    "level": "Beginner",
    "desc": "From early mechanical punch cards through logic gates, CPUs, registers, operating systems, graphics, internet, cryptography, and artificial intelligence.",
    "coverPhoto": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "crash-cs-1",
        "title": "Early Computing: Crash Course Computer Science #1",
        "ytUrl": "https://www.youtube.com/watch?v=O5nskjZ_GoI",
        "ytVideoId": "O5nskjZ_GoI",
        "duration": "12 mins",
        "desc": "Abacus, Charles Babbage's Difference Engine, and Ada Lovelace.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "crash-cs-2",
        "title": "Electronic Computing & Transistors - Crash Course #2",
        "ytUrl": "https://www.youtube.com/watch?v=LN0ucKNX0hc",
        "ytVideoId": "LN0ucKNX0hc",
        "duration": "11 mins",
        "desc": "Electromechanical relays, vacuum tubes, and silicon transistors.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-crash-physics",
    "providerId": "sir-crashcourse",
    "institution": "CrashCourse",
    "instructorName": "CrashCourse (Hank Green & John Green)",
    "providerCode": "CRASH",
    "title": "CrashCourse Physics with Dr. Shini Somara",
    "subject": "Physics",
    "level": "Beginner",
    "desc": "Motion in a straight line, derivatives in physics, circular motion, work & energy, collisions, rotational inertia, thermodynamics, and optics.",
    "coverPhoto": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "crash-phys-1",
        "title": "Motion in a Straight Line: Crash Course Physics #1",
        "ytUrl": "https://www.youtube.com/watch?v=ZM8ECpBQS5x",
        "ytVideoId": "ZM8ECpBQS5x",
        "duration": "10 mins",
        "desc": "Position, velocity, and acceleration kinematics.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-crash-chemistry",
    "providerId": "sir-crashcourse",
    "institution": "CrashCourse",
    "instructorName": "CrashCourse (Hank Green & John Green)",
    "providerCode": "CRASH",
    "title": "CrashCourse Chemistry with Hank Green",
    "subject": "Chemistry",
    "level": "Beginner",
    "desc": "Hank Green explains atomic structure, periodic table trends, stoichiometry, enthalpy, entropy, ideal gases, and chemical kinetics.",
    "coverPhoto": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "crash-chem-1",
        "title": "The Nucleus & Periodic Table: Crash Course Chemistry #1",
        "ytUrl": "https://www.youtube.com/watch?v=FSyAehMdpyI",
        "ytVideoId": "FSyAehMdpyI",
        "duration": "11 mins",
        "desc": "Protons, neutrons, atomic mass, and Mendeleev's periodic genius.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-crash-biology",
    "providerId": "sir-crashcourse",
    "institution": "CrashCourse",
    "instructorName": "CrashCourse (Hank Green & John Green)",
    "providerCode": "CRASH",
    "title": "CrashCourse Biology: Life & Molecular Machines",
    "subject": "Biology",
    "level": "Beginner",
    "desc": "Carbon chemistry, cell membranes, photosynthesis, cellular energy (ATP), DNA structure, mitosis, meiosis, and heredity.",
    "coverPhoto": "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "crash-bio-1",
        "title": "That's Why Carbon is a Tramp: Crash Course Biology #1",
        "ytUrl": "https://www.youtube.com/watch?v=QnQe0xW_JY4",
        "ytVideoId": "QnQe0xW_JY4",
        "duration": "12 mins",
        "desc": "Why carbon's 4 valence electrons enable all biological complexity.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-crash-astronomy",
    "providerId": "sir-crashcourse",
    "institution": "CrashCourse",
    "instructorName": "CrashCourse (Hank Green & John Green)",
    "providerCode": "CRASH",
    "title": "CrashCourse Astronomy with Phil Plait",
    "subject": "Astronomy",
    "level": "Beginner",
    "desc": "Telescopes, naked-eye sky observation, the Solar System, the Sun, stellar lifecycles, supernovae, black holes, and the Big Bang.",
    "coverPhoto": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "crash-astro-1",
        "title": "Introduction to Astronomy: Crash Course Astronomy #1",
        "ytUrl": "https://www.youtube.com/watch?v=0rHUDWjR5gg",
        "ytVideoId": "0rHUDWjR5gg",
        "duration": "12 mins",
        "desc": "How humans measure distance and time across the cosmos.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-crash-psychology",
    "providerId": "sir-crashcourse",
    "institution": "CrashCourse",
    "instructorName": "CrashCourse (Hank Green & John Green)",
    "providerCode": "CRASH",
    "title": "CrashCourse Psychology with Hank Green",
    "subject": "Psychology",
    "level": "Beginner",
    "desc": "The brain, nervous system, memory formation, cognitive biases, perception, developmental psychology, and psychological research methods.",
    "coverPhoto": "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "crash-psych-1",
        "title": "Meet Your Master - Getting to Know Your Brain",
        "ytUrl": "https://www.youtube.com/watch?v=vo4pMVb0R6M",
        "ytVideoId": "vo4pMVb0R6M",
        "duration": "10 mins",
        "desc": "Neurons, synapses, neurotransmitters, and central nervous architecture.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-bro-python",
    "providerId": "sir-brocode",
    "institution": "Bro Code",
    "instructorName": "Bro Code",
    "providerCode": "BRO",
    "title": "Python Full Course for Free (12 Hours) by Bro Code",
    "subject": "Python Programming",
    "level": "Beginner",
    "desc": "From zero programming knowledge to building real games and applications in Python: variables, loops, OOP, file handling, and GUI widgets.",
    "coverPhoto": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "bro-py-1",
        "title": "Python Full Course for Free [12 Hours Tutorial]",
        "ytUrl": "https://www.youtube.com/watch?v=IXK_pA0wT8g",
        "ytVideoId": "IXK_pA0wT8g",
        "duration": "12 hours",
        "desc": "Comprehensive step-by-step masterclass covering every Python concept.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-bro-cpp",
    "providerId": "sir-brocode",
    "institution": "Bro Code",
    "instructorName": "Bro Code",
    "providerCode": "BRO",
    "title": "C++ Full Course for Beginners (Bro Code)",
    "subject": "C++ Programming",
    "level": "Beginner",
    "desc": "Variables, pointers, references, memory addresses, dynamic memory (new/delete), classes, inheritance, constructors, and polymorphism in C++.",
    "coverPhoto": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "bro-cpp-1",
        "title": "C++ Full Course for Free (10 Hours)",
        "ytUrl": "https://www.youtube.com/watch?v=-TkoO8ZNYEQ",
        "ytVideoId": "-TkoO8ZNYEQ",
        "duration": "10 hours",
        "desc": "Master C++ syntax, memory pointers, and object-oriented architecture.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-bro-java",
    "providerId": "sir-brocode",
    "institution": "Bro Code",
    "instructorName": "Bro Code",
    "providerCode": "BRO",
    "title": "Java Full Course for Free (Bro Code)",
    "subject": "Java Programming",
    "level": "Beginner",
    "desc": "Java Virtual Machine, object oriented design, encapsulation, inheritance, abstract classes, interfaces, exception handling, and multithreading.",
    "coverPhoto": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "bro-java-1",
        "title": "Java Full Course for Free (12 Hours)",
        "ytUrl": "https://www.youtube.com/watch?v=xk4_1vDrzzo",
        "ytVideoId": "xk4_1vDrzzo",
        "duration": "12 hours",
        "desc": "Complete Java programming course from basic types to graphical apps.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-bro-csharp",
    "providerId": "sir-brocode",
    "institution": "Bro Code",
    "instructorName": "Bro Code",
    "providerCode": "BRO",
    "title": "C# Full Course for Beginners (Bro Code)",
    "subject": "C# Programming",
    "level": "Beginner",
    "desc": "C# language features, .NET framework, LINQ, lambda expressions, generics, properties, and building desktop & Unity game code.",
    "coverPhoto": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "bro-cs-1",
        "title": "C# Full Course for Free (10 Hours)",
        "ytUrl": "https://www.youtube.com/watch?v=M576WGiDBdQ",
        "ytVideoId": "M576WGiDBdQ",
        "duration": "10 hours",
        "desc": "All fundamental and object-oriented features of modern C#.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-bro-javascript",
    "providerId": "sir-brocode",
    "institution": "Bro Code",
    "instructorName": "Bro Code",
    "providerCode": "BRO",
    "title": "JavaScript Full Course for Beginners (Bro Code)",
    "subject": "JavaScript",
    "level": "Beginner",
    "desc": "Variables, DOM manipulation, ES6 arrow functions, array methods (map, filter, reduce), async/await, and building browser games.",
    "coverPhoto": "https://images.unsplash.com/photo-1579468118864-ddb9f074d3d9?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "bro-js-1",
        "title": "JavaScript Full Course for Free (12 Hours)",
        "ytUrl": "https://www.youtube.com/watch?v=lfmg-EJ8gm4",
        "ytVideoId": "lfmg-EJ8gm4",
        "duration": "12 hours",
        "desc": "Complete hands-on JavaScript tutorial with interactive browser projects.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-bro-html-css",
    "providerId": "sir-brocode",
    "institution": "Bro Code",
    "instructorName": "Bro Code",
    "providerCode": "BRO",
    "title": "HTML & CSS Full Course for Beginners (Bro Code)",
    "subject": "Web Foundations",
    "level": "Beginner",
    "desc": "Structuring pages, semantic tags, forms, tables, flexbox, grid, animations, and building responsive portfolio websites.",
    "coverPhoto": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "bro-html-1",
        "title": "HTML & CSS Full Course - Beginner to Pro",
        "ytUrl": "https://www.youtube.com/watch?v=HGTJBPNC-Gw",
        "ytVideoId": "HGTJBPNC-Gw",
        "duration": "10 hours",
        "desc": "Everything you need to master styling and structuring web pages.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-kunal-dsa",
    "providerId": "sir-kunal",
    "institution": "Kunal Kushwaha",
    "instructorName": "Kunal Kushwaha",
    "providerCode": "KUN",
    "title": "Complete Java + DSA Bootcamp by Kunal Kushwaha",
    "subject": "DSA in Java",
    "level": "Intermediate",
    "desc": "Kunal Kushwaha's famous open-source Java bootcamp: recursion, dynamic programming, trees, heaps, binary search on answers, and LeetCode problem solving.",
    "coverPhoto": "https://images.unsplash.com/photo-1516116211227-bbc988d8b13d?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "kunal-dsa-1",
        "title": "Binary Search Explained: Time Complexity & LeetCode",
        "ytUrl": "https://www.youtube.com/watch?v=f6UU7V3szVw",
        "ytVideoId": "f6UU7V3szVw",
        "duration": "1 hour 30 mins",
        "desc": "Floor/ceiling of numbers, infinite arrays, and binary search patterns.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-kunal-devops",
    "providerId": "sir-kunal",
    "institution": "Kunal Kushwaha",
    "instructorName": "Kunal Kushwaha",
    "providerCode": "KUN",
    "title": "Complete DevOps Bootcamp: Linux, Docker, K8s & CI/CD",
    "subject": "DevOps & Cloud Native",
    "level": "Advanced",
    "desc": "Comprehensive roadmap: Bash scripting, networking, Docker containerization, Kubernetes orchestrations, Helm, Terraform, and GitHub Actions.",
    "coverPhoto": "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "kunal-devops-1",
        "title": "Complete DevOps Bootcamp Introduction",
        "ytUrl": "https://www.youtube.com/watch?v=Wvf0mBNGjXY",
        "ytVideoId": "Wvf0mBNGjXY",
        "duration": "1 hour",
        "desc": "Understanding the role of DevOps and modern cloud native engineering.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-kunal-git",
    "providerId": "sir-kunal",
    "institution": "Kunal Kushwaha",
    "instructorName": "Kunal Kushwaha",
    "providerCode": "KUN",
    "title": "Complete Git and GitHub Tutorial with Real Projects",
    "subject": "Version Control",
    "level": "Beginner",
    "desc": "From basic commits to managing complex open source repositories: branching, rebasing, squashing commits, and pull request workflows.",
    "coverPhoto": "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "kunal-git-1",
        "title": "Git and GitHub Tutorial For Beginners (Kunal Kushwaha)",
        "ytUrl": "https://www.youtube.com/watch?v=apGV9Kg7ics",
        "ytVideoId": "apGV9Kg7ics",
        "duration": "1 hour 45 mins",
        "desc": "Everything you need to know about Git and open source contributions.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-kunal-recursion",
    "providerId": "sir-kunal",
    "institution": "Kunal Kushwaha",
    "instructorName": "Kunal Kushwaha",
    "providerCode": "KUN",
    "title": "Mastering Recursion & Backtracking by Kunal Kushwaha",
    "subject": "Algorithms",
    "level": "Intermediate",
    "desc": "Recursion trees, base condition formulation, subset generation, permutations, N-Queens problem, and Sudoku solver algorithms.",
    "coverPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "kunal-rec-1",
        "title": "Recursion for Beginners: Recursion Tree Visuals",
        "ytUrl": "https://www.youtube.com/watch?v=M2uO2nMT0Bk",
        "ytVideoId": "M2uO2nMT0Bk",
        "duration": "1 hour 20 mins",
        "desc": "Understanding call stack frames and unwinding states.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-kunal-oop",
    "providerId": "sir-kunal",
    "institution": "Kunal Kushwaha",
    "instructorName": "Kunal Kushwaha",
    "providerCode": "KUN",
    "title": "Object-Oriented Programming (OOP) in Java",
    "subject": "Java & OOP",
    "level": "Beginner",
    "desc": "Classes, objects, constructors, this & super keywords, four pillars of OOP (Encapsulation, Abstraction, Inheritance, Polymorphism), and access controls.",
    "coverPhoto": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "kunal-oop-1",
        "title": "OOP 1: Introduction, Concepts & Classes in Java",
        "ytUrl": "https://www.youtube.com/watch?v=BSVKUk58Kwg",
        "ytVideoId": "BSVKUk58Kwg",
        "duration": "1 hour 15 mins",
        "desc": "Understanding objects as heap allocations and references.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-apna-cpp",
    "providerId": "sir-apnacollege",
    "institution": "Apna College",
    "instructorName": "Apna College (Shradha Didi & Aman Sir)",
    "providerCode": "APNA",
    "title": "Complete C++ DSA Course by Shradha Khapra",
    "subject": "C++ & Data Structures",
    "level": "Beginner",
    "desc": "Shradha Didi's comprehensive C++ DSA placement course: loops, functions, arrays, vectors, binary search, linked lists, stacks, queues, and trees.",
    "coverPhoto": "https://images.unsplash.com/photo-1516116211227-bbc988d8b13d?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "apna-cpp-1",
        "title": "C++ Full Course | C++ Tutorial for Beginners (Shradha Didi)",
        "ytUrl": "https://www.youtube.com/watch?v=z9bZufPHFLU",
        "ytVideoId": "z9bZufPHFLU",
        "duration": "10 hours",
        "desc": "Complete foundational programming in C++ for college placements.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-apna-web",
    "providerId": "sir-apnacollege",
    "institution": "Apna College",
    "instructorName": "Apna College (Shradha Didi & Aman Sir)",
    "providerCode": "APNA",
    "title": "Full Stack Web Development Alpha: HTML, CSS & JS",
    "subject": "Full-Stack Web",
    "level": "Beginner",
    "desc": "Complete web development series: semantic HTML, responsive CSS Grid, JavaScript DOM manipulation, APIs, Node.js, Express, and MongoDB database projects.",
    "coverPhoto": "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "apna-web-1",
        "title": "Web Development Full Course (HTML, CSS, JS) - Apna College",
        "ytUrl": "https://www.youtube.com/watch?v=l1EssrLxt7E",
        "ytVideoId": "l1EssrLxt7E",
        "duration": "11 hours",
        "desc": "Learn to build modern responsive websites from scratch.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-apna-java",
    "providerId": "sir-apnacollege",
    "institution": "Apna College",
    "instructorName": "Apna College (Shradha Didi & Aman Sir)",
    "providerCode": "APNA",
    "title": "Java + DSA Placement Course by Apna College",
    "subject": "Java & Data Structures",
    "level": "Intermediate",
    "desc": "Java fundamentals, bit manipulation, recursion, divide and conquer, back-tracking, ArrayLists, LinkedLists, Binary Trees, and Tries.",
    "coverPhoto": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "apna-java-1",
        "title": "Java Full Course in Hindi | Java Tutorial (Apna College)",
        "ytUrl": "https://www.youtube.com/watch?v=yRpLlJmRo2w",
        "ytVideoId": "yRpLlJmRo2w",
        "duration": "8 hours",
        "desc": "Complete Java syntax, OOP, and data structure algorithms.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-apna-python",
    "providerId": "sir-apnacollege",
    "institution": "Apna College",
    "instructorName": "Apna College (Shradha Didi & Aman Sir)",
    "providerCode": "APNA",
    "title": "Python for Beginners Full Course (Apna College)",
    "subject": "Python Programming",
    "level": "Beginner",
    "desc": "Python variables, strings, conditional logic, loops, lists, tuples, sets, dictionaries, functions, and file I/O operations.",
    "coverPhoto": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "apna-py-1",
        "title": "Python Full Course - Learn Python in 8 Hours",
        "ytUrl": "https://www.youtube.com/watch?v=ERCMXc8x7mc",
        "ytVideoId": "ERCMXc8x7mc",
        "duration": "8 hours",
        "desc": "Comprehensive step-by-step tutorial on Python fundamentals.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-apna-sql",
    "providerId": "sir-apnacollege",
    "institution": "Apna College",
    "instructorName": "Apna College (Shradha Didi & Aman Sir)",
    "providerCode": "APNA",
    "title": "Complete SQL and Database Placement Course",
    "subject": "Database & SQL",
    "level": "Beginner",
    "desc": "SQL queries, aggregate functions, group by, joins, subqueries, primary/foreign keys, database views, and interview questions.",
    "coverPhoto": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "apna-sql-1",
        "title": "SQL Full Course in One Video | DBMS & MySQL",
        "ytUrl": "https://www.youtube.com/watch?v=hlGoQC332VM",
        "ytVideoId": "hlGoQC332VM",
        "duration": "4 hours",
        "desc": "Master relational database management and complex queries.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-pw-mechanics",
    "providerId": "sir-physicswallah",
    "institution": "Physics Wallah",
    "instructorName": "Physics Wallah (Alakh Pandey Sir)",
    "providerCode": "PW",
    "title": "Complete Mechanics for Class 11 & JEE/NEET (PW)",
    "subject": "Physics Mechanics",
    "level": "Beginner",
    "desc": "Alakh Pandey Sir's legendary whiteboard lectures: Newton's Laws of Motion (NLM), Friction, Work Power Energy, and Center of Mass.",
    "coverPhoto": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "pw-mech-1",
        "title": "Newton's Laws of Motion 01: First Law & Inertia (PW)",
        "ytUrl": "https://www.youtube.com/watch?v=wWnfJ0-xXRE",
        "ytVideoId": "wWnfJ0-xXRE",
        "duration": "1 hour",
        "desc": "Inertia, free body diagrams (FBD), and tension forces.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-pw-electrostatics",
    "providerId": "sir-physicswallah",
    "institution": "Physics Wallah",
    "instructorName": "Physics Wallah (Alakh Pandey Sir)",
    "providerCode": "PW",
    "title": "Electrostatics & Electric Fields by Alakh Pandey",
    "subject": "Physics Electromagnetism",
    "level": "Intermediate",
    "desc": "Coulomb's Law, Electric Field Lines, Electric Dipole, Gauss's Theorem and its applications, Electric Potential, and Capacitors.",
    "coverPhoto": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "pw-elec-1",
        "title": "Electrostatics 01: Electric Charges & Coulomb's Law",
        "ytUrl": "https://www.youtube.com/watch?v=3omwHv3Cmog",
        "ytVideoId": "3omwHv3Cmog",
        "duration": "1 hour 15 mins",
        "desc": "Quantization of charge and electrostatic force vectors.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-pw-optics",
    "providerId": "sir-physicswallah",
    "institution": "Physics Wallah",
    "instructorName": "Physics Wallah (Alakh Pandey Sir)",
    "providerCode": "PW",
    "title": "Ray Optics & Optical Instruments by Physics Wallah",
    "subject": "Physics Optics",
    "level": "Intermediate",
    "desc": "Reflection at spherical surfaces, Snell's law of refraction, total internal reflection (TIR), thin lens formula, prisms, and microscopes.",
    "coverPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "pw-opt-1",
        "title": "Ray Optics 01: Reflection of Light & Spherical Mirrors",
        "ytUrl": "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
        "ytVideoId": "w7ejDZ8SWv8",
        "duration": "1 hour 20 mins",
        "desc": "Mirror formula and sign convention derivations.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-pw-current",
    "providerId": "sir-physicswallah",
    "institution": "Physics Wallah",
    "instructorName": "Physics Wallah (Alakh Pandey Sir)",
    "providerCode": "PW",
    "title": "Current Electricity & Circuit Laws (Physics Wallah)",
    "subject": "Physics Electricity",
    "level": "Intermediate",
    "desc": "Drift velocity, Ohm's law, temperature dependence, Kirchhoff's current & voltage laws (KCL/KVL), Wheatstone bridge, and potentiometers.",
    "coverPhoto": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "pw-curr-1",
        "title": "Current Electricity 01: Electric Current & Drift Velocity",
        "ytUrl": "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
        "ytVideoId": "fBNz5xF-Kx4",
        "duration": "1 hour 10 mins",
        "desc": "Electron mobility, relaxation time, and microscopic Ohm's law.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-pw-thermo",
    "providerId": "sir-physicswallah",
    "institution": "Physics Wallah",
    "instructorName": "Physics Wallah (Alakh Pandey Sir)",
    "providerCode": "PW",
    "title": "Thermodynamics & Kinetic Theory of Gases (PW)",
    "subject": "Thermodynamics",
    "level": "Intermediate",
    "desc": "Zeroth, First & Second laws of thermodynamics, isothermal/adiabatic processes, Carnot cycle, heat engines, and entropy.",
    "coverPhoto": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "pw-therm-1",
        "title": "Thermodynamics 01: Work Done, Heat & First Law",
        "ytUrl": "https://www.youtube.com/watch?v=bka20Q9nwnM",
        "ytVideoId": "bka20Q9nwnM",
        "duration": "1 hour 15 mins",
        "desc": "P-V diagrams, indicator diagrams, and cyclic process work.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-stanford-ml",
    "providerId": "sir-stanford",
    "institution": "Stanford Online",
    "instructorName": "Stanford Online (Prof. Andrew Ng & Faculty)",
    "providerCode": "STAN",
    "title": "CS229: Machine Learning by Prof. Andrew Ng (Stanford)",
    "subject": "Stanford Machine Learning",
    "level": "Advanced",
    "desc": "Prof. Andrew Ng's legendary Stanford CS229: linear regression, logistic regression, SVMs, kernel tricks, EM algorithm, factor analysis, and PCA.",
    "coverPhoto": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-purple",
    "lessons": [
      {
        "id": "stan-ml-1",
        "title": "Stanford CS229: Machine Learning - Lecture 1 (Andrew Ng)",
        "ytUrl": "https://www.youtube.com/watch?v=PPLop4L2eGk",
        "ytVideoId": "PPLop4L2eGk",
        "duration": "1 hour 15 mins",
        "desc": "Overview of machine learning, supervised vs unsupervised learning.",
        "resources": [],
        "quiz": {
          "options": []
        }
      },
      {
        "id": "stan-ml-2",
        "title": "Stanford CS229: Linear Regression & Gradient Descent",
        "ytUrl": "https://www.youtube.com/watch?v=4b4MUYve_U8",
        "ytVideoId": "4b4MUYve_U8",
        "duration": "1 hour 15 mins",
        "desc": "Batch gradient descent, stochastic gradient descent, and normal equations.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-stanford-deep-learning",
    "providerId": "sir-stanford",
    "institution": "Stanford Online",
    "instructorName": "Stanford Online (Prof. Andrew Ng & Faculty)",
    "providerCode": "STAN",
    "title": "CS230: Deep Learning by Prof. Andrew Ng (Stanford)",
    "subject": "Deep Learning",
    "level": "Advanced",
    "desc": "Deep neural networks, hyperparameter tuning, batch normalization, convolutional neural networks (CNNs), and sequence models (RNNs/LSTMs).",
    "coverPhoto": "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-blue",
    "lessons": [
      {
        "id": "stan-dl-1",
        "title": "Stanford CS230: Deep Learning - Lecture 1 (Andrew Ng)",
        "ytUrl": "https://www.youtube.com/watch?v=PySo_6S4ZAg",
        "ytVideoId": "PySo_6S4ZAg",
        "duration": "1 hour 10 mins",
        "desc": "Intuition behind deep representation learning.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-stanford-nlp",
    "providerId": "sir-stanford",
    "institution": "Stanford Online",
    "instructorName": "Stanford Online (Prof. Andrew Ng & Faculty)",
    "providerCode": "STAN",
    "title": "CS224N: Natural Language Processing with Deep Learning",
    "subject": "NLP & AI",
    "level": "Advanced",
    "desc": "Word vectors (word2vec, GloVe), neural dependency parsing, language modeling, RNNs, Seq2Seq with attention, and transformer architectures.",
    "coverPhoto": "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-rose",
    "lessons": [
      {
        "id": "stan-nlp-1",
        "title": "Stanford CS224N: NLP with Deep Learning - Lecture 1",
        "ytUrl": "https://www.youtube.com/watch?v=rmVRLeJRkl4",
        "ytVideoId": "rmVRLeJRkl4",
        "duration": "1 hour 15 mins",
        "desc": "Word meanings, continuous vector representations, and word2vec.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-stanford-crypto",
    "providerId": "sir-stanford",
    "institution": "Stanford Online",
    "instructorName": "Stanford Online (Prof. Andrew Ng & Faculty)",
    "providerCode": "STAN",
    "title": "CS255: Introduction to Cryptography (Stanford)",
    "subject": "Cryptography",
    "level": "Advanced",
    "desc": "Prof. Dan Boneh teaches symmetric ciphers (AES), block cipher modes (CBC, CTR), MACs, RSA, elliptic curve cryptography, and zero-knowledge proofs.",
    "coverPhoto": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-amber",
    "lessons": [
      {
        "id": "stan-crypto-1",
        "title": "Stanford Cryptography: One-Time Pad & Stream Ciphers",
        "ytUrl": "https://www.youtube.com/watch?v=ZoqMiFKspAA",
        "ytVideoId": "ZoqMiFKspAA",
        "duration": "1 hour",
        "desc": "Information-theoretic security and pseudo-random generators.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  },
  {
    "id": "course-stanford-convex-opt",
    "providerId": "sir-stanford",
    "institution": "Stanford Online",
    "instructorName": "Stanford Online (Prof. Andrew Ng & Faculty)",
    "providerCode": "STAN",
    "title": "EE364A: Convex Optimization by Prof. Stephen Boyd",
    "subject": "Optimization & Math",
    "level": "Advanced",
    "desc": "Convex sets, convex functions, linear programming, quadratic programming, duality theory, KKT conditions, and interior-point methods.",
    "coverPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    "theme": "theme-emerald",
    "lessons": [
      {
        "id": "stan-opt-1",
        "title": "Stanford EE364A: Convex Optimization I - Lecture 1",
        "ytUrl": "https://www.youtube.com/watch?v=McLq1hEq3UY",
        "ytVideoId": "McLq1hEq3UY",
        "duration": "1 hour 15 mins",
        "desc": "Convex optimization problem formulation and applications.",
        "resources": [],
        "quiz": {
          "options": []
        }
      }
    ]
  }
];

// Backward compatibility alias
const ALL_SIRS_DATA = ALL_PROVIDERS_DATA;

if (typeof window !== "undefined") {
  window.ALL_PROVIDERS_DATA = ALL_PROVIDERS_DATA;
  window.ALL_COURSES_DATA = ALL_COURSES_DATA;
  window.ALL_SIRS_DATA = ALL_PROVIDERS_DATA;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { ALL_PROVIDERS_DATA, ALL_COURSES_DATA, ALL_SIRS_DATA };
}
