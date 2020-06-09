import React from "react";
import { useHistory } from "react-router-dom";
import logo from "./logo.svg";
import "./home.css";
import { useAuth } from "../../utils/auth";
import Logo from "../logo.png"
import { Link, Redirect} from "react-router-dom";
import { disconnect } from "mongoose";

function Home() {
  // const { user, logout } = useAuth();
  const history = useHistory();

  const goToEditProfile = () => history.push("/profile");

  return (
    //     <p>
    //       <a id="logout" onClick={() => logout()}>Log Out</a>
    //       <span>of web
    //         <p id="gotoprofile" onClick={() => history.push("/profile")}>Profile</p>
    //       </span>
    //     </p>
    
    <div className="uk-cover-container uk-height-viewport home" id="homeContainer">
        <img id="home-logo" src={Logo}></img>

        <h1 id = "title">The NBA Statistics Quiz</h1>
        <div className = "row">

        <div className = "column">
        <img src="https://img.icons8.com/nolan/64/nui2.png"/>
       <p>
       click or press the player headshot corresponding with the correct statistic.
         </p> 
        </div>
        <div className = "column">
        <img src="https://img.icons8.com/dusk/64/000000/solve.png"/>
        <p className ="middle">
        Every time the correct player is clicked, you will get a point. Every time the incorrect player is clicked, you will get a brick.
          </p>
          </div>
          <div className = "column">
          <img src="https://img.icons8.com/color/50/000000/brick-wall.png"/>
          <p className = "end">Three bricks and its a Turnover! Good luck!</p>
          </div>
        </div>
          {/* <p id="reminder">   </p> */}

          <div className='row'>
            <button type="button" className="btn btn-danger" id="viewhighbtn" onClick={() => history.replace("/signup")}>Signup now!</button>
            <button type="button" className="btn btn-primary" id="playnowbtn" onClick={() => history.push("/login")}>Login!</button>
          </div>
    </div>
  );
}

export default Home;
