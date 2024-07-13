<?php

class AboutController extends Controller
{
  public function index()
  {
    $data = [
      'metatitle' => 'Liftoff 🚀 - 1.0 | About Page',
      'title' => 'Hello from About',
      'content' => 'Welcome to Liftoff 🚀'
    ];
    $this->view('about', $data);
  }
}
