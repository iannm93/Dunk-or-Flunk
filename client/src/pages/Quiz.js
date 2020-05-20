import React from "react";
import "../pages/Quiz.css";
import Score from "../components/quizComponents/Score";
import Timer from "../components/quizComponents/Timer";
import PlayerCard from "../components/quizComponents/PlayerCard";
import Questions from "../components/quizComponents/Questions";
import API from "../utils/API";

class Quiz extends React.Component {
  //set your state of 50 players here
  state = {
    results: [],
  };


  componentDidMount() {
    this.searchPlayers();
  }

  searchPlayers = () => {
    API.search()
      .then((res) =>
       // this.setState({ results: res.data.data } ))
        console.log("API response",res))
        
      .then(() => console.log("state: ", this.state.results))

        .catch((err) => console.log(err));
        
    

  };

  render() {

    //function pick random 2 from the state players
    return (
      <div className="uk-cover-container uk-height-viewport Quiz" id="quizContainer">
        <Questions />
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
}


export default Quiz;