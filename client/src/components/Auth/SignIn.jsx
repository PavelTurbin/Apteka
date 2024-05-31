import React, { useState } from "react";
import { SetAccessToken } from "../../axiosInstance";
function SignIn({user, setUser}) {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const logIn = (e) => {
    e.preventDefault();
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginForm),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
   
          setUser(data.user)
          SetAccessToken(data.accessToken)
        }
      });
  };

  return (
    <form style={{ width: "360px", padding: "8% 0 0", margin: "auto" }}>
      <label htmlFor="email" className="form-label">
        Login
      </label>
      <input
        type="text"
        placeholder="Email"
        value={loginForm.email}
        onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
        className="form-control"
        id="email"
      />
      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input
        type="password"
        placeholder="Password"
        value={loginForm.password}
        onChange={(e) =>
          setLoginForm({ ...loginForm, password: e.target.value })
        }
        className="form-control"
        id="password"
      />
      <div className="d-grid gap-1">
        <button onClick={(e) => logIn(e)} className="btn btn-success">
          Войти
        </button>
      </div>
    </form>
  );
}

export default SignIn;