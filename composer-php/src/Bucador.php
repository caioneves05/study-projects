<?php

namespace Alura\BuscadorDeCursos;

use GuzzleHttp\ClientInterface;
use Symfony\Component\DomCrawler\Crawler;

class Buscador
{
    /**
     * @var ClientInterface
     */

    private $httpClient;
    /**
     * @var Crwaler
     */
    private $crawler;

    public function __construct(ClientInterface $httpClient, Crawler $crawler)
    {
            $this->httpClient = $httpClient;
            $this->crawler = $crawler;
    }

    public function buscar(string $url)
    {
        $courses = [];
        $response = $this->httpClient->request('GET', $url);

        $html = $response->getBody();

        $this->crawler->addHtmlContent($html);

        $coursesResponse = $this->crawler->filter('span.card-curso__nome');

        foreach ($coursesResponse as $items) {
            $courses[] = $items->textContent;
        }

        return $courses;
    }
}
