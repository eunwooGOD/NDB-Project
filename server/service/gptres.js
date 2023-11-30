const express = require('express');
const router = express.Router();

router.get('/codeExam', (req, res)=>{
    console.log('code router')
})

module.exports = router;