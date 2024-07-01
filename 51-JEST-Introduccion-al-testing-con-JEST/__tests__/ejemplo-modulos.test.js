import { suma } from "../js/funciones";

describe('Suma de 2 numeros', () =>{
    test('Suma de 10 y 20', () => {
      expect(suma(10,20)).toBe(30);
    })
})

// Node no tiene soporte al 100% para modules 
// para esto se sugiere Babel
// se instala con 
// npm i --save-dev @babel/preset-env