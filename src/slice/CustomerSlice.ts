import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Customer} from "../model/Customer.ts";

interface CustomerState {
    customers: Customer[];
}

export const initialState: CustomerState = {
    customers: [],
};

const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        setCustomer: (state, action: PayloadAction<Customer>) => {
            state.customers.push(action.payload);
        },
    },
});

export const { setCustomer } = customerSlice.actions;
export default customerSlice.reducer;
