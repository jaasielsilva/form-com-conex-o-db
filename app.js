//carregando modulos
const express = require ('express')
const handlebars = require ('express-handlebars')
const bodyparser = require ('body-parser')
const Post = require ('./models/Posts')
const path = require('path')
const app = express()

//Configurações

//bodyparser
    app.use(bodyparser.urlencoded({extended: false}))
    app.use(bodyparser.json())
//handlebars
    app.engine('handlebars' ,handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars');

//public "arquivos estaticos"
    app.use(express.static(path.join(__dirname, "public")))
//Rotas
    app.get("/",(req,res)=>{
        res.render('formulario')
    })
    app.get("/home",(req,res)=>{
        res.render('_navbar')
    })
    app.post("/add",(req,res)=>{
        Post.create({
        nome: req.body.nome,
        email: req.body.email,
        celular: req.body.celular,
        Endereço: req.body.Endereço,
        Cargo:req.body.Cargo
        }).then(()=>{
            res.redirect('/cad')
        }).catch((erro)=>{
            res.send("houve um erro: " + erro)
        })
    })
//outros
const port =8081
app.listen(port,() => {
    console.log("Servidor Online na Porta:8081!")
})