import React from "react";
import "../pages/Quiz.css";

function Quiz() {
  return (
    <div className="uk-cover-container uk-height-viewport Quiz" id="quizContainer">
      <h1 className="uk-heading-medium uk-text-center white" id="header"><span>Who would win at 1 on 1?</span></h1>
      <hr className="uk-divider-icon"></hr>
      <div className="uk-flex uk-flex-center" id="centerQuiz">
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
        <div className="PvP">

          <h1 className="white">Score: Your Score</h1>
          <h2 className="white">Time: 0:20</h2>
        </div>
        <div className="uk-card uk-card-hover uk-width-1-3@m">
          <div className="uk-card-header">
            <div className="uk-grid-small uk-flex-middle" uk-grid>
              <div className="uk-width-auto">
                <img className="uk-border-circle" width="auto" height="auto" src="https://nba.nbcsports.com/wp-content/uploads/sites/12/2014/03/a96a6957f860e7cdd5dc48706628cd94.jpg?w=610&h=343&crop=1" />
              </div>
            </div>
          </div>
          <div className="uk-card-footer">
            <h3 className="white">LeBron James AKA King James</h3>
          </div>
        </div>
      </div>
    </div>


  )
}


export default Quiz;