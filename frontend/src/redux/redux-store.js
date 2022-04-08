import { combineReducers, createStore } from "redux";
import subjectReducer from "./subjectReducer";
import subjectDetailReducer from "./subjectDetailReducer";

let reducers = combineReducers({
    subjectReducer: subjectReducer,
    subjectDetailReducer: subjectDetailReducer,
})

let store = createStore(reducers);

export default store;