import Calculator from'./Calculator/calculator';
import './App.css';
import { useState } from 'react'
/*
const Vector = (props)=>{
  return (
    <>
    <h1>x0: {props.x0}</h1>
    <h1>x1: {props.x1}</h1>
    <h1>x2: {props.x2}</h1>
    </>
  )
}
*/
function App() {
  return (
    <div className="App">
      <Calculator/>
    </div>
  );
}

export default App