import React, { useRef } from "react";

type newTodoProps = {
    onAddTodo: (text:string) => void
}

const NewTodo:React.FC <newTodoProps> = ({onAddTodo}) => {
    
    const inputRef = useRef<HTMLInputElement>(null);
    const handleInput = (event: React.FormEvent) =>{
        event.preventDefault();
        onAddTodo(inputRef.current!.value);
        inputRef.current!.value = ""
    }

  return (
    <div>
      <form onSubmit={handleInput}>
        <label htmlFor="new-todo">New Todo</label>
        <input type="text" id="new-todo" ref={inputRef} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewTodo;
