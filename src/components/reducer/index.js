import { GET_ALL_Movies, GET_ALL_Rutas, POST_MOVIE, GET_POST_RUTAS } from '../actions/index'

const inicialState ={
    movies : [],
    rutas : []
}

export default function rootReducer(state = inicialState, action){
    switch(action.type){
        case GET_ALL_Movies: 
            return {
                ...state,
                movies: action.payload
            }
        case GET_ALL_Rutas:
            return{
                ...state, 
                rutas: action.payload
            }
        case POST_MOVIE: 
            return{
                ...state,
                rutas: [...state.rutas, action.payload]
            }
        case GET_POST_RUTAS:
            return {
                ...state,
                rutas: action.payload
            }

        default: return state
    } 
}