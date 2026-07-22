import React from "react";

class Welcome extends React.Component {
  sayWelcome(name) {
    alert("Say " + name);
  }

  render() {
    return (
      <button onClick={() => this.sayWelcome("welcome")}>Say Welcome</button>
    );
  }
}

export default Welcome;
