import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model';
import {AiFillEdit , AiFillDelete} from 'react-icons/ai';
import {MdOutlineDone} from 'react-icons/md';
import TodoList from './TodoList';


type Props ={
    todo:  Todo;
    todos: Todo[];
    settodos:React.Dispatch<React.SetStateAction<Todo[]>>
};

const SingleToDo = ({todo, settodos, todos}: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editToDo, seteditToDo] = useState<string>(todo.todo);

   const handleDone = (id :number) =>{
        settodos(todos.map((todo)=>todo.id === id ? {...todo, isDone :!todo.isDone}: todo));
   };

   const handleDelete= (id : number)=>{
        settodos(todos.filter((todos)=>todo.id!== id));
   };

   const handleEdit=(e:React.FormEvent,id:number)=>{
        e.preventDefault();
        settodos(
            todos.map((todo)=>(
                todo.id === id ?    {...todo, todo: editToDo}: todo
        )));
        setEdit(false);

   }
   const inputRef = useRef< HTMLInputElement>(null);
   useEffect(() => {
     return () => {
            inputRef.current?.focus()
     };
   }, [edit]);
  return (
  <form className='todos__single' onSubmit={(e)=>handleEdit(e, todo.id)}>
    {
        edit ? (
            <input ref={inputRef} value={editToDo} onChange={(e)=>seteditToDo(e.target.value) } className='todos__single--text'/>
        ):(
            
                todo.isDone? (
                    <s className='todos__single--text'>{todo.todo}</s>
        
                ): (
                    <span className='todos__single--text'>{todo.todo}</span>
        
                )
            
        )
    }

    <div>
        <span className="icon" onClick={ ()=>{
             if(!edit && !todo.isDone){
                setEdit(!edit)
            }
        }
           
        }>
        <AiFillEdit/></span>
        <span className="icon" onClick={()=>handleDelete(todo.id)}><AiFillDelete/></span>

        <span className="icon" onClick={()=>handleDone(todo.id)}><MdOutlineDone/></span>

    </div>
  </form>
  )
}

export default SingleToDo
