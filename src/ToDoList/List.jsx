import React, {useState} from 'react'
import Form from './Form'

function List() {
  const [toDos,setToDos]= useState([]);

  const addToDo=(toDo)=>{
    const toDosCopy=[...toDos]
    toDosCopy.push(toDo)
    setToDos(toDosCopy);
  };
    const  marksAsCompleted= name=>{
      const idx= toDos.findIndex(toDo => toDo.name===name)
      const toDosCopy=[...toDos];
      toDosCopy[idx].completed=!toDosCopy[idx].completed
      setToDos(toDosCopy);
    }
    
  return (
    <div>
      <div> 
        {
          toDos.map((toDo)=>{
            return 
            <p key={toDo.name}
            onClick={()=> marksAsCompleted}>{(toDo.name)} className={toDo.completed ? "strike" :""}</p>

          })
        }
      </div>
      <Form addToDoCallback={ addToDo}/>
    </div>
  )
}

export default List