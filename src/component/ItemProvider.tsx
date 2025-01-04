import {createContext, useReducer} from "react";
import ItemSlice , {initialState}from "../slice/ItemSlice.ts";

export const ItemContext = createContext();

export function ItemProvider({children}) {
    const [items, dispatch] = useReducer(ItemSlice, initialState);

    return (
        <ItemContext.Provider value={[ items, dispatch ]}>
            {children}
        </ItemContext.Provider>
    );
}