import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import TextField from "@mui/material/TextField";

export default function LoginPage() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/auth/login",
        {
          ...inputValue,
        },
        { withCredentials: true },
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3001/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-3"></div>
        <div className="col-6 d-flex flex-column gap-1">
          <h2>Login Account</h2>
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-1">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              onChange={handleOnChange}
              value={email}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={handleOnChange}
              value={password}
            />

            <button
              className="text-white fw-medium fs-5 rounded mt-2"
              style={{
                width: "100%",
                padding: "8px",
                border: "none",
                backgroundColor: "#387ED1",
              }}
              type="submit"
            >
              Login
            </button>
            <span>
              Don't have an account? <Link to={"/signup"}>Signup</Link>
            </span>
          </form>
          <ToastContainer />
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
