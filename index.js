const osas = require("express");
require("./config/database");

const port = 2002;
const app = osas();

app.use(osas.json());

// default get
app.get("/", (req, res) => {
  res.status(200).json({
    message: "osas blog get sever is up and runing",
  });
});

app.listen(port, () => {
  console.log("osas blog sever is ready");
});
