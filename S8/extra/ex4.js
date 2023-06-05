const planets$$ = document.querySelector('[data-function="planets"]');
const search$$ = document.querySelector('[data-function="search"]');
const characters$$ = document.querySelector('[data-function="characters"]');
const baseUrl = "http://localhost:3000/";

createApp();
function createApp() {
    fetch("http://localhost:3000/planets").then(res => res.json()).then(planets => {
        for (const planet of planets) {
            const planet$$ = document.createElement('div');

            planet$$.innerHTML = `
                <img height="200" src="${planet.image}"/>
                <h2>${planet.name}</h2>
            `

            planet$$.addEventListener('click', () => getCharactersFilteredByPlanet(planet.id));

            planets$$.appendChild(planet$$)
        }
    })
}

let actualCharacters = [];
function getCharactersFilteredByPlanet(idPlanet) {

    fetch(baseUrl + "characters?idPlanet=" + idPlanet).then(res => res.json()).then(characters => {
        actualCharacters = characters;
        createSearch()
        printCharacters(characters)
    })
}

function createSearch() {
    search$$.innerHTML = '';
    const input$$ = document.createElement("input");
    const button$$ = document.createElement("button");
    button$$.textContent = "Buscar";


    button$$.addEventListener("click", () => filterCharacters(input$$.value))
    search$$.appendChild(input$$)
    search$$.appendChild(button$$)
}

function filterCharacters(searchValue) {
    const filteredCharacters = actualCharacters.filter((actualCharacter) => actualCharacter.name.toLowerCase().includes(searchValue.toLowerCase()))
    printCharacters(filteredCharacters);
}

function printCharacters(characters) {
    characters$$.innerHTML = '';
    for (const character of characters) {
        const character$$ = document.createElement('div');

        character$$.innerHTML = `
            <img height="200" src="${character.avatar}"/>
            <h2>${character.name}</h2>
        `

        character$$.addEventListener("click", () => printCharacterDescription(character$$, character.description))


        characters$$.appendChild(character$$)
    }
}

function printCharacterDescription(div$$, description){
    const oldP$$ = div$$.querySelector("p");
     if(oldP$$){
        oldP$$.remove();
     } else{
        const p$$ = document.createElement("p");
        p$$.textContent = description;
        div$$.appendChild(p$$);
     }
}