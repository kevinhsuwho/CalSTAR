<?php

file_put_contents('git-update-output.json', json_encode($_POST));
/*if (array_key_exists('X-GitHub-Event', $_POST)) {
	echo $_POST['X-GitHub-Event'];
	//exec('../update.sh');
	exec('touch we-got-an-update');
}*/

?>
