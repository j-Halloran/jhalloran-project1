<?php
//write data to file, I did this with xampp on windows, YMMV
  
  $host = $_SERVER['HTTP_HOST'];

  foreach ($_POST as $k => $v) {
    $data[$k] = $v;
  }
  file_put_contents("contact_output.txt", serialize($data));

?>
