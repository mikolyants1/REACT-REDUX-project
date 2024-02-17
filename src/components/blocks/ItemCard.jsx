import React, { useLayoutEffect, useRef, useState} from 'react'
import { useDispatch } from 'react-redux';
import { chanMove, chanText, del } from '../../store/slice';

function ItemCard({index,name,isMoved,left,top}) {
 const dispatch = useDispatch();
 const refWrap = useRef();

 useLayoutEffect(()=>{
   refWrap.current.style.left = `${left}px`;
   refWrap.current.style.top = `${top}px`;
 },[left,top])

 const attr = () => {
    refWrap.current.style.zIndex = isMoved ? 10 : 100;
    dispatch(chanMove({
      i:index,
      isMoved:!isMoved
    }));
  };

  const change = (e) => {
    const text = e.target.textContent;
    dispatch(chanText({i:index,text}));
  };

  const delItem = () => {
    dispatch(del(index))
  };

    const style = {
      width:'100%',
      height:'100%'
    };

  return (
    <div ref={refWrap}
     className='todo'>
     <div className='title'>
       <li onClick={attr}>
         <span>
            Task {index+1}
         </span>
       </li>
     </div>
     <div className='main'
      contentEditable={true}
      onClick={change}>
       {name}
     </div>
     <div className='delBut'>
       <button style={style}
        onClick={delItem}>
           del
       </button>
     </div>
   </div>
  )
}

export default ItemCard