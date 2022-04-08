const SET_CONTENT = "SET_CONTENT";
const DELETE_CONTENT = "DELETE_CONTENT";

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
}

const subjectDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTENT:
            debugger;
            return {
                ...state,
                progressData: [/*...state.progressData, */...action.data.progress],
                subjectData: { ...action.data.subject },
                lessonData: [/*...state.lessonData,*/ ...action.data.lesson],
                studentData: [/*...state.studentData, */ ...action.data.student],
            }
        case DELETE_CONTENT:
            debugger;
            return {
                ...state,
                progressData: [],
                subjectData: {},
                lessonData: [],
                studentData: [],
            }
        default:
            return state;
    }
}

export const setContentAC = (data) => ({
    type: SET_CONTENT,
    data,
})

export const deleteContentAC = (data) => ({
    type: DELETE_CONTENT
})


export default subjectDetailReducer;