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
                        <td>2015 - 2019</td>
                    </tr>
                    <tr>
                        <td>High School Academy</td>
                        <td>High School Diploma</td>
                        <td>2010 - 2014</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default Education;
