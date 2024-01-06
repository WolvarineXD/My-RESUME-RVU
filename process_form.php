<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Your email address where you want to receive the form data
    $to = "your_email@example.com";

    // Additional headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Message body
    $mailBody = "New message from $name ($email):\n\nSubject: $subject\n\nMessage: $message";

    // Send email
    mail($to, $subject, $mailBody, $headers);

    // Optionally, you can redirect the user to a thank you page.
    header("Location: thank_you_page.html");
    exit();
}
?>
