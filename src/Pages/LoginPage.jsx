// import { useContext } from "react";
// import { UserContext } from "../Context/UserContext";
import {useState, useContext} from 'react'
import {AuthContext} from '../Context/AuthContext'
import {useHistory} from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const [_, setAuth] = useContext(AuthContext)
    const history = useHistory()

    const handleSubmit =(e => {
        e.preventDefault();
        if (username === "Patrick" && password ==="password"){
            setAuth(true);
            history.push ("/protected");
        }
        else {
            history.push0("/login");
        }
    })
  return (
    <div>
      <h1>Login Page</h1>
      {/* <h3>
        <i>Curent User</i>:{user}
      </h3>
      <button onClick={() => setUser("Login")}>Click Me</button> */}

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> <br/>
        <button tupe="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
