import React from 'react'
import Register from '../template/Register'
import Footer from '../organisms/Footer'
import Button from '../atoms/Button'

const home = true

const Home = () => {



    const { count, increment, decrement, reset } = useCounter()


    return (
        <div>
            <p>{increment}</p>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    )

}


export default Home