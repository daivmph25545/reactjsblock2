import * as actions from './type'

// Tạo ra 1 khuôn state

import { CounterAction } from "./action";

export interface ICounterState {
    counter: number;
}

// Khởi tạo state
const initCounterState: ICounterState = {
    counter: 0,
}


const counterReducer = (state: ICounterState = initCounterState, action: CounterAction): ICounterState => {
    switch (action.type) {
        case actions.INCREASE_COUNT :
            //Xử lý logic tăng trong này
            state = {
                ...state,
                counter: state.counter - action.payload
            }
    }
    return state;
}

export default counterReducer;