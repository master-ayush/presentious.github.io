const mongoose = require("mongoose");

const url =
  "mongodb+srv://mradityaverma00:aditya123@cluster0.vl8sl.mongodb.net/presentious?retryWrites=true&w=majority";

// asynchronous function
mongoose
  .connect(url)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.error(err); 
  });

module.exports = mongoose;
