import { configureStore } from '@reduxjs/toolkit'
// import counterSlice from './counter/counterSlice'
import studentSlice from './../store-tk/student/studentSlice';
import { studentApi } from './student/student.service';

export const store = configureStore({
  reducer: {
    student: studentSlice,
    
    
    [studentApi.reducerPath]: studentApi.reducer,

  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentApi.middleware),

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch