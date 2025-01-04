import {Item} from "../model/Item.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ItemSlice{
    items: Item[];
}
export const initialState: ItemSlice= {
    items: [],
}

const itemSlice = createSlice({
    name:'items',
    initialState,
    reducers:{
        setItem: (state, action: PayloadAction<Item>) => {
            state.items.push(action.payload);
        }
    }
})
export const {setItem} = itemSlice.actions;
export default itemSlice.reducer;