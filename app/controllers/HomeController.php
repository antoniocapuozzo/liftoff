<?php

class HomeController extends Controller
{
  public function index()
  {
    $data = [
      'metatitle' => 'Liftoff 🚀 - 1.0 | Homepage',
      'title' => 'Hello from Homepage',
      'content' => 'Welcome to Liftoff 🚀'
    ];
    $this->view('home', $data);
  }
}
