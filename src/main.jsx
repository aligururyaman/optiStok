import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './app.css';
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './context/Auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </ChakraProvider>
)
