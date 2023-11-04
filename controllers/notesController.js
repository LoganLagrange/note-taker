const express = require("express");
const router = express.Router();
const fs = require('fs');

router.get(`/api/notes`,(req,res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"))
    console.log(`${req.method} request to ${req.url}`)
    res.json(notes);
})

module.exports = router;