import {createContext} from "react";
import App from './App.jsx'
import { set } from "../store/slice.jsx";
import { useDispatch,useSelector } from 'react-redux'
const root=document.querySelector(':root')
 const theme={
    one:'white',
    two:'black'
  }
export const Context=createContext(theme.two)
export default function Main(){
const state=useSelector((store)=>store.task.theme)
const dispatch=useDispatch()
const change=()=>{
const {one,two}=theme
dispatch(set(state==one?two:one))
  }
 return (
 <Context.Provider value={state}>
  <App
   change={change}
   root={root}
   theme={theme}
   val={state}
   />
</Context.Provider>
 )
}
