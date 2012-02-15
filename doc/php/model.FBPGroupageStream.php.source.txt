<?php
class FBPGroupStream{
	var $facebook ;
	var $session ; 
	
	function __construct(){
		require '/home4/wshareus/public_html/WsharE_test/test/bletchley/config.tmp.php';
		require $FACEBOOK_CONFIG_PATH;
		require_once $FACEBOOK_SDK_PATH;
		require_once  $DB_CONFIG_PATH;
		//exit;
		$this->facebook = new Facebook(array(
			'appId'  => $app_id,
			'secret' => $app_secret,
			'cookie' => true
		));
		$this->session = $this->facebook->getSession();
	} 

	public function getPic($user_groupage_id){
		$pic_url = "http://pic_url.com/ui.png";
		return $pic_url;
	}
	
	public function sendPost($user_groupage_id,$pgroupage_id,$msg,$pic,$url){
		echo "sendPost";
		$attachment = array('message' => $msg);
		if(!is_null($url))$attachment['link']=$url;
		if(!is_null($pic))$attachment['picture']=$pic;

		$result = $this->facebook->api("/$user_groupage_id/feed/",
                                'post',
                                $attachment);

	}
	public function sendComment($user_groupage_id,$pgroupage_id,$post_id,$msg){
		echo "sendComment";
		$attachment = array('message' => $msg);
		$result = $this->facebook->api("/$post_id/comments",
                                'post',
                                $attachment);
	}
}
?>