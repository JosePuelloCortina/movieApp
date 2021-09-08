export const GET_ALL_Movies = 'GET_ALL_Movies'
export const GET_ALL_Rutas = 'GET_ALL_Rutas'
export const POST_MOVIE = 'POST_MOVIE'
export const GET_POST_RUTAS = 'GET_POST_RUTAS'

const BASE_URL = 'http://localhost:3001'

export function getAllMovies(){
    return function(dispatch){
        return fetch(`${BASE_URL}/movie/all`)
        .then(res => res.json())
        .then(data => dispatch({type: GET_ALL_Movies, payload: data}))
        .catch(err => console.log(err))
    } 
}

export function arregloRutas(id, rutas){
    var ru = {rutas: rutas}
    return function(dispatch){
        return fetch(`${BASE_URL}/rutas/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ru)
        })
        .then(res => res.json())
        .then(data => dispatch({type: GET_POST_RUTAS, payload: data}))
        .catch(err => console.log(err))
    }
}

export function getPostRutas(id){
    return function(dispatch){
        return fetch(`${BASE_URL}/rutas/${id}`)
        .then(res => res.json())
        .then(data => dispatch({type: GET_POST_RUTAS, payload: data}))
        .catch(err => console.log(err))
    }
}

export function getAllRutas(){
    return function(dispatch){
        return fetch(`${BASE_URL}/rutas`)
        .then(res => res.json())
        .then(data => dispatch({type: GET_ALL_Rutas, payload: data}))
        .catch(err => console.log(err))
    }
}

export function crearMovie(ruta){
    return function(dispatch){
        return fetch(`${BASE_URL}/rutas/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(ruta)            
        })
        .then(res => res.json())
        .then(data => dispatch({type: POST_MOVIE, payload: data}))
        .catch(err => console.log(err))
    }
}