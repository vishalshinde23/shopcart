import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:localStorage.getItem("cart") ?
    JSON.parse(localStorage.getItem("cart")):[],
}
export const CartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        add:(state,action) => {
            state.cart.push(action.payload);
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        remove:(state,action) => {
            const index = state.cart.findIndex((item) => item._id === action.payload.id)
            if(index>=0){
              state.cart.splice(index, 1)
           
            }
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;