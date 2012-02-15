<?php 
	session_start();
	var_dump( $_SESSION);
?>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://www.facebook.com/2008/fbml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title></title>		
		<link rel="shortcut Icon"  href="http://WsharE.us/img/WsharE_logo_mid.png" />
		
		<script src="http://WsharE.us/controlpanel/searcher/add_tab.js"  type="text/javascript" ></script>
		<script src="http://WsharE.us/controlpanel/searcher/add_post.js"  type="text/javascript" ></script>
		
		<script src="http://wshare.us/test/WsharE/Charity/PGroupageStream/view.PGroupageStream.js" type="text/javascript"></script> 
		
		<script src="http://wshare.us/photo/jquery.js" type="text/javascript"></script>
		<script src="http://wshare.us/photo/jquery-ui.min.js" type="text/javascript"></script>
		<link rel="stylesheet" type="text/css" charset="utf-8" href="style.css">
	</head>
	<body>
		<div class="body-wrapper">
				<div class="body-content">
				
					<div class="main-content">
					
					<div class="timeline-content">
						loading...
						
					</div>
					<div class="timeline-page">
						
					</div>
				</div>
				
				<div class="footer"></div>
					
				</div>
			</div>
		<script>
			 
			 showPGroupagePost( '<?=$_REQUEST['user_groupage_id']?>',
							   <?= is_null( $_REQUEST['start_num'] ) ? 0 : $_REQUEST['start_num'] ?>,
							   <?= is_null( $_REQUEST['end_num'] ) ? 0 : $_REQUEST['end_num'] ?>,
							   '<?= is_null( $_REQUEST['social_network'] ) ? 'weibo' : $_REQUEST['social_network'] ?>'
									    );
		   
			
			
		</script>
	</body>
</html>