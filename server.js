const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemsRoutes");

app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);

// start the server
app.listen(PORT, () => {
  console.log("Listening on port 3000");
});
