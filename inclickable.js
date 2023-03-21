//aggancio la funzione di gestione al completamento del DOM
document.addEventListener("DOMContentLoaded", manager);

function manager(){
    let caatch = document.getElementById("catch");

      //aggancio le funzioni agli eventi dei DIV di controllo
      document.getElementById("contsq1").addEventListener("mouseover", from1);
      document.getElementById("contsq2").addEventListener("mouseover", from2);
      document.getElementById("contsq3").addEventListener("mouseover", from3);
      document.getElementById("contsq4").addEventListener("mouseover", from4);


      
    function from1(){
        let claass = caatch.classList;
        if ([...caatch.classList].includes("sq1")){
            add_class("sq2");
        
        }
       
    

    }

    function from2(){
        if ([...caatch.classList].includes("sq2")){
            add_class("sq3");
        
        }
    }

    function from3(){
        if ([...caatch.classList].includes("sq3")){
            add_class("sq4");
        
        }
    }

    function from4(){
        if ([...caatch.classList].includes("sq4")){
            add_class("sq1");
        
        }
    }



    function add_class(my_class){
        

        remove_classes();
        caatch.classList.add(my_class);

    }

    function remove_classes(){
        caatch.classList.remove("sq1");
        caatch.classList.remove("sq2");
        caatch.classList.remove("sq3");
        caatch.classList.remove("sq4");
    }

}