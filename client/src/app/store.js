import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
//import counterReducer from '../features/counter/counterSlice'
import categorySlice from '../features/category/categorySlice'
import productSlice from '../features/products/productSlice'
import cartSlice from '../features/cart/cartSlice'


const reducer = combineReducers({
     productSlice,
     categorySlice,
     cartSlice
    })



const store = configureStore({
    reducer
})

console.log(store.getState());


export default store

