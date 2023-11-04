const express = require("express");
const router = express.Router();
const fs = require('fs');
const crypto = require(`crypto`);

router.get(`/api/notes`,(req,res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"))
    console.log(`${req.method} request to ${req.url}`)
    res.json(notes);
})

router.post(`/api/notes`,(req,res) => {
    const newNote = {
        id:crypto.randomUUID(),
        title:req.body.title,
        text:req.body.text
    }
    const storedNotesData = JSON.parse(fs.readFileSync("./db/db.json"));
    storedNotesData.push(newNote);
    fs.writeFileSync("./db/db.json",JSON.stringify(storedNotesData,null,4));
    console.log(`${req.method} request to ${req.url}`);
    res.json(newNote);
})

module.exports = router;