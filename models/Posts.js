const db = require ('./db')

const Post = db.sequelize.define('pessoas',{
    nome:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.TEXT,
    },
    Celular:{
        type: db.Sequelize.NUMBER,
    },
    Endereço:{
        type: db.Sequelize.TEXT,
    },
    Cargo:{
        type: db.Sequelize.TEXT,
    }
})
module.exports = Post
//Apos executado o codigo abaixo comente!
//Post.sync({force: true})