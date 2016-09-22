<?php// basic 404 error pageheader('HTTP/1.1 404 Not Found');
include('redirect.php');
header('Status: 404 Not Found');
?>
<!DOCTYPE html>
<html lang="en-US">
	<head>
		<!--css links-->
		<link type="text/css" rel="stylesheet" href="css/commonSS.css" />
		<link type="text/css" rel="stylesheet" href="css/404SS.css" />
		
		<?php include 'head.php';?>
	</head>
	<body>
		<?php include 'header.php';?>
		<!--Content-->
		<div id="content">
			<div class="col-12" id="wordlogo"></div>
			<div class="col-1"></div>
			<div class="col-10">
				<p>Error Document test</p>
			</div>
			<div class="col-1"></div>
		</div>
		<!--End of Content-->
		<?php include 'footer.php';?>
		<!--JS links-->
		<?php include 'js.php';?>
	</body>
</html>