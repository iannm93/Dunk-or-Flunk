import React from "react";

function PlayerCard() {


  return (
    <div className="uk-card uk-card-hover uk-width-1-3@m">
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" uk-grid>
          <div className="uk-width-auto">
            <img className="uk-border-circle" width="auto" height="auto" src="https://www.sportsnet.ca/wp-content/uploads/2013/02/jordan_michael640.jpg" />
          </div>
        </div>
      </div>
      <div className="uk-card-footer white">
        <h3 className="white">Michael Jordan AKA the GOAT</h3>
      </div>
    </div>
  );
}

export default PlayerCard;