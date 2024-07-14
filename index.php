<?php
// Includiamo il file Bootstrap.php per inizializzare l'applicazione
require_once __DIR__ . '/core/Bootstrap.php';

// Utilizziamo il namespace Liftoff\Core
use Liftoff\Core\Bootstrap;

// Creiamo un'istanza della classe Bootstrap e avviamo l'applicazione
$bootstrap = new Bootstrap();
$bootstrap->run();
