import React from "react";
import "../pages/Quiz.css";
import Score from "../components/quizComponents/Score";
import Timer from "../components/quizComponents/Timer";
import PlayerCard from "../components/quizComponents/playerCard";
import Questions from "../components/quizComponents/Questions";

function Quiz() {
  return (
    <div className="uk-cover-container uk-height-viewport Quiz" id="quizContainer">
     <Questions/>
      <hr className="uk-divider-icon"></hr>
      <div className="uk-flex uk-flex-center" id="centerQuiz">
        <PlayerCard />
        <div className="PvP">

          <Score />
          <Timer />
        </div>
        <PlayerCard />
      </div>
    </div>


  )
}


export default Quiz;