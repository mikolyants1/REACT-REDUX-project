import { createContext, useEffect } from "react";
import App from './App.jsx'
import { set } from "../store/slice.jsx";
import { useDispatch,useSelector } from 'react-redux';

export const Context = createContext();

export default function Main(){
  const state = useSelector((store)=>store.task.theme);
  const dispatch = useDispatch();

  useEffect(()=>{
    const body = document.querySelector(":root");
    body.style.backgroundColor = state;
  },[state]);

  const change = () =>{
   dispatch(set(state == 'white' ? 'black' : 'white'));
  };
  
 return (
   <Context.Provider value={{con:state,change}}>
     <App />
   </Context.Provider>
 )
}
