import './Skills.css';

function Skills() {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <ul>
                <li>
                    <h3>JavaScript</h3>
                    <div className='underline' />
                    <p>Proficient in JavaScript, including ES6+ features and asynchronous programming.</p>
                </li>
                <li>
                    <h3>React</h3>
                    <div className='underline' />
                    <p>Experienced in building dynamic user interfaces with React and React Hooks.</p>
                </li>
                <li>
                    <h3>CSS & Sass</h3>
                    <div className='underline' />
                    <p>Skilled in writing modular, reusable, and responsive styles using CSS and Sass.</p>
                </li>
            </ul>
        </section>
    );
}

export default Skills;
