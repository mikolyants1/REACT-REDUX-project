import {createSlice} from '@reduxjs/toolkit'
const initialState={
    name:'',
    mass:[],
    theme:'black'
}
const slice=createSlice({
    name:'desk',
    initialState,
    reducers:{
        add:(state,action)=>{
          const {name,x,y}=action.payload
          state.mass=[
            ...state.mass,
            {name:name,x:x,y:y}
          ]
        },
        chan:(state,action)=>{
          const {name,x,y,i}=action.payload
          const left=state.mass.slice(0,i)
          const right=state.mass.slice(i+1)
          const obj={name:name,x:x,y:y}
          state.mass=[...left,obj,...right]
        },
        del:(state,{payload})=>{
          const newMass=state.mass
          .filter((_,i)=>i!==payload)
          state.mass=[...newMass]
        },
        set:(state,action)=>{
          state.theme=action.payload
        }
    }
})
export const {add,chan,del,set}=slice.actions
export default slice.reducer