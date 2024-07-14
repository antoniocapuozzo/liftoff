<?php

namespace Liftoff\Core;

class Bootstrap
{
  public function __construct()
  {
    $this->registerAutoload();
    $this->loadHelpers();
    $this->setRoutes();
  }

  private function registerAutoload()
  {
    spl_autoload_register(function ($class) {
      $prefix = 'Liftoff\\';
      $baseDir = __DIR__ . '/../';

      $len = strlen($prefix);
      if (strncmp($prefix, $class, $len) !== 0) {
        return;
      }

      $relativeClass = substr($class, $len);
      $file = $baseDir . str_replace('\\', '/', $relativeClass) . '.php';

      if (file_exists($file)) {
        require $file;
      }
    });
  }

  private function loadHelpers()
  {
    $helpersPath = __DIR__ . '/Helpers.php';
    if (file_exists($helpersPath)) {
      require_once $helpersPath;
      echo 'File Helpers caricato';
    } else {
      echo 'Errore: Il file Helpers.php non esiste o è in un percorso errato';
    }
  }

  private function setRoutes()
  {
    $router = new Router();
    $router->addRoute('', 'Liftoff\\App\\Controllers\\HomeController', 'index');
    $router->addRoute('about', 'Liftoff\\App\\Controllers\\AboutController', 'index');
    $router->dispatch();
  }

  public function run()
  {
    // Avvio dell'applicazione
  }
}
