import { useState } from "react";
import {Link} from 'react-router-dom'

import './Login.scss'

const Login = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  // fetch('https:localhost//3000/get')
  // .then(res => res.json())
  // .then(res => {
  //   console.log(res)
  // })
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title"><b>SIGN IN</b></h1>
        <form className="form">
          <input className="input" placeholder="username" />
          <input className="input" placeholder="password" />
          <button className="button">LOGIN</button>

          <Link className="link">DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link className="link" to='/register'>CREATE A NEW ACCOUNT</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
