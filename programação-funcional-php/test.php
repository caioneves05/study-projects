<?php

$variavel = 'teste';
function outra(callable $funcao): void
{
    echo 'Executando outra função: ';
    echo $funcao();
}
//Closures são funções que PODEM receber valores do escopo externo.
//Closure no PHP é uma classe utilizada para representar toda e qualquer função anônima.
$nomeDaFuncao = function() use ($variavel){
    echo $variavel;
    return 'Uma outra função';
};

outra($nomeDaFuncao);

?>