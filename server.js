import express from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.send("Hi, Everyone");
});

//* Route file

import routes from "./routes/index.js";

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
