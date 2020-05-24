import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { useAuth } from "../utils/auth";
import API from "../utils/API";

function EndQuiz(props) {
  const [username, setUsername] = useState("");
  const [highScore, setScore] = useState(1);
  const { user } = useAuth();
  const recentScore = props.score;


  console.log(username)
  console.log(highScore)
  //On page load we do useEffect to do a getUser
  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setUsername(res.data.username);
      setScore(res.data.highScore);
    })
  }, [user]);

  //Want to do a .then AFTER we have all available info
  //After api call happens and highScore state is set
  //Run if statement comparing props.score and highScore
  //IF props.score > highScore, have props.score display at both recent score
  //and highest score, as well as patch user data for high score at usedr.id
  //ELSE have props.score display at recent score and highScore display at highest score
  useEffect(() => {
    if (recentScore > highScore) {
      setScore(recentScore)
      // API.patchUser(user.id, highScore).then((res) => {
      //   console.log("value stored")
      // })
    }
  }, [recentScore, highScore]);

  // API.patchUser(user.id, user.highScore)
  //   .then(res => {
  //     console.log(`user's new highscore is ${highScore}`)
  //   })
  //run API call to patch user data @ user.id for highScore




  return (
    <div>
     <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-primary uk-card-body">
            <h3 class="uk-card-title">Primary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-secondary uk-card-body">
            <h3 class="uk-card-title">Secondary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
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
