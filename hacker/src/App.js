import logo from './logo.svg';
import './App.css'; 

const todoList =[
    {id: 1, title: "review resources"},
    {id: 2, title: "take notes"},
    {id: 3, title: "code app"},
]

function App() {
return (
  <div> 
    <h1> Todo List </h1>
    <ul>
     {todoList.map(todo => <li key ={todo.id} >{todo.title}</li>)}
    </ul>
    </div>
 )
};

export default App;

