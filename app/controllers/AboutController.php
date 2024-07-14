<?php

namespace Liftoff\App\Controllers;

// Includiamo i file necessari dal namespace Liftoff\Core
use Liftoff\Core\Controller;
use Liftoff\Core\View;

// Definiamo il controller AboutController che estende la classe base Controller
class AboutController extends Controller
{
  // Metodo index che verrà chiamato quando si accede alla root dell'applicazione
  public function index()
  {
    // Creiamo un'istanza della classe View e renderizziamo la vista 'about'
    $view = new View();
    $view->render('about');
  }
}
