/*
import { useState } from 'react';

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  const inputProps = {
    value: value,
    onChange: handleChange
  };

  return inputProps;
}
//export default 

const NumberButton = (props)=>{
    const [input, setInput] = useState();
    function ButtonClick(){
        setInput((prevInput) => {
          if (props.num===undefined){return prevInput + props.id.toString();}
          else{return prevInput + props.num.toString();}
        });};
    const Button = {
        id: props.id,
        onClick: ButtonClick
    }
return (
  <>
  <button
  // https://blog.logrocket.com/complete-guide-react-default-props/
  id={'B'+props.id.toString()} 
  onClick={ButtonClick}>
  {props.id}
  </button>
  </>
)
}
//////////////

const NumberButtons =()=>{
    const [input, setInput] = useState();
    const NumberButton = (props)=>{
    const ButtonClick = () => {
    setInput((prevInput) => {
        if (props.num===undefined){return prevInput + props.id.toString();}
        else{return prevInput + props.num.toString();}
    });
    };
    return (
    <>
    <button
    // https://blog.logrocket.com/complete-guide-react-default-props/
    id={'B'+props.id.toString()} 
    onClick={ButtonClick}>
    {props.id}
    </button>
    </>
    )
    }
    return(
<>
<div class="Number">
  <NumberButton id='0'/>
  <NumberButton id='1'/>
  <NumberButton id='2'/>
  <NumberButton id='3'/>
  <NumberButton id='4'/>
  <NumberButton id='5'/>
  <NumberButton id='6'/>
  <NumberButton id='7'/>
  <NumberButton id='8'/>
  <NumberButton id='9'/>
  <NumberButton id='pi'/>
  <NumberButton id='e' />
</div>
</>
    )
}
*/