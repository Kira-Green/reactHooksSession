import React, { Component } from "react";
import css from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = inc => {
    this.setState({ count: this.state.count + inc });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <h1 className={css.counter}>{this.state.count}</h1>
        <div className={css.changeButtons}>
          <button onClick={() => this.handleClick(-1)}>-</button>
          <button onClick={() => this.handleClick(1)}>+</button>
        </div>
        <button className={css.reset} onClick={this.handleReset}>
          reset
        </button>
      </>
    );
  }
}

export default App;
