<?php
// echo 'Edit page';
include('./conn.php');

$id = $_POST['id'];
$edit = "SELECT * from std_data WHERE id = '$id'";

$result = mysqli_query($conn, $edit);

$row = mysqli_fetch_assoc($result);

echo json_encode($row);
