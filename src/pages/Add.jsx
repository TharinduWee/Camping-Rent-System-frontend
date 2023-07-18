import React from 'react'
import { useState } from 'react';
import './Add.css';

export const Add = () => {

  const [count,setCount] = useState (0);

  // let count = 0;

  const increment = () => {
    // count +=1;
    setCount(count+1);
  }

  const decrement = () => {
    // count -=1;
    setCount(count-1);
  }

  return (
    
      <>
      <span className='title'>my counter</span>
      <p className='subtitle'>the count is :{count} </p>
      <button onClick={decrement} className='button'>-</button>
      <button onClick={increment} className='button'>+</button>
      </>
    
  )
}
