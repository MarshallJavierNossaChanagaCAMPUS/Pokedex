let lista = document.querySelector("#list");    
let url = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
    fetch(url+i)
        .then((response) => response.json())
        .then(data => showPokemon(data))
}

function showPokemon(data){

    let types = data.types.map(type=>`<p class="${type.type.name} tipo">${type.type.name.toUpperCase()}</p>`);
    types = types.join("");
    
    let pokeId = data.id.toString();
    let pokeName = data.name.toUpperCase();

    if (pokeId.length === 1) {
        pokeId = "00" + pokeId
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId
    }

    let div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML= `
    <div class="pokemon">
        <p class="pokemon-id-back">#${pokeId}</p>
        <div class="pokemon-image">
            <img src="${data.sprites.front_default}" height="100%" alt="${pokeName}">
        </div>
        <div class="pokemon-info">
            <div class="name-container">
                <h2 class="pokemon-name">${pokeName}</h2>
            </div>
            <div class="pokemon-type">
                ${types}
            </div>
            <div class="pokemon-stats">
                <p class="stat">${data.height}M</p>
                <p class="stat">${data.weight}Kg</p>
            </div>
        </div>
    </div>
    `
    lista.append(div)
}