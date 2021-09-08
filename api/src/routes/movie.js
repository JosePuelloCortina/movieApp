const server = require('express').Router();
const {Movie} = require('../db');
const axios = require('axios');
const {API} = process.env;

server.get('/all', (req, res, next) =>{
    Movie.findAll()
    .then(movies => {
        movies.length > 0 ? res.json(movies)
        : 
        axios
        .get(`${API}/movies`)
        .then(movies =>{
            return Promise.all(
                movies.data.map(movie =>{
                    return Movie.create({
                        title: movie.title,
                        year: movie.year,
                        genre: movie.genre,
                        director: movie.director,
                        actors: movie.actors,
                        poster: movie.poster                        
                    })
                })
            ).then(respuesta=>{
                res.json(respuesta)
            })
        })
    }).catch(next)
})

module.exports = server;
