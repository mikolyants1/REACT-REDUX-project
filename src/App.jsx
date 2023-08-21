import { useState,useRef,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { chan,add,del } from './slice.jsx'
function App() {
const mass=useSelector((store)=>store.task.mass)
const dispatch=useDispatch()
const lines=[1,2,3,4,5,6,7,8]
const {querySelector,querySelectorAll}=document
const [todo,setTodo]=useState('')
const ref=useRef()
useEffect(()=>{
const task=querySelectorAll('.todo')
if (mass.length!==0) {
  task.forEach((item,i)=>{
    item.style.left=`${mass[i].x-item.offsetWidth}px`
    item.style.top=`${mass[i].y}px`
  })
}
},[])
 const set=()=>{
  const {style:{height}}=querySelector('.desk1')
  dispatch(add({name:todo,x:300,y:height}))
  }
  const move=(e)=>{
    const {current:n}=ref
    const task=querySelectorAll('.todo')
    task.forEach((item)=>{
    if (item.hasAttribute('id')) {
      item.style.left=`${e.pageX-n.offsetWidth*3}px`;
      item.style.top=`${e.pageY-n.offsetHeight}px`;
      }
    })
  }
  const attr=(i)=>{
    const todo=querySelectorAll('.todo')
    const right=todo[i].hasAttribute('id')
    const w=todo[i].offsetWidth
    const min=w>150?-40:w/2
    const main=querySelectorAll('.main')
    const text=main[i].textContent
    const {top,left}=todo[i].getBoundingClientRect()
    if (right) {
      dispatch(chan({name:text,x:left-min,y:top-5,i:i}))
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
  return <div className='desk' 
          onMouseMove={move}>
        <div className='desk1'>
           <div className='deskName'>
            <h2>Task Desk</h2>
           </div>
          <div className='deskBoard'>
           {lines.map(i=><div key={i} id='line'></div>)}
          </div>
        </div>
        <div className='desk2'>
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
          <div  className='get'>
            {mass.map(({name},i)=>(
              <div className='todo' key={i}>
               <div  className='title'>
                <li onClick={()=>attr(i)}>
                  <span ref={ref}>
                    Task {i+1}
                  </span>
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
