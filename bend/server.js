const path = require("path");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT;

connectDB();

const app = express();

// enable cors
app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.options(
  "*",
  cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", require("./routes/routes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../fend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../fend/build", "index.html"))
  );
  app.use(errorHandler);
} else {
  app.get("/", (req, res) => res.send("Please use Production"));
}

app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));

console.log("Smart Bed Systems Application Started");
