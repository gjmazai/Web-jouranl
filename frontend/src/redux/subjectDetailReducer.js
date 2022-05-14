import axios from "axios";

const SET_CONTENT = "SET_CONTENT";
const DELETE_CONTENT = "DELETE_CONTENT";
const NEW_LESSON = "NEW_LESSON";
const NEW_PROGRESS = "NEW_PROGRESS";
const NEW_LESSON_TEXT = 'NEW_LESSON_TEXT';
const NEW_PROGRESS_TEXT_GRADE = 'NEW_PROGRESS_TEXT_GRADE';
const NEW_PROGRESS_TEXT_ATTENDACE = 'NEW_PROGRESS_TEXT_ATTENDACE';
const NEW_PROGRESS_TEXT_GRADE_ADD = 'NEW_PROGRESS_TEXT_GRADE_ADD';


let lastElArray = (array) => {
    return array[array.length - 1];
}

let initialState = {
    progressData: [
        // { id: null, students: null, lessons: null, attendance: "", grade: null }
    ],
    subjectData: {
        // { id: null, name: "", groups: null }
    },

    lessonData: [
        // { id: null, date: "", subjects: null }
    ],

    studentData: [
        // { id: null, name: "" }
    ],

    newLessonData: {
        //date: ...
    },

    newProgressData: {

    },

    // allData: {
    //     subjectData: {
    //         // { id: null, name: "", groups: null }
    //     },
    //     lessonData: [
    //     ],
    // },

    newLessonId: null,

    newLesssonText: '',
    newProgressTextGrade: [],
    newProgressTextAttendace: [],
}

const subjectDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTENT:
            return {
                ...state,
                progressData: [/*...state.progressData, */...action.data.progress],
                subjectData: { ...action.data.subject },
                lessonData: [/*...state.lessonData,*/ ...action.data.lesson],
                studentData: [/*...state.studentData, */ ...action.data.student],
            }
        case DELETE_CONTENT:
            return {
                ...state,
                progressData: [],
                subjectData: {},
                lessonData: [],
                studentData: [],
            }
        case NEW_LESSON:
            return {
                ...state,
                newLessonData: { ...action.data },
            }
        case NEW_PROGRESS:
            // debugger;
            let DataNewProgress = {
                attendance: action.data.attendace,
                grade: action.data.grade,
                students: action.data.students,
                lessons: state.newLessonData.id,
            };
            axios({
                method: 'POST',
                url: '/api/Progress/',
                data: DataNewProgress,
            }).then(response => {
                DataNewProgress = response.data;
            });
            return {
                ...state,
                newProgressData: DataNewProgress// [...state.newProgressData,

            }
        case NEW_LESSON_TEXT:
            return {
                ...state,
                newLesssonText: action.text
            }
        case NEW_PROGRESS_TEXT_GRADE_ADD:
            return {
                ...state,
                newProgressTextGrade: [...state.newProgressTextGrade, action.data]
            }
        case NEW_PROGRESS_TEXT_GRADE:
            return {
                ...state,
                newProgressTextGrade: action.data.text //state.newProgressTextGrade.map(el => (
                //     el === '' ? {
                //         ...el, ...action.data.text
                //     } : {
                //         el
                //     }
                // )),
            }
        case NEW_PROGRESS_TEXT_ATTENDACE:
            return {
                ...state,
                newProgressTextAttendace: action.data.text
            }
        default:
            return state;
    }
}


export const setContentAC = (data) => ({
    type: SET_CONTENT,
    data
})

export const deleteContentAC = (data) => ({
    type: DELETE_CONTENT
})

// Для занятий
export const newLessonAC = (data) => ({
    type: NEW_LESSON,
    data
})
export const newLessonTextAC = (text) => ({
    type: NEW_LESSON_TEXT,
    text
})

// Для прогресса
export const newProgressAC = (data) => ({
    type: NEW_PROGRESS,
    data
})
export const newProgressTextGradeAC = (data) => ({
    type: NEW_PROGRESS_TEXT_GRADE,
    data
})
export const newProgressTextGradeAddAC = (data) => ({
    type: NEW_PROGRESS_TEXT_GRADE_ADD,
    data
})
export const newProgressTextAttendanceAC = (data) => ({
    type: NEW_PROGRESS_TEXT_ATTENDACE,
    data
})

// Геттеры для получения прогресса и занятия


export default subjectDetailReducer;