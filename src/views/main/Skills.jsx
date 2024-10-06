import { useState } from 'react';
import './Skills.css';

function Skills() {
    // Initial state for skills
    const [personalSkills, setPersonalSkills] = useState([
        'Problem solving', 'Critical thinking', 'Public speaking', 'Computer literate'
    ]);
    
    const [hardSkills, setHardSkills] = useState([
        'Programming', 'Website management', 'Computer skills'
    ]);

    const [newSkill, setNewSkill] = useState('');

    // Function to add a new skill
    const addSkill = (setSkills) => {
        setSkills(prevSkills => [...prevSkills, newSkill]);
        setNewSkill(''); // Clear input
    };

    // Function to remove a skill
    const removeSkill = (index, setSkills) => {
        setSkills(prevSkills => prevSkills.filter((_, i) => i !== index));
    };

    return (
        <section className="skills">
            <h2>Skills</h2>
            <ul>
                <li>
                    <h3>Personal Skills</h3>
                    <div className='underline' />
                    <ul>
                        {personalSkills.map((skill, index) => (
                            <li 
                                key={index}
                                className='sk-list'
                            >
                                {skill}
                                <button onClick={() => removeSkill(index, setPersonalSkills)}>-</button>
                            </li>
                        ))}
                    </ul>

                    <section className='sk-add'>
                        <input 
                            type="text" 
                            value={newSkill} 
                            onChange={(e) => setNewSkill(e.target.value)} 
                            placeholder="New personal skill"
                        />
                        <button onClick={() => addSkill(setPersonalSkills)}>+</button>
                    </section>
                    
                </li>

                <li>
                    <h3>Hard Skills</h3>
                    <div className='underline' />
                    <ul>
                        {hardSkills.map((skill, index) => (
                            <li 
                                className='sk-list'
                                key={index}
                            >
                                <div>{skill}</div>
                                <button onClick={() => removeSkill(index, setHardSkills)}>-</button>
                            </li>
                        ))}
                    </ul>

                    <section className='sk-add'>
                        <input 
                            type="text" 
                            value={newSkill} 
                            onChange={(e) => setNewSkill(e.target.value)} 
                            placeholder="New hard skill"
                        />
                        <button onClick={() => addSkill(setHardSkills)}>+</button>
                    </section>
                </li>
            </ul>
        </section>
    );
}

export default Skills;
