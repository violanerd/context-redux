import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cart: [],
    cartOpen: false,
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
            state.cartOpen = true
        },
        // will this work, just replace it??
        addMultipleToCart: (state, action) => {
            state.cart = action.payload
        },
        updateCartQuantity: (state, action) => {
            state.cartOpen = true
            state.cart = state.cart.map(product => {
                if (action.payload._id === product._id) {
                    product.purchaseQuantity = action.payload.purchaseQuantity
                }
                return product
            })
        },
        removeFromCart: (state, action) => {
            let newState = state.cart.filter(product => {
                return product._id !== action.payload
            })
            if (newState.length>0){
                state.cart = newState
                state.cartOpen = true
            } else {
                state.cart = []
                state.cartOpen = false
            }
        },
        clearCart: (state, action) => {
            state.cart = [];
            state.cartOpen = false
        },
        toggleCart: (state) => {
            console.log("toggle")
            state.cartOpen = !state.cartOpen
        }
    },
});

export const {addToCart, addMultipleToCart, updateCartQuantity, removeFromCart, clearCart, toggleCart} = cartSlice.actions
export default cartSlice.reducer
