<?php

function dividir($a,$b) {
    return $a/$b;
}

function dividir2 (int $divisor) {
    return function (int $number) use($divisor) {
        return $number/$divisor;
    };
};

$dividirNormal = dividir(5, 2);
$dividirPor2 = dividir2(2);

echo $dividirNormal . PHP_EOL;
echo $dividirPor2(5);
?>