const express = require('express');
const path = require('path');
const { filter, paginate, getHashMap, response } = require('./helpers');
const fs = require('fs');

const app = express();
let jsonData = true;
let hashMap = new Map();

const directoryPath = path.dirname(__filename);

// load json data
fs.readFile(`${directoryPath}/data.json`, 'utf8', (err, data) => {
    if (err) {
      jsonData = false;
      return;
    }

    try { 
        const json = JSON.parse(data); 
        hashMap = getHashMap(json.data.toplists);
    }
    catch (error) { 
        jsonData = false 
        console.log(error); 
    }
});

// Ruta de paginación para obtener una porción del contenido del JSON
app.get('/:key/:page', (req, res) => {
  const page = parseInt(req.params.page, 1) || 1;
  const key = req.params.key;

    if (!jsonData) {
        return response(res, 'Error al leer el archivo JSON', 500); 
    }
    
    try {
        const filteredData = filter(key, hashMap);
        if (!filteredData) {
            return response(res, 'key not found', 500); 
        }

        const orderedData = filteredData.sort((a, b) => a['position'] - b['position']);
        const paginatedData = paginate(orderedData, page, 3);

        response(res, JSON.stringify(paginatedData));
    } catch (error) {
        response(res, 'Error al procesar el contenido JSON', 500);
    }

});

const port =3004
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
