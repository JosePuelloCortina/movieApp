import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllMovies, getAllRutas } from "./actions";
import { Link } from "react-router-dom";


export function Home(props){    
    useEffect(()=>{
        props.getAllMovies()
        .then(()=>{
            props.getAllRutas()  
        })
    }, [props])
    return(
        <div className="App-header">
            <h5>Movies</h5>
            <Link to="/rutas">Ingresar</Link>
        </div>
    )
}

export function mapDispatchToProps(dispatch){
    return{
        getAllMovies: ()=>dispatch(getAllMovies()),
        getAllRutas: () =>dispatch(getAllRutas())
    }
}

export default connect(
    null,
    mapDispatchToProps,
)(Home)