import { type } from 'os'
import { AddStudentAction, DeleteStudentAction, GetListStudentAction, IStudent, LoadingActions, UpdateStudentAction } from './action'



export interface IStudentState {
    sinhviens: IStudent[],
    isDataLoaded: boolean,
    error: unknown
}


const initSinhVienState: IStudentState = {
    sinhviens: [],
    isDataLoaded: false,
    error: null
}

type ICombinedAction = GetListStudentAction | UpdateStudentAction | LoadingActions | AddStudentAction | DeleteStudentAction;

const studentReducer = (state: IStudentState = initSinhVienState, action: ICombinedAction): IStudentState => {
    switch (action.type) {
        case 'get-sv':
            state = {
                ...state,
                sinhviens: action.payload.sinhviens
            }
            break;
        case 'loading-sv':
            state = {
                ...state,
                isDataLoaded: action.payload
            }
            break;
        case 'add-sv':
            state = {
                ...state,
                sinhviens: state.sinhviens.concat(action.payload)
            }
            break;
        case 'delete-sv':
            state = {
                ...state,
                sinhviens: state.sinhviens.filter(svien => svien._id !== action.payload._id)
            }
            break;
        case 'update-sv':
            state = {
                ...state,
                
                sinhviens: state.sinhviens.filter((item:any) => {
                    const newProduct = action.payload;
                    item.id = newProduct?._id? newProduct : item
                })
            }
        break;

    }

    return state
}

export default studentReducer