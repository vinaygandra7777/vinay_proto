import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TerminalPortfolio from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TerminalPortfolio />
  </StrictMode>,
)
