<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= $metatitle; ?></title>
  <?php css('app.css'); ?>
</head>

<body>
  <?php snippet('header'); ?>
  <main class="site-main" role="main" id="contenuto" data-trigger="scroll">
    <div class="site-wrap">
      <header class="page-header">
        <h1 class="page-header-title"><?= $title; ?></h1>
      </header>
    </div>
  </main>
  <?php snippet('footer'); ?>
</body>

</html>