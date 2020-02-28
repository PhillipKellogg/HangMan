const express = require('express');
const app = express();
const Easy = require('./Easy');
const Hard = require('./Hard');
const Medium = require('./Medium');

const cors = require('cors');

app.use(cors());
app.use(express.json())


app.use("/", Easy)
app.use("/hard", Hard)
app.use("/medium", Medium)


app.listen(8000, () => {
    console.log("Hello Everyone!")
})