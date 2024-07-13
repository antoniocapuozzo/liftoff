<?php

class View
{
  protected $viewName;
  protected $data;

  public function __construct($viewName, $data = [])
  {
    $this->viewName = $viewName;
    $this->data = $data;
  }

  public function render()
  {
    $viewPath = __DIR__ . '/../app/views/' . $this->viewName . '.php';

    if (file_exists($viewPath)) {
      extract($this->data);
      include($viewPath);
    } else {
      echo "View not found: " . $viewPath;
    }
  }

  public static function snippet($name, $data = [])
  {
    $snippetPath = __DIR__ . '/../app/snippets/' . $name . '.php';

    if (file_exists($snippetPath)) {
      extract($data);
      include($snippetPath);
    } else {
      echo "Snippet not found: " . $snippetPath;
    }
  }

  public static function css($fileName)
  {
    $filePath = '/public/styles/css/' . $fileName;
    $fullPath = $_SERVER['DOCUMENT_ROOT'] . $filePath;

    if (file_exists($fullPath)) {
      echo '<link rel="stylesheet" type="text/css" href="' . $filePath . '">';
    } else {
      echo "<!-- CSS file not found: " . $filePath . " -->";
    }
  }

  public static function js($fileName)
  {
    $filePath = '/public/scripts/' . $fileName;
    $fullPath = $_SERVER['DOCUMENT_ROOT'] . $filePath;

    if (file_exists($fullPath)) {
      echo '<script src="' . $filePath . '"></script>';
    } else {
      echo "<!-- JS file not found: " . $filePath . " -->";
    }
  }
}

// Funzioni globali per snippet, css e js
function snippet($name, $data = [])
{
  View::snippet($name, $data);
}

function css($fileName)
{
  View::css($fileName);
}

function js($fileName)
{
  View::js($fileName);
}
