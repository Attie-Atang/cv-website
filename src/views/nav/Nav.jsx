import { NavLink } from 'react-router-dom';
import '../../assets/atang.jpg';
import './Nav.css';

function Nav() {
  return (
    <nav>
        <div className="nav-profile">
            <img
            src="pic.jpg"
            alt="profile-img"
            />
            <div>
                <h3 className="nav-profile-name">Atang Maleka</h3>
                <h4>Student</h4>
            </div>
        </div>

        <div className="underline" />

        <section className="nav-section">
            <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
            >
                <button className="nav-button">
                    <i className="fa-solid fa-user"></i>
                    <p>Personal Data</p>
                </button>
            </NavLink>

            <NavLink
            to="/education"
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
            >
                <button className="nav-button">
                    <i className="fa-solid fa-user-graduate"></i>
                    <p>Education</p>
                </button>
            </NavLink>
            
            <NavLink
            to="/work-experience"
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
            >
                <button className="nav-button">
                    <i className="fa-solid fa-check"></i>
                    <p>Work Experience</p>
                </button>
            </NavLink>

            <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
            >
                <button className="nav-button">
                    <i className="fa-solid fa-wrench"></i>
                    <p>Skills</p>
                </button>
            </NavLink>

            <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
            >
                <button className="nav-button">
                    <i className="fa-solid fa-diagram-project"></i>
                    <p>Projects</p>
                </button>
            </NavLink>

            <NavLink
            to="/contact-form"
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
            >
                <button className="nav-button">
                    <i className="fa-solid fa-phone"></i>
                    <p>Contact Form</p>
                </button>
            </NavLink>

            <NavLink
            to="/references"
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
            >
                <button className="nav-button">
                    <i className="fa-solid fa-folder-open"></i>
                    <p>References</p>
                </button>
            </NavLink>
        </section>
    </nav>
  );
}

export default Nav;
