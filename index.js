const express = require("express");

// Importar rutas de mascotas
const petRoutes = require('./routes/pet.routes');
const shelterRoutes = require('./routes/shelter.routes');

require('./db.js')
const PORT = 4044;
const server = express();


server.use(express.json());
server.use(express.urlencoded({ extended: false }));
// Tener los endpoints y rutas d elas mascotas
server.use('/pets', petRoutes);
server.use('/shelters', shelterRoutes);
server.use("*", (req, res, next)=>{
    const error = new Error("Route not found");
    error.status = 404;
    next(error); // Funcion next con error
});

server.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || "Error inesperado");
});

server.listen(PORT, () => {
    console.log("Server running en localhost:"+PORT);
});