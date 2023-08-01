import { IStudent } from './../student/action';
import { AddCartDispatchType } from './type';

export interface IAddCart {
    type: 'add-cart',
    payload: IStudent
}

export const CartAction = (student: IStudent) => {
    const action: IAddCart = {
        type: 'add-cart',
        payload: student
    }
    return (dispatch: AddCartDispatchType) => {
        dispatch(action)
    }
}