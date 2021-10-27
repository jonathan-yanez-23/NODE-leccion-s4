const express = require('express');
const Pet = require('../models/Pet');
const router = express.Router();
router.get('/', async (req, res) => {
    try{
        const pets = await Pet.find();
        return res.status(200).json(pets);
    } catch(err){
        return res.status(500).json(err);
    }
});
module.exports = router;