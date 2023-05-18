//Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array.
//La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro.
//Retorna el array resultante.


function swap(array, indexArray1, indexArray2){
    
     const firstElement = array[indexArray1]
     
     array[indexArray1] = array[indexArray2]

     array[indexArray2] = firstElement

      return (array);

}

const newArray = swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'] , 0, 3)
console.log(newArray);

const newArray2 = swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'] , 2, 1)
console.log(newArray2); 

const newArray3 = swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'] , 2, 3)
console.log(newArray3);
