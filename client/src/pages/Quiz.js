import React from "react";
import "../pages/Quiz.css";
import Score from "../components/quizComponents/Score";
import Timer from "../components/quizComponents/Timer";
import PlayerCard from "../components/quizComponents/playerCard";
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
        console.log("API response", res))
      .then(() => console.log("state: ", this.state.results))

      .catch((err) => console.log(err));


  };

  render() {
  
    // Nikola Vucevic			id: 460
    // Mike Conley			id: 104
    // LaMarcus Aldridge		id: 6
    // Donovan Mitchell		id: 322
    // Devin Booker			id: 57
    // DeMar DeRozan		id: 125
    // Chris Paul			id: 367
    // Kyle Lowry			id: 286
    // Pascal Siakam		id: 416
    // Jayson Tatum			id: 434
    // Draymond Green		id: 185
    // Tobias Harris			id: 200
    // Kristaps Porzingis		id: 378
    // Steven Adams			id: 3
    // Zach LaVine			id: 268
    // C.J.McCollum			id: 303
    // Kevin Love			id: 285
    // Julius Randle			id: 387
    // Khris Middleton		id: 315
    // Kyle Kuzma			id: 265
    // De’Aaron Fox			id: 161
    // Jamal Murray			id: 335
    // Zion Williamson		id: 666969
    // Trae Young			id: 490
    // Danilo Gallinari		id: 167
    // Bojan Bogdonovic		id: 54]
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