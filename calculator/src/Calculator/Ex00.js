// Long

const key = "key"
const [value, setValue] = useState(() => {
  const jsonValue = localStorage.getItem(key)
  if (jsonValue != null) return JSON.parse(jsonValue)
  return initialValue
})

useEffect(() => {
  localStorage.setItem(key, JSON.stringify(value))
}, [value])

// Short
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)
    return initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

// https://youtu.be/6ThXsUwLWvc?si=5WGSHdxSJtxic0vB