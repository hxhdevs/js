import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

//Conectar la base de datos
db.authenticate()
    .then(()=>console.log('Base de datos conectada'))
    .catch(error => console.log(error));
//devuelve la respuesta de conexion en la consola


//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine','pug');

//Obtener el año actual 
app.use((req,res,next)=>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de viajes";
    next();
})

//Agregar body
app.use(express.urlencoded({extended:true})); 

// Definir la carpeta publica 
app.use(express.static('public'));

//Agregar router
app.use('/', router);

app.listen(port, () =>{ //con listen escuchamos el llamado a express
    console.log(`El servidor esta funcionado en el puerto ${port}`);
})