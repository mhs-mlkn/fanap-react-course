import React from "react";
import { withRouter } from "react-router-dom";

function About({ history }) {
  const handleClick = () => {
    history.push("/home");
  };

  return (
    <div>
      <button onClick={handleClick}>Home</button>
      <h1>About</h1>
    </div>
  );
}

export default withRouter(About);
