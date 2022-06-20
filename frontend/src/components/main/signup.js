import { Button, Card, CardContent, Container, TextField } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import { Link, NavLink, useNavigate } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Stack from "@mui/material/Stack";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Signup = () => {
  const signupStyles = {
    background: "url(https://wallpaperaccess.com/full/1223823.jpg)",
    height: "100%",
  };

  const url = app_config.backend_url;

  //   1. Create the form object

  const userForm = {
    name: "",
    mobile: "",
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const formSubmit = (formdata) => {
    console.log(formdata);

    // asynchronous function returns promise
    fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Registered Successfully!!",
        });
      });
  };

  return (
    <div className="signup-bg" style={styles.container}>
      <div className="row g-0 align-items-center h-100">
        <div className="col-lg-3 col-md-4 col-sm-8 col-xs-10 col-11 mx-auto">
          <div className="card">
            <div className="card-body">
              <Formik initialValues={userForm} onSubmit={formSubmit}>
                {({ values, handleSubmit, handleChange }) => {
                  return (
                    <form onSubmit={handleSubmit}>
                      <p className="text-center text-muted my-1">Presentious</p>
                      <h3 className="text-center mb-4">Create New Account</h3>
                      <div>
                        <TextField
                          label="Name"
                          className="w-100"
                          variant="standard"
                          id="name"
                          onChange={handleChange}
                          value={values.name}
                        />
                      </div>
                      <br></br>
                      <div>
                        <TextField
                          label="Mobile"
                          className="w-100 "
                          variant="standard"
                          id="mobile"
                          onChange={handleChange}
                          value={values.mobile}
                        />
                      </div>
                      <br></br>
                      <div>
                        <TextField
                          label="Email"
                          className="w-100 "
                          variant="standard"
                          type="email"
                          id="email"
                          onChange={handleChange}
                          value={values.email}
                        />
                      </div>
                      <br></br>
                      <div>
                        <TextField
                          label="Password"
                          className="w-100 "
                          variant="standard"
                          type="password"
                          id="password"
                          onChange={handleChange}
                          value={values.password}
                        />
                      </div>
                      <FormGroup sx={{ mt: 1 }}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Remember me"
                        />
                      </FormGroup>
                      <Button
                        type="submit"
                        variant="contained"
                        className="w-100 mt-4 mb-2 "
                        color="secondary"
                      >
                        Signup
                      </Button>
                      <Link to="/main/signin">Login Now</Link>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background:
      "linear-gradient(to right, #0000009b, #000000ad), url(http://localhost:5000/images/signup_back.jpg)",
    height: "100vh",
  },
};

export default Signup;
