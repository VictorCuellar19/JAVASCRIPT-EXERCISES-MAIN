function handleFocus(event){
    console.log(event.target.value);
}

const myFocus$$ = document.querySelectorAll("imput");

myFocus$$.addEventListener("focus", handleFocus);
