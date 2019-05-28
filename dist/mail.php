<?php 

$c = true;

// Save Basic Form parametrs
$project_name = "Мой персональный сайт";
$admin_email  = "mikhalich2701@yandex.ru";
$form_subject = "Сообщение с сайта";
$form_from = "a2541940@mikhalich.su";

$message = "";

foreach ( $_POST as $key => $value ) {
	if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" && $key != "form_from" ) {
		$message .= "
		" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
	</tr>
	";
	}
}

// Create message text for sending on email
$message = "<table style='width: 100%;'>$message</table>";

// Adjusting text encoding
function adopt($text) {
	return '=?UTF-8?B?'.base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$form_from.'>' . PHP_EOL .
'Reply-To: '.$form_from.'' . PHP_EOL;

// Sending email to admin
$send = mail($admin_email, adopt($form_subject), $message, $headers );


// header('location: ../thankyou.html');
if ( $send ){
	echo "<div class='contact-form__success'>Заявка успешно отправлена!</div> ";
} else {
	echo "<div class='contact-form__success'>Заявка не отправлена!</div> ";
}


?>