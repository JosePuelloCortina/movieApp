const server = require("express").Router();
const {Movie} = require('../db');
const axios = require('axios');
const {API} = process.env;
var Sequelize = require("sequelize");
const { routes } = require("../app");

//obtener datos de la db 
server.get('/', (req, res, next)=>{
    Movie.findAll()
    .then(movie =>{
        res.json(movie)
    }).catch(next)
});

server.post('/', (req, res, next) =>{
    const {title, year, genre, director, actors, poster} = req.body
    Movie.create({
        title: title,
        year: year,
        genre: genre,
        director: director,
        actors: actors,
        poster: poster
    }).then(movie=>{
        res.json(movie)
        console.log('POST 1')
    }).catch(next)
})

//post2 
// server.post('/rutas', (req, res) => {
//     console.log('POST');
//     console.log(req.body)

//     var movie = new Movie({
//         title: req.body.title,
//         year: req.body.year,
//         genre: req.body.genre,
//         director: req.body.director,
//         actors: req.body.actors,
//         poster: req.body.poster  
//     });

//     movie.save(function(err){
//         if(!err){
//             console.log('CREATED!!'+'POST 2');
//         }else{
//             console.log('ERROR: ' + err);
//         }
//     });
//     res.send(movie);

// });

//put
server.put('/:id', (req, res, next)=>{
    const { id } = req.params;
    const { title, year, genre, director, actors, poster} = req.body;
    if(!title || !year || !genre || !director || !actors || !poster ){
        return res.status(422).json({error: "No se recibieron los parámetros necesarios para modificar el Movie"});
    }
    Movie.findByPk(id)
    .then((movie) =>{
     res.send(movie.update({
        title: title,
        year: year,
        genre: genre,
        director: director,
        actors: actors,
        poster: poster
    }))
    }).catch(next)        
});

// delete quedo pendiente
// server.delete('/:id', (req, res, next)=>{
//     const { id } = req.params;
//     Movie.findByPk(id)
//     .then((movie) =>{
//     res.json(movie)
//     }).catch(next)
// })

//por id 
server.get('/:id', (req, res, next) =>{
    const {id} = req.params;
    Movie.findByPk(id)
    .then((movie) =>{
     res.json(movie)
    }).catch(next)  
})

//por name esta pendiente
server.get('/:name', (req, res, next) =>{
    const {name} = req.body;
    Movie.findByPk(name)
    .then((movie) =>{
     res.json(movie)
    }).catch(next)  
})
module.exports = server;