let mio_button = document.getElementById("trigger");
let miei_div = document.getElementsByClassName("importante");

mio_button.addEventListener("click", addclass);
mio_button.addEventListener("click", addcontenuto);

function addclass() {
    //creo una classe vuota
    let mia_classe = document.createAttribute("class");
    let i = 0;

    //assegno il valore "importante.blue" alla classe
    mia_classe.value = "importante-blue";

    for (i = 0; i < miei_div.length; i++){
        miei_div[i].classList.add("importante-blue");
    
    }

}
function addcontenuto(){


    let div_1 = document.getElementById("primo-div");
    //creo un paragrafo e lo assegno alla variabile nuovo_elemento
    let div_2 = document.getElementById("secondo-div");
    //creo un paragrafo e lo assegno alla variabile nuovo_elemento
    let elemento_1 = document.createElement("p");
    let elemento_2 = document.createElement("p");

    //scrivo all'interno del nuovo paragrafo
    elemento_1.innerText = "primo div";
    elemento_2.innerText = "secondo div";


    for (i = 0; i < miei_div.length; i++) {
    
        if (i==0){
            div_1.appendChild(elemento_1);
        }

        if (i==1){
            div_2.appendChild(elemento_2);
        }
    
    }

   


    

}