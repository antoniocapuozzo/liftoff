<?php

namespace Liftoff\Core;

class Helpers
{
  public static function css($filename)
  {
    echo "<link rel='stylesheet' href='/public/styles/css/$filename'>";
  }
}
