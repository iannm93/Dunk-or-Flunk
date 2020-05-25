import React from "react";
import "../../pages/Quiz/Quiz.css";

function Questions(props) {

  return (
    <h3 className="uk-heading-medium uk-text-center white" id="header"><span>{props.question.questionDisplay}</span></h3>
  );
}

export default Questions;

