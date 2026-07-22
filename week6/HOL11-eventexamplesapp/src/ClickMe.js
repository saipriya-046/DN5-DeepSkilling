import React from "react";

function ClickMe() {
  const onPress = (event) => {
    alert("I was clicked");
  };

  return <button onClick={onPress}>Click Me</button>;
}

export default ClickMe;
