import { Outlet } from "react-router-dom";
import HeaderAdmin from "./headerAdmin";
import ShowStudent from "../pages/student/Admin";
import Admin from "../pages/student/Admin";
const AdminLayout = () => {
    return <div>
        <HeaderAdmin />
        <Outlet/>
        
    </div>
}
export default AdminLayout