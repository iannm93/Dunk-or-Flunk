import React from "react";
import "../../pages/Quiz.css"

function Questions() {
   const percentage = ["free throw", "field goal", "three point"]
   console.log("Percentage" + (percentage[0]))
    const PerGame = ["blocks", "assists", "steals", "rebounds", "points", "minutes played"]
    const questions = [
        `Who has a better ${percentage[Math.floor((Math.random())*percentage.length)]} percentage?`, `Who has more ${PerGame[Math.floor((Math.random()) *PerGame.length)]} per game?`
    ]
    console.log(questions[Math.floor((Math.random())*2)])

    return (
        <h1 className="uk-heading-medium uk-text-center white" id="header"><span>{questions[Math.floor((Math.random())*questions.length)]}</span></h1>
    );
}

export default Questions;
