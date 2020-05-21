import React from "react";

function Score() {
  // Access state and dispatch and cause this Count component to be re-rendered
  // any time the global count state changes. The dispatch function provided
  // by the context allows this component to update the global state.

  return (
    <div>
      <h2 className="white">Score: 15</h2>
    </div>
  );
}

export default Score;