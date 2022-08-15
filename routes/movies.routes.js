const router = require('express').Router();
const Movie = require('../models/Movie.model');
const Celebrity = require('../models/Celebrity.model');

// GET movies/create 
router.get('/movies/create', (req, res) => {
    Celebrity.find()
    .then((allCelebs) => {
        res.render('movies/new-movie', { allCelebs });
    })
    .catch((err) => console.log(err));
});

// POST movies/create
router.post('/movies/create', (req, res) => {
    Movie.create(req.body)
        .then(() => res.redirect('/movies'))
        .catch((err) => console.log(err));
});

// GET movies/movies
router.get('/movies', (req, res) => {
    Movie.find()
        .then((allMovies) => {
            res.render('movies/movies', { allMovies });
        })
        .catch((err) => console.log(err));
});

// GET movies/:id 
router.get('/movies/:id', (req, res) => {
    const { id } = req.params;
    Movie.findById(id)
        .populate('cast')
        .then((movie) => {
            res.render('movies/movie-details', { movie });
        })
        .catch((err) => console.log(err));
});

// POST movies/:id/delete
router.post('/movies/:id/delete', (req, res) => {
    const { id } = req.params
    Movie.findByIdAndDelete(id)
        .then(() => res.redirect('/movies'))
        .catch((err) => console.log(err));
});

module.exports = router; 