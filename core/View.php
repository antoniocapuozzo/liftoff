<?php

namespace Liftoff\Core;

// Classe per gestire le viste
class View
{
  // Metodo per renderizzare una vista
  public function render($viewName, $data = [])
  {

    // Costruiamo il percorso completo del file della vista
    $viewPath = __DIR__ . '/../app/views/' . $viewName . '.php';

    // Se il file della vista esiste, lo includiamo
    if (file_exists($viewPath)) {
      // Estraiamo i dati per renderli disponibili come variabili nella vista
      extract($data);
      require $viewPath;
    } else {
      echo "View not found!";
    }
  }
}
