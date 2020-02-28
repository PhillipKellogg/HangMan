const express = require('express');
const router = express.Router();
const Easy = require('./Data/Easy.json')



router.get ('/', (req,res) => {
    res.send(Easy);
})


module.exports=router