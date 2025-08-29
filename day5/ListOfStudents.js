const express = require("express");
const app = express();

app.use(express.json()); 


app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/students", (req, res) => {
  res.json([
    { id: 1, name: "Rashmi", course: "CSE" },
    { id: 2, name: "Aman", course: "IT" },
    { id: 3, name: "Priya", course: "ECE" }
  ]);
})

app.post("/greet", (req, res) => {
  res.send('Hello, ${req.body.name}!');
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
