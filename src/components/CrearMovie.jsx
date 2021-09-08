import { useState } from "react";
import { connect } from "react-redux";
import { crearMovie } from "./actions/index";

export function CrearMovie(props) {
    const[state, setState] = useState({
        title: "",
        year: "",
        genre: "",
        director: "",
        actors: "",
        poster: "",
    })


    function handleChange(event){
        setState({
            name:  event.target.name
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        props.crearMovie(state)
        .then(()=>{
            setState(
                {title: ""},
                {year: ""},
                {genre: ""},
                {director: ""},
                {actors: ""},
                {poster: ""},
            )
            alert("Se creo la movie correctamente!!!")
        })
    }

    return (
        <>
            <form onSubmit = {handleSubmit}>
                <input name= "title" placeholder="ingresar title" onChange={handleChange}/> <br/>
                <input name= "year" placeholder="ingresar year" onChange={handleChange}/> <br/>
                <input name= "genre" placeholder="ingresar genre" onChange={handleChange}/> <br/>
                <input name= "director" placeholder="ingresar director" onChange={handleChange}/> <br/>
                <input name= "actors" placeholder="ingresar actors" onChange={handleChange}/> <br/>
                <input name= "poster" placeholder="ingresar poster" onChange={handleChange}/> <br/>
                <button type="submit">Crear</button>
            </form>

        </>

    )
}
export function mapStateToProps(state) {
    return {
        rutas: state.rutas
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        crearMovie: (ruta) => dispatch(crearMovie(ruta)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CrearMovie)