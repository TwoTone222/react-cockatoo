import logo from './logo.svg';
import './App.css'; 

const todoList =[
    {id: 1, title: "review resources"},
    {id: 2, title: "take notes"},
    {id: 3, title: "code app"},
]

function App() {
return (
  <h1> Todo List
    <ul>
     {todoList.map(todo => <todoListItem key ={todoList.id} title={todoList.title} />)}
    </ul>
  </h1>
 )
};

export default App;

