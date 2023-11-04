const express = require(`express`);
const router =  express.Router();
const path = require(`path`);

// GET request for notes page
router.get(`/notes`,(req,res) => {
    res.sendFile(path.join(__dirname, `../public/notes.html`));
})

module.exports = router;