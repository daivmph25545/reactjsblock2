import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { IStudent, deleteStudent, fetchSinhVienAction, loadingStudent, updateStudent } from "../../../store/student/action";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store";
import FormStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent";
import { Link } from "react-router-dom";
import { CartAction } from "../../../store/order/action";
import Cart from "./Cart";



const Admin = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const studentState = useSelector(
        (state: IRootState) => state.sinhviens
    )
    const [search, setSearch] = useState("")
    const [filter, setFilterStudent] = useState(studentState.sinhviens)



    useEffect(() => {
        const filtered = studentState.sinhviens.filter(sv => {
            sv.name.toLowerCase().includes(search.toLowerCase())
        });
        setFilterStudent(filtered);
    }, [studentState.sinhviens, search]);

    useEffect(() => {
        dispatch(loadingStudent(true))
        dispatch(fetchSinhVienAction())
    }, [dispatch])

    if (!studentState.isDataLoaded) {
        return <div>Loading</div>
    }

    const handleDeletesv = (sv: IStudent) => {
        dispatch(deleteStudent(sv))
    }

    const handleCart = (sv: IStudent) => {
        dispatch(CartAction(sv))
    }



    return (
        <>


            {/* SHOW PRODUCT */}

            <div>
                <div id="view" className="h-full w-screen flex flex-row" x-data="{ sidenav: true }">
                    <div
                        id="sidebar"
                        className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
                        x-show="sidenav"
                    >
                        <div className="space-y-6 md:space-y-10 mt-10">
                            <button
                                className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
                            </button>
                        </div>
                        <div id="menu" className="flex flex-col space-y-2">
                            <a
                                href=""
                                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="w-6 h-6 fill-current inline-block"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                    ></path>
                                </svg>
                                <span className="">Sản phẩm chung</span>
                            </a>


                        </div>

                    </div>
                    <div className="antialiased font-sans bg-gray-200 h-full w-screen flex flex-row">
                        <div className="container mx-auto px-4 sm:px-8">
                            <div className="py-8">
                                <div className="flex justify-between">

                                    <h2 className="text-2xl font-semibold text-[#5F5E61] leading-tight">SẢN PHẨM CHUNG</h2>

                                    <Link to={"create"}>
                                        <button className="rounded-full bg-purple-500 hover:bg-blue-500 w-[100px] h-[30px] text-white">Thêm </button>
                                    </Link>
                                    <Cart />

                                </div>
                                <span className="text-[#5A6169] text-[16px] py-4">Tìm kiếm sản phẩm</span>
                                <div className="my-2 flex sm:flex-row flex-col">
                                    <div className="flex flex-row mb-1 sm:mb-0">
                                        <div className="relative">
                                            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." />
                                        </div>
                                    </div>
                                </div>
                                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                        <table className="min-w-full leading-normal">
                                            <thead>
                                                <tr>

                                                    <th
                                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        ID Sản Phẩm
                                                    </th>
                                                    <th
                                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Tên sản phẩm
                                                    </th>
                                                    <th
                                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Giá
                                                    </th>

                                                    <th
                                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Hình Ảnh
                                                    </th>
                                                    <th
                                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Mổ Tả
                                                    </th>
                                                    <th
                                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Thao tác
                                                    </th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {studentState.sinhviens.map((sv, index) => {
                                                    return <tr key={index}>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-[15px] font-medium">
                                                            <p className="text-gray-900 whitespace-no-wrap">{sv._id}</p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-[15px] font-medium">
                                                            {sv.name}
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-[15px] font-medium">
                                                            <p className="text-gray-900 whitespace-no-wrap">{sv.price}$</p>
                                                        </td>

                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            {/* <img className="text-gray-900 whitespace-no-wrap w-[100px]" src={product.images?.[0].base_url}></img> */}
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-[15px] font-medium">
                                                            <p className="text-gray-900 whitespace-no-wrap" >{sv.description}</p>
                                                        </td>
                                                        <td className="px-10 py-12 border-b border-gray-200 bg-white text-sm flex">
                                                            <Link to={`edit/${sv._id}`}>
                                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" >Sửa</button>
                                                            </Link>
                                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded ml-2" onClick={e => handleDeletesv(sv)}>Xoá</button>
                                                            <button className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded ml-2" onClick={e => handleCart(sv)}>Add Cart</button>
                                                        </td>

                                                    </tr>
                                                })}

                                            </tbody>
                                        </table>
                                        <div
                                            className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                                            <span className="text-xs xs:text-sm text-gray-900">
                                                Hiển thị 1 đến 4 trong số 50 mục nhập
                                            </span>
                                            <div className="inline-flex mt-2 xs:mt-0">
                                                <button
                                                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                                    -
                                                </button>
                                                <button
                                                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Admin