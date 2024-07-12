import express from 'express';
import router from './routes/index.js';
// const express = require('express');

const app = express();

//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine','pug');

//Agregar router
app.use('/', router);

app.listen(port, () =>{ //con listen escuchamos el llamado a express
    console.log(`El servidor esta funcionado en el puerto ${port}`);
})