import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../utils/auth";
import "../pages/login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useAuth();
  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = event => {
    event.preventDefault();

    login(username, password)
      // navigate to the profile page
      .then(() => history.push("/profile"))
      .catch(err => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className="container">
      <h1>Login</h1>
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
  );
}

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
