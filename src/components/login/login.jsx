//see https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
import React from "react";
import PropTypes from "prop-types";
import "./login.css";
import { loginUser } from "../../api/login-api"



export default function Login({ setToken }) {
  const [username, setUserName] = React.useState();
  const [password, setPassword] = React.useState();
  
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
