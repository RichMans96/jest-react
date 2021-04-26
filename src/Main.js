import React, { useState } from 'react';

const Main = () => {
  const [count, setCount] = useState(0);

  function increment(e) {
    e.preventDefault();
    setCount(count + 1);
  }

  function decrement(e) {
    e.preventDefault();
    setCount(count - 1);
  }

  return (
    <div>
      <p data-testid='count-display'>{count}</p>
      <button onClick={increment} data-testid='increment-button'>
        +
      </button>
      <button onClick={decrement} data-testid='decrement-button'>
        -
      </button>
    </div>
  );
};

export default Main;
