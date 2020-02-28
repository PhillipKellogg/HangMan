const express = require('express');
const router = express.Router();
const Hard = require('./Data/Hard.json')




router.get ('/', (req,res) => {
    res.send(Hard);
})


module.exports=router