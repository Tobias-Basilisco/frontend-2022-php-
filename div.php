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
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php
        stampa_div("container", "esempio php", "head");
        //stampa 20 div con numeri
        for ($i=0; $i<20; $i=$i+1){
            stampa_div("numeri",$i);

            
    }


    ?>

    <?php
        //variabile*2
        for($u=0; $u<10;$u++){
        
        $k=$u*5;    
        echo $k;
        }
    ?>
</body>
</html>