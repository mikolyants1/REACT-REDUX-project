import {useState,useRef,useEffect,useReducer} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {chan,add,del} from './slice.jsx'
function App() {
const mass=useSelector((store)=>store.task.mass)
const dispatch=useDispatch()
const lines=[1,2,3,4,5,6,7,8]
const [todo,setTodo]=useState('')
const [width,setWidth]=useState(0)
const [state,move]=useReducer(reducer,0)
const ref=useRef()
useEffect(()=>move({type:width}),[width])
useEffect(()=>{
const {current}=ref
current.style=`border-top:2px solid black;
height: 17%;width: 100%;display: flex`
const task=document.querySelectorAll('.todo')
if (mass.length!==0) {
  task.forEach((item,i)=>{
    item.style.left=`${mass[i].x-item.offsetWidth}px`
    item.style.top=`${mass[i].y}px`
  })
 }
},[])
function reducer(state,{type}){
  if (type<120) return type/2
  else if (type>120&&type<150) return type/7
  else if (type>150) return -40
  else return state
}
 const set=()=>{
  const {style:{height}}=document.querySelector('.desk1')
  dispatch(add({name:todo,x:300,y:height}))
  }
  const mouseMove=(e)=>{
    const n=document.querySelectorAll('span')
    const task=document.querySelectorAll('.todo')
    task.forEach((item,i)=>{
    if (item.hasAttribute('id')) {
      item.style.left=`${e.pageX-n[i].offsetWidth*3}px`;
      item.style.top=`${e.pageY-n[i].offsetHeight}px`;
      }
    })
  }
  const attr=(i)=>{
    const todo=document.querySelectorAll('.todo')
    const right=todo[i].hasAttribute('id')
    setWidth(todo[i].offsetWidth)
    const main=document.querySelectorAll('.main')
    const text=main[i].textContent
    const {top,left}=todo[i].getBoundingClientRect()
    if (right) {
      dispatch(chan({name:text,x:left-state,y:top-5,i:i}))
      todo[i].style.zIndex=10
      todo[i].removeAttribute('id','s')
    }else{
      todo[i].style.zIndex=100
      todo[i].setAttribute('id','s')
    }
  }
  const style={
    width:'100%',
    height:'100%'
  }
  return <div id='wrapper' 
            onMouseMove={mouseMove}>
           <div className='desk1'>
             <div className='deskName'>
                <h2>Task Desk</h2>
             </div>
             <div className='deskBoard'>
               {lines.map(i=><div key={i} id='line'></div>)}
             </div>
           </div>
           <div ref={ref}>
             <div className='set'>
               <div className='setInp'>
                 <textarea type="text"
                  onChange={(e)=>setTodo(e.target.value)} />
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
                <div className='todo' key={i}>
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
                    <button 
                      onClick={()=>{dispatch(del(i))}}
                      style={style}>
                        del
                    </button>
                  </div>
                </div>
                ))}
             </div>
           </div>
         </div>
  }

export default App
