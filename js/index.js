
function createMarkup(pokes) {
  return pokes.map(poke => `
    <figure>
      <img src="images/${poke.id}.png" alt="${poke.name} picture">
      <figcaption>${poke.name}</figcaption>
    </figure>
  `).join('')
}

function byType(type) {
  return function filterByType(pokemon) {
    return pokemon.type.toLowerCase().includes(type)
  }
}

const pokesContainer = document.querySelector('.pokemons')
const pokes = pokeDB.filter(byType('water'))

pokesContainer.innerHTML = createMarkup(pokes)