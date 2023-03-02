import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

// let  name :string;
// name='jha';
// let age: number | string
// let hobbies : string [];
// let role :[number, string];
// role=[5,'jh'];
// age='threr';

// let printName: (fname:string)=> void
// function printName(fname :any){
//   console.log(fname);
// }
// printName('gj');
// interface Person {
//   name:  string;
//   age? : number
// }
// type X={
//   a:string;
//   b:number;
// }

const App : React.FC =()=>{
  const [todo, settodo] = useState<string>("");
  const [todos, settodos] = useState<Todo[]>([]);

  const handleAdd=(e :React.FormEvent)=>{
    e.preventDefault();

    if(todo){
      settodos([...todos,{
        id:Date.now(),
        todo,
        isDone:false

      }]);
      settodo('');
    }
  }
  console.log(todos)
    return (
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} settodo={settodo} handleAdd={handleAdd} />
        <TodoList todos={todos} settodos={settodos}/>
      </div>
    )
}

export default App;
