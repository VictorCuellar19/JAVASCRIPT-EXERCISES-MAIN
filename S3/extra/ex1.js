const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const myUl$$ = document.createElement("ul");

for (const country of countries) {

const myLi$$ = document.createElement("li");  
   
    myLi$$.textcontent = country;
}

document.body.appendChild(myUl$$);