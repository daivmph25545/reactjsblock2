import { useDispatch } from "react-redux";
import { useAddStudentMutation, useDeleteStudentMutation, useEditStudentMutation, useGetStudentListQuery } from "../store-tk/student/student.service";
import { IStudent } from "../store-tk/student/student.interface";


const Student = () => {
    const dispatch = useDispatch();

    const [onAddStudent] = useAddStudentMutation()
    const [onEditStudent] = useEditStudentMutation()
    const [onDeleteStudent] =useDeleteStudentMutation()

    const { isError, isLoading, data: studenList } = useGetStudentListQuery(null);
    if (isLoading) {
        return <>Loading ....</>
    }

    if (isError) {
        return <p>Error</p>
    }
    return (
        <>
            <ul>
                {
                    (studenList as IStudent[] || []).map(student => {
                        return <li key={student.id}>{student.name}
                            <button onClick={() => onEditStudent({ id: student.id, name: 'Nguyễn A', birth: 2007 })}>Edit</button>
                            <button onClick={() => onDeleteStudent(student)}>Xoá</button>
                            
                        </li>
                    })
                }
            </ul>
            <button onClick={() => onAddStudent({ name: "ABC", birth: 2006 })}>Add</button>
        </>
    )
}

export default Student;