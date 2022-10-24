import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        products: []
    },
    reducers: {
        updateProducts: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const {updateProducts} = productSlice.actions
export default productSlice.reducer