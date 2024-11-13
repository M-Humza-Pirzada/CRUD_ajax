<?php
include('./conn.php');

$select = "SELECT * from std_data";
$result = mysqli_query($conn, $select);
// print_r($result);

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}
echo json_encode($data);
