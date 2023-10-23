
const OperationButton = (props)=>{
  return (
    <>
    <button // https://blog.logrocket.com/complete-guide-react-default-props/
    id={props.id.toString()} > 
    {props.id}
    </button>
    </>
  )
  }

export default OperationButton