<?php
session_start();

include_once( 'config.php' );
include_once( 'saetv2.ex.class.php' );

$c = new SaeTClientV2( WB_AKEY , WB_SKEY , $_SESSION['token']['access_token'] );
$ms  = $c->home_timeline(); // done
$uid_get = $c->get_uid();
$uid = $uid_get['uid'];
$user_message = $c->show_user_by_id( $uid);//根据ID获取用户等基本信息

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>mcfn test微博app</title>
<link rel="stylesheet" type="text/css" charset="utf-8" 
	href="style.css">
</head>

<body>
<div class="body-wrapper">
	<div class="body-content">
	
		<div class="main-content">
		<div class="post-content">
			
		</div>
		<div class="timeline-content">
			loading...

		</div>
		<div class="timeline-page">
		
		</div>
	</div>
	
	<div class="footer"></div>
		
	</div>
</div>
	
	




</body>
</html>
