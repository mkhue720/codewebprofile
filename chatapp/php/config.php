<?php
  $hostname = "localhost";
  $username = "t1692193919_chatapp";
  $password = "t1692193919_chatapp";
  $dbname = "t1692193919_chatapp";

  $conn = mysqli_connect($hostname, $username, $password, $dbname);
  if(!$conn){
    echo "Database connection error".mysqli_connect_error();
  }
?>
