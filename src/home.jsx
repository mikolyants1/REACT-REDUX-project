import {createContext,useState,useEffect} from "react";
import App from './App.jsx'
import { store,catched } from './store.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

 const theme={
    one:'white',
    two:'black'
  }
export const Context=createContext(theme.two)
export default function Home({root}){
const {one,two}=theme
const [state,setState]=useState(two)
const change=()=>{
setState(state==one?two:one)
}
    return (
        <Provider store={store}>
        <PersistGate persistor={catched}>
          <Context.Provider value={state}>
            <App
             change={change}
             root={root}
             theme={theme}
             val={state}
             />
          </Context.Provider>
        </PersistGate>
      </Provider>
    )
}