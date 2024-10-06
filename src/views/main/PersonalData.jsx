import { useState } from 'react';
import './PersonalData.css';

function PersonalData() {
    // Initial personal data state
    const [personalData, setPersonalData] = useState({
        fullName: 'Atang Maleka',
        dob: 'January 29, 2004',
        email: 'Atangmaleka78@gmail.com',
        phone: '+27670515739',
        address: '84 Malta Road, Johannesburg, South Africa',
    });

    // State to track if each field is in edit mode
    const [editMode, setEditMode] = useState({
        fullName: false,
        dob: false,
        email: false,
        phone: false,
        address: false,
    });

    // Handler to toggle edit mode for a field
    const toggleEditMode = (field) => {
        setEditMode({ ...editMode, [field]: !editMode[field] });
    };

    // Handler to update personal data values
    const handleInputChange = (e, field) => {
        setPersonalData({ ...personalData, [field]: e.target.value });
    };

    return (
        <section className="personal-data">
            <h2>Personal Information</h2>
            <table>
                <tbody>
                    <tr>
                        <td><strong>Full Name:</strong></td>
                        <td>
                            {editMode.fullName ? (
                                <input
                                    type="text"
                                    value={personalData.fullName}
                                    onChange={(e) => handleInputChange(e, 'fullName')}
                                />
                            ) : (
                                personalData.fullName
                            )}
                        </td>
                        <td>
                            <button onClick={() => toggleEditMode('fullName')}>
                                {editMode.fullName ? 'Save' : 'Edit'}
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Date of Birth:</strong></td>
                        <td>
                            {editMode.dob ? (
                                <input
                                    type="text"
                                    value={personalData.dob}
                                    onChange={(e) => handleInputChange(e, 'dob')}
                                />
                            ) : (
                                personalData.dob
                            )}
                        </td>
                        <td>
                            <button onClick={() => toggleEditMode('dob')}>
                                {editMode.dob ? 'Save' : 'Edit'}
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Email:</strong></td>
                        <td>
                            {editMode.email ? (
                                <input
                                    type="text"
                                    value={personalData.email}
                                    onChange={(e) => handleInputChange(e, 'email')}
                                />
                            ) : (
                                personalData.email
                            )}
                        </td>
                        <td>
                            <button onClick={() => toggleEditMode('email')}>
                                {editMode.email ? 'Save' : 'Edit'}
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Phone:</strong></td>
                        <td>
                            {editMode.phone ? (
                                <input
                                    type="text"
                                    value={personalData.phone}
                                    onChange={(e) => handleInputChange(e, 'phone')}
                                />
                            ) : (
                                personalData.phone
                            )}
                        </td>
                        <td>
                            <button onClick={() => toggleEditMode('phone')}>
                                {editMode.phone ? 'Save' : 'Edit'}
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Address:</strong></td>
                        <td>
                            {editMode.address ? (
                                <input
                                    type="text"
                                    value={personalData.address}
                                    onChange={(e) => handleInputChange(e, 'address')}
                                />
                            ) : (
                                personalData.address
                            )}
                        </td>
                        <td>
                            <button onClick={() => toggleEditMode('address')}>
                                {editMode.address ? 'Save' : 'Edit'}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default PersonalData;
