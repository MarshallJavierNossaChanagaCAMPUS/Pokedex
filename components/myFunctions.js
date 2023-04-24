let lista = document.querySelector("#list");
let botones = document.querySelectorAll(".btn-header");
let url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";
let pokemon = [];
let input = document.querySelector("#filter");


/* const wsListApi = new Worker("storage/wsMyfunctions"); */

export const listAPI = async () => {

    //Esto me da una respuesta de la api de manera asincrona

    try {

        //Este bloque obtiene la info de la api y la convierte en json, despues extrae los datos de los pokemon

        const response = await fetch(url)
        const json = await response.json();
        const data = json.results;

        //Asi obtengo el url de todos los pokemons segun su indice

        for (let index = 0; index < data.length; index++) {
            let url2 = data[index].url;
            const datos = await fetch(url2)
            const datosFinal = await datos.json()
            pokemon.push(datosFinal)
        }

    } catch (error) {
        console.log(error);
    }

}


export async function showPokemon(data) {
    await listAPI();
    for (let index = 0; index < pokemon.length; index++) {
        let pokemonsito = await pokemon[index];
        let tipos = pokemonsito.types[0].type.name;
        let pokeId = pokemonsito.id.toString();
        let pokeName = pokemonsito.name.toUpperCase();

        console.log(tipos);

        if (pokeId.length === 1) {
            pokeId = "00" + pokeId;
        } else if (pokeId.length === 2) {
            pokeId = "0" + pokeId;
        }

        let div = document.createElement("div");
        div.classList.add("pokemon");
        div.innerHTML = `
              <div class="pokemon">
                  <p class="pokemon-id-back">#${pokeId}</p>
                  <div class="pokemon-image">
                      <img src="${pokemonsito.sprites.front_default}" height="100%" alt="${pokeName}">
                  </div>
                  <div class="pokemon-info">
                      <div class="name-container">
                          <h2 class="pokemon-name">${pokeName}</h2>
                      </div>
                      <div class="pokemon-type">
                        <p class="${tipos} tipo">${tipos.toUpperCase()}</p>
                      </div>
                      <div class="pokemon-stats">
                          <p class="stat">${pokemonsito.height}M</p>
                          <p class="stat">${pokemonsito.weight}Kg</p>
                      </div>
                  </div>
              </div>
              `;
        lista.append(div);
    }
};

export const filter = async function searchPokemon() {
    input.addEventListener("keyup", (e)=>{

        if (e.target.matches("#filter")) {
            document.querySelectorAll(".pokemon").forEach(pokemon=>{
                pokemon.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?pokemon.classList.remove("filter")
                :pokemon.classList.add("filter")
            })
        }
    })
};



/* export const navFilter = async function () {
    await showPokemon(data);
    botones.forEach((val, id)=>val.addEventListener("click", (e) => {
            let botonId = e.currentTarget.id;

            lista.innerHTML = "";

            if (botonId === "ver-todos") {
                showPokemon(data)
            }
    }))
} */