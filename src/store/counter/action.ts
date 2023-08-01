import * as actionType from './type'
import { DispatchType } from './type'

export type CounterAction = {
    type: string,
    payload: number
}

export function increaseCountAction(count:number){
    const action: CounterAction = {
        type: actionType.INCREASE_COUNT, // Tôi muốn gửi kèm hành động là tăng
        payload: count // data của tôi
    }
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}