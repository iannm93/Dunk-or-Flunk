import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { useAuth } from "../../utils/auth";
import API from "../../utils/API";
import "../EndQuiz/EndQuiz.jpg"
import "../EndQuiz/end.css"

function EndQuiz(props) {
  const [username, setUsername] = useState("");
  const [highScore, setScore] = useState(1);
  const { user } = useAuth();
  const recentScore = props.score;
  const allhighScores = props.allHighScores;


  //On page load we do useEffect to do a getUser
  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setUsername(res.data.username);
      setScore(res.data.highScore);
    })
  }, [user]);

  useEffect(() => {
    if (recentScore > allhighScores[0]) {
      allhighScores.unshift(user)
    }
  }, [allhighScores]);
  //Want to do a .then AFTER we have all available info
  //After api call happens and highScore state is set
  //Run if statement comparing props.score and highScore
  //IF props.score > highScore, have props.score display at both recent score
  //and highest score, as well as patch user data for high score at usedr.id
  //ELSE have props.score display at recent score and highScore display at highest score
  useEffect(() => {
    if (recentScore > highScore) {
      setScore(recentScore)
      API.patchUser(user.id, recentScore).then((res) => {
        console.log("value stored")
      })
    }
  }, [highScore]);

  // API.patchUser(user.id, user.highScore)
  //   .then(res => {
  //     console.log(`user's new highscore is ${highScore}`)
  //   })
  //run API call to patch user data @ user.id for highScore


  return (
    <div className="background">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className='text-center'>Nice game, {username}!</h1>

          <div className="card">
            <div className="card-body">
              <h2 id="end-score">Score: {recentScore}</h2>
            </div>
          </div>
          <br></br>
          <div className="card">
            <div className="card-body">
              <h2 id="end-score">High Scores</h2>
              <br></br>
              <h2 id="end-score">Name: {allhighScores[0].username}, Score: {allhighScores[0].highScore}</h2>
              <h2 id="end-score">Name: {allhighScores[1].username}, Score: {allhighScores[1].highScore}</h2>
              <h2 id="end-score">Name: {allhighScores[2].username}, Score: {allhighScores[2].highScore}</h2>
              {/* <h2 id="end-score">Name: {allhighScores[0].username} Score: {allhighScores[0].highScore}</h2> */}
              {/* <h2 id="end-score">Name: {allhighScores[0].username} Score: {allhighScores[0].highScore}</h2> */}
            </div>
          </div>

          <div className='uk-text-center'>
            <a className="uk-link" href="/quiz">Play Again?</a>
          </div>

          <div className='uk-text-center uk-margin-top'>
            <SocialIcon network='twitter' url=" https://twitter.com/intent/tweet?url=https%3A%2F%2Fhttp://dunk-or-flunk-app.herokuapp.com/signup%2F&text=I%20just%20played%20Dunk%20or%20Flunk%21%20Play%20it%20now%21" target="_blank" className='uk-margin-small-right' />
            <SocialIcon url="https://facebook.com/" target="_blank" />
          </div>
        </div>
      </div>

    </div>

  );
}


export default EndQuiz;

      // <div className='container align-middle'>

      //   <h1 className='text-center'>Nice game, {username}!</h1>

      //   <div className="card">
      //     <div className="card-body">
      //       <h2 id="end-score">Score: {recentScore}</h2>
      //     </div>
      //   </div>
      //   <p>High Score: {highScore}</p>

      //   <div className='uk-text-center'>
      //     <a className="uk-link" href="/quiz">Play Again?</a>
      //   </div>

      //   <div className='uk-text-center uk-margin-top'>
      //     <SocialIcon network='twitter' url=" https://twitter.com/intent/tweet?url=https%3A%2F%2Fhttp://dunk-or-flunk-app.herokuapp.com/signup%2F&text=I%20just%20played%20Dunk%20or%20Flunk%21%20Play%20it%20now%21" target="_blank" className='uk-margin-small-right' />
      //     <SocialIcon url="https://facebook.com/" target="_blank" />
      //   </div>

      // </div>