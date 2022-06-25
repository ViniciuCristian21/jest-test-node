const createUser = require("./createUser");

test('Criar um Usuario', () => {
    const user = createUser.generete({nome:"Joãozinho", idade:"18", altura:"1,87"})
    console.log(user)
    expect(user).toEqual({nome:"Joãozinho", idade:"18", altura:"1,87"})
})