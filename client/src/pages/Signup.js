import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import API from "../utils/API";
import { useAuth } from "../utils/auth";
import "../pages/signup.css";


function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    password: ""
  });

  const { isLoggedIn } = useAuth();

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
    <div className="uk-cover-container uk-height-viewport Signup" id="signupContainer">
      <div className="uk-card uk-card-body">
        <h1>Dunk or Flunk</h1>
        <h2>Signup</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="uk-margin">
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: pencil"></span>
              <input className="uk-input"
                type="text"
                placeholder="username"
                name="username"
                id="username"
                onChange={handleChange}></input>
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: lock"></span>
              <input className="uk-input"
                type="password"
                placeholder="password"
                name="password"
                id="pwd"
                onChange={handleChange}></input>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
  </button>
        </form>
        <p>
          <Link to="/login">Go to Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;

/* <div className="container">
<h1>Signup</h1>
<form onSubmit={handleFormSubmit}>
  <div className="form-group">
    <label htmlFor="username">Username:</label>
    <input
      className="form-control"
      placeholder="Username goes here..."
      name="username"
      type="text"
      id="username"
      onChange={handleChange}
      />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input
      className="form-control"
      placeholder="Email goes here..."
      name="email"
      type="email"
      id="email"
      onChange={handleChange}
      />
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input
      className="form-control"
      placeholder="Password goes here..."
      name="password"
      type="password"
      id="pwd"
      onChange={handleChange}
      />
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
<p>
  <Link to="/login">Go to Login</Link>
</p>
</div> */
//lets give this a go and see what happens