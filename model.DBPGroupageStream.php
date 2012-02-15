<?php
class DBPGroupageStream{
	function __construct(){
		require '/home4/wshareus/public_html/WsharE_test/test/bletchley/config.tmp.php';
		require $FACEBOOK_CONFIG_PATH;
		require_once $FACEBOOK_SDK_PATH;
		require  $DB_CONFIG_PATH;
		//echo "test";
		//exit;
		
	}


	public function getUserGroupage($user_groupage_id ,$tag_list,$start_num,$end_num){
		//echo "getUserGroupage";
		$DB = new myDB();
		$link = $DB->connect();
		$sql = "SELECT * FROM `usergroup` WHERE user_id=".$user_groupage_id." limit $start_num ,$end_num";
		//echo $sql; 
		$res = $DB->query($sql);
		
		$result = array();
		$index=0;
		while($row = mysql_fetch_array($res))
		{
			print_r($row);
			$result[$index] = $row;
			$index++;
		}
		
		return $result;
	}
	
	public function deletePGorupage($pgroup_id){
		//echo "deletePGorupage";
		$DB = new myDB();
		$link = $DB->connect();
		$sql = "delete * FROM `usergroup` WHERE pgroup_id=".$pgroup_id;
		echo $sql; 
		//$res = $DB->query($sql);
		
	}
	
	public function addtag($user_groupage_id,$pgroupage_tag_list){
		//echo "deletePGorupage";
		$DB = new myDB();
		$link = $DB->connect();
		foreach($pgroupage_tag_list as $key=>$val){
			$sql = "INSERT INTO `tag` (  `user_groupage_id` ,  `tag` ) VALUES($user_groupage_id,\"$val\")";
			echo $sql; 
			$res = $DB->query($sql);
		}
		//$res = $DB->query($sql);
		
	}
}
?>