/**
 * React6 se separa en : react y react-dom
 * 
 * 
 * 1 - Tiene que siempre estar la variable React en scope
 * 2 - Un componente de React es una función
 * 3 - Todos los componentes de react tienen que retornar algo : React.component, JSX
 */

 //ES6 import React from "react"
 //CommonJS 
 //-> const React = require("react") 

 import React from "react" 
 import ReactDOM from "react-dom"

 let App = () => <p>Aló</p>

 ReactDOM.render(
     <App>
     </App>,
    document.getElementById('root')
 )