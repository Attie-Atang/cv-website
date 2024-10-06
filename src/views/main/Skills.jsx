import './Skills.css';

function Skills() {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <ul>
                <li>
                    <h3>Personal Skills</h3>
                    <div className='underline' />
                    <ul>Problem solving</ul>
                    <ul>Critical thinking</ul>
                    <ul>Public speaking</ul>
                    <ul>Computer litrate</ul>
                </li>
                <li>
                    <h3>Hard Skills</h3>
                    <div className='underline' />
                    <ul>Programming</ul>
                    <ul>Website management</ul>
                    <ul>Computer skills</ul>
                </li>
                
            </ul>
        </section>
    );
}

export default Skills;
