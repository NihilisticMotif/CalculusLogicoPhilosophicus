/*
const NumberButton = (props)=>{
    const beforeClick = () => {
        props.Click(); // This will display the alert when the button is clicked.
    };
return (
<>
<button
// https://blog.logrocket.com/complete-guide-react-default-props/
id={props.id.toString()} 
onClick={beforeClick}
>
{props.id}
</button>
</>
)
}

export const NumberButtonS=(props)=>{
    const beforeClick = () => {
        alert('props.Click()') // Replace this function with your desired action.
    };
    return (
<>
<div class="Number">
  <NumberButton id='0' Click={beforeClick}/>
  <NumberButton id='1' Click={beforeClick}/>
  <NumberButton id='2' Click={beforeClick}/>
  <NumberButton id='3' Click={beforeClick}/>
  <NumberButton id='4' Click={beforeClick}/>
  <NumberButton id='5' Click={beforeClick}/>
  <NumberButton id='6' Click={beforeClick}/>
  <NumberButton id='7' Click={beforeClick}/>
  <NumberButton id='8' Click={beforeClick}/>
  <NumberButton id='9' Click={beforeClick}/>
  <NumberButton id='π' Click={beforeClick}/>
  <NumberButton id='e' Click={beforeClick}/>
</div>
</>
    )
}
*/

export const NumberButtonS=(props)=>{
    const NumberButton = ()=>{
    const beforeClick = () => {
        alert(props.id); // This will display the alert when the button is clicked.
    };
return (
<>
<button
// https://blog.logrocket.com/complete-guide-react-default-props/
id={props.id} 
onClick={beforeClick}
>
{props.id}
</button>
</>
)
}

    return (
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
  <NumberButton id='π'/>
  <NumberButton id='e'/>
</div>
</>
    )
}
/* */