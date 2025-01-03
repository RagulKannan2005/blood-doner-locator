import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Seeker from './components/Seeker'
import Registerform from './components/Registerform'
// import Entrypage from './components/Entrypage'
// import Tcenter from './components/Tcenter'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Registerform />
    {/* <Entrypage /> */}
    {/* <Tcenter /> */}
    {/* <Seeker /> */}
    
  </StrictMode>,
)
