<?php
require('./conn.php');

// print_r($_POST);
$id = $_POST['id'];
$name = $_POST['name'];
$email = $_POST['email'];
$pswd = $_POST['pswd'];

// echo $name;
// echo $email;
// echo $pswd;

// in this we have used two insert and update
$insert = "INSERT into std_data(id, name, email, password) VALUES ('$id', '$name', '$email', '$pswd') ON Duplicate key update id='$id', name='$name', email='$email', password='$pswd'";
$queryExecute = mysqli_query($conn, $insert);

if ($queryExecute) {
    echo "Successfully added";
} else {
    echo "Not inserted";
}
