<?php

class Router
{
  public function dispatch($uri)
  {
    // Rimuove query string
    if (strpos($uri, '?') !== false) {
      $uri = strstr($uri, '?', true);
    }

    // Rimuove eventuali slash finali
    $uri = rtrim($uri, '/');

    // Route di default
    if ($uri === '' || $uri === '/') {
      $controller = new HomeController();
      return $controller->index();
    }

    // Splitta l'URI per ottenere controller e metodo
    $segments = explode('/', trim($uri, '/'));
    $controllerName = ucfirst(array_shift($segments)) . 'Controller';
    $methodName = array_shift($segments);

    // Se il metodo è vuoto o 'index', usa 'index' come metodo predefinito
    if (empty($methodName) || $methodName === 'index') {
      $methodName = 'index';
    }

    // Controlla se il controller e il metodo esistono
    if (file_exists(__DIR__ . '/../app/controllers/' . $controllerName . '.php')) {
      $controller = new $controllerName();
      if (method_exists($controller, $methodName)) {
        return $controller->$methodName();
      }
    }

    // Se non trovato, mostra un errore 404
    header("HTTP/1.0 404 Not Found");
    echo "404 Not Found";
  }
}
