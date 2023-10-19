import {useState,useRef,useEffect,useReducer,useContext,useId} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {chan,add,del} from '../store/slice'
import {Context} from './theme.jsx'
function App({root}) {
const mass=useSelector((store)=>store.task.mass)
const lines=Array.from(Array(8).keys())
const dispatch=useDispatch()
const [todo,setTodo]=useState('')
const [width,setWidth]=useState(0)
const [state,move]=useReducer(reducer,0)
const {con,change}=useContext(Context)
const id=useId()
const ref=useRef()
const ref1=useRef()
useEffect(()=>move({type:width}),[width])
useEffect(()=>{
ref.current.style=`height:17%;width: 100%;
display:flex;border-top:2px solid black;`
const task=document.querySelectorAll('.todo')
if (mass.length!==0) {
  task.forEach((item,i)=>{
   item.style.left=`${mass[i].x-item.offsetWidth}px`
   item.style.top=`${mass[i].y}px`
  })
 }
},[])
useEffect(()=>{
  const cur=document.querySelector('.current')
  const wrap=document.getElementById('wrapper')
  const [s1,s2,s3]=getStyle(root,wrap,cur)
  s1.backgroundColor=`${con}`
  s3.color=`${con}`
  s2.boxShadow=`0px 1px 10px 0px ${con=='white'?'black':'white'}`
  s3.textShadow=`${con=='white'?'rgb(210,210,210)':'white'} 1px 0px 10px`
 },[con])
function reducer(state,{type}){
  if (type<120) return type/1.8
  else if (type>120&&type<150) return type/7
  else if (type>150) return -40
  else return state
}
const set=()=>{
  const {style}=document.querySelector('.desk1')
  dispatch(add({name:todo,x:300,y:style.height}))
  ref1.current.value=''
}
const getStyle=(...arr)=>{
  return arr.map(({style})=>style)
 }
const mouse=(e)=>{
  const n=document.querySelectorAll('span')
  const task=document.querySelectorAll('.todo')
  task.forEach((item,i)=>{
  if (item.hasAttribute('id')) {
    item.style.left=`${e.pageX-n[i].offsetWidth*3}px`;
    item.style.top=`${e.pageY-n[i].offsetHeight}px`;
    }
  })
}
const addItem=(e)=>{
  setTodo(e.target.value)
}
const enter=(e)=>{
 if (e.key=='Enter'){
  setTodo(e.target.value)
 }
}
const attr=(i)=>{
  const todo=document.querySelectorAll('.todo')
  const main=document.querySelectorAll('.main')
  const {top,left}=todo[i].getBoundingClientRect()
  const text=main[i].textContent
  setWidth(todo[i].offsetWidth)
  if (todo[i].hasAttribute('id')) {
    dispatch(chan({name:text,x:left-state,y:top-5,i:i}))
    todo[i].style.zIndex=10
    todo[i].removeAttribute('id',id)
  }else{
    todo[i].style.zIndex=100
    todo[i].setAttribute('id',id)
    }
}
  const style={
     width:'100%',
     height:'100%'
  }
  return <div id='wrapper' 
           onMouseMove={mouse}>
           <div className='desk1'>
             <div className='deskName'>
                <h2>Task Desk</h2>
             </div>
             <div className='deskBoard'>
               {lines.map(i=><div key={i} id='line' />)}
             </div>
           </div>
           <div ref={ref}>
             <div className='set'>
               <div className='setInp'>
                 <textarea type="text"
                  onChange={addItem}
                  onKeyUp={enter} 
                  ref={ref1}
                  />
               </div>
               <div className='setBut'>
                 <button style={style}
                  onClick={set}>
                   add
                 </button>
               </div>
             </div>
             <div className='get'>
               {mass.map(({name},i)=>(
                <div key={i}
                 className='todo'>
                  <div className='title'>
                    <li onClick={()=>attr(i)}>
                      <span>Task {i+1}</span>
                    </li>
                  </div>
                  <div className='main'
                   contentEditable={true}>
                    {name}
                  </div>
                  <div className='delBut'>
                    <button style={style}
                     onClick={()=>{dispatch(del(i))}}>
                        del
                    </button>
                  </div>
                </div>
                 ))}
             </div>
             <div className='set'>
               <div className='theme'>
                 Current Theme
               </div>
               <div className='current'>
                 {con}
               </div>
               <div className='chanDiv'>
                 <button className='chanBut'
                  onClick={change}>
                   change
                 </button>
               </div>
             </div>
           </div>
         </div>
  }
export default App
