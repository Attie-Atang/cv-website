import { Routes, Route } from 'react-router-dom';
import './Main.css';
import PersonalData from './PersonalData';
import Skills from './Skills';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import ContactForm from './ContactForm';
import References from './References';

export default function Main() {
    return (
        <article className="content">
            <Routes>
                <Route path="/" element={<PersonalData />} />
                <Route path="/education" element={<Education />} />
                <Route path="/work-experience" element={<WorkExperience />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact-form" element={<ContactForm />} />
                <Route path="/references" element={<References />} />
            </Routes>
        </article>
    );
}
