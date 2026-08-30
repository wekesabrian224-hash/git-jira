import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Contacts from './Pages/Contacts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Contacts />
  </StrictMode>,
)
