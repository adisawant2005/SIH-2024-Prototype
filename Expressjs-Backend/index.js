const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
const port = process.env.PORT || 3000;

const connectDB = require("./db/MongoDBConnection");
const { routeLogin, routeSignup } = require("./routers/router");

// Middleware setup
app.use(require("./middleware/logger.middleware"));
app.use(require("./middleware/errorHandler.middleware"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());

// Route handlers
app
  .route("/")
  .get((req, res) => {
    res.send("Hello World");
  })
  .post((req, res) => {
    const { description } = req.body;
    res.json({ description });
  })
  .put((req, res) => {
    res.status(405).send("Method Not Allowed");
  })
  .delete((req, res) => {
    res.status(405).send("Method Not Allowed");
  });

app.use("/login", routeLogin);
app.use("/signup", routeSignup);

// Connect to the database
connectDB()
  .then(() => console.log("From INDEX.js: Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
