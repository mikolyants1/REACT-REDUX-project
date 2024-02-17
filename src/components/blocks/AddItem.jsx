import { memo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../store/slice";

function AddItem(){
  const dispatch = useDispatch();
  const [todo,setTodo] = useState("");
  const ref = useRef();

  const setNewTodo = () => {
    const {style} = document.querySelector('.desk1');
    dispatch(add({
      name:todo,
      left:300,
      top:style.height,
      isMoved:false
    }));
    ref.current.value = "";
  };
  
  const keyHandler = (e) => {
    if (e.key === "Enter"){
      setNewTodo();
    };
  };

  const addItem = (e) => {
    setTodo(e.target.value);
  };

   const style = {
    width:'100%',
    height:'100%'
   };
    return (
        <div className='set'>
          <div className='setInp'>
            <textarea type="text"
             onChange={addItem}
             ref={ref}
             />
          </div>
          <div className='setBut'>
            <button style={style}
             onClick={setNewTodo}
             onKeyUp={keyHandler}>
                add
            </button>
          </div>
        </div>
    )
}

export default memo(AddItem)