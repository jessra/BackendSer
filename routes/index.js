const express = require('express');
const collector = express.Router();

var casas = [{cuartos: 2, banos: 1, ubicacion: 'San Jacinto', pisos: 1},{cuartos: 5, banos: 2, ubicacion: 'Trujillo', pisos: 2}];
var edificios = [{numeroApartamentos: 26, areasVerdes: 2, estacionamiento: false, pisos: 3},{numeroApartamentos: 33, areasVerdes: 1, estacionamiento: true, pisos: 5}];
var empresas = [{nombre: 'Servicios Avila', ubicacion: 'Trujillo', servicio: 'Productos de construcción'},{nombre: 'Diario los Andes', ubicacion: 'Centro', servicios: 'Prensa'}];
var carreteras = [{estado: 'detereorado', ultimoMantenimiento: '5 de julio'},{estado: 'excelente', ultimoMantenimiento: '15 de septiembre'}];
var parques = [{cuidado: 'excelente', fuentes: 2, bancos: 7},{cuidado: 'medio', fuentes: 1, bancos: 10}];
var comercios = [{vigilantes: 2, establecimientos: 10, pisos: 2},{vigilantes: 5, establecimientos: 23, pisos: 3}];
var puentes = [{tiempoEnUso: 5, material: 'hierro', estado: 'excelente'},{tiempoEnUso: 10, material: 'madera', estado: 'peligroso'}];

/* GET */
collector.get('/', function(req, res) {
    res.send("Bienvenido! Este programa te permite mantener un registro de edificaciones de una ciudad. Para más información dirígete a /informacion");
})
collector.get('/informacion', 
    function(req, res, next) {
    res.write("<p>1. Para ver la construcciones agregadas por su tipo, agrega / + el nombre de la edificación a buscar.</p>");
    next();
    },
    function(req, res, next) {
    res.write("<p>2. Para una busqueda profunda de una edificación puedes colocar / + nombre de la edificación + / + la posicion de la estructura específica a buscar.</p>");
    next();
    },
    function(req, res, next) {
    res.write("<p>3. Si desea añadir una nueva edificación puede ingresar a /agregar/ + el tipo de edificación.</p>");
    next();
    },
    function(req, res, next) {
    res.write("<p>4. Si desea editar alguna de las edificaciones agregadas diríjase a /editar/ + el tipo de edificación a editar + / + el índice de la edificación específica.</p>");
    next();
    },
    function(req, res, next) {
    res.write("<p>5. Si desea eliminar alguna de las edificaciones agregadas diríjase a /eliminar/ + el tipo de edificación a eliminar + / + el índice de la edificación específica.<p>");
    next();
    },
    function(req, res, next) {
    res.write("<p>NOTA: recuerde que el índice de una edificación específica la puede ver el n. 2, esto será de ayuda a la hora de ejecutar alguno de los últimos procesos.<p>");
    res.end();
    }
)
collector.get('/:construccion?', function(req, res, next) {
    if(req.params.construccion === 'casas'){
        res.send(casas);
        console.log("Se han agregado "+casas.length+" casas en total.");
    }else if(req.params.construccion === 'edificios'){
        res.json(edificios);
        console.log("Se han agregado "+edificios.length+" casas en total.");
    }else if(req.params.construccion === 'empresas'){
        res.json(empresas);
        console.log("Se han agregado "+empresas.length+" casas en total.");
    }else if(req.params.construccion === 'carreteras'){
        res.json(carreteras);
        console.log("Se han agregado "+carreteras.length+" casas en total.");
    }else if(req.params.construccion === 'parques'){
        res.json(parques);
        console.log("Se han agregado "+parques.length+" casas en total.");
    }else if(req.params.construccion === 'comercios'){
        res.json(comercios);
        console.log("Se han agregado "+comercios.length+" casas en total.");
    }else if(req.params.construccion === 'puentes'){
        res.json(puentes);
        console.log("Se han agregado "+puentes.length+" casas en total.");
    }
    next();
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
collector.post('/agregar/:construccion?', function(req, res) {
    if(req.params.construccion === 'casas'){
        console.log(req.body);
        casas.push(req.body);
        res.send("Se ha agregado una nueva casa, consulta los datos ingresados en /casas o la consola.");
    }else if(req.params.construccion === 'edificios'){
        console.log(req.body);
        edificios.push(req.body);
        res.send("Se ha agregado un nuevo edificio, consulta los datos ingresados en /edificios o la consola.");
    }else if(req.params.construccion === 'empresas'){
        console.log(req.body);
        empresas.push(req.body);
        res.send("Se ha agregado una nueva empresa, consulta los datos ingresados en /empresas o la consola.");
    }else if(req.params.construccion === 'carreteras'){
        console.log(req.body);
        carreteras.push(req.body);
        res.send("Se ha agregado una nueva carretera, consulta los datos ingresados en /carreteras o la consola.");
    }else if(req.params.construccion === 'parques'){
        console.log(req.body);
        parques.push(req.body);
        res.send("Se ha agregado un nuevo parque, consulta los datos ingresados en /parques o la consola.");
    }else if(req.params.construccion === 'comercios'){
        console.log(req.body);
        comercios.push(req.body);
        res.send("Se ha agregado un nuevo comercio, consulta los datos ingresados en /comercios o la consola.");
    }else if(req.params.construccion === 'puentes'){
        console.log(req.body);
        puentes.push(req.body);
        res.send("Se ha agregado un nuevo puente, consulta los datos ingresados en /puentes o la consola.");
    }else if(typeof req.params.construccion === 'undefined'){
        res.send("Recuerda colocar el nombre de la edificación a agregar.");
    };
});

//* PUT *//
collector.put('/editar/:construccion/:id?', function(req, res) {
    if(req.params.construccion === 'casas'){
        if(casas[req.params.id]){
            console.log(req.body);
            casas[req.params.id] = req.body;
            res.send("Se ha editado correctamente la casa en el indice "+req.params.id+", consulta los datos ingresados en /casas o la consola.");
        }else if(typeof req.params.id === 'undefined' || !casas[req.params.id]){
            res.send("Ingresa un índice existente.");
        };
    }else if(req.params.construccion === 'edificios'){
        if(edificios[req.params.id]){
            console.log(req.body);
            edificios[req.params.id] = req.body;
            res.send("Se ha editado correctamente el edificio en el indice "+req.params.id+", consulta los datos ingresados en /edificios o la consola.");
        }else if(typeof req.params.id === 'undefined' || !edificios[req.params.id]){
            res.send("Ingresa un índice existente.");
        };
    }else if(req.params.construccion === 'empresas'){
        if(empresas[req.params.id]){
            console.log(req.body);
            empresas[req.params.id] = req.body;
            res.send("Se ha editado correctamente la empresa en el indice "+req.params.id+", consulta los datos ingresados en /empresas o la consola.");
        }else if(typeof req.params.id === 'undefined' || !empresas[req.params.id]){
            res.send("Ingresa un índice existente.");
        };
    }else if(req.params.construccion === 'carreteras'){
        if(carreteras[req.params.id]){
            console.log(req.body);
            carreteras[req.params.id] = req.body;
            res.send("Se ha editado correctamente la carretera en el indice "+req.params.id+", consulta los datos ingresados en /carreteras o la consola.");
        }else if(typeof req.params.id === 'undefined' || !carreteras[req.params.id]){
            res.send("Ingresa un índice existente.");
        };
    }else if(req.params.construccion === 'parques'){
        if(parques[req.params.id]){
            console.log(req.body);
            parques[req.params.id] = req.body;
            res.send("Se ha editado correctamente el parque en el indice "+req.params.id+", consulta los datos ingresados en /parques o la consola.");
        }else if(typeof req.params.id === 'undefined' || !parques[req.params.id]){
            res.send("Ingresa un índice existente.");
        };
    }else if(req.params.construccion === 'comercios'){
        if(comercios[req.params.id]){
            console.log(req.body);
            comercios[req.params.id] = req.body;
            res.send("Se ha editado correctamente el comercio en el indice "+req.params.id+", consulta los datos ingresados en /comercios o la consola.");
        }else if(typeof req.params.id === 'undefined' || !comercios[req.params.id]){
            res.send("Ingresa un índice existente.");
        };
    }else if(req.params.construccion === 'puentes'){
        if(puentes[req.params.id]){
            console.log(req.body)
            puentes[req.params.id] = req.body
            res.send("Se ha editado correctamente el puente en el indice "+req.params.id+", consulta los datos ingresados en /puentes o la consola.");
        }else if(typeof req.params.id === 'undefined' || !puentes[req.params.id]){
            res.send("Ingresa un índice existente.");
        };
    };
});

//* DELETE *//
collector.delete('/eliminar/:construccion/:id?', function(req, res) {
    if(req.params.construccion === 'casas'){
        if(casas[req.params.id]){
            casas.splice(0, req.params.id);
            res.send("Se ha eliminado correctamente la casa en el indice "+req.params.id+".");
        }else if(typeof req.params.id === 'undefined' || !casas[req.params.id]){
            res.send("Ingresa un índice existente.");
        };
    }else if(req.params.construccion === 'edificios'){
        if(edificios[req.params.id]){
            edificios.splice(0, req.params.id);
            res.send("Se ha eliminado correctamente el edificio en el indice "+req.params.id+".");
        }else if(typeof req.params.id === 'undefined' || !edificios[req.params.id]){
            res.send("Ingresa un índice existente.");
        };
    }else if(req.params.construccion === 'empresas'){
        if(empresas[req.params.id]){
            empresas.splice(0, req.params.id);
            res.send("Se ha eliminado correctamente la empresa en el indice "+req.params.id+".");
        }else if(typeof req.params.id === 'undefined' || !empresas[req.params.id]){
            res.send("Ingresa un índice existente.");
        };
    }else if(req.params.construccion === 'carreteras'){
        if(carreteras[req.params.id]){
            carreteras.splice(0, req.params.id);
            res.send("Se ha eliminado correctamente la carretera en el indice "+req.params.id+".");
        }else if(typeof req.params.id === 'undefined' || !carreteras[req.params.id]){
            res.send("Ingresa un índice existente.");
        };
    }else if(req.params.construccion === 'parques'){
        if(parques[req.params.id]){
            parques.splice(0, req.params.id);
            res.send("Se ha eliminado correctamente el parque en el indice "+req.params.id+".");
        }else if(typeof req.params.id === 'undefined' || !parques[req.params.id]){
            res.send("Ingresa un índice existente.");
        };
    }else if(req.params.construccion === 'comercios'){
        if(comercios[req.params.id]){
            comercios.splice(0, req.params.id);
            res.send("Se ha eliminado correctamente el comercio en el indice "+req.params.id+".");
        }else if(typeof req.params.id === 'undefined' || !comercios[req.params.id]){
            res.send("Ingresa un índice existente.");
        };
    }else if(req.params.construccion === 'puentes'){
        if(puentes[req.params.id]){
            puentes.splice(0, req.params.id);
            res.send("Se ha eliminado correctamente el puente en el indice "+req.params.id+".");
        }else if(typeof req.params.id === 'undefined' || !puentes[req.params.id]){
            res.send("Ingresa un índice existente.")
        };
    };
});

module.exports = collector;
