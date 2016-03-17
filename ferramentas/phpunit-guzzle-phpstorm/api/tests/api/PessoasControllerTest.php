<?php

/**
 * Created by PhpStorm.
 * User: Jackson
 * Date: 12/03/2016
 * Time: 00:48
 */

use GuzzleHttp\Client;

class PessoasControllerTest extends PHPUnit_Framework_TestCase
{
    protected $client;

    protected function setUp()
    {
        $this->client = new Client([
            'base_uri' => 'http://localhost/livro-web-codigo-fonte/ferramentas/phpunit-guzzle-phpstorm/api/index.php/'
        ]);
    }

    public function testStatusCodeDeveSer200() {
        $response = $this->client->get('');
        $this->assertEquals(200, $response->getStatusCode());
    }

    public function testDeveRetornarApenasUmaPessoa() {
        $response = $this->client->get('pessoas');
        $data = json_decode($response->getBody(), true);
        $this->assertCount(1, $data);
    }

    public function testNomeDaPrimeiraPessoaDeveSerJose() {
        $response = $this->client->get('pessoas');
        $data = json_decode($response->getBody(), true);
        $this->assertEquals('José da Silva', $data[0]['nome']);
    }

}