import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './tailwind.css'
// import './tailwind_out.css';
import App from './App.tsx'

export const orange = "#ff9d25";
export const blue = "#3b82f4";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
