import './Education.css';

function Education() {
    return (
        <section className="education">
            <h2>Education</h2>
            <table>
                <thead>
                    <tr>
                        <th>Institution</th>
                        <th>Degree</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>University of limpopo</td>
                        <td>Bachelor of Science in Computer Science</td>
                        <td>2024 - 2026</td>
                    </tr>
                    <tr>
                        <td>Kenilworth Secondary School</td>
                        <td>National Senior Certificate</td>
                        <td>2017 - 2021</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default Education;
