import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaSun,
  FaMoon,
  FaArrowRight,
  FaArrowLeft,
  FaUsers,
  FaTasks,
  FaProjectDiagram,
  FaBars,
  FaCheck,
  FaCog,
  FaCode,
  FaDatabase,
  FaServer,
} from "react-icons/fa";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [page, setPage] = useState("home");
  const goTo = (newPage) => {
    setPage(newPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <header className="navbar">
        <div className="nav-container">
          <button
            className="logo"
            onClick={() => goTo("home")}
          >
            <span className="logo-icon">✣</span>
            Nityen Kakadiya
          </button>
          <nav className="nav-menu">
            <button
              className={
                page === "works"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => goTo("works")}
            >
              Works
            </button>
          </nav>

          <button
            className="theme-button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

        </div>
      </header>

      {page === "home" && (
        <main className="home-container">
          <section className="hero">
            <img
              src="/3d-model.png"
              alt="3D Developer"
              className="hero-3d"
            />
          </section>
          <div className="intro">
            Hello, I'm a Full Stack Web Developer!
          </div>
          <section className="profile">
            <div className="profile-info">
              <h1>Nityen Kakadiya</h1>
              <p>
                Full Stack Web Developer
              </p>
            </div>
            <div className="profile-photo">
              <img
                src="/profile.jpg"
                alt="Nityen Kakadiya"
              />
            </div>
          </section>

          <section className="work-content">
            <h2>Work</h2>
            <div className="heading-line work-line"></div>
            <p>
              I am a Full Stack Web Development learner interested
              in creating modern, responsive and user-friendly
              web applications.
            </p>
            <p>
              I work with frontend, backend, databases and APIs
              to build practical digital solutions. I enjoy learning
              new technologies and turning ideas into useful
              web applications.
            </p>
            <button className="resume-button"onClick={() => goTo("resume")} >
              My Resume
              <FaArrowRight />
            </button>
          </section>


          <section className="bio">
            <h2>Bio</h2>
            <div className="heading-line bio-line"></div>
            <div className="bio-row">
              <strong>2008</strong>
              <span>Born in Gujarat, India.</span>
            </div>
            <div className="bio-row">
              <strong>2024</strong>
              <span>
                Completed Higher Secondary Education.
              </span>
            </div>
            <div className="bio-row">
              <strong>2026</strong>
              <span>
                Currently pursuing BCA
                (Bachelor of Computer Application).
              </span>
            </div>
            <div className="bio-row">
              <strong>Now</strong>
              <span>
                Learning Full Stack Web Development and
                creating practical projects.
              </span>
            </div>

            <div className="love-section">
              <h3>
                I <span>♥</span>
              </h3>
              <div className="heading-line love-line"></div>
              <p>
                Coding, Web Development, Learning New Skills,
                Business & Technology
              </p>
            </div>

            <div className="web-section">
              <h2>On the web</h2>
              <div className="heading-line web-line"></div>
              <a  href="https://github.com/"  target="_blank"  rel="noopener noreferrer">
                <FaGithub />
                GitHub
              </a>

              <a  href="https://www.linkedin.com/"  target="_blank"  rel="noopener noreferrer" >
                <FaLinkedin />
                LinkedIn
              </a>

              <a  href="https://www.instagram.com/"  target="_blank"  rel="noopener noreferrer" >
                <FaInstagram />
                Instagram
              </a>
            </div>
          </section>
        </main>
      )}

      {page === "works" && (
        <main className="works-container">
          <section className="works-hero">
            <img  src="/3d-model.png"  alt="3D Developer"  className="works-3d" />
          </section>
          <h1 className="works-heading">
            Works
          </h1>
          <div className="heading-line works-line"></div>
          <div className="projects-grid">
            <article className="project">
              <div className="project-image management">
                <div className="management-navbar">
                  <span>
                    Management
                  </span>
                  <span className="management-user">
                    NK
                  </span>
                </div>


                <div className="management-main">
                  <div className="management-sidebar">
                    <FaBars />
                    <FaUsers />
                    <FaCheck />
                    <FaCog />
                  </div>

                  <div className="management-dashboard">
                    <small>
                      Dashboard
                    </small>

                    <div className="dashboard-cards">
                      <div className="dashboard-card">
                        <FaUsers />
                        <span>
                          Users
                        </span>
                        <strong>
                          120+
                        </strong>
                      </div>


                      <div className="dashboard-card">
                        <FaTasks />
                        <span>
                          Tasks
                        </span>
                        <strong>
                          48
                        </strong>
                      </div>

                      <div className="dashboard-card">
                        <FaProjectDiagram />
                        <span>
                          Projects
                        </span>
                        <strong>
                          12
                        </strong>
                      </div>
                    </div>


                    <div className="dashboard-chart">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                  </div>
                </div>
              </div>
              <h2>
                Management App
              </h2>
              <p>
                A responsive management application for
                managing users, tasks and projects with
                a clean dashboard interface.
              </p>
            </article>




            <article className="project">
              <div className="project-image api-project">
                <div className="api-header">
                  <span>
                    REST API
                  </span>
                  <span className="api-online">
                    ● Online
                  </span>
                </div>


                <div className="api-body">
                  <div className="api-request">
                    <span className="api-method">
                      GET
                    </span>
                    <span className="api-url">
                      /api/users
                    </span>
                  </div>


                  <div className="api-code">
                    <span>
                      {"{"}
                    </span>
                    <span>
                      "status": "success",
                    </span>
                    <span>
                      "users": 120,
                    </span>
                    <span>
                      "message": "Data fetched"
                    </span>
                    <span>
                      {"}"}
                    </span>
                  </div>
                </div>
              </div>


              <h2>
                REST API Project
              </h2>
              <p>
                A backend REST API project with routes,
                controllers, database integration and
                CRUD operations.
              </p>
            </article>
          </div>
        </main>
      )}

      {page === "resume" && (
        <main className="resume-page">
          <div className="resume-header">
            <button  className="back-button"  onClick={() => goTo("home")}>
              <FaArrowLeft />
              Back
            </button>

            <h1>
              My Resume
            </h1>
            <a href="/resume.png" target="_blank" rel="noopener noreferrer" className="resume-open-button" >
              Open Resume
            </a>
          </div>


          <div className="resume-image-container">
            <img src="/resume.png" alt="Nityen Kakadiya Resume" className="resume-image"  />
          </div>
        </main>
      )}

      <footer className="footer">
        © 2026 Nityen Kakadiya. All Rights Reserved.
      </footer>
    </div>
  );
}
export default App;
