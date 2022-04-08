import { useState } from "react";
import *as axios from 'axios';
import style from "./css/SubDetail.module.css"
import { Button, Form } from "react-bootstrap";


const SubDetail = (props) => {
    debugger;
    const [data, setData] = useState(props.contentData);
    // progressData: props.contentData.progressData,
    // subjectData: props.contentData.subjectData,
    // lessonData: props.contentData.lessonData,
    // studentData: props.contentData.studentDat);

    // let getSub = () => {
    // const path = "/api/subjec_detail/" + props.id;
    // axios.get(path).then(response => {
    //     const data = {
    //         progress: response.data.progress,
    //         subject: response.data.subject,
    //         lesson: response.data.lesson,
    //         student: response.data.student,
    //     };
    //     setData = props.setContent(data)
    // });
    let [flag, setFlag] = useState(false);

    let date = new Date();
    let dateOutput = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();

    const newLesson = () => {
        setFlag(true);
        <newLesson studentData={props.contentData.studentData} />
    }

    const oldLesson = () => {
        setFlag(false);
    }

    return (
        <div className={style.SubDetail}>
            <table className="table-light">
                <caption valign="top" >
                    <h3>{props.contentData.subjectData.name}</h3>
                </caption>

                <thead>
                    <tr className={style.table}>
                        <th className={style.defaultRow}>Студент</th>
                        {props.contentData.lessonData.map(lesson => (
                            <th>
                                <p>{lesson.date}</p>
                                <p>Оценка / Пос.</p>
                            </th>
                        ))}
                        {flag &&
                            <th className={style.defaultRow}>
                                <Form action="post" className={style.form}>
                                    <label className={style.label}>
                                        <input type="text" placeholder={dateOutput} className={style.input} />
                                    </label>
                                </Form>
                                <p>Оценка / Пос.</p>
                            </th>
                        }
                    </tr>
                </thead>
                <tbody>
                    {props.contentData.studentData.map(student => (
                        <tr>
                            <td>{student.name}</td>
                            {props.contentData.progressData.map(progress => (
                                progress.students === student.id ?
                                    <td><p>{progress.grade} / {progress.attendance}</p></td> :
                                    <></>
                            ))}
                            {flag &&
                                <td>
                                    <Form action="post">
                                        <label>
                                            <input type="text" className={style.input} />
                                        </label>
                                    </Form>
                                </td>
                            }
                        </tr>
                    ))}

                </tbody>
            </table>
            {
                !flag &&
                <Button variant='primary' onClick={newLesson}>Добавить новое занятие</Button>
            } {
                flag &&
                <Button variant='primary' onClick={oldLesson} type="submit">Сохранить</Button>
            }
        </div >
    )
}

export default SubDetail;