const CreateUser = {
    generete({ nome, idade, altura }) {
        const user = {
            nome,
            idade,
            altura
        }


        return user;
    },
}

module.exports = CreateUser;