import { IStudent } from "../student/action";
import { IAddCart } from "./action";


export interface IOrder {
    productId?: number | string;
    quantity: number,
    nameProduct: string,
    priceProduct: number,
    totalPrice: number
}

export interface IOrderState {
    orders: IOrder[]

}

const initOrderState: IOrderState = {
    orders: [],
}

const orderReducer = (state: IOrderState = initOrderState, action: IAddCart): IOrderState => {
    switch (action.type) {
        case 'add-cart':
            const orderExistIndex = state.orders.findIndex(order => order.productId === action.payload._id)
            if (orderExistIndex === -1) {
                // state.orders[orderExistIndex].quantity += 1
                state = {
                    ...state,       
                    orders: [{
                        productId: action.payload._id,
                        quantity: 1,
                        nameProduct: action.payload.name,
                        priceProduct: action.payload.price,
                        totalPrice: action.payload.price
                    }, ...state.orders]
                }
            } else {
                state.orders[orderExistIndex].quantity += 1
                
                state = {
                    ...state,
                    orders: state.orders
                }

            }
            break;
    }

    return state
}

export default orderReducer