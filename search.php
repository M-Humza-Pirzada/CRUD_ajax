<?php
// echo "Search php";
include('./conn.php');

$name = $_POST['name'];

$select = "SELECT * from std_data WHERE lower(std_data.`name`) LIKE '%$name%'";

$result = mysqli_query($conn, $select);
// print_r($result);

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}
echo json_encode($data);
