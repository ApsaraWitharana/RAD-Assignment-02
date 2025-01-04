import {configureStore} from "@reduxjs/toolkit";
import itemSlice from "../slice/ItemSlice.ts";

export const itemStore=configureStore({
    reducer:{
        items:itemSlice,
    },
});

export type RootState = ReturnType<typeof itemStore.getState>;
export type AppDispatch = typeof itemStore.dispatch;