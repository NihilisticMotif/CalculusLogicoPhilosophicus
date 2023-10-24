import { useState , useEffect} from 'react'

export const useInput = () => {
  // https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-let-you-share-stateful-logic-not-state-itself
  const [input, setInput] = useState();
  function Number(){
    alert('HOOK!?')
  //setInput((prevInput) => {
  //  return prevInput + 'props.num.toString()';
  //  // if (props.num===undefined){return prevInput + props.id.toString();}
  //  // else{return prevInput + props.num.toString();}
  //  });
    };

  /*
  const Operation = () => {
  setInput((prevInput) => {
    if (prevInput==='') {return prevInput;} 
    else{
      let Condition=['+','-','*','/','^'].includes(prevInput.slice(-1))
      if (Condition) {return prevInput;} 
      else{return prevInput + props.id.toString();}}
    });
    };
  */
 
  useEffect(()=>{
  setInput('')},
  [] // Runs only on the first render https://www.w3schools.com/react/react_useeffect.asp
  //[input] // Runs on the first render and when variable 'input' is change
  )

  const returnInput = {
    value: input,
    onClick: Number()
  };
  
  return returnInput;
}
export default useInput