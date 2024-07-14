<?php

namespace Liftoff\Core;

// Funzione per includere un file CSS
if (!function_exists('css')) {
  function css($filename)
  {
    $filePath = '/public/styles/css/' . $filename;
    echo '<link rel="stylesheet" type="text/css" href="' . $filePath . '">';
  }
}

// Aggiungi una verifica per confermare che il file viene caricato
if (!function_exists('css')) {
  echo 'Errore, qualcosa non è stato caricato correttamente';
}
