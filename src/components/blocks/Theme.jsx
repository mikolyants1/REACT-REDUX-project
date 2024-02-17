import {memo, useContext, useLayoutEffect, useRef} from 'react'
import { Context } from '../Main'
import createShadow from '../helpers/createShadow';

function Theme() {
 const {con,change} = useContext(Context);
 const ref = useRef();

 useLayoutEffect(()=>{
  ref.current.style.color = con;
  ref.current.style.textShadow = createShadow(con);
 },[con]);
  return (
      <div className='set'>
        <div className='theme'>
            Current Theme
        </div>
        <div ref={ref}
         className='current'>
            {con}
        </div>
        <div className='chanDiv'>
          <button className='chanBut'
            onClick={change}>
             change
          </button>
        </div>
      </div>
  )
}

export default memo(Theme)