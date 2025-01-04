const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Simulated database using a JSON file
const dataFilePath = path.join(__dirname, "db.json");

// Read existing blood requests from db.json if it exists
const readDataFromFile = () => {
  try {
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
  } catch (error) {
    return []; // If no data or file exists, return an empty array
  }
};

// Write data to db.json
const writeDataToFile = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// Route to handle blood request submissions
app.post("/add-blood-request", (req, res) => {
  const {
    name,
    phone,
    bloodGroup,
    urgency,
    reason,
    hospital,
    location,
    date,
  } = req.body;

  if (
    !name ||
    !phone ||
    !bloodGroup ||
    !urgency ||
    !reason ||
    !hospital ||
    !location ||
    !date
  ) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  // Get existing requests and create new request object
  const bloodRequests = readDataFromFile();
  const newRequest = {
    id: bloodRequests.length + 1, // Simulate an auto-incrementing ID
    name,
    phone,
    bloodGroup,
    urgency,
    reason,
    hospital,
    location,
    date,
  };

  // Add the new request to the list
  bloodRequests.push(newRequest);

  // Write the updated list of requests to the file
  writeDataToFile(bloodRequests);

  console.log("New Blood Request Added:", newRequest);
  res.status(201).json({ message: "Blood request added successfully", id: newRequest.id });
});

// Route to retrieve all blood requests (for testing or admin use)
app.get("/blood-requests", (req, res) => {
  const bloodRequests = readDataFromFile();
  res.json(bloodRequests);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
