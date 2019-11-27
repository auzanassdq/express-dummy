require("dotenv").config();
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let movies = [
  {
    id: 1,
    judul: "frozen",
    tahun: 2019
  },
  {
    id: 2,
    judul: "joker",
    tahun: 2019
  }
]

app.get("/", (request, response) => {
  response.send("<h1>selamat datang pada endpoint root </h1>")
})

app.get("/movies", (req, res) => {
  res.status(200).send(movies)
})

app.get("/movies/:id", (req, res) => {
  const idParams = req.params.id
  const movie = movies.find(item => item.id == idParams)

  res.send(movie)
})

app.post("/movies", (req, res) => {
  const lastIndex = movies.length - 1
  const id = movies[lastIndex].id + 1
  const judul = req.body.judul
  const tahun = req.body.tahun

  const movie = {
    id, judul, tahun
  }

  movies.push(movie)
  res.send({
    message: "add movie success",
    movies
  })
})

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`)
})