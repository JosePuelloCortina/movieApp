import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllRutas } from "./actions";
import { Link } from "react-router-dom";


export function Rutas(props){
    const[state, setState] = useState("")
    const[search, setSearch] = useState("")

    useEffect(()=>{
        props.getAllRutas()
        .then(r => {
            setState(props.rutas)
        })
    }, [])

    function handleChange(event){
        setSearch(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setState( state.filter( elem => elem.title.includes(search)))
    }

    function viewAllRutas(){
        setState(props.rutas)
    }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <input name="title" placeholder="ingresar titulo" onChange={handleChange}/>
                <button type="submit">Buscar</button>
            </form>
            <button className="btn2" onClick={() => viewAllRutas()}>VER TODOS </button>
            <h2>Movies</h2>
            <div className="row">
                {!state ? <p> Esperando...</p> : 
                state.map(ruta => {
                    return(
                    <div className="column"> 
                        <li key={ruta.id}>
                             Movie : {ruta.title} <br/>
                             Año: {ruta.year}
                        
                        </li>
                        
                        <Link to={`/rutas/${ruta.id}`}>Detalle</Link>
                    </div>
                    )
                })
                }
           </div>
        </div>
    )
}

export function mapStateToProps(state){
    return{
        rutas: state.rutas
    }
}

export function mapDispatchToProps(dispatch){
    return{
        getAllRutas: ()=> dispatch(getAllRutas())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Rutas)