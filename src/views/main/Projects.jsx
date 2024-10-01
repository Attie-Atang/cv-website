import './Projects.css';

function Projects() {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <ul>
                <li>
                    <h3>Personal Portfolio Website</h3>
                    <div className='underline' />
                    <p>A React-based portfolio showcasing my skills, projects, and resume.</p>
                </li>
                <li>
                    <h3>E-commerce Website</h3>
                    <div className='underline' />
                    <p>Developed a full-stack e-commerce platform with payment integration using Stripe.</p>
                </li>
            </ul>
        </section>
    );
}

export default Projects;
