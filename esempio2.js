let miei_div = document.getElementsByClassName("div");

// prelevo l'oggetto che ha ID BtnRosso

let mio_button = document.getElementById("BtnRosso");

//associo il gestore di evento aggiungirosso all'oggetto

mio_button.addEventListener("click", aggiungirosso);


// prelevo l'oggetto che ha ID BtnRosso

mio_button = document.getElementById("BtnVerde");

//associo il gestore di evento aggiungirosso all'oggetto

mio_button.addEventListener("click", aggiungiverde);

function aggiungirosso(){
    for(i = 0; i < miei_div.length; i++){
        miei_div[i].classList.add("rosso");
        miei_div[i].classList.remove("verde");
    
    }
    
    
}

function aggiungiverde(){
    for(i = 0; i < miei_div.length; i++){
        miei_div[i].classList.add("verde");
        miei_div[i].classList.remove("rosso");
    
    }
    
    
}