import React, {Component, Fragment} from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Formulario from "./widgets/Formulario"

class App extends Component {
    constructor(){
        super()
        this.state = {
            links: ["perfil", "portfolio", "contacto"],
            contador: 0,
            mostrar: true,
            usuario: '',
            usuarios: []
        }
  
        this.ocultarForm = this.ocultarForm.bind(this)
        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeInput(e) {
        e.preventDefault()
        console.log(e.target.value)
        this.setState({usuario: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        /* Forma antigua
        let copia = this.state.usuarios.slice(0)
        copia.push = this.state.usuarios */
        let newUser = this.state.usuario
        this.setState(
            {
                usuarios: [...this.state.usuarios,newUser],
                usuario: ''
            })

    }

    ocultarForm() {
        this.setState({
            mostrar: !this.state.mostrar
        })
    }

    render() {
         let { links, mostrar, usuario, usuarios } = this.state
        console.log(usuarios)
        return(
            <Fragment>
                <Header links={links}/>
                {mostrar ? 
                    <Formulario
                        handleChangeInput={this.handleChangeInput}
                        handleSubmit={this.handleSubmit}
                        usuario={usuario}
                        usuarios={usuarios}
                     /> 
                : null}
                <button onClick={this.ocultarForm}>{mostrar ? 'Ocultar' : 'Mostrar'}</button>
                <Main />
                <Footer />
            </Fragment>
        )
    }
}

export default App