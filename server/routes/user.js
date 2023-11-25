// 유저와 관련된 router들
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    console.log('user router')
})

module.exports = router;