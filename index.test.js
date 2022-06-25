const app = require("./index");

test('Inicializar o data base.', () => {
    const user = app.init()
    expect(user).toEqual({nome: "vinicius", idade: "22", altura: "1,87"})
})