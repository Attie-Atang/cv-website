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
                        <td>University of Excellence</td>
                        <td>Bachelor of Science in Computer Science</td>
                        <td>2022 - 2024</td>
                    </tr>
                    <tr>
                        <td>Kenilworth Secondary School</td>
                        <td>High School Diploma</td>
                        <td>2015 - 2021</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default Education;
