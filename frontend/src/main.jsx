import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StoreProvider } from './components/context/Context.jsx'
import { Store } from './components/context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider store={Store}>
      <App />
    </StoreProvider>
  </StrictMode>,
)
