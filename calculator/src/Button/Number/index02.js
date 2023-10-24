/*
import { useState } from 'react';

const useFormInput =(initialValue) =>{
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
// https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-let-you-share-stateful-logic-not-state-itself

const NumberButtons =(Click)=>{
    const NumberButton = (props)=>{
    const ButtonClick = () => {
    Click((prevInput) => {
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