
function convertPokemonToHtmlLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                    </ol>
                    <img src=${pokemon.image}
                    alt=${pokemon.name}>
            </div>
        </li>
    `
}

const pokemonListOl = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonListOl.innerHTML += pokemons.map(convertPokemonToHtmlLi).join('');
    
}).catch(error => console.error(error))
