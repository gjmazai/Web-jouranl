import { connect } from "react-redux";
import { deleteContentAC, setContentAC } from "../../../redux/subjectDetailReducer";
import { setSubject } from "../../../redux/subjectReducer";
import Subject from "./Subject"


let mapStateToProps = (state) => {
    return {
        subjectData: state.subjectReducer.subjectData,
        contentData: state.subjectDetailReducer,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setSubject: (subjects) => {
            dispatch(setSubject(subjects));
        },
        setContent: (content) => {
            dispatch(setContentAC(content));
        },
        deleteContent: () => {
            dispatch(deleteContentAC());
        },
    }
}

const SubjectContainer = connect(mapStateToProps, mapDispatchToProps)(Subject)

export default SubjectContainer;