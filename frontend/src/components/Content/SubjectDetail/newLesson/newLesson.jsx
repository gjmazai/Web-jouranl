import { FormCheck } from "react-bootstrap";

const newLesson = (props) => {
    let date = new Date();
    let output = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
    debugger;
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <p>{output}</p>
                        <FormCheck></FormCheck>
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.studentData.map(studnet => {
                    <tr>
                        <td>
                            <FormCheck></FormCheck>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default newLesson;