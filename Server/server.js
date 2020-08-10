require("dotenv").config();

const express = require("express");
const app = express();
const Easy = require("./Easy");
const Hard = require("./Hard");
const Medium = require("./Medium");
const mongoose = require("mongoose");

const cors = require("cors");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(cors());
app.use(express.json());

app.use("/", Easy);
app.use("/hard", Hard);
app.use("/medium", Medium);

app.listen(8000, () => {
  console.log("Hello Everyone!");
});
