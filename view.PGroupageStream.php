<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://www.facebook.com/2008/fbml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title></title>		
		<link rel="shortcut Icon"  href="http://WsharE.us/img/WsharE_logo_mid.png" />
		
		<script src="http://WsharE.us/controlpanel/searcher/add_tab.js"  type="text/javascript" ></script>
		<script src="http://WsharE.us/controlpanel/searcher/add_post.js"  type="text/javascript" ></script>
		
		<script src="http://wshare.us/test/WsharE/Charity/PGroupageStream/view.PGroupageStream.js" type="text/javascript"></script> 
	</head>
	<body>
		<div >
			<div id="PGroupageStream-tabs" class="tabs">
				<ul id="PGroupageStream-tab-list" class="tab-list"></ul>
			</div>
		</div>
		<script>
			$( "#PGroupageStream-tabs" ).tabs({ closable: true, event: 'click' });	
			/*
			$(document).ready(function() {
				$("#accordion").accordion();
			});*/
			
			addTab(0, "我的愛心團");
			addTab(1, "選擇愛心團");
			$( "#PGroupageStream-tabs" ).tabs({ event: 'click' });
			$( "#PGroupageStream-tabs" ).tabs("select", 1);
			var $tabs = $('#PGroupageStream-tabs').tabs();
			var selected = $tabs.tabs('option', 'selected');
			
		</script>
	</body>
</html>