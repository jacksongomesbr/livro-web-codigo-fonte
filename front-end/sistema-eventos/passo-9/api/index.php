<?php
require_once 'vendor/autoload.php';
require_once 'database.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\UsernameNotFoundException;
use Symfony\Component\Security\Core\User\InMemoryUserProvider;
use Symfony\Component\Security\Core\User\User;
use Security\UserProvider;

date_default_timezone_set('America/Araguaina');
setlocale(LC_ALL, 'pt_BR.utf-8');

$app = new Silex\Application();
$app->register(new JDesrosiers\Silex\Provider\CorsServiceProvider(), array(
    "cors.allowOrigin" => "*",
    "cors.allowMethods" => "GET, HEAD, OPTIONS, POST, PUT, DELETE"
));
$app->after($app["cors"]);
$app['debug'] = true;
$app['db'] = Database::open();

/*
$app['security.jwt'] = [
    'secret_key' => 'Very_secret_key',
    'life_time'  => 86400,
    'options'    => [
        'username_claim' => 'sub', // default name, option specifying claim containing username
        'header_name' => 'X-Access-Token', // default null, option for usage normal oauth2 header
        'token_prefix' => 'Bearer',
    ]
];

$app['users'] = function () use ($app) {
    return new UserProvider($app['db']);
};

$app['security.firewalls'] = array(
    'login' => [
        'pattern' => 'login|register|oauth',
        'anonymous' => true,
    ],
    'secured' => array(
        'pattern' => '^.*$',
        'logout' => array('logout_path' => '/logout'),
        'users' => $app['users'],
        'jwt' => array(
            'use_forward' => true,
            'require_previous_session' => false,
            'stateless' => true,
        )
    ),
);

$app->register(new Silex\Provider\SecurityServiceProvider());
$app->register(new Silex\Provider\SecurityJWTServiceProvider());
*/

$app->get('/eventos/', function(Request $request) use($app) {
    $filtro = $request->get('q', null);
    $db = $app['db'];
    if ($filtro) {
        $filtro = '%' . $filtro . '%';
        $query = $db->executeQuery('SELECT * FROM eventos WHERE nome like ? OR cidade like ? OR estado like ?', array($filtro, $filtro, $filtro));
    } else {
        $query = $db->executeQuery('SELECT * FROM eventos');
    }
    $eventos = $query->fetchAll();
	return $app->json(array(
	    'data' => $eventos
	));
});

$app->get('/eventos/{id}', function($id) use($app) {
    $db = Database::open();
    $query = $db->executeQuery('SELECT * FROM eventos WHERE id = ?', array($id));
    $evento = $query->fetch();
    if ($evento) {
        return $app->json(array(
            'data' => $evento
        ));
    } else {
        return $app->abort(404);
    }
});

$app->post('/eventos/{id}', function($id, Request $request) use($app) {
    $evento = json_decode($request->getContent());
    $db = Database::open();
    if ($evento->id == 0) {
        $r = $db->executeUpdate('INSERT INTO eventos(nome, estado, cidade) VALUES(?, ?, ?)',
            array($evento->nome, $evento->estado, $evento->cidade)
        );
        $evento->id = $db->lastInsertId();
    } else {
        $r = $db->executeUpdate('UPDATE eventos SET nome = ?, estado = ?, cidade = ? WHERE id = ?',
            array($evento->nome, $evento->estado, $evento->cidade, $evento->id)
        );
    }
    return $app->json(array(
        'data' => $evento
    ));
});

$app->delete('/eventos/{id}', function($id) use($app) {
    $db = Database::open();
    $r = $db->executeUpdate('DELETE FROM eventos WHERE id = ?', array($id));
    return $app->json(array(
        'data' => $r
    ));
});

$app->post('/login', function(Request $request) use ($app){
    $vars = json_decode($request->getContent(), true);
    try {
        if (empty($vars['_username']) || empty($vars['_password'])) {
            throw new UsernameNotFoundException(sprintf('Username "%s" does not exist.', $vars['_username']));
        }
        /**
         * @var $user User
         */
        $user = $app['users']->loadUserByUsername($vars['_username']);
        if (! $app['security.encoder.digest']->isPasswordValid($user->getPassword(), $vars['_password'], '')) {
            throw new UsernameNotFoundException(sprintf('Username "%s" does not exist.', $vars['_username']));
        } else {
            $response = [
                'success' => true,
                'token' => $app['security.jwt.encoder']->encode(['name' => $user->getUsername()]),
            ];
        }
    } catch (UsernameNotFoundException $e) {
        $response = [
            'success' => false,
            'error' => 'Invalid credentials. ' . $e,
        ];
    }
    return $app->json($response, ($response['success'] == true ? Response::HTTP_OK : Response::HTTP_BAD_REQUEST));
});

$app->post('/file-upload', function(Request $request) use ($app) {
	$path = __DIR__.'/uploads/';
	$file = $request->files->get('file');
	$originalFileName = $file->getClientOriginalName();
	$info = pathinfo($originalFileName);
	$ext = $info['extension'];
	$basename =  basename($originalFileName,'.'.$ext);
	$filename = uniqid($basename . '-') . '.' . $ext;
	$file->move($path, $filename);

	return $app->json(array(
		'filename' => $filename,
		'original_filename' => $originalFileName,
		'info' => $info,
		'_files' => $_FILES
	));
});

$app->run();
