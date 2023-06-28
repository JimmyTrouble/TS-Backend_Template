import express from "express";
const app = express();
const port = undefined;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port!, () => {
  console.log("server running port:5000");
});
