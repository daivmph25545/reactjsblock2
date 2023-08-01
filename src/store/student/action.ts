import { AddStudentDispatchType, DeleteStudentDispatchType, GetListDispatchType, LoadingDispatchType, UpdateStudentActionDispatchType } from "./type"

import { createSlice  } from "@reduxjs/toolkit";
export interface IStudent {
    _id?: number  ,
    name: string,
    // birth: number,
    price: number,
    description: string
}

interface IGetListStudentPayload {
    sinhviens: IStudent[],
    loading: boolean,
    error: unknown
}

export type GetListStudentAction = {
    type: 'get-sv',
    payload: IGetListStudentPayload
}

export type LoadingActions = {
    type: 'loading-sv',
    payload: boolean
}

export type AddStudentAction = {
    type: 'add-sv',
    payload: IStudent
}

export type DeleteStudentAction = {
    type: 'delete-sv',
    payload: IStudent
}

export type UpdateStudentAction = {
    type: 'update-sv',
    payload: IStudent
}

// Lấy sinh viên
export const fetchSinhVienAction = () => {

    return async (dispatch: GetListDispatchType) => {
        try {
            const response = await fetch('http://localhost:8088/api/products/products')
            // định nghĩa data nhận về từ API
            const data: { message: string, datas: IStudent[] } = await response.json();
            // console.log(data);
            
            dispatch({
                type: 'get-sv',
                payload: {
                    sinhviens: data.datas,
                    loading: false,
                    error: null
                }
            })

        } catch (error) {
            console.log(error);


        }
    }
}

// Loading svien
export const loadingStudent = (loading = false) => {
    return (dispatch: LoadingDispatchType) => {
        dispatch({
            type: 'loading-sv',
            payload: loading

        })
    }
}

// Thêm svien
export function addStudent(sv: IStudent) {
    return async (dispatch: AddStudentDispatchType) => {
        try {
            const response = await fetch('http://localhost:8088/api/products/products',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sv)

            })
            // Định nghĩa data nhận về từ API

            if(!response.ok){
                console.log('Error');
                
            }
            const data = await response.json();
            console.log(data);
            
            dispatch({
                type: 'add-sv',
                payload: data
            })


        } catch (error) {
            console.log(error);

        }
    }
}

// Xoá sv

export function deleteStudent(sv :IStudent) {
    return async (dispatch : DeleteStudentDispatchType) => {
        try {
            const response = await fetch(`http://localhost:8088/api/products/products/${sv._id}`,{
                method : 'DELETE',
            
            });
            // định nghĩa data nhận về từ API 
            if(!response.ok) {
                console.log('Error');
            }
             const data = await response.json();
             console.log(data);
             
            dispatch({
                type : 'delete-sv',
                payload : sv
            })
        } catch (error) {
            console.log(error);
        }
    }
} 

// Update sv

export const updateStudent = (updateStudent: IStudent) => {
    return async (dispatch: UpdateStudentActionDispatchType) => {
        try {
            const response = await fetch(`http://localhost:3001/students/${updateStudent._id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updateStudent)
            })

        if(!response.ok){
            console.log('Lỗi khi cập nhật svien');
        }

        const data = await response.json();
        
        dispatch({
            type: 'update-sv',
            payload: data
        }
        )

        } catch (error) {
            console.log(error);
            
        }
    }
}