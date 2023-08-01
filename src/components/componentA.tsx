import { useDispatch } from "react-redux";
import { Dispatch } from "redux"
import { increaseCountAction } from "../store/counter/action";


const ComponentA = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const increase = () => {
        dispatch(increaseCountAction(1))
    }

    return (
        <div>
            <button onClick={increase}>Giảm</button>
        </div>
    )

}

export default ComponentA