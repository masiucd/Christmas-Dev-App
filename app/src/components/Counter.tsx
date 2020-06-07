import React, { useState } from 'react';

interface Props {}

const Counter = (props: Props) => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className='counter'>
      <h1 data-testid='h1'>{count}</h1>
      <button
        className='btn'
        data-testid='counter-btn'
        onClick={() => setCount((prev) => prev + 1)}>
        counter
      </button>
      <button
        data-testid='reset-btn'
        className='reset'
        onClick={() => setCount(0)}>
        reset
      </button>
    </div>
  );
};

export default Counter;
