import React from "react";


function PlayerCard(props) {

  // Bug: same player can be selected from players array in math.random
  return (
    <div className="uk-card uk-card-hover uk-width-1-3@m" onClick={() => { props.function1(props.id); }}>
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" uk-grid>
          <div className="uk-width-1-1">
            <img className="uk-border-circle" width="auto" height="auto" src={props.image} alt={props.name} />
          </div>
        </div>
      </div>
      <div className="uk-card-footer white">
        <h4 className="white">{props.name}</h4>
      </div>
    </div>
  );
}

export default PlayerCard;
