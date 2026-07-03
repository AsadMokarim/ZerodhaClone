import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function SignupDialog({ dialogOpen, setDialogOpen }) {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
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
      position: "bottom-right",
    });
  const handleClose = () => {
    setDialogOpen(false);
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const formData = new FormData(event.currentTarget);
  //     const formJson = Object.fromEntries(formData.entries());
  //     const email = formJson.email;
  //     console.log(email);
  //     handleClose();
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/auth/signup",
        {
          ...inputValue,
        },
        { withCredentials: true },
      );
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
      username: "",
    });
  };

  return (
    <Dialog open={dialogOpen} onClose={handleClose} fullWidth={true}>
      <DialogTitle>Signup</DialogTitle>
      <DialogContent>
        <DialogContentText>Please enter details to Signup.</DialogContentText>
        <form onSubmit={handleSubmit} id="subscription-form">
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
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="username"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleOnChange}
            value={username}
          />
        </form>
        <DialogContentText>Already have an account? <Link to={"/login"}>Login</Link></DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" form="subscription-form">
          Signup
        </Button>
      </DialogActions>
      <ToastContainer />
    </Dialog>
  );
}
