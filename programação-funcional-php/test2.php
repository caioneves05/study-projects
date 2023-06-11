<?php

$nomes = ['Caio', 'Anna', 'Maria', 'Leticia'];
$funcao = strlen(...);
$tamanhos = array_map($funcao, $nomes);
var_dump($tamanhos)
?>
