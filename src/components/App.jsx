import {useDispatch, useSelector} from 'react-redux'
import Header from './blocks/Header.jsx'
import AddItem from './blocks/AddItem.jsx'
import Theme from './blocks/Theme.jsx'
import Main from './blocks/ItemMap.jsx'
import { chanCoord } from '../store/slice.jsx'

function App() {
  const mass = useSelector((store)=>store.task.mass);
  const dispatch = useDispatch();

  const mouse = (e) => {
    mass.forEach((item,i)=>{
      if (item.isMoved) {
       const left = e.pageX - item.width;
       const top = e.pageY - item.height;
       dispatch(chanCoord({left,top,i}));
      };
    });
  };

  return (
         <div id='wrapper' 
           onMouseMove={mouse}>
           <Header />
           <div id='main'>
             <AddItem />
             <Main />
             <Theme />
           </div>
         </div>
     );
  }
export default App
