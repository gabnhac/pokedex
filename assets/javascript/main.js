const pokemonListOl = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('load-more-btn');

const maxRecords = 11;
const limit = 5;
let offset = 0;
let newLimit = 0;

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    
    const qtdRecordsNextPage = offset + limit;
    debugger
    if (qtdRecordsNextPage >= maxRecords) {
        newLimit = maxRecords - offset;
        loadPokemonItems(offset, newLimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton);
    }else{
        loadPokemonItems(offset, limit)
    }
})

function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonListOl.innerHTML += pokemons.map((pokemon) => (`
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>
    
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src=${pokemon.image}
                    alt=${pokemon.name}>
                </div>
            </li>
        `)).join('');

    }).catch(error => console.error(error))
}

loadPokemonItems(offset, limit);


