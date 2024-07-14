<?php
// Ottieni tutte le funzioni definite in PHP in questo momento
$defined_functions = get_defined_functions();;

// Stampare le funzioni definite dall'utente
echo "Funzioni definite dall'utente:";
echo "<pre>";
print_r($defined_functions['user']);
echo "</pre>";
?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>
  <?php css('app.css'); ?>
</head>

<body>
  <h1>Welcome to Liftoff Framework</h1>
  <p>This is the home page.</p>
</body>

</html>