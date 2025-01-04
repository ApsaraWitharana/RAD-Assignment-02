import { createContext, useReducer } from "react";
import CustomerSlice, {initialState} from "../slice/CustomerSlice.ts";


export const CustomerContext  = createContext();

export function CustomerProvider({children}) {

    const [customers, dispatch] = useReducer(CustomerSlice, initialState);

    return (
        <CustomerContext.Provider value={[customers, dispatch]}>
            {children}
        </CustomerContext.Provider>
    );
}