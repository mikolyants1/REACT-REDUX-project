import {memo, useContext, useLayoutEffect, useRef} from 'react'
import createShadow from '../helpers/createShadow';
import { Context } from '../helpers/context';

function Theme() {
 const {theme,change} = useContext(Context);
 const ref = useRef();

 useLayoutEffect(()=>{
  ref.current.style.color = theme;
  ref.current.style.textShadow = createShadow(theme);
 },[theme]);
  return (
      <div className='set'>
        <div className='theme'>
            Current Theme
        </div>
        <div ref={ref}
         className='current'>
            {theme}
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