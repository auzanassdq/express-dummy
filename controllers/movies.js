const {movies} = require("../models/movies.js")

module.exports = {
  getMovies: (req, res) => {
    res.status(200).send(movies)
  },

  getMoviesById: (req, res) => {
    const idParams = req.params.id
    const movie = movies.find(item => item.id == idParams)
  
    res.send(movie)
  },

  postMovies: (req, res) => {
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
  },

  deleteMovies: (req, res) => {
    try {
      const idToDelete = req.params.id;
      let item = movies.filter(item => item.id !== parseInt(idToDelete));
  
      movies = item;
  
      res.status(200).send(movies);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },

  putMovies: (req, res) => {
    try {
      let getToUpdate = movies.findIndex(data => data.id == req.params.id);
  
      movies.map(data => {
        if (data.id == req.params.id) {
          movies[getToUpdate].judul = req.body.judul;
        }
      });
      res.send({
        message: 'data successfully updated',
        movies
      });
    } catch (error) {
      res.send(error);
    }
  }
}