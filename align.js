//aggancio l'evento che segnala che il DOM è pronto
document.addEventListener("DOMContentLoaded", manager);

function manager(){


    //creo un boton escuche y que ejectue una funcion con una  variable = left
    let button_l = document.getElementById("left");
    button_l.addEventListener("mouseover", alignleft );

    //creo un boton escuche y que ejectue una funcion con una  variable = center
    let button_c = document.getElementById("center");
    button_c.addEventListener("mouseover", align );

    //creo un boton escuche y que ejectue una funcion con una  variable = right
    let button_r = document.getElementById("right");
    button_r.addEventListener("mouseover", align );


    function alignleft(){
        let content = document.getElementsByClassName("content");

        for (i = 0; i < content.length; i++){
            // content[i].setAttribute("class", "content");
            content[i].classList.add("left");
        }
    }

    function align(){
        let content = document.getElementsByClassName("content");

        for (i = 0; i < content.length; i++){

            content[i].setAttribute("class", "content");
            content[i].classList.add("dove");
        }
    }


}