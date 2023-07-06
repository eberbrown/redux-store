const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart", 
    initialState: { 
        cartList:[], 
        total: 0
    },
    reducers: {
        add(state, action){
            const updatedCartList = state.cartList.concat(action.payload);
            const updatedTotal = state.total + action.payload.price
            return {...state, total: updatedTotal, cartList: updatedCartList};
        }, 
        remove(state, action){
            const updatedCartList = state.cartList.filter(cartListItem => cartListItem.id !== action.payload.id);
            const updatedTotal = state.total - action.payload.price
            return {...state, total: updatedTotal, cartList: updatedCartList};
        }
    }
});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;