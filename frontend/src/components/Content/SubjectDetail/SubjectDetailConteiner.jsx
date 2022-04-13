import { connect } from "react-redux";
import SubDetail from "./SubDetail";
import { setContentAC, deleteContentAC, newLessonAC, newLessonTextAC, newProgressTextGradeAC, newProgressTextAttendanceAC, newProgressAC, newProgressTextGradeAddAC } from "../../../redux/subjectDetailReducer";
import React from 'react';
import { useParams } from "react-router-dom";

// class SubjectDetailContainer extends React.Component {

// componentDidMount() {
//     const path = "/api/subjec_detail/" + this.props.id;
//     axios.get(path).then(response => {
//         const data = {
//             progress: response.data.progress,
//             subject: response.data.subject,
//             lesson: response.data.lesson,
//             student: response.data.student,
//         };
//         this.props.setContent(data)
//     });
// }

// componentWillUnmount() {
//     this.props.deleteContent();
// }

// componentDidUpdate(prevProps) {
//     debugger;
//     // this.props.deleteContent();
//     if (this.props.contentData !== prevProps.contentData) {
//         console.log((this.props.contentData.subjectData.id != prevProps.contentData.subjectData.id));
//         debugger;
//         const path = "/api/subjec_detail/" + this.props.id;
//         axios.get(path).then(response => {
//             const data = {
//                 progress: response.data.progress,
//                 subject: response.data.subject,
//                 lesson: response.data.lesson,
//                 student: response.data.student,
//             };
//             this.props.setContent(data)
//         });
//     }
// }

//     render() {
//         return (
//             <SubDetail {...this.props} progressData={this.props.contentData.progressData}
//                 subjectData={this.props.contentData.subjectData}
//                 lessonData={this.props.contentData.lessonData}
//                 studentData={this.props.contentData.studentData}
//                 setContent={this.props.setContent}
//                 id={this.props.id} />
//         )
//     }
// }


let mapStateToProps = (state) => {
    return {
        contentData: state.subjectDetailReducer,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setContent: (content) => {
            dispatch(setContentAC(content));
        },
        deleteContent: () => {
            dispatch(deleteContentAC());
        },

        // Для занятий
        newLesson: (date) => {
            dispatch(newLessonAC(date));
        },
        newLessonText: (text) => {
            dispatch(newLessonTextAC(text));
        },

        // Для прогресса
        addNewProgress: (text) => {
            dispatch(newProgressAC(text));
        },
        newProgressTextGradeAdd: (data) => {
            dispatch(newProgressTextGradeAddAC(data));
        },
        newProgressTextGrade: (data) => {
            dispatch(newProgressTextGradeAC(data));
        },
        newProgressTextAttendance: (data) => {
            dispatch(newProgressTextAttendanceAC(data));
        },
    }
}

const ContentURLMatch = (props) => {
    const { id } = useParams();
    return <SubDetail {...props} id={id} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentURLMatch);


