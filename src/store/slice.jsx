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
          state.mass = [ 
            ...state.mass, action.payload
          ];
        },
        chanCoord:(state,action)=>{
          const {top,left,i} = action.payload;
          state.mass = state.mass.map((item,idx)=>{
            if (i == idx){
             item.top = top;
             item.left = left;
            } 
            return item
          });
        },
        chanText:(state,action)=>{
          const {text,i} = action.payload;
          state.mass = state.mass.map((item,idx)=>{
            if (i == idx){
             item.name = text;
            } 
            return item
          });
        },
        chanLoc:(state,action)=>{
          const {width,height,i} = action.payload;
          state.mass = state.mass.map((item,idx)=>{
            if (i == idx){
             item.width = width;
             item.height = height;
            } 
            return item
          });
        },
        chanMove:(state,action)=>{
          const {isMoved,i} = action.payload;
          state.mass = state.mass.map((item,idx)=>{
            if (i == idx){
             item.isMoved = isMoved;
            } 
            return item
          });
        },
        del:(state,{payload})=>{
          const newMass = state.mass
          .filter((_,i)=> i !== payload);
          state.mass = [ ...newMass ];
        },
        set:(state,action)=>{
          state.theme = action.payload;
        }
    }
});
export const {add,chanMove,chanCoord,chanText,del,set,chanLoc} = slice.actions;
export default slice.reducer