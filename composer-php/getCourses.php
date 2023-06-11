<?php

require_once 'vendor/autoload.php';
require_once './src/Bucador.php';
Teste::teste();


use Alura\BuscadorDeCursos\Buscador;
use Symfony\Component\DomCrawler\Crawler;
use GuzzleHttp\Client;

    $client = new Client([
        'verify' => false, 
        'base_uri' => 'https://www.alura.com.br/'
    ]);
    $crawler = new Crawler();

    $buscador = new Buscador ($client, $crawler);
    $courses = $buscador->buscar('cursos-online-programacao/php');

    foreach($courses as $course) {
        echo $course . PHP_EOL;
    }

?>