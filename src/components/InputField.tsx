import React, { useRef } from 'react'

interface  Props{
    todo:string;
    settodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent) =>void;
}
const InputField : React.FC<Props>= ({todo, settodo,handleAdd}:Props) => {
    // console.log(todo);
    const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' onSubmit={(e)=>{
      handleAdd(e);
      inputRef.current?.blur();
      }}>
        <input 
        ref={inputRef}
        type="input" 
        placeholder='' 
        className='input__box' 
        value={todo}
        onChange={
            (e)=>settodo(e.target.value)

        }
        />
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField
