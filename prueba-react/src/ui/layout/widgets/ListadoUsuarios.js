import React, {Component, Fragment} from "react"
import Usuario from './Usuario'

class ListadoUsuarios extends Component {
    constructor(){
        super()
    }
    render(){
        let { usuarios } = this.props
        return(
            <Fragment>
                <ul>
                    {usuarios.length}
                </ul>
            </Fragment>
        )
    }

}

export default ListadoUsuarios;