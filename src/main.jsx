// main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  // What does strict mode even do, I just have it cause it came like this. Main body of website edits happen in App.jsx. 
  // Probably going to make a desktopApp and then MobileApp, and have the switch logic be here. 
  // (Or maybe there's a node module for that, unsure if I want to start using those.)
  <StrictMode>
    <App />
  </StrictMode>,
)
