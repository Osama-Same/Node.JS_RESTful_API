const express = require("express");

const app = express();

const path = `http://jsonplaceholder.typicode.com/users`;

// Requst Method
app.get("/api/employee", (req, res) => {
  res.json(path);
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
//ossama