// Custom Portfolio Config for Prasenjit Man Swarnakar

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Prasenjit Man Swarnakar",
  title: "Hi all, I'm Prasenjit ",
  subTitle: emoji(
    "I'm an engineer of efficient, high-performing Web and Mobile experiences — blending creativity with code to build scalable, user-focused solutions that solve real-world problems with clarity and precision."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Prasenjit-Man-Swarnakar",
  linkedin: "https://www.linkedin.com/in/prasanjeet-man-s-196606282",
  gmail: "swarnakarprasenjitman@gmail.com",
  facebook: "#",
  medium: "#",
  stackoverflow: "#",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "A FULL STACK DEVELOPER WHO LOVES TECH AND BUILDING PRODUCTS",
  skills: [
    emoji("⚡ Building responsive frontends in React & Tailwind CSS"),
    emoji("⚡ Creating backend REST APIs using Node.js & Express"),
    emoji("⚡ Integration with third-party services like Firebase & AWS")
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "c", fontAwesomeClassname: "fas fa-code" },
    { skillName: "java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "supabase", fontAwesomeClassname: "fas fa-database" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Saraswati Vidya Mandir, Sindri",
      logo: require("./assets/images/vidya mandir.webp"),
      subHeader: "Up to 10th Class",
      duration: "–",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Sindri College, Sindri",
      logo: require("./assets/images/sindri college.webp"),
      subHeader: "Intermediate (12th Class)",
      duration: "–",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Chaibasa Engineering College",
      logo: require("./assets/images/university.png"),
      subHeader: "B.Tech in Electronics & Communication Engineering",
      duration: "2022 - 2026",
      desc: "Pursuing a strong foundation in electronics and computer science with interest in full-stack development.",
      descBullets: []
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend", progressPercentage: "85%" },
    { Stack: "Backend", progressPercentage: "75%" },
    { Stack: "Programming", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [{}, {}]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "PERSONAL PROJECTS THAT I BUILT WITH PASSION",
  projects: [
    {
      id: 1,
      image: require("./assets/images/musicPlayer.png"),
      projectName: "Desi Dhwani",
      projectDesc: "A feature-rich music player using unofficial YouTube APIs",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Prasenjit-Man-Swarnakar/Desi_Dhwani"
        }
      ]
    },
    {
      id: 2,
      image: require("./assets/images/imageCaptioning.png"),
      projectName: "Image Captioning AI",
      projectDesc: "Deep learning-based image caption generator using CNN+RNN",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Prasenjit-Man-Swarnakar/image_captioning_tf"
        }
      ]
    },
    {
      id: 3,
      image: require("./assets/images/amazon.png"), // Make sure you add this image to your assets/images folder
      projectName: "Amazon Clone",
      projectDesc:
        "A fully functional Amazon UI clone built with React and Firebase for authentication and state management.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Prasenjit-Man-Swarnakar/amazon-clone"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  id: 1,
  title: emoji("Achievements 🏆"),
  subtitle: "Courses, certifications, and special recognitions",
  achievementsCards: [
    {
      title: "Google IT Automation with Python",
      subtitle: "Completed from Coursera (2024)",
      image: require("./assets/images/certificate.png"),
      imageAlt: "Google Python Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/verify/google-python-cert"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: false,
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: "",
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Still working on it... coming soon!",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Click to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to reach out to discuss projects or internships.",
  number: "+91-810212XXXX",
  email_address: "swarnakarprasenjitman@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
