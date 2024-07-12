import express from 'express';

const router = express.Router();

router.get('/',(req, res)=>{// req - lo que enviamos : res - lo que express nos responde
    res.render('Inicio');
})
router.get('/nosotros',(req, res)=>{
    
    const viajes  = 'Viajes a Japon';
    
    res.render('nosotros',{
        viajes
        
    });
})
router.get('/contacto',(req, res)=>{
    res.send('Contacto');
})

export default router;