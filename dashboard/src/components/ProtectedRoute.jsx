import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cookies, removeCookie] = useCookies(["token"]);
  const [user, setUser] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.token) {
        window.location.href = "http://localhost:3000/login";
        return;
      }

      try {
        const { data } = await axios.post(
          "http://localhost:3002/auth/",
          {},
          { withCredentials: true },
        );

        if (data.status) {
          setUser(data.user);
          setLoading(false);
        } else {
          removeCookie("token");
          window.location.href = "http://localhost:3000/login";
        }
      } catch (err) {
        removeCookie("token");
        window.location.href = "http://localhost:3000/login";
      }
    };

    verifyUser();
  }, [cookies, removeCookie]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  return React.cloneElement(children, {
    user: user,
  });
};

export default ProtectedRoute;
