import React from "react";

class CountPeople extends React.Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  updateEntry() {
    this.setState((prevState, props) => {
      return { entrycount: prevState.entrycount + 1 };
    });
  }

  updateExit() {
    this.setState((prevState, props) => {
      return { exitcount: prevState.exitcount + 1 };
    });
  }

  render() {
    return (
      <div>
        <h1>Mall Entry / Exit Counter</h1>
        <p>People entered: {this.state.entrycount}</p>
        <p>People exited: {this.state.exitcount}</p>
        <button onClick={() => this.updateEntry()}>Login</button>{" "}
        <button onClick={() => this.updateExit()}>Exit</button>
      </div>
    );
  }
}

export default CountPeople;
