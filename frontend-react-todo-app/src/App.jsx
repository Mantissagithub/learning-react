import { useState } from 'react'
import './App.css'

function App() {
  let [todo,setTodo] = useState(
    {
      title : "code today for 3 hrs",
      description : "from harkirat course and uplaod it on github.com",
      id : 1
    });

  setInterval( () => {
    setTodo({
      title : "go to gym",
      description : "do pull workout today",
      id : 2
    });
  },2000);

  return (
    <>
      <h5>Hi there</h5>
      {todo.title}
      <br />
      {todo.description}
      <br />
      {todo.id}
      <br />
      <PersonName firstName = {todo.title} lastName = {todo.description}></PersonName>
    </>
  )
}

function PersonName(props){
  return (
    <div>
      {props.firstName} {props.lastName}
    </div>
  );
}

export default App