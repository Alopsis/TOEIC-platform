import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const redirect = sessionStorage.getItem('spa_redirect')
if (redirect && redirect !== '/') {
  sessionStorage.removeItem('spa_redirect')
  window.history.replaceState(null, null, redirect)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
