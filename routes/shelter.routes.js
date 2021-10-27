const express = require('express');
const Shelter = require('../models/Shelter');
const router = express.Router();


router.post('/create', async (req, res, next)=>{
    try{
        const newshelter = new Shelter({
            name: req.body.name,
            location: req.body.location
        });
        const createdShelter = await newshelter.save();
        return res.status(200).json(createdShelter);
    }catch(err){
        next(err);
    }
});


router.put('/add-pet', async (req, res, next)=>{
    try{
        const shelterId = req.body.shelterId;
        const petId = req.body.petId;
        const updateShelter = await Shelter.findByIdAndUpdate(
            shelterId,
            {$push: {pets: petId}},
            {new: true}
        );
        return res.status(200).json(updateShelter);
    }catch(err){
        next(err);
    }
});


module.exports = router;