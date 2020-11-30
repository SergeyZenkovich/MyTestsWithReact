import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

const Button = styled.button`

font-size: 1em;
margin: 10px 5px;
padding: 5px;
border: 1px solid transparent;
border-radius: 2px;
color: white;
background-color: #4d9952;
`
const RemoveButton = styled(Button)`
background-color: #d9524b;
`

function computeInitialCounter () {
  return Math.trunc(Math.random()*20);
}

function App() {

  const [counter, setCounter] = useState(()=>{computeInitialCounter()});

  const [stateO, setStateO] = useState({
    title: 'Cx',
    date: Date.now()
  }) 
  function increment(){
    setCounter((prevState)=>{return prevState + 1 });
    setCounter(prev=> prev+1);
  }
  function decrement(){
    setCounter(counter - 1);
  }
  function changeTitle(){
    setStateO(prev=>  ({...prev, title: 'Hodsq j,]trn'}))
  }
  return (
    <div>
      <h1>Счётчик: {counter}</h1>
      <Button onClick={increment}>Add</Button>
      <RemoveButton onClick = {decrement}>Remove</RemoveButton>
      <Button onClick={changeTitle}>ChangeTitle</Button>
      <pre>{JSON.stringify(stateO)}</pre>
    </div>
  );
}

export default App;
