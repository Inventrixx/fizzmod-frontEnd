/**
 * El reducer recibe dos parámetros, el estado inicial y una acción
 */


let estadoInicial = {
    contador: 0
}



let reducer = (estado=estadoInicial,action) => {
    switch(action){
        case "CONTADOR_AUMENTAR":
            return {...estado, contador: estado.contador + 1}
        case "CONTADOR_DISMINUIR":
            return {...estado, contador: estado.contador - 1}
        case "CONTADOR_RESETEAR":
            return {...estado, contador: 0} 
        default: 
            return estado
    }
    
}

export default reducer