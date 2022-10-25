import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import categorySlice from '../features/category/categorySlice'
import productSlice from '../features/products/productSlice'
import cartSlice from '../features/cart/cartSlice'


const reducer = combineReducers({
     productSlice,
     categorySlice,
     cartSlice
    });



const store = configureStore({
    reducer
});



export default store

