import React from "react";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import TodoList from "./ToDoList"
import AddTodoForm from "./AddTodoForm";
import styles from "./TodoListItem.module.css"

const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`

function App() {

  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // Below the todoList state, define a useEffect React hook with an empty dependency list
  
  function fetchData() {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        console.dir(result)
        setTodoList(result.records||[]);
        setIsLoading(false);
      })
      .catch((error) => console.warn(error));

  }
  React.useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };
    fetchData();
    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        console.dir(result)
        setTodoList(result.records||[]);
        setIsLoading(false);
      })
      .catch((error) => console.warn(error));
  }, []);
//     Inside the data object, add a property todoList and set it's value to the initial/default list state (copy from useState hook)
//  Update the default state for todoList to be an empty Array


  React.useEffect(() => {
    if(!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, 
     [todoList, isLoading]);

  // This code creates a new array called newTodoList by filtering the existing
  // todoList array to remove the item with the given id. Then, it calls the
  // setTodoList state setter and passes the new newTodoList array as its argument
  // to update the state with the modified todoList.
  //   let removeTodo = function (id) {
  //   const newTodoList = todoList.filter((todo) => todo.id !== id); 
  //   //The filter method creates a new array with all the elements that 
  //   //pass the conditions specified by a given function and returns the new array.
  //   setTodoList(newTodoList);
  // };

function addTodo(newTodoList) {
  console.log('newTodoList', newTodoList.Title)
  const body = {
    fields: {
      Title: newTodoList.Title
       }
  };
  const options = {
    method:'POST',
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      "Content-Type" : "application/json",
    }, 
    body: JSON.stringify(body),
  };
  const todo = {};
  fetch(`${url}`, options)
  .then((resp) => resp.json())
  .then((data) => {
    todo.id = data.id;
    todo.Title = data.fields.Title;
    setTodoList([...todoList, todo]);
  });
}
function removeTodo(id) {
  const options = {
    method:'DELETE',
    headers:{
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
    }, 
  };
  fetch(`${url}/${id}`, options)
  .then((resp) => resp.json())
  .then((data) => {
    if(data.deleted) {
      setTodoList(todoList.filter((todo) => todo.id !== data.id))
    }
  });
}
return (
  <BrowserRouter>
    <Routes>
      <Route
        exact
        path="/"
        element={
          <div className={styles.button}>
            <h1 className={styles.h1}>Todo list</h1>
            <nav className={styles.nav}> </nav>
            <AddTodoForm onAddTodo={addTodo} />
            {isLoading ? (
              <p> Loading... </p>
            ) : (
              <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
            )}
          </div>
        }
      />
      <Route path="/new" element={<h1>New Todo List</h1>} />
    </Routes>
  </BrowserRouter>
);
}

export default App;