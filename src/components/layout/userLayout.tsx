import { Outlet } from "react-router-dom"
import UserHeader from "./header"
import Banner from "./slider"
import UserFooter from "./footer"

const UserLayout = () => {
    return <div>
        <UserHeader/>
        <Banner/>
        <Outlet/>
        <UserFooter/>
    </div>
}

export default UserLayout