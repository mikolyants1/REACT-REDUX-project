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
           state.mass.push({name:name,x:x,y:y})
        },
        chan:(state,action)=>{
           const {name,x,y,i}=action.payload
           const obj={name:name,x:x,y:y}
           state.mass.splice(i,1,obj)
        },
        del:(state,action)=>{
          state.mass.splice(action.payload,1)
        },
        set:(state,action)=>{
          state.theme=action.payload
        }
    }
})
export const {add,chan,del,set}=slice.actions
export default slice.reducer