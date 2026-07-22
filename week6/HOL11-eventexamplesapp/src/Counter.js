import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }

  increment() {
    this.setState((prev) => ({ count: prev.count + 1 }));
    this.sayHello();
  }

  decrement() {
    this.setState((prev) => ({ count: prev.count - 1 }));
  }

  sayHello() {
    console.log("Hello! This is a static message.");
  }

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>{" "}
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
