import './Keyboard.css'
import './KeyboardHead.css'
import './KeyboardInput.css'
import './Number.css'
import './Function.css'
import { useState , useEffect} from 'react'
import AlgebraS from '../Button/Algebra/index.js'
import ComposeFunctionS from '../Button/ComposeFunction/index.js'
import {useInput} from '../Hook/useInput.js'
import {NumberButtonS} from '../Button/Number/index.js'
import {useFormInput} from '../Hook/useTutorial.js'

//import NumberButton from './NumberButton'
//import OperationButton from './NumberButton'


const Calculator = () => {
  const firstNameProps = useFormInput('')
  //const Input=useInput;
  
  //useEffect(()=>{
  //  setInput('')},
  //  [] // Runs only on the first render https://www.w3schools.com/react/react_useeffect.asp
  //  //[input] // Runs on the first render and when variable 'input' is change
  //  )
  
  const ButtonClick=(e)=>{alert(e)}
  const Print=()=>{alert('PinkFloyPanter')}
//const NumberButton = (props)=>{
//  const ButtonClick = () => {
//  setInput((prevInput) => {
//    if (props.num===undefined){return prevInput + props.id.toString();}
//    else{return prevInput + props.num.toString();}
//  });
//};
//return (
//  <>
//  <button
//  // https://blog.logrocket.com/complete-guide-react-default-props/
//  id={'B'+props.id.toString()} 
//  onClick={ButtonClick}>
//  {props.id}
//  </button>
//  </>
//)
//}

//const OperationButton = (props)=>{
//const ButtonClick = () => {
//  setInput((prevInput) => {
//    if (prevInput==='') {return prevInput;} 
//    else{
//      let Condition=['+','-','*','/','^'].includes(prevInput.slice(-1))
//      if (Condition) {return prevInput;} 
//      else{return prevInput + props.id.toString();}
//    }
//  });
//};
//return (
//  <>
//  <button
//  // https://blog.logrocket.com/complete-guide-react-default-props/
//  id={'B'+props.id.toString()} 
//  onClick={ButtonClick}>
//  {props.id}
//  </button>
//  </>
//)
//}

//  const CheckButton = (props)=>{
//  const ButtonClick = () => {
//    setInput((prevInput) => {
//      if (prevInput==='') {return 'true';} 
//      else{
//        return 'false'
//      }
//    });
//  };
//  return (
//    <>
//    <button
//    // https://blog.logrocket.com/complete-guide-react-default-props/
//    id={'B'+props.id.toString()} 
//    onClick={ButtonClick}>
//    {props.id}
//    </button>
//    </>
//  )
//  }
//const handleInputChange = (e) => {setInput(e.target.value);};
return (
<>
<div id="KeyboardInput">
  <h1>{firstNameProps.value}</h1>
  <input {...firstNameProps} id="Input" type='text' /> 
  {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text */}
</div>
{/* Number */}

<div class="Keyboard">
<div class="KeyboardHead">
    {/* 0} <button id="Enter"  onClick={()=>setInput((prevInput) => prevInput.length)}   >Enter</button>
    {/* 1} <button id="CopyAns"   >Copy</button>
    {/* 2} <button id="PastAns"onClick={()=>setInput((prevInput) => prevInput+prevInput)}>Paste</button>
    {/* 3} <button id="Clear"  onClick={()=>setInput('')}   >Clear</button>
    {/* 4} <button id="Delete" onClick={()=>setInput((prevInput) => prevInput.toString().slice(0,-1))}   >Delete</button>
    {/* 5} <button id="Delete" >Up</button>
    {/* 6} <button id="Delete" >Down</button>
    {/* 7} <button id="Delete" >Left</button>
    {/* 8} <button id="Delete" >Right</button>*/}
</div>
<div class="Number">
  <NumberButtonS/>
</div>

{/* Function */}

<div class="Function">
  {/* 0,0 } <OperationButton id='+'/>
  {/* 0,1 } <OperationButton id='-'/>
  {/* 0,2 } <NumberButton id='||' num='|'/>
  {/* 0,3 } <NumberButton id='.'/>
  {/* 0,4 } <NumberButton id='sin'  num='sin(' />
  {/* 0,5 } <NumberButton id='asin' num='asin('/>
  {/* 1,0 } <OperationButton id='*'/>
  {/* 1,1 } <OperationButton id='/'/>
  {/* 1,2 } <OperationButton id='('/>
  {/* 1,3 } <NumberButton id=')'/>
  {/* 1,4 } <NumberButton id='cos' num='cos(' />
  {/* 1,5 } <NumberButton id='acos'num='acos('/>
  {/* 2,0 } <OperationButton id='^'/>
  {/* 2,1 } <NumberButton id='log' num='log('/>
  {/* 2,2 } <NumberButton id='['/>
  {/* 2,3 } <NumberButton id=']'/>
  {/* 2,4 } <NumberButton id='tan' num='tan(' />
  {/* 2,4 } <NumberButton id='atan'num='atann('/>*/}
</div>
<AlgebraS/>
<ComposeFunctionS/>
</div>
</>
  )
}
export default Calculator