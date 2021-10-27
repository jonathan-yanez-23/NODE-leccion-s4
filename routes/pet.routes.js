const express = require('express');
const Pet = require('../models/Pet');
const router = express.Router();
router.get('/', async (req, res) => {
    try{
        const pets = await Pet.find();
        return res.status(200).json(pets)
    } catch(err){
        return res.status(500).json(err);
    }
});

router.post('/create', async (req, res, next)=>{
    try{
        console.log(req);
        const newPet = new Pet({
            name: req.body.name,
            species: req.body.species,
            age: req.body.age
        });

        // Guardamos mascota en db
        const createdPet = await newPet.save();
        return res.status(200).json(createdPet);
    } catch(err){
        // usar funcion next
        next(err)
    }
});

router.put('/edit', async(req, res, next)=>{
    try{
        console.log(req);
        const id = req.body.id;
        const updatedPet = await Pet.findByIdAndUpdate(
            id, // Id del doc que se actualizara
            {name: req.body.name}, // Campos que se actualizaran
            {new: true} // Usando esta opcion, se consigue el documento actualizado tras completarse el update
        );
        return res.status(200).json(updatedPet);
    }catch(err){
        // Enviar error a next
        next(err)
    }
});


module.exports = router;