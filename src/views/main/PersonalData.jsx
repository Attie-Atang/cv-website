import './PersonalData.css';

function PersonalData() {
    return (
        <section className="personal-data">
            <h2>Personal Information</h2>
            <table>
                <tbody>
                    <tr>
                        <td><strong>Full Name:</strong></td>
                        <td>Atang Maleka</td>
                    </tr>
                    <tr>
                        <td><strong>Date of Birth:</strong></td>
                        <td>January 1, 1990</td>
                    </tr>
                    <tr>
                        <td><strong>Email:</strong></td>
                        <td>Atangmaleka78@gmail.com</td>
                    </tr>
                    <tr>
                        <td><strong>Phone:</strong></td>
                        <td>+123456789</td>
                    </tr>
                    <tr>
                        <td><strong>Address:</strong></td>
                        <td>123 Street, City, Country</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default PersonalData;
