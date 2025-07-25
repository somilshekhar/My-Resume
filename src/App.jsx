import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Somil Shekhar</h1>
        <div className="contact-info">
          +91-7462898080 | <a href="mailto:shekharsomil1192005@gmail.com">shekharsomil1192005@gmail.com</a> | Vadodara, Gujarat, India - 390019
        </div>
        <div className="social-links">
          <a href="https://github.com/somilshekhar" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://in.linkedin.com/in/somil-shekhar-491704254" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://x.com/somil_shekhar" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.instagram.com/somilshekhar/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>

      <div className="section">
        <h2>Objective</h2>
        <p>
          Energetic Computer Applications student at Parul University, pursuing an Integrated M.C.A. with a focus on Artificial Intelligence. Skilled in Java, C++, Python, and Android development, with a passion for building scalable web and mobile applications using modern frameworks. Eager to contribute technical expertise and innovative solutions to a dynamic tech team.
        </p>
      </div>

      <div className="section">
        <h2>Experience</h2>
        <h3>Maddys Technologies - Software Engineer Intern (Remote)</h3>
        <p>January 2025 - Present</p>
        <ul>
          <li>Gained hands-on experience with Python, JavaScript, Pandas, Git, and Docker in software development cycles.</li>
          <li>Worked on debugging, code optimization, and agile methodologies, collaborating on real-world projects.</li>
        </ul>
        <h3>Brainy Beams - Mobile App Developer Intern (Remote)</h3>
        <p>May 2024 - June 2024</p>
        <ul>
          <li>Developed mobile applications using JavaScript, Android SDK, and Firebase, focusing on user-centric design.</li>
          <li>Enhanced skills in debugging, agile methodologies, and UI/UX through collaborative projects.</li>
        </ul>
      </div>


      <div className="section">
        <h2>Projects</h2>
        <h3>My Portfolio</h3>
        <p>May 2025 - June 2025 | Tools: React.js, TypeScript, Three.js, HTML, CSS</p>
        <ul>
          <li>Built a dynamic portfolio with responsive design, 3D animations using Three.js, and smooth interactions.</li>
          <li>Optimized performance for an engaging user experience across devices.</li>
        </ul>
        <h3>Menu Driven Application</h3>
        <p>Jan 2023 | Tools: C++</p>
        <ul>
          <li>Developed a menu-driven system for CRUD operations, enhancing user interaction with structured data.</li>
        </ul>
        <h3>Expense Tracker</h3>
        <p>Nov 2023 - Feb 2024 | Tools: Java, XML, Android SDK, Android Studio, Firebase</p>
        <ul>
          <li>Built an Android app for recording and categorizing expenses, with Firebase integration for data storage.</li>
          <li>Provided insights into spending patterns using data visualization.</li>
        </ul>
        <h3>Movie Recommendation System</h3>
        <p>April 2024 - Sept 2024 | Tools: Python, AI/ML, Pandas</p>
        <ul>
          <li>Created a recommendation system using machine learning and collaborative filtering techniques.</li>
          <li>Suggested movies based on user preferences and historical data.</li>
        </ul>
        <h3>Developer Portfolio/Platform</h3>
        <p>Nov 2024 - Feb 2025 | Tools: React.js, Django, JavaScript, MySQL</p>
        <ul>
          <li>Designed a web platform to showcase developer skills and projects, with login, resume viewer, and admin panel.</li>
          <li>Enabled filtering of candidates based on technical skills and project history.</li>
        </ul>
        <h3>Weather Checker</h3>
        <p>May 2025 - June 2025 | Tools: React.js, HTML, CSS, JavaScript, Vite, API</p>
        <ul>
          <li>Built a web app to fetch real-time weather data via API, displaying details like temperature and conditions.</li>
          <li>Validated user input for city names, ensuring a seamless experience.</li>
        </ul>
      </div>

      <div className="section">
        <h2>Skills</h2>
        <ul>
          <li>Programming Languages: Java, C++, Python, JavaScript</li>
          <li>Web Technologies: HTML5, CSS3, React.js, TypeScript, Three.js, Vite, Django</li>
          <li>Mobile Development: Android SDK, XML, Android Studio</li>
          <li>Database Systems: MySQL, Firebase</li>
          <li>Data Science & Machine Learning: Pandas, AI/ML Basics</li>
          <li>Other Tools: Docker, Git, CI/CD, Figma</li>
        </ul>
      </div>

      <div className="section">
        <h2>Additional Information</h2>
        <ul>
          <li>Languages: English (Proficient), Hindi (Native)</li>
          <li>Interests: Artificial Intelligence, Mobile App Development, Web Development</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
