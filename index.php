<?php

// Autoload delle classi
function autoload($className)
{
  if (file_exists(__DIR__ . '/core/' . $className . '.php')) {
    require_once __DIR__ . '/core/' . $className . '.php';
  } elseif (file_exists(__DIR__ . '/app/controllers/' . $className . '.php')) {
    require_once __DIR__ . '/app/controllers/' . $className . '.php';
  }
}
spl_autoload_register('autoload');

// Inizializza il router
$router = new Router();
$router->dispatch($_SERVER['REQUEST_URI']);
