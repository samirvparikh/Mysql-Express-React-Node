const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
//const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
//readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));
app.use('/api', require('./routes/userRoute'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}..`);
});
