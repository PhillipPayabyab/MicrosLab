<?php
	header("Access-Control-Allow-Origin: *");
	$url = "http://sandbox.api.simsimi.com/request.p?key=9f482eb5-0637-4e89-bc80-303eae1fda24&lc=en&ft=1.0&text=" .urlencode($_GET['text']);
	echo file_get_contents($url);

?>