import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { IRootState } from "../../../store"
import { useEffect } from "react"
import { IStudent, fetchSinhVienAction } from "../../../store/student/action"
import { Dispatch } from "redux"
import { Link } from "react-router-dom"





const HomePage = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const studentState = useSelector(
        (state: IRootState) => state.sinhviens
    )



    useEffect(() => {
        dispatch(fetchSinhVienAction())
    }, [dispatch])




    return (

        <div className="flex ">
            {studentState.sinhviens.map((sv, index) => {
                return <p key={index}>
                    <div >
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{sv.name}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {sv.description}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {sv.price}$</p>
                                <Link to={"/student-detail/:id"}>
                                    <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Detail
                                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                </p>

            })}


        </div >
    )
}

export default HomePage