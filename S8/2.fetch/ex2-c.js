const baseUrl = 'https://api.nationalize.io?name=';



const searching = () => {

const myInput$$ = document.querySelector("input");

fetch('https://api.nationalize.io?name=' + "" + myInput$$.value)

.then((FirstResp) => { return FirstResp.json()})

.then((SecondResp) => { pGenerator(SecondResp)
})
}

const pGenerator = (SecondResp) =>{
    
    let myText = `El nombre ${SecondResp.name} tiene`;

    for (const country of SecondResp.country) {
        const myPercentage = Math.floor(country.probability * 100)
        myText += ` un ${myPercentage} porciento de ser de ${country.country_id},`;
    }
    
    const myDiv$$ = document.createElement("div");
    const myP$$ = document.createElement("p");
    const myRemoveButton$$ = document.createElement("button");
    
    myP$$.textContent = myText;
    myRemoveButton$$.textContent = "X";
    
    myDiv$$.appendChild(myP$$);
    myDiv$$.appendChild(myRemoveButton$$);
    document.body.appendChild(myDiv$$);

    

    myRemoveButton$$.addEventListener("click", () => { removeDiv (myDiv$$) });
    const removeDiv = (divEntero$$) => {
        divEntero$$.remove();}
    
    }
    
    const myRemoveButton$$ = document.querySelector("button");
    const removeDiv = (divEntero$$) => {
        divEntero$$.remove();}


const myButton$$ = document.querySelector("button")
myButton$$.addEventListener("click", searching);



