<?php

include('./conn.php');

$id = $_POST['id'];

$delete = "DELETE FROM std_data WHERE id = '$id'";
if (mysqli_query($conn, $delete)) {
    echo "Data deleted";
} else {
    echo "Not deleted";
}
