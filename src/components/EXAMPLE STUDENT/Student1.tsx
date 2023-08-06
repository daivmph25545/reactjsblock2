import { useDispatch } from "react-redux";
import { useGetStudentListQuery } from "../store-tk/student/student.service";
import { IStudent } from "../store-tk/student/student.interface";


const Student1 = () => {
    const dispatch = useDispatch();
    
   const { isError,isLoading,data: studenList } =   useGetStudentListQuery(null);
   if(isLoading) {
    return <>Loading ....</>
   }

   if(isError) {
    return <p>Error</p>
   }
   return (
    <>
        <ul>
            {
                (studenList as IStudent[] || []).map(student =>{
                   return  <li key={student.id}>{student.name}</li>
                })
            }
        </ul>
    </>
   )
}

export default Student1;