
import React,{memo} from 'react'
import { useSelector } from 'react-redux'
import ItemCard from './ItemCard';

function ItemMap() {
  const mass = useSelector((store)=>store.task.mass);
  return (
  <div className='get'>
    {mass.map(({name,left,top,isMoved},i)=>(
      <ItemCard
       key={i}
       index={i}
       name={name}
       isMoved={isMoved}
       left={left}
       top={top}
      />
      ))}
  </div>
  );
};

export default memo(ItemMap);