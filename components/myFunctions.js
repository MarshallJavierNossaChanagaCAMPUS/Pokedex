let lista = document.querySelector("#list");
let botones = document.querySelectorAll(".btn-header");
let url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";
let input = document.querySelector("#filter");


const ws = new Worker("storage/wsMyFunctions.js");

ws.postMessage({module: "showPokemonWorker"});

let id = "#list";

ws.addEventListener("message", (e)=>{
    let doc = new DOMParser().parseFromString(e.data, "text/html");

    document.querySelector(id).append(...doc.body.children);

    ws.terminate();
});

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