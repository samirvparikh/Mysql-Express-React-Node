const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
//const router = require("./routes/users");

app.use(express.json());
//app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}..`);
});
