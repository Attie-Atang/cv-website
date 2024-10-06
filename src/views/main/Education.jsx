import { useState } from 'react';
import './Education.css';

function Education() {
    // Initial education data in state
    const [educationData, setEducationData] = useState([
        { institution: 'University of Limpopo', degree: 'Bachelor of Science in Computer Science', year: '2024 - 2026' },
        { institution: 'Kenilworth Secondary School', degree: 'National Senior Certificate', year: '2017 - 2021' },
    ]);

    const [isEditing, setIsEditing] = useState(false);

    // Handle input change
    const handleInputChange = (index, field, value) => {
        const newData = [...educationData];
        newData[index][field] = value;
        setEducationData(newData);
    };

    // Add new empty row
    const addRow = () => {
        setEducationData([...educationData, { institution: '', degree: '', year: '' }]);
    };

    // Remove row
    const removeRow = (index) => {
        const newData = educationData.filter((_, i) => i !== index);
        setEducationData(newData);
    };

    // Save table data
    const saveData = () => {
        setIsEditing(false); // Disable editing
    };

    // Enable editing mode
    const enableEditing = () => {
        setIsEditing(true); // Enable editing
    };

    return (
        <section className="education">
            <h2>Education</h2>
            <table>
                <thead>
                    <tr>
                        <th>Institution</th>
                        <th>Degree</th>
                        <th>Year</th>
                        <th>Action</th> {/* Added for delete action */}
                    </tr>
                </thead>
                <tbody>
                    {educationData.map((row, index) => (
                        <tr key={index}>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={row.institution}
                                        onChange={(e) => handleInputChange(index, 'institution', e.target.value)}
                                    />
                                ) : (
                                    row.institution
                                )}
                            </td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={row.degree}
                                        onChange={(e) => handleInputChange(index, 'degree', e.target.value)}
                                    />
                                ) : (
                                    row.degree
                                )}
                            </td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={row.year}
                                        onChange={(e) => handleInputChange(index, 'year', e.target.value)}
                                    />
                                ) : (
                                    row.year
                                )}
                            </td>
                            <td>
                                {isEditing && (
                                    <button onClick={() => removeRow(index)}>-</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="actions">
                {isEditing ? (
                    <>
                        <button onClick={addRow}>+</button>
                        <button onClick={saveData}>Save</button>
                    </>
                ) : (
                    <button onClick={enableEditing}>Edit</button>
                )}
            </div>
        </section>
    );
}

export default Education;
