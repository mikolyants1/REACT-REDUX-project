import { memo } from "react";

function Header(){
 const lines = Array.from(Array(8).keys());
   return (
    <div className='desk1'>
      <div className='deskName'>
        <h2>Task Desk</h2>
      </div>
      <div className='deskBoard'>
        {lines.map(i=><div key={i} id='line' />)}
      </div>
    </div>
   )
}

export default memo(Header)