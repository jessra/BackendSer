const express = require('express');
const Handlebars = require("handlebars");
const collector = express.Router();

var casas = [{cuartos: 2, banos: 1, ubicacion: 'San Jacinto', pisos: 1},{cuartos: 5, banos: 2, ubicacion: 'Trujillo', pisos: 2}]
var edificios = [{numeroApartamentos: 26, areasVerdes: 2, estacionamiento: false, pisos: 3},{numeroApartamentos: 33, areasVerdes: 1, estacionamiento: true, pisos: 5}]
var empresas = [{nombre: 'Servicios Avila', ubicacion: 'Trujillo', servicio: 'Productos de construcción'},{nombre: 'Diario los Andes', ubicacion: 'Centro', servicios: 'Prensa'}]
var carreteras = [{estado: 'detereorado', ultimoMantenimiento: '5 de julio'},{estado: 'excelente', ultimoMantenimiento: '15 de septiembre'}]
var parques = [{cuidado: 'excelente', fuentes: 2, bancos: 7},{cuidado: 'medio', fuentes: 1, bancos: 10}]
var comercios = [{vigilantes: 2, establecimientos: 10, pisos: 2},{vigilantes: 5, establecimientos: 23, pisos: 3}]
var puentes = [{añosEnUso: 5, material: 'hierro', estado: 'excelente'},{añosEnUso: 10, material: 'madera', estado: 'peligroso'}]

/* GET */
collector.get('/', function(req, res) {
    res.send("Bienvenido! Este programa te permite mantener un registro de edificaciones de una ciudad. Para más información dirígete a /informacion");
})
collector.get('/informacion', function(req, res) {
    res.send("1. Para ver la construcciones agregadas por su tipo, agrega / + el nombre de la edificación a buscar. 2. Para una busqueda profunda de una edificación puedes colocar / + nombre de la edificación + / + la posicion de la estructura especifica a buscar.");
})
collector.get('/:construccion', function(req, res) {
    if(req.params.construccion === 'casas'){
        res.json(casas);
    }else if(req.params.construccion === 'edificios'){
        res.json(edificios);
    }else if(req.params.construccion === 'empresas'){
        res.json(empresas);
    }else if(req.params.construccion === 'carreteras'){
        res.json(carreteras);
    }else if(req.params.construccion === 'parques'){
        res.json(parques);
    }else if(req.params.construccion === 'comercios'){
        res.json(comercios);
    }else if(req.params.construccion === 'puentes'){
        res.json(puentes);
    }
});
collector.get('/:construccion/:id', function(req, res) {
    if(req.params.construccion === 'casas'){
        res.json(casas[req.params.id]);
    }else if(req.params.construccion === 'edificios'){
        res.json(edificios[req.params.id]);
    }else if(req.params.construccion === 'empresas'){
        res.json(empresas[req.params.id]);
    }else if(req.params.construccion === 'carreteras'){
        res.json(carreteras[req.params.id]);
    }else if(req.params.construccion === 'parques'){
        res.json(parques[req.params.id]);
    }else if(req.params.construccion === 'comercios'){
        res.json(comercios[req.params.id]);
    }else if(req.params.construccion === 'puentes'){
        res.json(puentes[req.params.id]);
    };
});

//* POST *//
collector.post('/agregar/:construccion', function(req, res) {
    if(req.params.construccion === 'casas'){
        console.log(req.body);
        casas.push(req.body)
        res.send("Se ha agregado una nueva casa, consulta los datos ingresados en /casas o la consola.");
    }
});

//* PUT *//
collector.put('/editar/:construccion/:id', function(req, res) {
    if(req.params.construccion === 'casas'){
        console.log(req.body)
        casas[req.params.id] = req.body
        res.send("Se ha editado correctamente la casa en el indice "+req.params.id+", consulta los datos ingresados en /casas o la consola.")
    }
})

//* DELETE *//
collector.delete('/eliminar/:construccion/:id', function(req, res) {
    if(req.params.construccion === 'casas'){
        casas.splice(1, req.params.id)
        res.send("Se ha eliminado correctamente la casa en el indice "+req.params.id+".")
    }
})

module.exports = collector;

// [{
//     "cuartos": 3, 
//     "baños": 1, 
//     "ubicacion": "Valera", 
//     "pisos": 1
//     }]