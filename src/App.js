import React, {useState, useEffect} from 'react'

import CardCreateBtn from './components/CardCreateBtn'


const App = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        console.log('count state:', count);
    }, [count]);

    const [stringInput, setStringInput] = useState('')
    const inputUser = (e) => {
        setStringInput(e.target.value)
    }

    
    const clearBtn = () => {
        setCount(0)
        setStringInput('')
        
    }
    useEffect(() => {
        console.log('stringInput state:', stringInput);
      }, [stringInput]);





    return(
        <div className='app-main' >
            <div>Count: {count}</div>
            <button onClick={increment} >Increment</button>
            <div>
                <input onChange={inputUser} value={stringInput} placeholder='type here'>
                </input>
            </div>
            <button onClick={clearBtn}>clear</button>
            <br></br>
            <CardCreateBtn />
        </div>
    )
}

export default App