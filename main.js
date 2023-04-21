import myNav from "./components/myNav.js";

myNav.showNav();

let lista = document.querySelector("#list");
let botones = document.querySelectorAll(".btn-header");
let url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";

const listAPI = async() => {

//Esto me da una respuesta de la api de manera asincrona

  try {

    //Este bloque obtiene la info de la api y la convierte en json, despues extrae los datos de los pokemon
    
    const response =await fetch(url)
    const json = await response.json();
    const data = json.results;

    console.log(data);

    const xddd = await fetch(data[0].url);
    const xdd = await xddd.json();

    console.log(xdd);

    //Asi obtengo el url de todos los pokemons segun su indice

/*     for (let index = 0; index < data.length; index++) {
      console.log(data[index]);
      let url2 = data[index].url;
      console.log(url2);
    } */

  } catch(error){
    console.log(error);
  }

  
}

listAPI();


/* for (let i = 1; i <= 151; i++) {
    fetch(url + i)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("data", JSON.stringify(data))
        });
} */

/* function showPokemon(data) {

  let types = datos.types.map(
  (type) =>
    `<p class="${
      type.type.name
    } tipo">${type.type.name.toUpperCase()}</p>`
  );
  types = types.join("");
  
  let pokeId = data.id.toString();
  let pokeName = data.name.toUpperCase();
  
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
      `;
  lista.append(div);
} */

botones.forEach((boton) =>
boton.addEventListener("click", (e) => {
let botonId = e.currentTarget.id;

lista.innerHTML = "";

for (let i = 1; i <= 151; i++) {
  fetch(url + i)
    .then((response) => response.json())
    .then((data) => {
      if (botonId === "ver-todos") {
        showPokemon(data);
      } else {
        let types = data.types.map((type) => type.type.name);
        if (types.some((tipo) => tipo.includes(botonId))) {
          showPokemon(data);
        }
      }
    });
}
})
);
