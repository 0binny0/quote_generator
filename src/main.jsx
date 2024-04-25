import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { fetch_quotes } from "./components/quote_generator/utils.js";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
