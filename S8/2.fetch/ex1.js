fetch('https://api.agify.io?name=michael')
.then((respuesta1) => respuesta1.json())
.then((respuestaDatos) => {
    console.log(respuestaDatos);
})