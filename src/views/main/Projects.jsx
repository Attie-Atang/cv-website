import { useState } from 'react';
import './Projects.css';

function Projects() {
    // Initial state for projects
    const [projects, setProjects] = useState([
        { name: 'Personal Portfolio Website', description: 'A React-based portfolio showcasing my skills, projects, and resume.' }
    ]);

    const [newProject, setNewProject] = useState({ name: '', description: '' });

    // Function to add a new project
    const addProject = () => {
        setProjects(prevProjects => [...prevProjects, newProject]);
        setNewProject({ name: '', description: '' }); // Clear input
    };

    // Function to remove a project
    const removeProject = (index) => {
        setProjects(prevProjects => prevProjects.filter((_, i) => i !== index));
    };

    return (
        <section className="projects">
            <h2>Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.name}</h3>
                        <div className='underline' />
                        <p>{project.description}</p>
                        <button className='pr-minus' onClick={() => removeProject(index)}>-</button>
                    </li>
                ))}
            </ul>

            <section className='pr-inputs'>
                <input 
                    type="text" 
                    value={newProject.name} 
                    onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                    placeholder="Project name"
                />
                <textarea
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    placeholder="Project description"
                />
                <button onClick={addProject}>+</button>
            </section>
        </section>
    );
}

export default Projects;
