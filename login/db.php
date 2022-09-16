<?php
// BIG NOTE!!!! If I do change this in the future, please dont push this to github without removing the login details of our awesome database!!!
// use ("localhost","dbusername","dbpassword","dbname");
$con = mysqli_connect("localhost","dbusername","dbpassword","dbname");
if (mysqli_connect_errno())
  {
    echo "<script>console.log('Failed to connect to MySQL');</script>";
  }
?>
