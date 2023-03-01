<?php

include("library.php");

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ciao mondo

    <?php
        //assegno un valore alla variabile    
        $testo ="hola mundo";
        $num1 = 1;
        $num2 = 2;

        //stampo il contenuto della variabile
        echo $testo;
        echo $num1+$num2;

    ?>
    
    <!-- for -->

    <?php
        $n1 = 1;
        $n2 = 2;
    
        for ($i=0; $i<10; $i=$i+1){
                echo $i*$num2;
                echo " ciao mondo <br>";
        }
    ?>

        <?php
            //asegno un valore alla variabile
            $valore = -5;
            echo "il valore assoluto di".$valore;
            //stampo il risultato
            $valore = valore_assoluto($valore);
            echo "è".$valore."<br>";

            //asegno un valore alla variabile
            $nuovo_valore = 7;
            echo "il valore assoluto di".$nuovo_valore;
             //stampo il risultato
             $valore = valore_assoluto($nuovo_valore);
             echo "è".$valore."<br>";



        ?>
</body>
</html>

<?php
    

?>