import React, {useState} from 'react'
import Card from './Card'


const CardCreateBtn = () => {
    const [cardComponents, setCardComponents] = useState([])
    
    const createComponents = () => {
        setCardComponents(
            (prevComponents) => [
                    ...prevComponents, <Card key={prevComponents.length} />
                ]
            )
        console.log('createComponent')

    }

    const clearBtn = () => {
        setCardComponents([]);
        console.log('clear')
    }

    return(
    <>
        <button onClick={createComponents}>Generate Card!</button><button onClick={clearBtn}>Clear</button>
        <div className='cardWrapper'>
        {cardComponents.map((card, index) => (<div key={index}>{card}</div>))}
        </div>
    </>
    )
    
}

export default CardCreateBtn