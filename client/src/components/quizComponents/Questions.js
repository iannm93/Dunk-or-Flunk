import React from "react";
import "../../pages/Quiz.css"

function Questions(props) {
    // const percentage = ["free throw", "field goal", "three point"]
    // const PerGame = ["blocks", "assists", "steals", "rebounds", "points", "minutes played"]
    // const questions = [
    //     `Who has a better ${percentage[Math.floor((Math.random()) * percentage.length)]} percentage?`, `Who has more ${PerGame[Math.floor((Math.random()) * PerGame.length)]} per game?`
    // ]

    return (
        <h1 className="uk-heading-medium uk-text-center white" id="header"><span>{props.question}</span></h1>
    );
}

export default Questions;
