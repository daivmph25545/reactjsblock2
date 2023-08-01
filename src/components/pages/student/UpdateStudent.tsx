import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { IStudent } from "../../../store/student/action";
import { IRootState } from "../../../store";
import { useState } from "react";




const UpdateStudent = () => {
    const dispatch = useDispatch()
  



    return (
        <>
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4" >
                <div>
                    <label className="font-medium text-[20px]">Name</label>
                    <input
                        className="w-full rounded-lg border-2 bordered-b border-black p-3 font-medium text-sm"
                         />



                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label className="font-medium text-[20px]" >Birth</label>
                        <input
                            className="w-full rounded-lg border-2 bordered-b border-black p-3 font-medium text-sm"
                            type='number'
                             />

                    </div>


                </div>

                <div className="mt-4">
                    <button
                        type="button" 
                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    >
                        Sửa 
                    </button>
                </div>
            </form>
        </div>
    </>
    );
}

export default UpdateStudent