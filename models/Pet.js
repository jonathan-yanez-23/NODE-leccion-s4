const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Crear esquema de mascotas
const petSchema = new Schema(
    {
        name: {type: String, required: true},
        age: {type: Number},
        species: {type: String, required: true}
    },
    {
        timestamps: true
    }
);
const Pet = mongoose.model('Pet', petSchema);
module.exports = Pet;