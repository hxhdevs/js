import express from 'express';
// const express = require('express');

const app = express();

//Definir puerto
const port = process.env.PORT || 4000;

app.get('/',(req, res)=>{
    res.send('Inicio');
})
app.get('/nosotros',(req, res)=>{
    res.send('Nosotros');
})
app.get('/contacto',(req, res)=>{
    res.send('Contacto');
})

app.listen(port, () =>{ //con listen escuchamos el llamado a express
    console.log(`El servidor esta funcionado en el puerto ${port}`);
})