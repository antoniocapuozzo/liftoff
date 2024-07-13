<?php

class Controller
{
  protected function view($viewName, $data = [])
  {
    $view = new View($viewName, $data);
    $view->render();
  }
}
