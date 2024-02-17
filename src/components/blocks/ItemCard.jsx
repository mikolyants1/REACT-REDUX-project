import React, { useLayoutEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { chanMove, chanText, del,chanLoc } from '../../store/slice';

function ItemCard({index,name,isMoved,left,top}) {
 const dispatch = useDispatch();
 const refWrap = useRef();
 const refSpan = useRef();

 useLayoutEffect(()=>{
  const width = refSpan.current.offsetWidth * 3;
  const height = refSpan.current.offsetHeight;
  dispatch(chanLoc({i:index,width,height}));
 },[]);

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
    const width = refSpan.current.offsetWidth * 3;
    const height = refSpan.current.offsetHeight;
    const text = e.target.textContent;
    dispatch(chanText({i:index,text}));
    dispatch(chanLoc({i:index,width,height}));
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
         <span ref={refSpan}>
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