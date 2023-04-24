let wsMyNav = {
    showNav(){
        let plantilla = "";
        this.types.forEach((val, id)=>{
            plantilla += `
            <li class="nav-item"><button class="btn btn-header ${val.tipo}" id="${val.tipo}">${val.tipo}</button></li>
            `
        });

        return plantilla
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyNav[`${e.data.module}`](e.data.data))
})