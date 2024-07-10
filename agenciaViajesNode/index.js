const express = require('express');

const app = express();

//Definir puerto
const port = process.env.PORT || 4000;

app.listen(port, () =>{ //con listen escuchamos el llamado a express
    console.log(`El servidor esta funcionado en el puerto ${port}`);
})