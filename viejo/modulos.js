//funciones autoinvocadas (IFEE)
//Patrón de diseño Módulo
//esta función es inalcanzable (como funciones fantasmas)
(function(){
    function int(){


        //NAMESPACE
        window.int = int
    }
})()//estos últimos paréntesis corresponden a los parámetros de la primera función;

//Node.js : Entorno de desarrollo que puede correr varios lenguajes