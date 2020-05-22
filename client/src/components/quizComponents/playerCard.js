import React from "react";

function PlayerCard(props) {

  // Bug: same player can be selected from players array in math.random
  return (
    <div className="uk-card uk-card-hover uk-width-1-3@m" onClick={props.HandleClick}>
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" uk-grid>
          <div className="uk-width-1-1">
            <img className="uk-border-circle" width="auto" height="auto" src={props.image} />
          </div>
        </div>
      </div>
      <div className="uk-card-footer white">
        <h3 className="white">{props.name}</h3>
      </div>
    </div>
  );
}

export default PlayerCard;