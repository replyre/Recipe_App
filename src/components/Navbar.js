import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../store/userSlice";
import "./navbar.css";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";

// The Navigation bar of the Application
const Navbar = () => {
  const bookmarks = useSelector((state) => state.bookmark); // bookmark state
  const navigate = useNavigate();
  const user = useSelector(selectUser); // current user state
  return (
    <div className="Navbar">
      {/* Home and Login Links */}
      <div className="left">
        <h1 className="header">Recipe Provider</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          {user ? (
            <Link to="/Bookmark">Bookmarks</Link>
          ) : (
            <Link to="/Login">Login</Link>
          )}
        </div>
      </div>
      {/* Username and bookmarks display */}
      <div className="right">
        {user ? "Welcome! " + user.name : "Welcome User!"}

        {user ? (
          <Badge badgeContent={bookmarks.length} color="success">
            <BookmarkIcon style={{ color: "lightgreen" }} />
          </Badge>
        ) : (
          <LoginIcon
            style={{ fontSize: "30px" }}
            className="loginIcon"
            onClick={() => {
              navigate("/Login");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
