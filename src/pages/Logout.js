import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { clearAll } from "../store/BookmarkSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // function for logout
  const handleSubmit = () => {
    alert("Successfully logged out.");
    dispatch(logout()); // logout action
    navigate("/"); // redirect to home
    dispatch(clearAll()); // cleans all bookmark
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button variant="contained" onClick={handleSubmit}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;
