import { Grid, TextField } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import Swal from "sweetalert2";
import app_config from "../../config";
import toast from "react-hot-toast";

const AddSlide = () => {
  const [selImage, setSelImage] = useState("");
  const [selFile, setSelFile] = useState("");

  const url = app_config.backend_url;
  const formObj = {
    title: "",
    description: "",
    thumbnail: "",
    file: "",
    numSlides: 0,
    category: "",
  };

  const formSubmit = (formdata) => {
    formdata.thumbnail = selImage;
    formdata.file = selFile;
    console.log(formdata);

    fetch(url + "/slide/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          Swal.fire({
            icon: "success",
            title: "Added Successfully",
          });
        });
      }
    });
  };

  const uploadThumbnail = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Image Uploaded!!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    });
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Image Uploaded!!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    });
  };

  return (
    <div className="mt-5 container">
      <header>
        <h1>Add New Presentation</h1>
        <p>Othelo</p>
      </header>
      <div className="card">
        <div className="card-body">
          <Formik initialValues={formObj} onSubmit={formSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  className="w-100 mt-4"
                  label="Title"
                  id="title"
                  onChange={handleChange}
                  value={values.title}
                />
                <TextField
                  className="w-100 mt-4"
                  label="Description"
                  id="description"
                  onChange={handleChange}
                  value={values.description}
                />
                <TextField
                  className="w-100 mt-4"
                  label="Number of Slides"
                  id="numSlides"
                  onChange={handleChange}
                  value={values.numSlides}
                />
                <TextField
                  className="w-100 mt-4"
                  label="Category"
                  id="category"
                  onChange={handleChange}
                  value={values.category}
                />

                <Grid container spacing={4}>
                  <Grid item md={6} xs={12}>
                    <label className="mt-4">Select Thumbnail</label>
                    <input
                      className="form-control"
                      type="file"
                      onChange={uploadThumbnail}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <label className="mt-4">Select PPT File</label>
                    <input
                      className="form-control"
                      type="file"
                      onChange={uploadFile}
                    />
                  </Grid>
                </Grid>

                <button className="btn btn-primary w-100 mt-5">Submit</button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddSlide;
