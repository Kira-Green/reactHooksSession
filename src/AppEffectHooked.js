// import React, { useState, useEffect } from "react";
// import css from "./App.module.css";

// const App = props => {
// 	const [count, setCount] = useState(0);

// 	useEffect(() => {
// 		setCount(Math.floor(Math.random() * 100));
// 	}, []);     blank array tells it to only do it on mount not every change
// array can hold values that tell it what to look for

// 	return (
// 		<>
// 			<h1 className={css.counter}>{count}</h1>
// 			<div className={css.changeButtons}>
// 				<button onClick={() => setCount(count - 1)}>-</button>
// 				<button onClick={() => setCount(count + 1)}>+</button>
// 			</div>
// 			<button className={css.reset} onClick={() => setCount(0)}>
// 				reset
// 			</button>
// 		</>
// 	);
// };

// export default App;
