const router = require('express').Router();
const Celebrity = require('../models/Celebrity.model');

// GET celebrities/create
router.get('/celebrities/create', (req, res) => {
    res.render('celebrities/new-celebrity');
});

// POST celebrities/create
router.post('/celebrities/create', (req, res) => {
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.create({ name, occupation, catchPhrase})
        .then(() => res.redirect('/celebrities'))
        .catch((err) => {
            console.log(err);
            res.redirect('celebrities/new-celebrity');
        })
});

// GET celebrities
router.get('/celebrities', (req, res) => {
    Celebrity.find()
        .then((allCelebs) => {
            res.render('celebrities/celebrities', { allCelebs });
        })
        .catch((err) => console.log(err));
});

module.exports = router; 