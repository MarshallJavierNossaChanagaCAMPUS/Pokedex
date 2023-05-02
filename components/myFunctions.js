let lista = document.querySelector("#list");
let botones = document.querySelectorAll(".btn-header");
let url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";
let input = document.querySelector("#filter");


const ws = new Worker("storage/wsMyFunctions.js");

ws.postMessage({ module: "showPokemonWorker" });

let id = "#list";

ws.addEventListener("message", (e) => {
    let doc = new DOMParser().parseFromString(e.data, "text/html");

    document.querySelector(id).append(...doc.body.children);

    ws.terminate();
});

export const filter = async function searchPokemon() {
    input.addEventListener("keyup", (e) => {

        if (e.target.matches("#filter")) {
            document.querySelectorAll(".pokemon").forEach(pokemon => {
                pokemon.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                    ? pokemon.classList.remove("filter")
                    : pokemon.classList.add("filter")
            })
        }
    })
};

const showModal = document.querySelector("#list");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal_close")


showModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("modal_show")
})





closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal_show")
})

/* <section class="modal">
            <div class="modal_container">
                <div class="modal_pokemon">
                    <img src="img/pokedex .png" width="80%" alt="">
                    <h2>pikachu</h2>
                    <p>Electirc</p>
                    <p>2 kg</p>
                    <p>10 m</p>
                </div>
                <div class="modal_info">
                    <h2>habilidades</h2>
                        <p>impostor</p>
                    <h2>Tipo</h2>
                        <p>normal</p>
                    <h2>stats</h2>
                    <div class="stats">
                        <p>hp</p>
                        <p>attack</p>
                        <p>defense</p>
                        <p>speciall attack</p>
                        <p>special defense</p>
                        <p>speed</p>
                    </div>
                    <img src="img/bg2.png" width="80%" alt="" srcset="">
                </div>
                <p class="modal_close"> X </p>
            </div>
        </section> */