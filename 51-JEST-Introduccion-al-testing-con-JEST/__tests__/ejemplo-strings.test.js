const password = "123456";

describe('Describimos que hace el test por ejemplo: VALIDAR PASSWORD',() =>{
    test('El password debe tener 6 caracteres', () => {
        expect(password).toHaveLength(6);
    });

    test('El password no debe estar vacio', () => {
        expect(password).not.toHaveLength(0);
    })
})