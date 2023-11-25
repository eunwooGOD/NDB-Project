const express = require('express');
const router = express.Router();
const path = require("path");

router.get('/link', (req, res)=>{
    console.log('main router')
    app.use(express.static(path.join(__dirname, 'dist', 'index.html')));
})

module.exports = router;