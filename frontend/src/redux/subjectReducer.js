const SET_SUBJECT = "SET_SUBJECT";


let initialState = {
    subjectData: [
        // { id: 1, name: "Предмет", groups: "071906" },
        // { id: 2, name: "Предмет #2", groups: "071906" },
    ],
}

const subjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUBJECT:
            debugger;
            return { ...state, subjectData: [...state.subjectData, ...action.subjects] }
        default:
            return state;
    }
}

export const setSubject = (subjects) => ({
    type: SET_SUBJECT,
    subjects,
})

export default subjectReducer;