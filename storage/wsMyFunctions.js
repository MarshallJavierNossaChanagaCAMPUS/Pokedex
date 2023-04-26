let pokemon;
let plantilla;
const wsMyFunctions = {
    async listAPIWorker() {
        let url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1008";
        pokemon = [];
        try {
            const response = await fetch(url)
            const res = await response.json();
            const data = res.results;

            for (let index = 0; index < data.length; index++) {
                let url2 = data[index].url;
                const datos = await fetch(url2)
                const datosFinal = await datos.json()
                pokemon.push(datosFinal);
            }
        } catch (error) {
            console.log(error);
        }
        return pokemon;
    },
    async showPokemonWorker() {
        let res = await this.listAPIWorker();
        for (let index = 0; index < res.length; index++) {
            let pokemonsito = await res[index];
            let tipos = pokemonsito.types[0].type.name;
            let pokeId = pokemonsito.id.toString();
            let pokeName = pokemonsito.name.toUpperCase();

            if (pokeId.length === 1) {
                pokeId = "00" + pokeId
            } else if (pokeId.length === 2) {
                pokeId = "0" + pokeId
            }

            plantilla += `
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
        } return plantilla;
    }
}

self.addEventListener("message", async (e) => {
    let res = await wsMyFunctions[`${e.data.module}`]()
    postMessage(res)
})