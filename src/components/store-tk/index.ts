import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productAPI, { productReducer} from '../../api/student';
// import cateAPI, { cateReducer } from '../api/category';


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['counter']
}
const rootReducer = combineReducers({
    // counter: counterReducer,
    [productAPI.reducerPath]: productReducer,
    // [cateAPI.reducerPath]: cateReducer
    // cart: cartReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(productAPI.middleware),
});
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

export default persistStore(store)