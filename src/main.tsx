import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {customerStore} from "./store/CustomerStore.ts";
import {Provider} from "react-redux";

createRoot(document.getElementById('root')!).render(
    <Provider store={customerStore}>
        <App />
    </Provider>
)
