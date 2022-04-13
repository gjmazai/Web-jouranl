import *as axios from 'axios';
import style from "./css/SubDetail.module.css"
import { Form } from "react-bootstrap";
import React from "react";


const Table = (props) => {

    let date = new Date();
    let dateOutput = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();

    // изменнеие и добавление занятия
    let newLessonInForm = React.createRef();
    const changeLessonDate = () => {
        let date = newLessonInForm.current.value;
        props.newLessonText(date);
    }
    const addLesson = () => {
        let date = newLessonInForm.current.value;
        props.newLesson(date);
        axios({
            method: 'POST',
            url: '/api/Lesson/',
            data: props.contentData.newLessonData,
        })
    }

    return (
        <span className={style.SubDetail}>
            <table>
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
                        {props.flag &&
                            <th className={style.defaultRow}>
                                <Form action="post" className={style.form}>
                                    <label className={style.label}>
                                        <input type="text" placeholder={dateOutput} className={style.input}
                                            onChange={changeLessonDate} ref={newLessonInForm} value={props.contentData.newLessonText} />
                                        <input type="checkbox" onClick={addLesson}></input>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </span>
    )
}

export default Table;

