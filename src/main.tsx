import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {customerStore} from "./store/CustomerStore.ts";
import {Provider} from "react-redux";
import {itemStore} from "./store/ItemStore.ts";

createRoot(document.getElementById('root')!).render(
    <Provider store={customerStore}>
        <Provider store={itemStore}>
           <App />
        </Provider>
    </Provider>
)
