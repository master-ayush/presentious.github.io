// importing express
const express = require("express");

// importing User Router
const userRouter = require("./routers/userRouter");
const slideRouter = require("./routers/slideRouter");
const utilRouter = require("./routers/util");
const reviewRouter = require("./routers/reviewRouter");

// initialize express app
const app = express();

// define the port
const port = 5000;

// import cors library
const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

// this will parse the json data sent from client
app.use(express.json());
app.use(express.static("./static"));
// middleware
app.use("/user", userRouter);
app.use("/slide", slideRouter);
app.use("/util", utilRouter);
app.use("/review", reviewRouter);

// Run the Server
app.listen(port, () => {
  console.log("server started on 5000");
});
