import './WorkExperience.css';

function WorkExperience() {
    return (
        <section className="work-experience">
            <h2>Work Experience</h2>
            <ul>
                <li>
                    <h3>Software Developer at Tech Solutions</h3>
                    <div className='underline' />
                    <p><strong>Duration:</strong> June 2020 - Present</p>
                    <p>Developed full-stack web applications using React, Node.js, and MongoDB. Led the team to implement key features in the company’s software products.</p>
                </li>
                <li>
                    <h3>Intern at Web Innovators</h3>
                    <div className='underline' />
                    <p><strong>Duration:</strong> January 2019 - May 2020</p>
                    <p>Assisted in front-end development tasks using HTML, CSS, and JavaScript. Collaborated with senior developers to improve site functionality.</p>
                </li>
            </ul>
        </section>
    );
}

export default WorkExperience;
