<? php
//write data to file, I did this with xampp on windows, YMMV
  $data["name"]=$_POST["name"];
  $data["email"]=$_POST["email"];
  $data["comment"]=$_POST["comment"];
  file_put_contents("contact_output.txt", serialize($data));
?>
