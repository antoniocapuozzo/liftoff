<?php

namespace Liftoff\Core;

// Classe per gestire il routing
class Router
{
  // Array per memorizzare le rotte
  private $routes = [];

  // Metodo per aggiungere una rotta
  public function addRoute($path, $controller, $action)
  {
    $this->routes[$path] = ['controller' => $controller, 'action' => $action];
  }

  // Metodo per gestire le richieste
  public function dispatch()
  {
    // Otteniamo l'URI della richiesta
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $uri = trim($uri, '/');

    // Se l'URI esiste nelle rotte, chiamiamo il controller e l'azione corrispondenti
    if (array_key_exists($uri, $this->routes)) {
      $controllerName = $this->routes[$uri]['controller'];
      $actionName = $this->routes[$uri]['action'];

      // Creiamo un'istanza del controller e chiamiamo l'azione
      $controller = new $controllerName();
      $controller->$actionName();
    } else {
      echo "404 - Page not found";
    }
  }
}
