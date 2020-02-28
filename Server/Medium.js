const express = require('express');
const router = express.Router();
const Medium = require('./Data/Medium.json')




router.get ('/', (req,res) => {
    res.send(Medium);
})


module.exports=router