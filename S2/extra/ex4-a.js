//Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
//posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

//Haz varios ejemplos y compruebalos.

function findArrayIndex(array, text) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        if (element === text){
         return(index)   
        }   
    }
}


 const prueba1 = findArrayIndex(['Caraol', 'Mozquito', 'Zalamanda', 'Alojote'] , "Mozquito")
    console.log(prueba1);

 const prueba2 = findArrayIndex(['Caraol', 'Mozquito', 'Zalamanda', 'Alojote'] , "Caraol")
    console.log(prueba2);
