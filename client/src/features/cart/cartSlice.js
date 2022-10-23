import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cart: [],
    cartOpen: false,
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart += action.payload;
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
                return product._id !== action.payload._id
            })
            if (newState.length>0){
                state.cart = newState
                state.cartOpen = true
            } else {
                state.cart = []
            }

        },
        clearCart: (state, action) => {
            state.cart = [];
            state.cartOpen = false
        },
        toggleCart: (state, action) => {
            state.cartOpen = !state.cartOpen
        }
    },
});

export const {addMultipleToCart, updateCartQuantity, removeFromCart, clearCart, toggleCart} = cartSlice.actions
export default cartSlice.reducer
