import slice from "./slice";
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore} from 'redux-persist'
import {combineReducers,configureStore} from '@reduxjs/toolkit'
const config={
    key:'root2',
    storage
}
const combine = combineReducers({
    task:slice
});

const persist = persistReducer(config,combine);

export const store = configureStore({
    reducer:persist
});

export const catched = persistStore(store);