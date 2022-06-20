import React, { useState, useEffect } from "react";
import app_config from "../../config";
import toast from "react-hot-toast";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Fab,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { Formik } from "formik";
import {
  Category,
  DeleteRounded,
  Edit,
  ExpandMore,
  Newspaper,
  TitleSharp,
} from "@mui/icons-material";

const ManageUser = () => {
  const [loading, setLoading] = useState(true);
  const url = app_config.backend_url;

  const [floristArray, setFloristArray] = useState([]);
  const [filter, setFilter] = useState("");
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormdata, setUpdateFormdata] = useState({});

  const fetchData = () => {
    fetch(url + "/florist/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFloristArray(data);
        setLoading(false);
      });
  };

  const deleteData = (id) => {
    fetch(url + "/florist/delete/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchData();
        toast.success("News Successfully Deleted!!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  const applyfilter = () => {
    fetch(url + "/florist/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filtered = data.filter(({ title }) => {
          return title.toLowerCase().includes(filter.toLowerCase());
        });
        console.log(filtered);
        setFloristArray(filtered);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const submitUpdateForm = (formdata) => {
    console.log(formdata);
  };

  const updateForm = () => {
    if (showUpdateForm) {
      return (
        <div>
          <Card>
            <CardContent sx={{ width: 640 }}>
              <Formik
                initialValues={updateFormdata}
                onSubmit={submitUpdateForm}
              >
                {({ values, handleChange, handleSubmit, errors }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="card-body">
                      <TextField
                        className="w-100 mt-3"
                        placeholder="Title"
                        label="Title"
                        variant="outlined"
                        id="title"
                        type="text"
                        onChange={handleChange}
                        value={values.title}
                        error={Boolean(errors.title)}
                        helperText={errors.title}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <TitleSharp
                                sx={{
                                  color: "active.active",
                                  mr: 1,
                                  my: 0.5,
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />

                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label1">
                          Category
                        </InputLabel>

                        <Select
                          labelId="demo-simple-select-label1"
                          id="category"
                          name="category"
                          label="Category"
                          value={values.category}
                          error={Boolean(errors.category)}
                          helperText={errors.category}
                          onChange={handleChange}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <Category
                                  sx={{
                                    color: "active.active",
                                    mr: 1,
                                    my: 0.5,
                                  }}
                                />
                              </InputAdornment>
                            ),
                          }}
                        >
                          {[].map((category) => (
                            <MenuItem value={category}>{category}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <br></br>
                      <br></br>

                      <TextField
                        className="w-100 mt-3"
                        label="Add News"
                        multiline
                        rows={4}
                        variant="outlined"
                        id="summary"
                        onChange={handleChange}
                        value={values.summary}
                        error={Boolean(errors.summary)}
                        helperText={errors.summary}
                        aria-label="Add News"
                        placeholder="Add News"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Newspaper
                                sx={{
                                  color: "active.active",
                                  mr: 1,
                                  my: 0.5,
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />

                      <Button
                        type="submit"
                        className="btn btn-primary"
                        color="success"
                        variant="contained"
                      >
                        Submit
                      </Button>
                      <Button
                        onClick={(e) => setShowUpdateForm(false)}
                        type="button"
                        className="btn btn-primary"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </div>
      );
    }
  };

  const displayData = () => {
    if (!loading) {
      return floristArray.map(
        ({ _id, shopName, email, address, flowers, timings, mobile }, i) => (
          <Accordion key={_id}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4>{shopName}</h4>
            </AccordionSummary>
            <AccordionDetails>
              <h5>{email}</h5>

              <h5>{address}</h5>
              <Stack direction="row" spacing={2}>
                <Fab
                  size="medium"
                  color="primary"
                  onClick={(e) => deleteData(_id)}
                  aria-label="add"
                  sx={{ mr: 1 }}
                >
                  <DeleteRounded />
                </Fab>
                <Tooltip title="Update News Article">
                  <Fab
                    size="medium"
                    color="success"
                    onClick={(e) => {
                      // setUpdateFormdata(news);
                      setShowUpdateForm(true);
                    }}
                    aria-label="add"
                  >
                    <Edit size="small" />
                  </Fab>
                </Tooltip>
              </Stack>
              <ul className="list-group">
                {flowers.map(({ name }) => (
                  <li>{name}</li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        )
      );
    }
  };

  return (
    <div>
      <h1>Manage Users</h1>
      {displayData()}
    </div>
  );
};
export default ManageUser;
