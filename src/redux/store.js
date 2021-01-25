import {combineReducers, createStore, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk"
import {postReducer,specialityReducer,classReducer,courseReducer,teacherReducer  } from "./reducers";






export default createStore (
  combineReducers({
    postReducer,
    specialityReducer,
    classReducer,
    courseReducer,
    teacherReducer }),
    composeWithDevTools(applyMiddleware(thunk))
    )
