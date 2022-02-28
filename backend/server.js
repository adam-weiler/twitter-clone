// Dependencies:
//
// mongodb : A MongoDB database driver that allows your Node.js applications to connect to the database and work with data.
// express: The web framework for Node.js.
// cors: A Node.js package that allows cross origin resource sharing.
// dotenv: The module that loads environment variables from the .env file into processes.env file. This seperates config files from the code.
// bcrypt: Used to has the password we save to the database.
// jsonwebtoken: Used to authorize a user has access to a certain route, after they have already been authenticated.
// mongoose: Used to connect to a database.
// body-parser: Allows us to access post data from React in our post requests.

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" }); 
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});