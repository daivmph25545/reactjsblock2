import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { IStudent } from "../../../store/student/action";
import { IRootState } from "../../../store";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateStudent } from "../../store-tk/counter/counterSlice";




const UpdateStudent = () => {
    const dispatch = useDispatch()

    const { studentId } = useParams()
    const navigate = useNavigate()

    const studentToUpdate = useSelector((state: IRootState) => {
        return state.sinhviens.sinhviens.find(sv => sv._id === studentId);
    });
    

    const [name, setName] = useState(studentToUpdate ? studentToUpdate.name : "");
    const [price, setPrice] = useState(studentToUpdate ? studentToUpdate.price : 0);
    const [description, setDescription] = useState(studentToUpdate ? studentToUpdate.description : "");

    const handleUpdate = () => {
        if (!studentToUpdate) {
            return; 
        }

        const updatedStudent = {
            _id: studentToUpdate._id,
            name: name!,
            price: price!,
            description: description!,
        };
       
        dispatch(updateStudent(updatedStudent));
        navigate('/admin')
    };



    return (
        <>
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="" className="space-y-4" >
                    <div>
                        <label className="font-medium text-[20px]">Name</label>
                        <input
                            className="w-full rounded-lg border-2 bordered-b border-black p-3 font-medium text-sm"
                            type="text"
                            value={name}
                        onChange={(event) => setName(event.target.value)} 
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label className="font-medium text-[20px]" >Price</label>
                            <input
                                className="w-full rounded-lg border-2 bordered-b border-black p-3 font-medium text-sm"
                                type='number'
                                value={price}
                            onChange={(event) => setPrice(+event.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label className="font-medium text-[20px]" >Description</label>
                            <input
                                className="w-full rounded-lg border-2 bordered-b border-black p-3 font-medium text-sm"
                                type='text'
                                value={description}
                            onChange={(event) => setDescription(event.target.value)} 
                            />
                        </div>
                    </div>



                    <div className="mt-4">
                        <button
                            type="button"
                            className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                            onClick={handleUpdate}
                        >
                            Cập Nhật
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default UpdateStudent