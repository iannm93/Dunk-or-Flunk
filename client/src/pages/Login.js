import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import API from "../utils/API";
import { useAuth } from "../utils/auth";
<<<<<<< HEAD
import "../pages/login.css";

//This logs us in
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useAuth();
=======
import "../pages/signup.css";
function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    password: ""
  });
  const { isLoggedIn } = useAuth();
>>>>>>> 3a114933c8534c76cd3689f46028f30b2f2916eb
  const history = useHistory();
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  const handleFormSubmit = event => {
    event.preventDefault();
    API.signUpUser(formState.username, formState.password)
      .then(res => {
        // send them to the login page
        history.replace("/login");
      })
      .catch(err => alert(err));
  };
  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };
  return (
    <div className="uk-cover-container uk-height-viewport" id="loginContainer">
      <div className="uk-card uk-card-body">
        <h1>Dunk or Flunk</h1>
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="uk-margin">
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: pencil"></span>
              <input
                className="uk-input"
                type="text"
                placeholder="Username"
                name="Username"
                id="Username"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: pencil"></span>
              <input
                className="uk-input"
                type="Password"
                placeholder="Password"
                name="Password"
                id="Password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              ></input>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
        </button>
        </form>
        <p>
          <Link to="/signup">Go to Signup</Link>
        </p>
      </div>
    </div>
  );
}
console.log(username);

export default Login;

// return (
  //   <div class="uk-container uk-container-large">
  //     <h1>Signup</h1>
  //     <form onSubmit={handleFormSubmit}>
  //       <div className="uk-margin">
//         <div className="uk-inline">
//           <span className="uk-form-icon" uk-icon="icon: pencil"></span>
//           <input className="uk-input"
//             type="text"
//             placeholder="Username"
//             name="Username"
//             id="Username"
//             onChange={handleChange}></input>
//         </div>
//       </div>
//       <div className="uk-margin">
//         <div className="uk-inline">
//           <span className="uk-form-icon" uk-icon="icon: user"></span>
//           <input className="uk-input"
//             type="Email"
//             placeholder="Email"
//             name="Email"
//             id="Email"
//             onChange={handleChange}></input>
//         </div>
//       </div>
//       <div className="uk-margin">
//         <div className="uk-inline">
//           <span className="uk-form-icon" uk-icon="icon: pencil"></span>
//           <input className="uk-input"
//             type="Password"
//             placeholder="Password"
//             name="Password"
//             id="Password"
//             onChange={handleChange}></input>
//         </div>
//       </div>
//     </form>
//     <p>
//       <Link to="/login">Go to Login</Link>
//     </p>
//   </div>
// );
// }
