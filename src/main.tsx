import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import GlobalStyle from './Main.styles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
)
