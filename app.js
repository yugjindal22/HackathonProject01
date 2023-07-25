const express = require("express");
const app = express();
const path = require("path");
const { port } = require("./config.json");
app.use(express.static("src/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/loginpage.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/loginpage.html"));
});
app.get("/signuppage.html", async (req, res) => {
  res.sendFile(path.join(__dirname, "public/signuppage.html"));
});
app.get("/contactus.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/contactus.html"));
});
app.get("/loggedin.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/loggedin.html"));
});

app.get("/profile.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/profile.html"));
});

app.listen(port, () => console.log("Server is running.."));
