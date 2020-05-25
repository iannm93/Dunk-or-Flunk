import React from "react";
import Score from "./Score";
import Brick from "./Brick";
import Timer from "./Timer";

function ScoreCard(props) {
  // Access state and dispatch and cause this Count component to be re-rendered
  // any time the global count state changes. The dispatch function provided
  // by the context allows this component to update the global state.

  return (

    <div id="score-card" className="uk-card uk-card-small uk-width-1-3@m">
      <Score score={props.score} />
      <Brick brick={props.brick} />
    </div>

  );
}

export default ScoreCard;
