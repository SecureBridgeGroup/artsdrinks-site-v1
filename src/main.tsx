import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // Importando o roteador aqui

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* O Router envolve o App inteiro aqui. Impossível dar erro de contexto agora. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)