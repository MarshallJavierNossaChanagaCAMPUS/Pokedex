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
    showNav(){
        let plantilla = "";
        this.types.forEach((val, id)=>{
            plantilla += `
            <li class="nav-item"><button class="btn btn-header ${val.tipo}" id="${val.tipo}">${val.tipo}</button></li>
            `
        })
        document.querySelector(".nav-list").insertAdjacentHTML("beforeend", plantilla)
    }
}