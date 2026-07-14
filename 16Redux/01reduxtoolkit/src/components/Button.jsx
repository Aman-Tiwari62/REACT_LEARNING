import React from 'react'
import { useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmt } from '../features/counter/counterSlice';

function Button({setCount, count}) {
    console.log('button component rendering....')
    const dispatch = useDispatch();
    function handleClick(){
        setCount(count+1);
    }
    function handleClick1(){
        dispatch(increment());
    }
    function handleClick2(){
        dispatch(decrement());
    }
    function handleClick3(){
        dispatch(incrementByAmt(200));
    }
  return (
    <>
        <button onClick={handleClick}>Increment</button>
        <button onClick={handleClick1}>Increment+</button>
        <button onClick={handleClick3}>Incrementby2</button>
        <button onClick={handleClick2}>decrement-</button>
    </>
  )
}

export default Button
