import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './css/reset.css'
import './css/index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
