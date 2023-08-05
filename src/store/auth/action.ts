import { ThunkAction } from "redux-thunk"
import { IRootState } from ".."
import { SigninDispatchType } from "./type"


export interface ISignin {
    email: string,
    password: string
}

export interface SigninResponse {
    token: string,
    user: {
        name: string,
        email: string,
        password: string
    }
}

export interface SigninError {
    message: string
}

export type SigninPayload = SigninResponse | SigninError

export type SigninAction = {
    type: 'signin-request' | 'signin-success' | 'signin-failed',
    payload: SigninPayload
}

export const signin = (data: ISignin) => {
    return async (dispatch: SigninDispatchType) => {
        try {
            dispatch({ type: 'signin-request', payload: { message: 'Đang gửi yêu cầu đăng nhập' } })

            const response = await fetch('http://localhost:8088/api/auth/signin',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            

            })

            
            
            if(!response.ok){
                const errorData = await response.json();
                dispatch({type: 'signin-failed' , payload: errorData})
            }else{
                const responseData = await response.json();
                dispatch({type: 'signin-success' , payload: responseData})
            }


        } catch (error) {
            console.log(error);
            dispatch({ type: 'signin-failed', payload: { message: 'Lỗi đăng nhập' } })

        }
    }
}






