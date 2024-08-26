
const pokeApi = {}

function convertPokemonDetailedToPokemon(pokemonDetailed) {
    const pokemon = new Pokemon()
    pokemon.name = pokemonDetailed.name;
    pokemon.order = pokemonDetailed.order;

    const types = pokemonDetailed.types.map((typeSlot) => typeSlot.type.name);
    const [type0] = types;

    pokemon.types = types;
    pokemon.type = type0;
    pokemon.image = pokemonDetailed.sprites.other.dream_world.front_default;

    return pokemon;
}

pokeApi.getPokemonDetailed = (pokemon) => {
    return fetch(pokemon.url)
    .then((pokemonDetailed) => pokemonDetailed.json())
    .then((pokemonDetailed) => convertPokemonDetailedToPokemon(pokemonDetailed));
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then(response => response.json())
        .then(jsonBody => jsonBody.results)
        .then(pokemons => pokemons.map(pokemon => pokeApi.getPokemonDetailed(pokemon)))
        .then(detailsRequests => Promise.all(detailsRequests))
        .then(pokemons => pokemons)
}