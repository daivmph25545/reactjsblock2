import { IStudent } from './../../../store/student/action';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// export interface CounterState {
//   value: number
// }

// const initialState: CounterState = {
//   value: 0,
// }

export interface IStudentState {
  sinhviens: IStudent[],
  isDataLoaded: boolean,
  error: unknown
}

const initialState: IStudentState = {
  sinhviens: [],
  isDataLoaded: false,
  error: null
}


// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action: PayloadAction<number>) => {
//       state.value += action.payload
//     },
//   },
// })



const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    getAllStudent: (state, action: PayloadAction<IStudent[]>) => {
      state.sinhviens = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isDataLoaded = action.payload
    },
    addStudent: (state, action: PayloadAction<IStudent>) => {
      state.sinhviens.push(action.payload)
    },
    deleteStudent: (state, action: PayloadAction<string>) => {
      state.sinhviens = state.sinhviens.filter(sv => sv._id !== action.payload)
    },
    updateStudent: (state, action: PayloadAction<IStudent>) => {
      const newProduct = action.payload
      state.sinhviens = state.sinhviens.map(item => item._id === newProduct._id ? newProduct : item)
    }
  }

})



// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer

export const { getAllStudent, setLoading, addStudent, deleteStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer; 