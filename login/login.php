<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Login</title>
		<link rel="stylesheet" href="/assets/css/logins.css"/>
	</head>
	<body>
		<?php
		require('db.php');
		session_start();
		// If form submitted, insert values into the database.
		if (isset($_POST['username'])){
				// removes backslashes
			$username = stripslashes($_REQUEST['username']);
				//escapes special characters in a string
			$username = mysqli_real_escape_string($con,$username);
			$password = stripslashes($_REQUEST['password']);
			$password = mysqli_real_escape_string($con,$password);
			//Checking is user existing in the database or not
				$query = "SELECT * FROM `users` WHERE username='$username'
		and password='".md5($password)."'";
			$result = mysqli_query($con,$query) or die(mysql_error());
			$rows = mysqli_num_rows($result);
				if($rows==1){
				$_SESSION['username'] = $username;
					// Redirect user to index.php
				header("Location: index.php");
				}else{
			echo "<div class='form'>
		<h3>Username/password is incorrect.</h3>
		<br/>Click here to <a href='login.php'>Login</a></div>";
			}
			}else{
		?>
		<div class="login-page">
  			<div class="form">
    			 <form class="register-form">
      				 <input type="text" placeholder="name"/>
      				 <input type="password" placeholder="password"/>
     				 <input type="text" placeholder="email address"/>
      				 <button>create</button>
      				 <p class="message">Already registered? <a href="#">Sign In</a></p>
    			 </form>
   				 <form class="login-form">
      				 <input type="text" name="username" placeholder="Username" required/>
     				 <input name="password" placeholder="Password" required/>
     				 <button>Login</button>
     				 <p class="message">Not registered? <a href="/login/registration.php">Create an account</a></p>
    			</form>
  			</div>
		</div>
		<?php } ?>
		<script src="/assets/javascript/login.js"></script>
	</body>
</html>
