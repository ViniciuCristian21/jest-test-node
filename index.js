const createDatabase = require("./database.js")
const app = {
    init() {
        return createDatabase.start()
    },   
}

module.exports = app;