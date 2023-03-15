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
    function create_alt_div($text, $divs, $class1, $class2)
{
    for ($i = 1; $i <= $divs; $i++) {
        if ($i % 2 == 0) {
            print_div($class2, $text);
        } else {
            print_div($class1, $text);
        }
    }
}

function print_array($values) {
    $array_count = count($values);
    for ($i = 0; $i < $array_count; $i++) {
        echo "<div>";
        echo $values[$i];
        echo "</div>";
    }
}

function print_double_array($first, $second) {
    if (count($first) != count($second)) {
        return 0;
    } else {
        $array_count = count($first);
        for ($i = 0; $i < $array_count; $i++) {
            echo "<div class='" . $first[$i] . "'>";
            echo $second[$i];
            echo "</div>";
        }
    }
}


?>