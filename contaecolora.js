let miei_div = document.getElementsByClassName("div");
let mio_button = document.getElementById("BtnConta");
let mio_paragrafo = document.getElementById("testo");

mio_button.addEventListener("click", Conta);
mio_button = document.getElementById("BtnColora");
mio_button.addEventListener("click", Colora);


function Conta (){
    mio_paragrafo.textContent="ci sono " + miei_div.length + " divs";

}

function Colora (){
    for(i = 0; i < miei_div.length; i++){
        miei_div[i].classList.add("rosso");
       
    
    }
}