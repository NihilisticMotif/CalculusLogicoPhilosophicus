import './Algebra.css'

const Algebra = (props)=>{
  const ButtonClick = () => {
  // setInput((prevInput) => {
  //   if (props.num===undefined){return prevInput + props.id.toString();}
  //   else{return prevInput + props.num.toString();}
  // });
};
return (
  <>
  <button
  // https://blog.logrocket.com/complete-guide-react-default-props/
  id={props.id.toString()} 
  onClick={alert('Newton')}>
  {props.id}
  </button>
  </>
)
}

const Algebras = ()=>{
    return (
<>
<div class="Algebra">
    <Algebra id='a'/>
    <Algebra id='b'/>
    <Algebra id='c'/>
    <Algebra id='d'/>
    <Algebra id='f'/>
    <Algebra id='g'/>
    <Algebra id='h'/>
    <Algebra id='i'/>
    <Algebra id='j'/>
    <Algebra id='x'/>
    <Algebra id='y'/>
    <Algebra id='z'/>
</div>
</>
    )
}