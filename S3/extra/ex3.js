const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const myDiv$$ = document.querySelector('[data-function="printHere"]');

const myUl$$ = document.createElement("ul");

for (const car of cars) {
    
    const myLi$$ = document.createElement("li");
    
    myLi$$.textContent = car;

    myUl$$.appendChild(myLi$$);
}

myDiv$$.appendChild(myUl$$);