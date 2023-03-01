<?php
    function valore_assoluto($numero){
        //se il valore è negativo, lo moltiplico per -1
        //altrimenti lo restituisco senza modificarlo

        if  ($numero < 0) {
            $risultato = $numero * -1;
        }
        else   {
        $risultato = $numero;
        }

        return $risultato;
    }

    function print_html_header() {
        
    }

    function stampa_div($classe, $contenuto, $id = ""){
            echo "<div class='" . $classe."'";
            if ($id != ""){
                echo " id = '". $id. "'";
            }

            echo ">\n";
            echo "\t".$contenuto."\n";
            echo "</div>\n";


        
    }
    function ripeti($quantita, $stringa){
        $risultato = '';
        
        for ($i=0; $i<$quantita; $i++){
        // echo "<p>".$stringa."</p><br>\n";
        $risultato = $risultato . "<p>".$stringa."</p><br>\n";
        }

        return $risultato;
    }
?>