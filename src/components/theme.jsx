import { createContext } from "react";
import App from './App.jsx'
import { set } from "../store/slice.jsx";
import { useDispatch,useSelector } from 'react-redux'
const root=document.querySelector(':root')
export const Context=createContext()
export default function Main(){
const state=useSelector((store)=>store.task.theme)
const dispatch=useDispatch()
const change=()=>{
dispatch(set(
 state=='white'? 'black': 'white'
   ))
  }
 return (
 <Context.Provider value={{con:state,change:change}}>
   <App
    root={root} 
    />
</Context.Provider>
 )
}
