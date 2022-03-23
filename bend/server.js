const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/sleepdata", require("./routes/routes"));

app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));

console.log("Smart Bed Systems Application Started");
