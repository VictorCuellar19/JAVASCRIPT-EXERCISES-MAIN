const baseUrl = 'https://api.nationalize.io?name=';



const searching = () => {

const myInput$$ = document.querySelector("input");

fetch('https://api.nationalize.io?name=' + "" + myInput$$.value)

.then((FirstResp) => { return FirstResp.json()})

.then((SecondResp) => { pGenerator(SecondResp)
})
}

const pGenerator = (SecondResp) =>{
    const myP$$ = document.createElement("p");
    let myText = `El nombre ${SecondResp.name} tiene`;

    for (const country of SecondResp.country) {
        const myPercentage = Math.floor(country.probability * 100)
        myText += ` un ${myPercentage} porciento de ser de ${country.country_id},`;
    }
    
    myP$$.textContent = myText;

    document.body.appendChild(myP$$);
}

const myButton$$ = document.querySelector("button")

myButton$$.addEventListener("click", searching);



