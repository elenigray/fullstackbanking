import React from "react";
import Card from "./Card";
import { Navigate, useNavigate } from "react-router";
import axios from "axios";

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    const res = await axios.post("http://localhost:4000/login", {
      email,
      password,
    });
    if (res.data) {
      console.log("found user", res.data);
      localStorage.setItem("email", res.data.email);
      console.log(localStorage.getItem("email"));
      navigate("/");
      return;
    }
    //   for(const user of ctx.users) {
    //     console.log('user', {user})
    //     if (user.email === email && user.password === password) {
    //       // yay match do something
    //       ctx.user = user;
    //       console.log(`found user ${email}`);
    //       navigate('/');
    //       return;
    //     }
    //   }
    setStatus("Invalid username or password");
  }

  return (
    <>
      <div className="d-flex justify-content-center account">
        <div className="card w-50">
          <div className="card-header">Login</div>
          <div className="card-body cardbackground">
            <>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="input"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </div>
              <br/>
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleLogin}
              >
                Login
              </button>
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
