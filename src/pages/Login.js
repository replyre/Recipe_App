// Icons are used from Material UI
import {
  AccountCircle,
  Email,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material"; // form components are used from material UI
import React from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice"; // login action
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

const initialFvalues = {
  fname: "",
  email: "",
  pass: "",
};
const Login = () => {
  const [values, setValues] = React.useState(initialFvalues); // variable to set user information
  const [showPassword, setShowPassword] = React.useState(false); // toggle password
  const [errors, setErrors] = React.useState(null); // variable used to validate the input fields
  // functions used to show/hide password
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    // authentication
    if (validate()) {
      alert(`${values.fname}, you are succesfully logged in.`);
      dispatch(
        login({
          name: values.fname,
          email: values.email,
          pass: values.pass,
        })
      );
      navigate("/");
    }
  };

  // setting up authentication
  const validate = () => {
    let temp = {};
    temp.fname = values.fname ? "" : "*This is required field";
    temp.email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)
      ? ""
      : "enter valid email";
    temp.pass =
      values.pass.length > 8 ? "" : "Paassword length must be greater than 8";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x == "");
  };

  // login page build using Material UI
  return (
    <div className="loginContainer">
      <h1 style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        User Login
        <PersonIcon style={{ fontSize: "30px" }} />
      </h1>
      <TextField
        id="Name"
        label="Name"
        value={values.fname}
        placeholder="Enter your Name"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        onChange={(e) => {
          setValues((prevData) => ({ ...prevData, fname: e.target.value }));
        }}
        {...(errors && {
          error: errors.fname === "" ? false : true,
          helperText: errors.fname,
        })}
      />

      <TextField
        id="Email"
        label="E-mail"
        variant="outlined"
        placeholder="Enter your Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          ),
        }}
        onChange={(e) => {
          setValues((prevData) => ({ ...prevData, email: e.target.value }));
        }}
        {...(errors && {
          error: errors.email === "" ? false : true,
          helperText: errors.email,
        })}
      />
      <TextField
        id="Password"
        label="Password"
        variant="outlined"
        placeholder="Enter your password"
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={(e) => {
          setValues((prevData) => ({ ...prevData, pass: e.target.value }));
        }}
        {...(errors && {
          error: errors.pass === "" ? false : true,
          helperText: errors.pass,
        })}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Login
      </Button>
    </div>
  );
};

export default Login;
