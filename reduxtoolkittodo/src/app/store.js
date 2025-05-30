import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../fetures/todo/todoslice'


export const store = configureStore({
    reducer: todoReducer
})