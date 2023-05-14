const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bruhh Your Server is Running Here");
});

app.listen(PORT, () => {
  console.log(`Your Server is Running on : ${PORT}`);
});
