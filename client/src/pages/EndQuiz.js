import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { useAuth } from "../utils/auth";
import API from "../utils/API";

function EndQuiz(props) {
  const [username, setUsername] = useState("");
  const [highScore, setScore] = useState("");
  const { user } = useAuth();
  const recentScore = props.score;

  //On page load we do useEffect to do a getUser
  useEffect(() => {
    API.getUser(user.id).then(res => {
      setUsername(res.data.username);
      setScore(res.data.highScore);
      console.log(res.data.username);
      console.log(res.data.highScore)
    }).then(() => {
      if (recentScore > highScore) {
        setScore(recentScore)
        //run API call to patch user data @ user.id for highScore
      }
    })
    //Want to do a .then AFTER we have all available info
    //After api call happens and highScore state is set
    //Run if statement comparing props.score and highScore
    //IF props.score > highScore, have props.score display at both recent score
    //and highest score, as well as patch user data for high score at usedr.id
    //ELSE have props.score display at recent score and highScore display at highest score
  }, [user]);


  return (
    <div>
      <div className='uk-margin-medium-top'>
      <h1>Nice game, {username}!</h1>
      </div>
      
      <div class="uk-margin-medium-top uk-width-xlarge uk-margin">
        <div class="uk-card uk-card-small uk-card-default uk-card-body">X-Large</div>
      </div>

      <div className='uk-text-center uk-margin-medium-top'>
        <a className="uk-link" href="/quiz">Play Again?</a>
      </div>

      <div className='uk-text-center uk-margin-top'>
        <SocialIcon network='twitter' url=" https://twitter.com/intent/tweet?url=https%3A%2F%2Fplaceholder.com%2F&text=I%20scored%205%20on%20Dunk%20or%20Flunk%21%20Play%20it%20now%21" target="_blank" className='uk-margin-small-right' />
        <SocialIcon url="https://facebook.com/" target="_blank" />
      </div>

    </div>

  );
}


export default EndQuiz;
