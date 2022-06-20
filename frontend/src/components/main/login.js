import { Button, Card, CardContent, Container, TextField } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Stack from "@mui/material/Stack";

const Login = () => {
  const url = app_config.backend_url;

  const userForm = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const loginSubmit = (formdata) => {
    fetch(url + "/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Successfully Logged In!",
        });

        res.json().then((data) => {
          if (data.isAdmin) {
            sessionStorage.setItem("admin", JSON.stringify(data));
            navigate("/admin/addslide");
            return;
          }
          sessionStorage.setItem("user", JSON.stringify(data));
          navigate("/main/home");
        });
      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Login Failed",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Some Error Occured!!",
        });
      }
    });
  };

  return (
    <div className="signup-bg" style={styles.container}>
      <div className="row g-0 align-items-center h-100">
        <div className="col-lg-3 col-md-4 col-sm-8 col-xs-10 col-11 mx-auto">
          <div className="card">
            <div className="card-body">
              <Formik initialValues={userForm} onSubmit={loginSubmit}>
                {({ values, handleSubmit, handleChange }) => {
                  return (
                    <form onSubmit={handleSubmit}>
                      <p className="text-center text-muted my-1">Presentious</p>
                      <h3 className="text-center mb-4">Login Now</h3>
                      <div>
                        <h6>Email Address</h6>
                        <TextField
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
                        <h6>Password</h6>
                        <TextField
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
                        className="mt-2 mb-2 w-100"
                        color="secondary"
                      >
                        Login
                      </Button>
                      <Link to="/main/signup">Create Account</Link>
                      <Link to="/main/resetpassword" className="float-end">
                        Forgot Password?
                      </Link>
                      <hr />
                      {/* <Stack direction="row" spacing={4} sx={{ mt: 3 }}>
                        <Button
                          variant="outlined"
                          color="error"
                          startIcon={<GoogleIcon />}
                        >
                          Google
                        </Button>
                        <Button
                          variant="outlined"
                          color="primary"
                          endIcon={<FacebookOutlinedIcon />}
                        >
                          Facebook
                        </Button>
                      </Stack> */}
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

export default Login;
