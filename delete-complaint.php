<?php
session_start();
include 'config/database.php';

if(!isset($_SESSION['firstname'])){
	header('Location: /test/');
}

$id = $_POST['complain_id'];
if(isset($id)){
    $sql = "DELETE from complaints WHERE id='$id'";
    $sqlQuery = mysqli_query($conn, $sql);
}

?>