import { useSelector } from "react-redux/es/hooks/useSelector"
import { IRootState } from "../store"

const ComponentB = () => {
    // lên store để lấy counter về
    const counterState = useSelector(
        (state : IRootState) => state.counter
    )
    
    return (
        <div>
            <h1>Giá trị giảm là: {counterState.counter} </h1>
        </div>
    )
}

export default ComponentB
