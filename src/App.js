import React, {useState} from 'react'

const App = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
        console.log('count state:', count)

    }

    const [stringInput, setStringInput] = useState('')
    const inputUser = (e) => {
        setStringInput(e.target.value)
        console.log('stringInput state:', stringInput)
    }

    const clearStringInput = () => {
       setCount(0)
       setStringInput('')
       if (setCount = 0) {
        console.log('count state:', count)
       } else {
        console.log('stringInput: ', stringInput)
       }
    }

    return(
        <>
        <div>Count: {count}</div>
        <button onClick={increment} >Increment</button>
        <div>
            <input onChange={inputUser} value={stringInput} placeholder='type here'>
            </input>
        </div>
        <button onClick={clearStringInput}>clear</button>
        </>
    )
}

export default App