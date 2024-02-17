import { createContext, useEffect } from "react";
import App from './App.jsx'
import { set } from "../store/slice.jsx";
import { useDispatch,useSelector } from 'react-redux';
import { Context } from "./helpers/context.jsx";

export default function Main(){
  const theme = useSelector((store)=>store.task.theme);
  const dispatch = useDispatch();

  useEffect(()=>{
    const body = document.querySelector(":root");
    body.style.backgroundColor = theme;
  },[theme]);

  const change = () =>{
   dispatch(set(theme == 'white' ? 'black' : 'white'));
  };
  
 return (
   <Context.Provider value={{theme,change}}>
     <App />
   </Context.Provider>
 )
}
