import './index.css'

const ComposeFunction = (props)=>{
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
  //onClick={alert('Newton')}
  >
  {props.show}
  </button>
  </>
)
}

const ComposeFunctionS=()=>{
    return(
<>
<div class="ComposeFunction">
    {/*  0,0  */} <ComposeFunction id="OpenS"   show="[" />
    {/*  0,1  */} <ComposeFunction id="ClosS"   show="]" />
    {/*  0,2  */} <ComposeFunction id="Product" show="Pi"/>
    {/*  0,3  */}
    {/*  0,4  */} <ComposeFunction id="Sigma"   show="Sigma"/>
    {/*  0,5  */}
    {/*  1,0  */} <ComposeFunction id="Equal"    show="="/>
    {/*  1,1  */} <ComposeFunction id="Question" show="?"/>
    {/*  1,2  */} <ComposeFunction id="Derivative" show="df/dx"/>
    {/*  1,3  */}
    {/*  1,4  */} <ComposeFunction id="Limit"    show="lim_ x to "/>
    {/*  1,5  */}
    {/*  2,0  */} <ComposeFunction id="Infinity" show="Inf"/>
    {/*  2,1  */}
    {/*  2,2  */} <ComposeFunction id="Antiderivative"show="∫ f(x) dx"/>
    {/*  2,3  */}
    {/*  2,4  */} <ComposeFunction id="Integral"      show="∫ f(x) dx"/>
    {/*  2,5  */}
</div>
</>
)
}
export default ComposeFunctionS