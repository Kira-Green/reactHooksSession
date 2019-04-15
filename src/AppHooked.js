import React, { useState } from "react";
import css from "./App.module.css";

const App = props => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className={css.counter}>{count}</h1>
      <div className={css.changeButtons}>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button className={css.reset} onClick={() => setCount(0)}>
        reset
      </button>
    </>
  );
};

export default App;
