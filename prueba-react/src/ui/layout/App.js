import React, {Component, Fragment} from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Formulario from "../../widgets/Formulario"

class App extends Component {
    constructor(){
        super()
        this.state = {
            links: ["perfil", "portfolio", "contacto"],
            contador: 0,
            mostrar: true
        }
        this.aumentarContador = this.aumentarContador.bind(this)
        this.ocultarForm = this.ocultarForm.bind(this)
        this.handleChangeForm = this.handleChangeForm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeForm(e) {
        e.preventDefault()
        console.log(e)
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(e)

    }

    aumentarContador() {
        this.setState({
            contador: this.state.contador + 1
        })
        
    }
    ocultarForm() {
        this.setState({
            mostrar: !this.state.mostrar
        })
    }
    render() {
         let { links, mostrar } = this.state
        return(
            <Fragment>
                <Header links={links}/>
                {mostrar ? 
                    <Formulario
                        handleChangeForm={this.handleChangeForm}
                        handleSubmit={this.handleSubmit}
                     /> 
                : null}
                <button onClick={this.ocultarForm}>Ocultar</button>
                <Main />
                <Footer />
            </Fragment>
        )
    }
}

export default App