import React, { useEffect } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = ({user="demo"}) => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  return (
    <>
      <TopBar user={user}/>
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;
