<?php 
	date_default_timezone_set("Europe/Kiev");
	$author = htmlspecialchars($_POST['author']);	
	$datetime = htmlspecialchars($_POST['datetime']);
	$message = htmlspecialchars($_POST['message']);
	$phone = htmlspecialchars($_POST['phone']);
	$today = date("d.m.Y G:i"); 
	$text = "Дата подачи заявки: " . $today . '\n' . "Имя отправителя: " . $author . '\n' . 
		"Телефон: " . $phone . '\n' . "Удобная дата: " . $datetime . '\n' . 
		"Сообщение: " . $message . '\n';
	header("Location: ../../index.html");
	mail("bezimeninofamily@gmail.com", "Заявка", $text); 
?>	