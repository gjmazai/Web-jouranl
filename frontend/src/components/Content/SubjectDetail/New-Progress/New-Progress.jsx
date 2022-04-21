import { Form } from "react-bootstrap";
import style from './../css/SubDetail.module.css'
import React from 'react';
import *as axios from 'axios';

const NewProgressComponent = (props) => {

    let newProgressGradeInForm = React.createRef();
    let newProgressAttendanceInForm = React.createRef();

    // отвечают за внесение данных в форму
    const changeProgressGradeDate = () => {
        let date = newProgressGradeInForm.current.value;
        props.newProgressTextGrade(date);
    }
    const changeProgressAttendanceDate = () => {
        let date = newProgressAttendanceInForm.current.value;
        props.newProgressTextAttendance(date);
    }

    //отвечают за запрос
    const addProgressStudentAfterHalfMinutes = async () => {
        let grade = newProgressGradeInForm.current.value;
        let attendace = newProgressAttendanceInForm.current.value;
        let data = {
            grade: grade,
            attendace: attendace,
            students: props.student
        }
        props.addNewProgress(data);
    }


    return (
        <div>
            <Form action="post" className={style.form}>
                <label className={style.label}>
                    <input type="text" placeholder="Оценка" className={style.input}
                        onChange={changeProgressGradeDate} ref={newProgressGradeInForm} value={props.contentData.newProgressTextGrade} />

                    <input type="text" placeholder="Посещаемость" className={style.input}
                        onChange={changeProgressAttendanceDate} ref={newProgressAttendanceInForm} value={props.contentData.newProgressTextAttendace} />

                    <input type="checkbox" onClick={addProgressStudentAfterHalfMinutes} className={style.check} />
                </label>
            </Form>
        </div>
    )
}

export default NewProgressComponent;