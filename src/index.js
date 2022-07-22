import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { AuthContextProvider } from './Context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <BrowserRouter basename='/hurebliss'>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()
