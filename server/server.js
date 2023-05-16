const express = require("express");
const apiRoutes = require("./routes/index");

const app = express();
const port = 5000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", apiRoutes.router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
