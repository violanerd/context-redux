import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
//import counterReducer from '../features/counter/counterSlice'
import categorySlice from '../features/category/categorySlice'
import productSlice from '../features/products/productSlice'


const reducer = combineReducers({
     productSlice,
     categorySlice
    })



const store = configureStore({
    reducer
})

console.log(store.getState());


export default store

//import rootReducer from '../features/products/productSlice'
// const store = configureStore({
//     reducer: rootReducer
// })

// console.log(store.getState());
// const store = configureStore({
//     reducer: categorySlice
// })