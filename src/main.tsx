import { Global } from '@emotion/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { AlertContextProvider } from './contexts/AlertContext.tsx'
import './index.css'
import globalStyles from './styles/globalStyles.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global styles={globalStyles} />
    <QueryClientProvider client={queryClient}>
      <AlertContextProvider>
        <App />
      </AlertContextProvider>
    </QueryClientProvider>
  </StrictMode>,
)
