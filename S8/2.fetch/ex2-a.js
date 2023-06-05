//Dado el siguiente javascript y html. 
//Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, 
//pasando como parametro de la api, el valor del input.

const baseUrl = 'https://api.nationalize.io?name=';

const myInput$$ = document.querySelector("input");

const searching = () => {

fetch('https://api.nationalize.io?name='+ "" + myInput$$.value)

.then((FirstResp) => { return FirstResp.json();})

.then((SecondResp) => { console.log(SecondResp);
})
}

const myButton$$ = document.querySelector("button")

myButton$$.addEventListener("click", searching);


