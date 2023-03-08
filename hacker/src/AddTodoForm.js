import React, {useState} from 'react';
import InputWithLabel from './InputWithLabel';

function AddTodoForm(onAddTodo) {
    const [todoTitle, setTodoTitle] = useState('');

    const handleTitleChange =(event) => {
      const newTodoTitle = event.target.value;
      setTodoTitle(newTodoTitle);
    };

    function handleAddTodo(event){
        event.preventDefault();
        if(todoTitle === "") {
          alert("Empty form submission, Please input title.")
        } else {  
          onAddTodo({ title: todoTitle, id: Date.now()});
        console.log(todoTitle);
        const setTodoTitle = ("");
        }
    };

    return (
      <form onSubmit={(e) => handleAddTodo(e)}>
         <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
        children
         >
        <strong>Title: </strong>
      </InputWithLabel>
      <button type="submit">Add</button>
    </form>
    );
    }; 
      
  export default AddTodoForm;