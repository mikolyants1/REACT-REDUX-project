import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './home'
const root=document.querySelector(':root')
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home
       root={root}
      />
    </React.StrictMode>
)
