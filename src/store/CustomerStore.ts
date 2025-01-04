import { configureStore } from '@reduxjs/toolkit';
import customerSlice from "../slice/CustomerSlice";

export const customerStore = configureStore({
    reducer: {
        customers: customerSlice,
    },
});

export type RootState = ReturnType<typeof customerStore.getState>;
export type AppDispatch = typeof customerStore.dispatch;
