const express = require("express");

const app = express();

const PORT = 4000;

const user = require("./models").user;

app.use(express.json());

app.post("/echo", (req, res) => {
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});
