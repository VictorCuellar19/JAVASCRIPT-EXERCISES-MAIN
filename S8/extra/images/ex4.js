




// Obtener los planetas y mostrarlos en la galería
fetch(`${baseUrl}/planets`)
  .then(response => response.json())
  .then(planets => {
    planets.forEach(planet => {
      const planetElement = document.createElement('div');
      planetElement.innerHTML = `
        <img src="${planet.image}" alt="${planet.name}" />
        <h3>${planet.name}</h3>
      `;
      planetElement.addEventListener('click', () => {
        showCharacters(planet.id);
      });
      myPlanets.appendChild(planetElement);
    });
  });

// Mostrar los personajes asociados a un planeta
function showCharacters(planetId) {
  myCharacters.innerHTML = '';
  fetch(`${baseUrl}/characters?idPlanet=${planetId}`)
    .then(response => response.json())
    .then(characters => {
      characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.innerHTML = `
          <img src="${character.avatar}" alt="${character.name}" />
          <h4>${character.name}</h4>
          <p class="description">${character.description}</p>
        `;
        characterElement.addEventListener('click', () => {
          toggleDescription(characterElement);
        });
        myCharacters.appendChild(characterElement);
      });
    });
}

// Filtrar personajes por nombre
mySearch.addEventListener('input', () => {
  const searchTerm = mySearch.value.toLowerCase();
  const characterElements = myCharacters.getElementsByClassName('character');
  Array.from(characterElements).forEach(element => {
    const characterName = element.querySelector('h4').textContent.toLowerCase();
    if (characterName.includes(searchTerm)) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
});

// Alternar visibilidad de la descripción
function toggleDescription(characterElement) {
  const descriptionElement = characterElement.querySelector('.description');
  descriptionElement.classList.toggle('show');
}


