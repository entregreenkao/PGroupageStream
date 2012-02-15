<?php
class PGroupageStream{
	var $model;
	var $fbmodel;
	var $wbmodel;
	public function __construct(){
		require 'model.DBPGroupageStream.php';
		require 'model.FBPGroupageStream.php';
		require 'model.WBPGroupageStream.php';
		$this->model = new DBPGroupageStream();	
		$this->fbmodel = new FBPGroupStream();
		$this->wbmodel = new WBGroupStream();
	}
	
	public function showPGroupage($user_groupage_id ,$tag_list,$start_num,$end_num){
		$result = $this->model->getUserGroupage($user_groupage_id ,$tag_list,$start_num,$end_num);
		echo json_encode($result);
	}
	public function sendPost($user_groupage_id,$pgroupage_id,$msg,$pic,$url){
		$result = $this->fbmodel->sendPost($user_groupage_id,$pgroupage_id,$msg,$pic,$url);
		echo json_encode($result);
	}
	
	public function sendComment($user_groupage_id,$pgroupage_id,$post_id,$msg){
		$result = $this->fbmodel->sendComment($user_groupage_id,$pgroupage_id,$post_id,$msg);
		echo json_encode($result);
	}
	
	public function deletePGorupage($pgroupage_id){
		$result = $this->model->deletePGorupage($pgroupage_id);
		echo json_encode($result);
	}
	
	public function tagPGorupage($user_groupage_id,$pgroupage_tag_list){
		$result = $this->model->addtag($user_groupage_id,$pgroupage_tag_list);
		echo json_encode($result);
	}
	//public function tagPGorupage($user_groupage_id,$pgroupage_tag_list){
	//	$result = $this->model->addtag($user_groupage_id,$pgroupage_tag_list);
	//	echo json_encode($result);
	//}
	
	public showPGroupagePost($user_groupage_id, $start_num = 0, $end_num = 0, $social_network ){
		// 微博
		
		//if ( $social_network == 'weibo'){
		$result = $this->wbmodel->user_timeline_by_id($user_groupage_id);
		//}
		echo json_encode($result);
	}
}

$cp = new PGroupageStream;	
	
if ( $_GET['func'] == "showPGroupage" ){
	if(!isset($_GET['start_num']))
		$start_num=0;
	else
		$start_num=$_GET['start_num'];
	if(!isset($_GET['end_num']))
		$end_num=10;
	else
		$end_num=$_GET['end_num'];
		
	$cp ->showPGroupage($_GET['user_groupage_id'],"",$start_num,$end_num);
}
else if ( $_GET['func'] == "createPGorupage"){
	if(!isset($_GET['group_name']))
		return;
	else
		$group_name=$_GET['group_name'];	
	if(!isset($_GET['group_array']))
		return;
	else
		$group_array=json_decode($_GET['group_array']);
		
	$cp ->createPGorupage($group_name,$_GET['user_groupage_id'],$group_array);
}	
else if ( $_GET['func'] == "deletePGorupage"){
	if(!isset($_GET['group_id']))
		return;
	else
		$group_id=$_GET['group_id'];
		
	$cp ->deletePGorupage($group_id);
}
else if ( $_GET['func'] == "sendPost"){
	if(!isset($_GET['msg']))
		return;
	else
		$msg=$_GET['msg'];
	if(!isset($_GET['img']))
		$img=null;
	else
		$img=$_GET['img'];	
	if(!isset($_GET['url']))
		$url=null;
	else
		$url=$_GET['url'];
		
	$cp ->sendPost($_GET['user_groupage_id'],$pgroupage_id,$msg,$img,$url);
}else if ( $_GET['func'] == "sendComment"){ 
	if(!isset($_GET['msg']))
		return;
	else
		$msg=$_GET['msg'];
	if(!isset($_GET['post_id']))
		return;
	else
		$post_id=$_GET['post_id'];	
	

	$cp ->sendComment($_GET['user_groupage_id'],$pgroupage_id,$post_id,$msg);	
}else if ( $_GET['func'] == "tagPGorupage"){
	if(!isset($_GET['tag_array']))
		return;
	else
		$tag_array=json_decode($_GET['tag_array']);
		
	$cp ->tagPGorupage($_GET['user_groupage_id'],$tag_array);
}else if ( $_GET['func'] == "showPGroupagePost"){
	
	if(!isset($_GET['user_groupage_id']))
		return;
	else
		$user_groupage_id=$_GET['user_groupage_id'];

	/*
	if(!isset($_GET['start_num']))
		return;
	else
		$start_num=$_GET['start_num'];	
		
	if(!isset($_GET['end_num']))
		return;
	else
		$end_num=$_GET['end_num'];
		
	if(!isset($_GET['social_network']))
		return;
	else
		$social_network=$_GET['social_network'];
	*/
	//以下可以呼叫不同social network的implementation
	$cp->showPGroupagePost($user_groupage_id, $start_num, $end_num, $social_network);
	

}
?>