import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import PopoverPopperProvider from "./store/PopoverPopperProvider";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <PopoverPopperProvider><App /></PopoverPopperProvider>
)
