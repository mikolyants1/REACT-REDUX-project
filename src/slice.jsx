import {createSlice} from '@reduxjs/toolkit'
const initialState={
    name:'',
    mass:[]
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
            const {i}=action.payload
          state.mass.splice(i,1)
        },
    }
})
export const {add,chan,del}=slice.actions
export default slice.reducer