import { InterFace } from "./interface"

export const Signup = (data: any) => {
    return InterFace.post("/signup",data)
}
export const Signin = (data: any) => {
    return InterFace.post("/signin",data)
}