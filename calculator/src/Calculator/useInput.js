import { useState , useEffect} from 'react'
function useInput(){
    const [input,setInput]=useState()
    useEffect(()=>{
      setInput('')},
      [] // Runs only on the first render https://www.w3schools.com/react/react_useeffect.asp
      //[input] // Runs on the first render and when variable 'input' is change
    )
    return [input,setInput]

}
export default useInput