import React, {Component, Fragment} from "react"
import ListadoUsuarios from "./ListadoUsuarios"
class Formulario extends Component {
    constructor(){
        super()
    }

    render(){
        let {handleChangeInput, handleSubmit, usuario, usuarios} = this.props
        return(
            <Fragment>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChangeInput} type="text" placeholder="Usuario" value={usuario} />
                <button>Guardar</button>
                </form>
            <ListadoUsuarios usuarios={usuarios} />
            </Fragment>
        )
    }

}

export default Formulario;