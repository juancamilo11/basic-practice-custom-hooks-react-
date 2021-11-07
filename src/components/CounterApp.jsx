import React from 'react'
import useCounter from '../hooks/useCounter.js'


const CounterApp = () => {
    
    const [count, increment, decrement, reset] = useCounter(5);
    
    return (
        <div className="container">
            <h1>Count: {count}</h1>
            <button className="btn btn-primary m-2" onClick={increment}>Increment</button>
            <button className="btn btn-primary m-2" onClick={decrement}>Decrement</button>
            <button className="btn btn-primary m-2" onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterApp
