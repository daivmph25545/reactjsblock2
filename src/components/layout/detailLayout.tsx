import { Outlet } from "react-router-dom"
import UserHeader from "./header"
import Menuheader from "./menu"
import UserFooter from "./footer"
import StudentDetail from "../pages/student/productDetail"

const DetailLayout = () =>{
    return <div>
        <UserHeader/>
        <Menuheader/>
        <StudentDetail/>
        <Outlet/>
        <UserFooter/>
    </div>
}
export default DetailLayout