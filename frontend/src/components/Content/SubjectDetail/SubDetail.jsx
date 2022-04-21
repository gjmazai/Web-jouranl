import { useState } from "react";
import style from "./css/SubDetail.module.css"
import { Button } from "react-bootstrap";
import React from "react";
// import NewProgressComponent from './New-Progress/New-Progress';
import Table from './Table';


const SubDetail = (props) => {

    let [flag, setFlag] = useState(false);
    const newLessonButton = () => {
        setFlag(true);
    }
    const oldLessonButton = () => {
        setFlag(false);
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <Table contentData={props.contentData} flag={flag} className={style.tableContent}
                            newLessonText={props.newLessonText} newLesson={props.newLesson} addNewProgress={props.addNewProgress}
                            newProgressTextGradeAdd={props.newProgressTextGradeAdd}
                            newProgressTextGrade={props.newProgressTextGrade} newProgressTextAttendance={props.newProgressTextAttendance} />
                        {/* </div>
                    <div className='col'>
                        {flag &&
                            props.contentData.studentData.map(student => (
                                < NewProgressComponent key={student.id} contentData={props.contentData} addNewProgress={props.addNewProgress}
                                    student={student.id} num={num++} newProgressTextGradeAdd={props.newProgressTextGradeAdd}
                                    newProgressTextGrade={props.newProgressTextGrade} newProgressTextAttendance={props.newProgressTextAttendance} />
                            ))}
                    </div> */}
                    </div>
                </div>
                {!flag ?
                    <Button onClick={newLessonButton}>Добавить новое занятие</Button>
                    : flag &&
                    <div>
                        <Button onClick={oldLessonButton}>Отмена</Button>
                        <span>
                            <h1 className={style.warning}>Пожалуйста заполните сначала поле занятия</h1>
                        </span>
                    </div>


                }
            </div>
        </div>
    )
}

export default SubDetail;