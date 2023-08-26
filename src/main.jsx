import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store,catched } from './store.jsx'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={catched}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
)
