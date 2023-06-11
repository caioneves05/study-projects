<?php

$dados = require './dados.php';
$contador = count($dados);


$somaMedalhas = fn (int $medalhasAcum, int $medalhas) => $medalhasAcum+=$medalhas;

$medalhasPaises = fn ($medalhasAcum, array $pais) => $medalhasAcum+=array_reduce($pais['medalhas'], $somaMedalhas, 0);

$verificaEspacoNome = fn(array $pais): bool => strpos($pais['pais'], ' ') !== false;

function namePaisUpper (array $pais): array
{
    $pais['pais'] = strtoupper($pais['pais']);
    return $pais;
};


function comparaMedalhas(array $medalhasPais1, array $medalhasPais2): callable
{   // ARROW FUNCTIONS POR PADRÃO JÁ TEM ACESSO AO ESCOPO EXTERNO E NÃO PRECISAM DO USE
    return fn (string $modalidade): int => $medalhasPais2[$modalidade] <=> $medalhasPais1[$modalidade];
};


$medalhas =  array_reduce(
    array_map(
        fn ($medalhas) => array_reduce($medalhas, $somaMedalhas, 0),
        array_column($dados, 'medalhas')
    ),
    $somaMedalhas, 0
);



function comparacao($pais1, $pais2) {
    $medalhasPais1 = $pais1['medalhas'];
    $medalhasPais2 = $pais2['medalhas'];
    $comparador = comparaMedalhas($medalhasPais1, $medalhasPais2);

    return $comparador('ouro') !== 0 ? $comparador('ouro')
        : ($comparador('prata') !==0 ? $comparador('prata') : $comparador('bronze'));
};

/* 
array_walk($dados, function () use (&$contador)
{
    $contador++;
});
*/

//A função Usort ALTERA O ARRAY ORIGINAL
usort($dados, 'comparacao');

echo "Número de países participantes: $contador";

$dados = array_map('namePaisUpper', $dados);

$dados = array_filter($dados, $verificaEspacoNome);
var_dump($dados);

echo array_reduce($dados, $medalhasPaises, 0)
?>