import React from "react";
import { useHistory } from "react-router-dom";
import logo from "./logo.svg";
import "./home.css";
import { useAuth } from "../../utils/auth";
import Logo from "../logo.png"
import { Link, Redirect} from "react-router-dom";

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
    
    <div className="homecontainer">
        <img id="home-logo" src={Logo}></img>

        <h2 id="welcome">Welcome!</h2>
        <p>Welcome to Dunk or Flunk, the NBA statistics quiz! When the quiz begins, click or press the player headshot corresponding with the correct statistic. Every time the correct headshot is clicked, you will get a point. Every time the incorrect headshot is clicked, you will get a brick. Three bricks and you go home. Good luck! </p>

          <div className='row'>
            <button type="button" className="btn btn-danger" id="viewhighbtn" onClick={() => history.replace("/signup")}>Signup now!</button>
          </div>

          <div className='row'>
            <button type="button" className="btn btn-primary" id="playnowbtn" onClick={() => history.push("/login")}>Login!</button>
          <p id="reminder">*Reminder: Flip your phone to take the quiz!</p>
          </div>
          <div>
        </div>
        
    </div>
  );
}

export default Home;
