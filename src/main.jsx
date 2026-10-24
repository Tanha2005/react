import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Index from './Index.jsx'
import Myapp from './Myapp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Index/> */}
    <Myapp/>
  </StrictMode>,
)
