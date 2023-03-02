import React from 'react'
import { Todo } from '../model'
import SingleToDo from './SingleToDo';

interface Props{
    todos:Todo[];
    settodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList :React.FC<Props> = ({todos,settodos} :Props) => {
  return (
    <div className='todos'>
      {todos.map((todo)=>(
        <SingleToDo todo={todo} key={todo.id} todos={todos} settodos={settodos}/>
        // <li>{todo.todo}</li>
      ))}
    </div>
  )
}

export default TodoList
