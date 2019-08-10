let promesa = new Promise((res, err)=>{
    //Eventualmente esta funcion va a resolver el valor que estamos prometiendo
    //constructor o resolver. Ya viene con dos variables, res - err.
    // try { está implícito, no hace falta escribirlo. 
        res(1) //los parámetros que pongamos en estas funciones serán los valores. 
    //}
    //catch() {
        err()
    //}
})






/**
 * todas las promesas tienen status
 * -> pending
 * -> resolved
 * -> rejected
 * -> settled. La promesa fue finalizada
 * 
 * valores
 * -> any // Le podemos asignar cualquier valor
 * 
 * Una vez que una promesa cambia de estado y se le asigna el valor, lo cual pasa al mismo tiempo,
 * no puedo volver a cambiar ninguna de las dos cosas. 
 * 
 * Una vez que la promesa está en estado settled:
 * Promise.then(callback Function) => se va a ejecutar cuando la promesa cambia su estado a resolved
 * 
 * Promise.thend(callback Function) => se va a ejecutar cuando la promesa cambia su estado a rejected
 * 
 * 
 */

/* promesa.then(()=>{})
promesa.catch(()=>{}) */

promesa
.then((respuesta)=>{
    //lo que se ejecute acá dentro, va a ser tomado como una promesa, por lo que también necesita otro .then()
    return respuesta + 1
})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.err(err)
})

//Fetch = XHR + Promesas
//Fetch es un pedido por HTTP que implementa promesas en su interior,
// más las  APIs de Request, Response, Header, Body, Stream.
// Por defecto solo toma una URL y hace un pedido por HTTP por GET
// REST = Representational State Transfer. 
//  
let url = "https://jsonplaceholder.typicode.com"

/**
 * La ejecución de un fetch siempre me devuelve una promesa.
 * fetch()          => Promise
 * Promise          => Promise.then().catch()
 * fetch()          => Response
 * Response         => Response.metodo()
 * .fn(()=>{Promise})          =>       .fn(() => { return Promise })
 * .fn(() => { Promise, Promise })  => .fn(()=> {return Promise.all[Promise, Promise]})
 * 
 * métodos: text(), json(), blob()(archivo no de texto), arrayBuffer()
*/

//1er promesa
fetch(`${url}/users`)
.then((res)=>{
    //2da promesa
    return res.json()
})
.then((res)=>{
    let id = res[8].id
    return fetch(`${url}/posts?userId=${id}`)
})
.then((res) => {return res.json()})

.then( res => console.table(res))

.catch((error)=>{
    console.log(error)
})