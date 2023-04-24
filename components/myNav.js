export default {
    types: [
        {
            tipo: "normal"
        },
        {
            tipo: "fire"
        },
        {
            tipo: "water"
        },
        {
            tipo: "grass"
        },
        {
            tipo: "electric"
        },
        {
            tipo: "ice"
        },
        {
            tipo: "fighting"
        },
        {
            tipo: "poison"
        },
        {
            tipo: "ground"
        },
        {
            tipo: "flying"
        },
        {
            tipo: "psychic"
        },
        {
            tipo: "bug"
        },
        {
            tipo: "rock"
        },
        {
            tipo: "ghost"
        },
        {
            tipo: "dark"
        },
        {
            tipo: "dragon"
        },
        {
            tipo: "steel"
        },
        {
            tipo: "fairy"
        },
    ],
    workerNav(){

        const ws = new Worker("storage/wsMyNav.js");

        ws.postMessage({module: "showNav", data: this.types});

        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");

            document.querySelector(".nav-list").append(...doc.body.children);

            ws.terminate()
        })
    }
}