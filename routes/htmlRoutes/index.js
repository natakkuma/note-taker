//REQUIRE
const path = require('path');
const router = require('express').Router();

//GET VIEWS
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//GET NOTES 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

//GET ALL OTHER ROUTES
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//EXPORT
module.exports = router;