import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CssBaseline } from '@mui/material'
import { RewardProvider } from './Common/Context/Reward'
import { APIProvider } from './Common/Context/API'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <APIProvider>
      <RewardProvider>
        <CssBaseline />
        <App />
      </RewardProvider>
    </APIProvider>
  </React.StrictMode>,
)
