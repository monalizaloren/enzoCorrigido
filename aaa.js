<!DOCTYPE html>
<html>
<head>
	<title>Página de mensagens Kwitter</title>
<script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/live/3.1/firebase.js"></script>
<link href="https://fonts.googleapis.com/css?family=Yeon+Sung&display=swap" rel="stylesheet"><meta name="viewport" content="width=device-width, initial-scale=1">

<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

<link rel="stylesheet" type="text/css" href="style.css">

</head>
<body>

<div class="container">
	<button id="logout" onclick="logout();" class="glyphicon glyphicon-log-out btn btn-danger">Logout</button>
	<center>
		<h1 class="header">	
			Kwitter	
			<sup>
				<img src="m2.png">
			</sup>
		</h1>
		<div id="output" style="text-align: left;margin-bottom: 70px;"> </div>
	</center>
</div>

<center>
	<div class="input_div_message_page">
		<label>Enviar:</label>
		<input type="text" id="msg" class="form-control" placeholder="Mensagem">
		<button onclick="send()" class="btn btn-success">Enviar</button>
	</div>
</center>

<script src="kwitter_page.js"></script>
</body>
</html>
