import React, {useState} from 'react';
import InputWithLabel from '../src/InputWithLabel';
import styles from "./TodoListItem.module.css"

function AddTodoForm({onAddTodo}) {
    const [todoTitle, setTodoTitle] = useState('');

    let handleTitleChange =(event) => {
      let newTodoTitle = event.target.value;
      setTodoTitle(newTodoTitle);
    };

    function handleAddTodo(event){
        event.preventDefault();
        if(todoTitle === "") {
          alert("Empty form submission, Please input title.")
        } else {  
          onAddTodo({ title: todoTitle, id: Date.now()});
        setTodoTitle (" ");
        }
    };

    return (
      <> 
         <form onSubmit={(event) => handleAddTodo(event)}>
         <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
        children
         >
        <strong>Title: </strong>
      </InputWithLabel>
      <button className ={styles.button}type="submit">
        Add
      </button>
    </form>
    </>

    )
    }; 
      
  export default AddTodoForm;