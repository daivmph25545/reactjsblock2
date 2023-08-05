import thunk from "redux-thunk"
import counterReducer, { ICounterState } from "./counter/reducer"
import { combineReducers, applyMiddleware, createStore } from "redux"
import studentReducer, { IStudentState } from "./student/reducer"
import orderReducer, { IOrderState } from "./order/reduce"
import signinReducer, { SigninState } from "./auth/reduce"

// định nghĩa 1 cái rootstate chung

export interface IRootState {
    counter: ICounterState,
    sinhviens: IStudentState,
    orders: IOrderState,
    // auths:  SigninState

}

const rootReducer = combineReducers({
    counter: counterReducer,
    sinhviens: studentReducer,
    orders: orderReducer,
    // auths: signinReducer
})

// Tạo ra store
export const store = createStore(rootReducer, applyMiddleware(thunk))