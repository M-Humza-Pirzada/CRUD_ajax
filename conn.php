<?php

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'students';

$conn = mysqli_connect($servername, $username, $password, $dbname);

if ($conn) {
    // echo "connection successful";
} else {
    die("Not connected <br>" . mysqli_connect_error());
}
