import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {AuthProvider} from "./GlobalData/AuthContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      {/* Wrapping all of the components defined in app.tsx with our AuthProvider */}
      {/* This gives us the ability to share user data and mutator to any component */}
      {/* We can move this wrapper depending on what we need wrapped in the authprovider */}
      <AuthProvider>
        <App />
      </AuthProvider>
  </StrictMode>,
)
