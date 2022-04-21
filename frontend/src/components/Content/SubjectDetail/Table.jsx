// import *as axios from 'axios';
import style from "./css/SubDetail.module.css"
import { Form } from "react-bootstrap";
import React from "react";
import *as axios from 'axios';
import NewProgressComponent from './New-Progress/New-Progress';


const Table = (props) => {

    let date = new Date();
    let dateOutput = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
    let num = 0;

    // изменнеие и добавление занятия
    let newLessonInForm = React.createRef();
    const changeLessonDate = () => {
        let date = newLessonInForm.current.value;
        props.newLessonText(date);
    }
    const addLesson = () => {
        let date = newLessonInForm.current.value;
        let DataNewLesson = {
            date: date,
            subjects: props.contentData.subjectData.id,
            groups: props.contentData.subjectData.groups
        };
        axios({
            method: 'POST',
            url: '/api/Lesson/',
            data: DataNewLesson,
        }).then(response => {
            props.newLesson(response.data);
        })

        // axios({
        //     method: 'POST',
        //     url: '/api/Lesson/',
        //     data: props.contentData.newLessonData,
        // }).then(response => {
        //     props.newLesson(response.data);
        // })
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
                                        <input type="text" placeholder={dateOutput} className={style.input} id={style.input}
                                            onChange={changeLessonDate} ref={newLessonInForm} value={props.contentData.newLessonText} />
                                        <input type="checkbox" onClick={addLesson} className={style.check} id={style.check}></input>
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
                            {props.flag &&
                                <NewProgressComponent key={student.id} contentData={props.contentData} addNewProgress={props.addNewProgress}
                                    student={student.id} num={num++} newProgressTextGradeAdd={props.newProgressTextGradeAdd}
                                    newProgressTextGrade={props.newProgressTextGrade} newProgressTextAttendance={props.newProgressTextAttendance} />
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </span>
    )
}

export default Table;

