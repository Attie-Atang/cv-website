import { useState } from 'react';
import './WorkExperience.css';

function WorkExperience() {
    // Initial state for work experiences
    const [workExperiences, setWorkExperiences] = useState([
        { title: 'Volunteer Experience', duration: 'November 2021 - January 2022', description: 'Lejwe La Motheo: A holiday camp for the underprivileged' }
    ]);

    const [newWork, setNewWork] = useState({ title: '', duration: '', description: '' });

    // Function to add a new work experience
    const addWork = () => {
        setWorkExperiences(prevWorks => [...prevWorks, newWork]);
        setNewWork({ title: '', duration: '', description: '' }); // Clear input
    };

    // Function to remove a work experience
    const removeWork = (index) => {
        setWorkExperiences(prevWorks => prevWorks.filter((_, i) => i !== index));
    };

    return (
        <section className="work-experience">
            <h2>Work Experience</h2>
            <ul>
                {workExperiences.map((work, index) => (
                    <li key={index}>
                        <h3>{work.title}</h3>
                        <div className='underline' />
                        <p><strong>Duration:</strong> {work.duration}</p>
                        <p>{work.description}</p>
                        <button className='we-minus' onClick={() => removeWork(index)}>-</button>
                    </li>
                ))}
            </ul>
            
            <section className='we-inputs'>
                <input 
                    className='we-title'
                    type="text" 
                    value={newWork.title} 
                    onChange={(e) => setNewWork({ ...newWork, title: e.target.value })}
                    placeholder="Work Title"
                />
                <input 
                    className='we-duration'
                    type="text" 
                    value={newWork.duration} 
                    onChange={(e) => setNewWork({ ...newWork, duration: e.target.value })}
                    placeholder="Work Duration"
                />
                <textarea 
                    className='we-description'
                    value={newWork.description}
                    onChange={(e) => setNewWork({ ...newWork, description: e.target.value })}
                    placeholder="Work Description"
                />
                <button onClick={addWork}>+</button>
            </section>
        </section>
    );
}

export default WorkExperience;
