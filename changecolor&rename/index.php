<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "color";

$color_name = $_POST['color_name'];
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
else{
  $stmt = $conn->prepare("insert into color(color_name) values(?)");
		$stmt->bind_param("s", $color_name);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
    echo "work";
	echo $_SERVER['PHP_SELF'];
}

?>