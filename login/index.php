<?php
session_start();
if(!isset($_SESSION["username"])){
header("Location: login.php");
exit(); }
?>
<html>
<p>This should be the page which shows your profile, or, more likely, redirects you to your profile.</p>
</html>
