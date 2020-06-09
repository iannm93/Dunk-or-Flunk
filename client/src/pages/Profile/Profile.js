import React from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import "../Profile/profile.css"
import Logo from "../logo.png"

function Profile() {
  const { user, logout } = useAuth();
  const history = useHistory();

  return (
    <div className="homecontainer">
    <p>
      <a id="logout1" onClick={() => logout()}>Log Out</a>
    </p>

    <img id="home-logo1" src={Logo}></img>

    <h2 id="welcome">Welcome, {user.username}!</h2>
    <p id="reminder">*Reminder: Flip your phone to take the quiz!</p>
      <div className='row'>
      <button type="button" className="btn btn-primary" id="playnowbtn" onClick={() => history.push("/quiz")}>Play Now!</button>
        
      </div>

      <div className='row'>
      <button type="button" className="btn btn-danger" id="viewhighbtn">View Highscores </button>
   
      </div>
      <div>
    </div>
    
</div>
  );
}

export default Profile;

// const [username, setUsername] = useState("");
// const [email, setEmail] = useState("");
// const { user } = useAuth();

// useEffect(() => {
//   API.getUser(user.id).then(res => {
//     setUsername(res.data.username);
//     setEmail(res.data.email);
//   });
// }, [user]);

// <div className="uk-cover-container profile">
    // <div className="container">
    //   <h1>On the profile page!</h1>
    //   <p>Username: {username}</p>
    //   <p>Email: {email}</p>
    //   <Link to="/">Go home</Link>
    // </div>
    // </div>