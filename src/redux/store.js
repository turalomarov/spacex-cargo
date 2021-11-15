import { configureStore } from '@reduxjs/toolkit'
import shipmentsReducer from 'redux/shipmentsSlice'

export const store = configureStore({
    reducer:{
        shipmentsReducer
    },
})