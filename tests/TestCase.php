<?php
use GuzzleHttp\Client;

class TestCase extends Laravel\Lumen\Testing\TestCase
{
    /**
     * Creates the application.
     *
     * @return \Laravel\Lumen\Application
     */
    public function createApplication()
    {
        return require __DIR__ . '/../bootstrap/app.php';
    }

    public function sendRequest(array $params, $path, $method)
    {
        $client = new Client(['base_uri' => 'http://d.mob.com']);
        $rs = $client->request($method, $path, [
            "form_params" => $params
        ]);
        return json_decode($rs->getBody()->getContents(), true);
    }
}
