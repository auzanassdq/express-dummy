require("dotenv").config();
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const moviesRouter = require("./routes/movies")
const todoRouter = require("./routes/todo")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/movies", moviesRouter)
app.use("/todo", todoRouter)

app.get("/", (request, response) => {
  response.send("<h1>selamat datang pada endpoint root </h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`)
})