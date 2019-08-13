//acá poner el component contador
//{connect} de react-redux. Es un component de react, es un componente superior (HOC)





//export default connect()(NuestroComponente) -> patrón proxy. No modifica el componente pero le pasa cosas
//conntect recibe dos parámetros: dos funciones. La primera mapea el store a props: mapStateToProps.
// ----> Esta función conecta al store. Recibe una copia entera del store, como objeto.
/* ----> let mapStateProps = store => {
        return {
            acá van a ir los props a nuestro componente
            contador: store.contador
        }
}*/