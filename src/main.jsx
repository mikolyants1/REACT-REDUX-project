import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from "./components/Main.jsx";
import { store,catched } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={catched}>
           <Main />
        </PersistGate>
      </Provider>
    </React.StrictMode>
)
