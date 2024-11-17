// Import the Express module
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const UserRoute = require("../Server/Router/UserRoutes");
// Create an instance of an Express application
const app = express();

// Define a port number
const PORT = 8080;

//Enable CORS for all routes
app.use(cors());

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/userInfo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

// Set up a route for the root URL
// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });
// app.use((req, res, next) => {
//   res.status(404).send("404 Not Found: The requested resource does not exist.");
// });

app.use("/", UserRoute);

// app.use((req, res, next) => {
//   res.status(404).json({ error: "API route not found" });
// });

// // Centralized Error Handler for other errors
// app.use((error, req, res, next) => {
//   res.status(error.status || 500).json({
//     error: error.message || "Internal Server Error",
//   });
// });

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
