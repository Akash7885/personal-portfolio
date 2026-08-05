// PORTFOLIO DATA
export const personalInfo = {
  name: 'Akash Dabhi',
  role: 'Frontend Developer',
  tagline: 'Building fast, user-friendly web experiences with React.',
  phone: '(+91) 9638920571',
  email: 'akashdabhi7885@gmail.com',
  linkedin: 'https://linkedin.com/in/akash-dabhi-',
  github: 'https://github.com/Akash7885',
  location: 'Porbandar, Gujarat, India',
  resumeFile: '/Akash_Dabhi_Resume.pdf',
  profileImage: '/profile-pic.jpg',
  careerObjective:
    "Highly motivated web developer with a Master's in Computer Applications and hands-on experience in frontend development. Skilled in creating user-friendly applications using ReactJS, integrating APIs, and collaborating in team environments to deliver high-quality web solutions.",
}

export const heroStats = [
  { label: 'Projects', value: 3 },
  { label: 'Core Skills', value: 8 },
  { label: 'Internship', value: 1 },
  { label: 'Degrees', value: 2 },
]

export const typewriterWords = [
  'ReactJS Developer',
  'Frontend Developer',
  'Django & Python Developer',
  'API Integration',
]

export const about = {
  intro:
    "Highly motivated web developer with a Master's in Computer Applications and hands-on experience in frontend development. Skilled in creating user-friendly applications using ReactJS, integrating APIs, and collaborating in team environments to deliver high-quality web solutions.",
  interests: ['Learning New Things', 'Listening Music', 'Photography',"Cricket"],
  softSkills: ['Teamwork', 'Communication Skills', 'Time Management', 'Problem-Solving'],
  languagesKnown: ['English', 'Hindi', 'Gujarati'],
  timeline: [
    { year: '2019-20', label: 'Higher Secondary Education completed' },
    { year: '2020-2023', label: 'Bachelor of Computer Application' },
    { year: '2023-2025', label: 'Master of Computer Application' },
    { year: 'Dec 2025 - Feb 2026', label: 'Frontend Developer Intern, Beliance Web' },
  ],
}

export const skills = {
  Skills: [
    { name: 'Python', icon: 'FileCode2' },
    { name: 'Django', icon: 'Server' },
    { name: 'JavaScript', icon: 'FileCode' },
    { name: 'ReactJS', icon: 'Atom' },
    { name: 'HTML', icon: 'Code2' },
    { name: 'CSS', icon: 'Layers' },
    { name: 'Tailwind CSS', icon: 'Palette' },
    { name: 'MySQL', icon: 'Database' },
  ],
}

export const experience = [
  {
    company: 'Beliance Web',
    role: 'Frontend Developer Intern',
    duration: 'Dec 2025 - Feb 2026',
    responsibilities: [
      'Developed and maintained responsive, user-friendly web interfaces using React and Tailwind CSS to enhance the overall user experience.',
      'Assisted in building administrative dashboard features, including secure user login, content management, and rich text editing capabilities.',
      'Integrated REST APIs to manage dynamic data flow and ensure seamless communication between the frontend and backend.',
    ],
    technologies: ['React', 'Tailwind CSS', 'REST APIs'],
  },
]

export const projects = [
  {
    title: 'Library Management System',
    description:
      'A web-based application to manage library operations with two distinct roles — Admin and Student. Admins manage books, categories, and student records, while students browse available books, track issued titles, and manage their profiles.',
    image:null,
    tech: ['HTML', 'CSS', 'Python (Django)', 'MySQL'],
    features: [
      'Role-based access for Admin and Student',
      'Book & category management for Admins',
      'Issued-book tracking for Students',
      'Student profile management',
    ],
    github: 'https://github.com/Akash7885', 
    demo: null, 
    org: 'Marwadi University, Rajkot, Gujarat',
  },
  {
    title: 'Social Bird',
    description:
      'A web-based application to manage library operations with two distinct roles — Admin and Student. Admins manage books, categories, and student records, while students browse available books, track issued titles, and manage their profiles.',
    image:null,
    tech: ['HTML', 'CSS', 'Python (Django)', 'MySQL'],
    features: [
      'Role-based access for Admin and Student',
      'Book & category management for Admins',
      'Issued-book tracking for Students',
      'Student profile management',
    ],
    github: 'https://github.com/Akash7885', 
    demo: null, 
    org: 'Marwadi University, Rajkot, Gujarat',
  },
]

export const education = [
  {
    degree: 'Master of Computer Application',
    institution: 'Marwadi University (NAAC A+)',
    duration: '2023-2025',
    score: 'CGPA 8.25',
  },
  {
    degree: 'Bachelor of Computer Application',
    institution: 'Bhakta Kavi Narsinh Mehta University',
    duration: '2020-2023',
    score: 'CGPA 8.50',
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Gujarat Higher Secondary Education Board',
    duration: '2019-20',
    score: '69.57%',
  },
]

export const workshops = [
  {
    title: 'Web Development Using ReactJS',
    org: 'Marwadi University, Rajkot, Gujarat',
    duration: 'Hands-on Workshop of 3 Days · Feb 2024',
    description: 'Learnt ReactJS for frontend web development.',
  },
]

export const contactInfo = {
  email: personalInfo.email,
  phone: personalInfo.phone,
  github: personalInfo.github,
  linkedin: personalInfo.linkedin,
  location: personalInfo.location,
}

// EmailJS credentials (https://www.emailjs.com/)
export const emailjsConfig = {
  serviceId: 'YOUR_EMAILJS_SERVICE_ID',
  templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
}
