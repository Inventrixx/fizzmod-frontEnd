import React, {Component, Fragment} from "react"

class Formulario extends Component {
    constructor(){
        super()
    }

    render(){
        let {handleChangeForm, handleSubmit} = this.props
        return(
            <Fragment>
                <form onSubmit={handleChangeForm}>
                    <input onChange={handleSubmit} type="text" placeholder="Usuario" />
                </form>
                <button>Guardar</button>
            </Fragment>
        )
    }

}

export default Formulario;