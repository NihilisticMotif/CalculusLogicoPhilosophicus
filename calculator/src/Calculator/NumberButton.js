import { useState , useEffect} from 'react'

const NumberButton = (props)=>{
  const [input,setInput]=useState()
  useEffect(()=>{
  setInput('')},
  [] // Runs only on the first render https://www.w3schools.com/react/react_useeffect.asp
  //[input] // Runs on the first render and when variable 'input' is change
  )
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
export default NumberButton

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return isOnline;
}