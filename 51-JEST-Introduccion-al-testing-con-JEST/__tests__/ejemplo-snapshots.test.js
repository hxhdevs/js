const cliente = {
    nombre: 'Elih Freecs',
    balance:500,
    tipo: 'Premium'
};

describe('Testing al cliente',() => {
    test('Es Elih? ', () => {
      expect(cliente).toMatchSnapshot();
    });
});

// podemos actualizar el snapshot desde terminal confirm
// npm t -- -u 

//se podria modificar desde el mismo snapshot pero lo recomendable es hacerlo desde JEST en terminal