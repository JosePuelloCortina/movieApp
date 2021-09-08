import { useEffect, useState } from "react"
import { getPostRutas, arregloRutas } from "./actions/index"
import { connect } from "react-redux"
import Select from "react-select"

export function DetalleRutas(props){
    const options = props.rutas.map(r => ({value: r.id, label: r.title}))

    const [rutas, setRutas] = useState([])

    useEffect(() => {
        const id = props.match.params.id
        props.getPostRutas(id)

    }, [])
    
    function handleChange(selectedOption){
        setRutas(selectedOption.map(so => so.value))
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.arregloRutas(props.rutas.id, rutas)
        .then(()=>{
            //alert("Categorias asociados con éxito")
            
        })
    }

    return (
        <div>
            {!props.postRutas ? <p>Cargando...</p>: 
                <>

                <div className="contenido">
                    <p>Titulo : {props.rutas.title}</p>
                    <p>Year : {props.rutas.year}</p>

                </div></>}
            <Select
                isMulti
                classNamePrefix="select"
                isClearable={true}
                isDisabled={false}
                defaultValue={options[0]}
                options={options}
                onChange={handleChange}
            >
            </Select>
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export function mapStateToProps(state) {
    return {
        rutas: state.rutas,
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        getPostRutas: (id) => dispatch(getPostRutas(id)),
        arregloRutas: (id, rutes) => dispatch(arregloRutas(id,rutes))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DetalleRutas)