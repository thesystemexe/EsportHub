import React, { useEffect, useState } from "react";
import "./css/LoginSignUp.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role:'user'
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("LoginFunction is executed", formData);
    let responseData;
    await fetch("http://localhost:4001/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };

  const fetchSignUp = async () => {
    console.log("SignUp function is executed", formData);
    let responseData;
    await fetch("http://localhost:4001/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };

  return (
    <div className="login-signUp">
      <div className="loginSignUp-container">
        <h1>{state}</h1>
        <div className="loginSingUp-field">
          {state === "SignUp" ? (
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.username}
              onChange={handleChange}
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="loginSingUp-btn">
          <button onClick={()=>{state==='Login'?login():fetchSignUp()}}>Continue</button>
        </div>
        <label htmlFor="
        ">
          Role:
          <select name="role"  value={formData.role} onChange={handleChange}>
            <option value="user">User</option>
            <option value="organization">Organization</option>
          </select>
        </label>
        {state === "Login" ? (
          <p>
            Create an account ?{" "}
            <span onClick={() => setState("SignUp")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account{" "}
            <span onClick={() => setState("Login")}>Click here</span>
          </p>
        )}
        <div className="loginSignUp-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing, I agree to the terms and policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
