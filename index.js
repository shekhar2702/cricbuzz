const express = require("express");
const app = express();
const appRoutes = require("./routes/appRoutes");
const mongoose = require("mongoose");
// database connection to mongodb
const dbURI =
  "mongodb+srv://test:test1234@cluster0.ha0zx.mongodb.net/cricbuzz?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("DB connected");
    app.listen(3000);
    console.log("Listening on port 3000.....");
  })
  .catch((err) => console.log(err));

//Middleware which uses all defined routes
app.use(appRoutes);

//Handle all invalid routes
app.get("*", (req, res) => {
  console.log("Home");
  res.status(404).json({ error: "No such routes" });
});
