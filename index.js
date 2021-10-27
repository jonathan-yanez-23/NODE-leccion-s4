const express = require("express");

// Importar rutas de mascotas
const petRoutes = require('./routes/pet.routes');

const PORT = 4044;
const server = express();

// Tener los endpoints y rutas d elas mascotas
server.use('/pets', petRoutes);

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