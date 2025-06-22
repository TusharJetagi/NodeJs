const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemsRoutes");

app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);

// start the server
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
