<?php
$name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
$phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
$email = filter_var($_POST["email"], FILTER_SANITIZE_STRING);
$attending = filter_var($_POST["attending"], FILTER_SANITIZE_STRING);
$errors;

if(empty($name)){
    $errors .= "Enter your name";
} else{
    $user_name = $name;
}
if(empty($phone)){
    $errors .= "Enter your phone";
} else{
    $user_phone = $phone;
}
if(empty($email)){
    $errors .= "Enter your email";
} else{
    $user_email = $email;
}
if(empty($attending)){
    $errors .= "Choose your attending";
} else{
    $user_attending = $attending;
}

$to = "";
$mailBody = "New massege!";
$mailBody .= "\n";
$mailBody .= "Name:  " . $user_name ."\n";
$mailBody .= "Number: " . $user_phone ."\n";
$mailBody .= "Email: " . $user_email ."\n";
$mailBody .= "Attending: " . $user_attending ."\n";

if(mail($to, 'New maseege!', $mailBody)){
    $output = "OK";
    die($output);
} else{
    $output = $errors;
    die($output);
}
?>