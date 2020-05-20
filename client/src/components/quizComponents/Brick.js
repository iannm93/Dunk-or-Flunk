import React from "react";

function Brick() {
  // Access state and dispatch and cause this Count component to be re-rendered
  // any time the global count state changes. The dispatch function provided
  // by the context allows this component to update the global state.

  return (
    <div>
      <h1 className="white">Bricks: 0</h1>
    </div>
  );
}

export default Brick;