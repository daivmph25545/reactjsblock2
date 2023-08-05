import { Outlet } from "react-router-dom"
import UserHeader from "./header"
import UserFooter from "./footer"
import Banner from "./slider"


const UserLayout = () => {
    return <div>
        <UserHeader/>
        <Banner/>
        <Outlet/>
        <UserFooter/>
    </div>
}

export default UserLayout