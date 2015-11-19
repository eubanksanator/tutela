<?php
if (isset($_POST["submit"])) {

//collect form values
$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$mail_message = $_POST['message'];

// general settings
$to = 'info@premiersecuritycorp.com';
$subject = 'Request for quote';
$body = "From: $name\n E-mail: $email\n Phone: $number\n Message:\n $mail_message";
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .='From: ' . $name . ' <' . $email . '>';

// attempt to send
if (mail ($to, $subject, $body, $headers)) {
      header("Location: thankyou.html");
    } else {
      die("ERROR");
    }
}

?>

