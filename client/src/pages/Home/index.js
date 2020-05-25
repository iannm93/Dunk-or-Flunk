import React from "react";
import { useHistory } from "react-router-dom";
import logo from "./logo.svg";
import "./home.css";
import { useAuth } from "../../utils/auth";
import Logo from "../logo.png"
import { Link, Redirect} from "react-router-dom";

function Home() {
  const { user, logout } = useAuth();
  const history = useHistory();

  const goToEditProfile = () => history.push("/profile");

  return (
    <div className="App">
        <p>
          <a id="logout"  onClick={() => logout()}>Log Out</a>
          <span>
            <p>
          <Link id="gotoprofile" >Profile</Link>
            </p>
          </span>
        </p>

        <img id="home-logo" src={Logo}></img>

        <h2>Welcome, {user.username}!</h2>

        <button type="button" className="btn btn-primary" id="playnowbtn" to="/quiz">Play Now!</button>
      
        <button type="button" className="btn btn-danger" id="viewhighbtn">View Highscores </button>
    
    </div>
  );
}

export default Home;
