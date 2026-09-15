import { useState } from "react";
import "./App.css";

function App() {

    const [menu, setMenu] = useState(false);

    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">
                        <img
                            src="https://i.pinimg.com/736x/80/87/19/808719df65094414e56a2856f0670dba.jpg"
                            alt="Nityen Logo"
                            className="logo-img"
                        />
                    </a>


                    <button
                        className="navbar-toggler"
                        onClick={() => setMenu(!menu)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className={`collapse navbar-collapse ${menu ? "show" : ""}`}>

                        <div className="navbar-nav ms-auto">

                            <a className="nav-link" href="#about">About</a>

                            <a className="nav-link" href="#skills">Skills</a>

                            <a className="nav-link" href="#projects">Projects</a>

                            <a className="nav-link" href="#education">Education</a>

                            <a className="nav-link" href="#contact">Contact</a>

                        </div>

                    </div>

                </div>

            </nav>


         
            <section className="container hero">

                <div className="row align-items-center">

                    <div className="col-lg-7 text-center text-lg-start">

                        <h5 className="blue">
                            FULL STACK WEB DEVELOPER • FRESHER
                        </h5>

                        <h1 className="display-3 fw-bold">
                            Hi, I'm <span className="blue">
                                Nityen Kakadiya
                            </span>
                        </h1>

                        <p className="hero-text">
                            I’m a BCA student and Full Stack Web Development
                            learner passionate about creating responsive and
                            user-friendly web applications.
                        </p>

                        <div className="mt-4">

                            <a
                                href="#projects"
                                className="btn btn-primary me-2"
                            >
                                View Projects
                            </a>

                            <a
                                href="mailto:kakadiyanityen123@gmail.com"
                                className="btn btn-outline-info"
                            >
                                Contact Me
                            </a>

                        </div>

                    </div>


                    <div className="col-lg-5 mt-5 mt-lg-0">

                        <div className="profile text-center">

                            <div className="avatar">
                                NK
                            </div>

                            <h3>Nityen Kakadiya</h3>

                            <p>
                                Full Stack Web Developer - Fresher
                            </p>

                            <span className="badge rounded-pill">
                                BCA - 2nd Year
                            </span>

                            <span className="badge rounded-pill">
                                Rajkot
                            </span>

                        </div>

                    </div>

                </div>

            </section>


            <section id="about">
                <div className="container">
                    <h2>About Me</h2>

                    <p className="subtitle">
                        A motivated developer focused on learning and building.
                    </p>

                    <div className="card p-4">

                        <p>
                            I am currently pursuing BCA (Second Year) and
                            learning Full Stack Web Development at Red & White
                            Skill Education. I enjoy working with frontend and
                            backend technologies, building projects,
                            understanding APIs and solving practical problems.
                        </p>

                    </div>

                </div>

            </section>


            {/* Skills */}
            <section id="skills">

                <div className="container">

                    <h2>Technical Skills</h2>

                    <p className="subtitle">
                        Technologies and tools I work with.
                    </p>

                    <div className="row g-4">

                        <div className="col-md-6">
                            <div className="card p-4">

                                <h3>Frontend</h3>

                                <span className="badge">HTML5</span>
                                <span className="badge">CSS3</span>
                                <span className="badge">JavaScript</span>
                                <span className="badge">React.js</span>
                                <span className="badge">Bootstrap</span>

                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="card p-4">

                                <h3>Backend & Database</h3>

                                <span className="badge">Node.js</span>
                                <span className="badge">Express.js</span>
                                <span className="badge">REST API</span>
                                <span className="badge">MongoDB</span>
                                <span className="badge">MySQL</span>

                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="card p-4">

                                <h3>Tools</h3>

                                <span className="badge">Git</span>
                                <span className="badge">GitHub</span>
                                <span className="badge">VS Code</span>
                                <span className="badge">Chrome DevTools</span>

                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="card p-4">

                                <h3>Strengths</h3>

                                <span className="badge">Quick Learner</span>
                                <span className="badge">Problem Solving</span>
                                <span className="badge">Teamwork</span>
                                <span className="badge">Communication</span>

                            </div>
                        </div>

                    </div>

                </div>

            </section>


          
            <section id="projects">

                <div className="container">

                    <h2>Featured Projects</h2>

                    <p className="subtitle">
                        Projects available on my GitHub.
                    </p>

                    <div className="row g-4">

                        <div className="col-md-4">
                            <div className="card p-4 h-100">

                                <h3>Management App</h3>

                                <p>
                                    A web application focused on managing
                                    application data and functionality.
                                </p>

                                <a
                                    href="https://github.com/nityen123-hue/manegementapp"
                                    target="_blank"
                                >
                                    View on GitHub →
                                </a>

                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="card p-4 h-100">

                                <h3>API Project</h3>

                                <p>
                                    A backend/API project created to practice
                                    API handling and server-side development.
                                </p>

                                <a
                                    href="https://github.com/nityen123-hue/API-project"
                                    target="_blank"
                                >
                                    View on GitHub →
                                </a>

                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="card p-4 h-100">

                                <h3>Quiz Project</h3>

                                <p>
                                    An interactive quiz application with a
                                    simple and user-friendly interface.
                                </p>

                                <a
                                    href="https://github.com/nityen123-hue/QuizProject"
                                    target="_blank"
                                >
                                    View on GitHub →
                                </a>

                            </div>
                        </div>

                    </div>

                </div>

            </section>


            <section id="education">

                <div className="container">

                    <h2>Education</h2>

                    <p className="subtitle">
                        Academic and professional learning.
                    </p>

                    <div className="row g-4">

                        <div className="col-md-4">
                            <div className="card p-4 h-100">

                                <h3>Bachelor of Computer Applications</h3>

                                <p>BCA - Second Year</p>

                                <span className="badge">
                                    Rajkot, Gujarat
                                </span>

                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="card p-4 h-100">

                                <h3>Full Stack Web Development</h3>

                                <p>Red & White Skill Education</p>

                                <span className="badge">Mavdi</span>
                                <span className="badge">Rajkot</span>

                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="card p-4 h-100">

                                <h3>Languages</h3>

                                <p>
                                    Gujarati • Hindi • English
                                </p>

                            </div>
                        </div>

                    </div>

                </div>

            </section>


         
            <section id="contact">

                <div className="container">

                    <h2>Let's Connect</h2>

                    <p className="subtitle">
                        Open to learning opportunities, internships and
                        entry-level roles.
                    </p>

                    <div className="row g-4">

                        <div className="col-md-6">
                            <a href="tel:9313728020" className="contact-box">
                                <small>Phone</small>
                                <strong>9313728020</strong>
                            </a>
                        </div>


                        <div className="col-md-6">
                            <a
                                href="mailto:kakadiyanityen123@gmail.com"
                                className="contact-box"
                            >
                                <small>Email</small>
                                <strong>
                                    kakadiyanityen123@gmail.com
                                </strong>
                            </a>
                        </div>


                        <div className="col-md-6">
                            <a
                                href="https://github.com/nityen123-hue"
                                target="_blank"
                                className="contact-box"
                            >
                                <small>GitHub</small>
                                <strong>
                                    github.com/nityen123-hue
                                </strong>
                            </a>
                        </div>


                        <div className="col-md-6">
                            <a
                                href="https://www.linkedin.com/in/nityen-kakadiya-9283b3375"
                                target="_blank"
                                className="contact-box"
                            >
                                <small>LinkedIn</small>
                                <strong>
                                    linkedin.com/in/nityen-kakadiya-9283b3375
                                </strong>
                            </a>
                        </div>

                    </div>

                </div>

            </section>


            <footer>
                © 2026 Nityen Kakadiya • Full Stack Web Developer
            </footer>

        </div>
    );
}

export default App;

