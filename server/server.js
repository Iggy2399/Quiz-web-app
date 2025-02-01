const express = require("express");
const cors = require("cors");
const connection = require("./Connection");
const bodyParser = require("body-parser");
const app = express();


const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

var apiRoutes = express.Router();
app.use("/api", apiRoutes);

app.use("/", require("./routes"));

connection.init();

app.listen(port);
console.log(`Server listening on port: ${port}`);

