import { useState } from "react"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { IStudent, addStudent } from "../../../store/student/action"
import { useNavigate } from "react-router-dom"

const AddStudent = () => {

    const [name, setName] = useState<string>('')
    const [birth, setBirth] = useState<number>(0)
    // const [_id, setId] = useState<number>(0)
    const [price, setPrice] = useState<number>(0)
    const [description, setDes] = useState<string>('')
    const dispatch: Dispatch<any> = useDispatch()
    const navigate = useNavigate()

    const add = () => {
        const sv: IStudent = {
            // _id,
            name,
            // birth,
            price,
            description
        }
        dispatch(addStudent(sv))
        navigate('/')
    }


    return (
        <>
        
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="" className="space-y-4" >
                    <div>
                        <label className="font-medium text-[20px]">Name</label>
                        <input
                            className="w-full rounded-lg border-2 bordered-b border-black p-3 font-medium text-sm"
                            type="text"
                            onChange={(event) => setName(event.target.value)} />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label className="font-medium text-[20px]" >Price</label>
                            <input
                                className="w-full rounded-lg border-2 bordered-b border-black p-3 font-medium text-sm"
                                type='number'
                                onChange={(event) => setPrice(+event.target.value)} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label className="font-medium text-[20px]" >Description</label>
                            <input
                                className="w-full rounded-lg border-2 bordered-b border-black p-3 font-medium text-sm"
                                type='text'
                                onChange={(event) => setDes(event.target.value)} />
                        </div>
                    </div>

                   

                    <div className="mt-4">
                        <button
                            type="button" onClick={add}
                            className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                        >
                            Thêm
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddStudent