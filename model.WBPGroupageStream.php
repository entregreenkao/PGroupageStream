<?php
class WBPGroupStream{
	var $weibo ;
	var $session ; 
	
	function __construct(){
		//require '/home4/wshareus/public_html/WsharE_test/test/bletchley/config.tmp.php';
		//require $FACEBOOK_CONFIG_PATH;
		//require_once $FACEBOOK_SDK_PATH;
		//require_once  $DB_CONFIG_PATH;
		require_once 'config.php';
		//exit;
		$this->weibo = new SaeTClientV2( 
				WB_AKEY , 
				WB_SKEY , 
				$_SESSION['token']['access_token']
		);
		
	} 

	public function getPostList(){
		echo "getPostList";
		
		$result = $this->weibo->home_timeline();
		
	}
	
	public function sendPost($user_groupage_id,$pgroupage_id,$msg,$pic,$url){
		echo "sendPost";
		

	}
	public function sendComment($user_groupage_id,$pgroupage_id,$post_id,$msg){
		echo "sendComment";
		
	}
}
?>