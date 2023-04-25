const wsMyFunctions = { 
    listAPIWorker(){
        let url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";
        let pokemon = [];
        listAPI = async () => {
            try {
                const response = await fetch(url)
                const json = await response.json();
                const data = json.results;
        
                for (let index = 0; index < data.length; index++) {
                    let url2 = data[index].url;
                    const datos = await fetch(url2)
                    const datosFinal = await datos.json()
                    pokemon.push(datosFinal);
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    showPokemonWorker(){
        async function showPokemon(data) {
    
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
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyFunctions[`${e.data.module}`]())
})