

import { SigninAction } from "./action";

export interface SigninState {
    users: {
        name: string,
        email: string,

    } | null,
    token: string | null,
    error: string | null

}

const initSigninState: SigninState = {
    users: null,
    token: null,
    error: null
}

const signinReducer = (state: SigninState = initSigninState, action: SigninAction): SigninState => {
    switch (action.type) {
        case 'signin-request':
            return {
                ...state
            }
        case 'signin-success':
            if ('user' in action.payload)
                return {
                    ...state,
                    users: action.payload.user, token: action.payload.token
                }
            return state
        case 'signin-failed':
            if ('message' in action.payload)
                return {
                    ...state,
                    error: action.payload.message
                }
            return state;
    }

}

export default signinReducer
