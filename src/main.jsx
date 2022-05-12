import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { store } from "./redux/store"
import { BrowserRouter } from "react-router-dom";
// console.log(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={ store }>
    <App />
    </Provider>
  </BrowserRouter>
)
