function addTab(index, content){

	var local_index = index;
	//tab_waiting_id[local_index] = global_runtime_tab_id;
	//global_runtime_tab_id++;
	
	$("#PGroupageStream-tab-list").append("<li class=\"ui-state-default ui-corner-top\"><a href=\"#PGroupageStream-tabs-"+index +"\"><span id=\"PGroupageStream-tabs"+index +"\">"+content+"</span></a></li>");
	
	var x = "<li><a href=\"#PGroupageStream-tabs-"+index +"\"><span id=\"PGroupageStream-tabs"+index +"\">"+content+"</span></a></li>"

	var state = "收尋中...";
	
	var tabs_content = "<p style='margin-left:00px; margin-right:00px'>";
	tabs_content = tabs_content + "<div style='overflow:scroll; height:600px' id=\"PGroupageStream-tabs-"+ index +"\">";                                //function tabs_select_all(index){
	tabs_content = tabs_content + "<table border='0'><tr>";
	tabs_content = tabs_content + "<td width='43' valign='middle' align='right'><img width='30' src='http://WsharE.us/img/star_select_all.png' id='open_group_page"+ index+"' onclick='tabs_select_all("+index+")' /></td>";
	tabs_content = tabs_content + "<td valign='center'>全選/全取消</td>";
	tabs_content = tabs_content + "<td width='70'></td>";
	tabs_content = tabs_content + "<td height='65'>";
	tabs_content = tabs_content + "<div id='wait-index-"+ index +"' style='' ></div>";
	tabs_content = tabs_content + "<div id='complete-index-"+ index +"' style='display:none;' ><img src='http://WsharE.us/img/complete_logo.png' width='30'></img></div>";
	tabs_content = tabs_content + "</td>";
	tabs_content = tabs_content + "<td valign='middle' width='580'><b><span style='font-color:gray;' id='tab-state"+index+"'>"+"123"+"</span></b></td>";
	tabs_content = tabs_content + "</tr></table>";
	tabs_content = tabs_content + "</div></p>";
	
	$("#PGroupageStream-tabs").append(tabs_content);

	//table_content =   "<table id=\"recommended_page_list"+tab_waiting_id[local_index] +"\"></table><div id=\"recommended_list_pager"+tab_waiting_id[local_index] +"\"></div>";
	
	//$('#group_page_list_dialog').append(table_content);
}


function showPost(){
	/*
	var post_content = "<div id=\'post_content_index_"+ tab_waiting_id[tab_index] +"_"+post_id+"\'>";
	//var post_content = "<div id=\'post_content_index_"+post_id+"\'>";
	post_content = post_content  + '<table border="0" width="300" style="table-layout: fixed;word-wrap: break-word; overflow: hidden;" >' ;
	post_content = post_content  + '<tr>' ;
	post_content = post_content  + '<td width="50">' ;
	post_content = post_content  + '<div align="center">' ;
	post_content = post_content  + '</div>' ;
	post_content = post_content  + '</td>' ;
	post_content = post_content  + '<td width="100" rowspan="3">' ;
	post_content = post_content  + '<img width="80" src="'+pic_url+'"  />' ;
	post_content = post_content  + '</td>' ;
	post_content = post_content  + '<td width="800" height="88" valign="top">' ;// 以下為可以控制table欄寬的地方
	post_content = post_content  + '<img width="35" src="'+groupage_pic+'"></img>' ;
	post_content = post_content  + '<a href="'+post_link+'" style="color:#2C7BBE" target="_blank"><span style="font-size:16px;">'+title+'</span></a>';
	post_content = post_content  + '<span>　　</span>';
	post_content = post_content  + '<img src="http://WsharE.us/img/facebook_like_button.jpg" />';
	post_content = post_content  + '<b>'+likes+' 人按讚!'+'</b><span>　　</span>';
	post_content = post_content  + '<div id="comment-add_'+ local_runtime_post_id +'" style="display:none;"><img src="http://WsharE.us/img/wait_gif.gif" width="30"></img><span>接文中...</span></div>';//
	post_content = post_content  + '<div id="comment-done_'+ local_runtime_post_id +'" style="display:none;"><img src="http://WsharE.us/img/complete_logo.png" width="30"></img><span>接文成功!!</span></div>';
	post_content = post_content  + '<br/>';
	post_content = post_content  + '</td>';
	post_content = post_content  + '</tr>';
	post_content = post_content  + '<tr height="20">' ;
	post_content = post_content  + '<td rowspan="2" valign="top">' ;
	post_content = post_content  + '<span>&nbsp;&nbsp;&nbsp;</span><img width="28" id="selected-pic'+ local_runtime_post_id +'" src="http://WsharE.us/img/star_select_all.png" onclick="select_post('+local_runtime_post_id+')"></img>' ;
	post_content = post_content  + '<div align="center" style="display:none;">'; //
	post_content = post_content  + '<input id="selected-checkbox_'+local_runtime_post_id +'" type="checkbox" value="'+post_id+'">';
	post_content = post_content  + '</div></td>';
	post_content = post_content  + '<td style="width="10;" valign="top" align="left" style="word-wrap:break-word; overflow:hidden;" id="tabs-'+tab_waiting_id[tab_index]+'_post'+local_runtime_post_id+'">';
	post_content = post_content  + '<div width="10" style="word-wrap:break-word; overflow:hidden; font-size:16px;">'+message+'</div><p/>';
	post_content = post_content  + '</td>' +'</tr>' ;
	post_content = post_content  + '<tr>' ;
	post_content = post_content  + '<td id="tabs-'+tab_waiting_id[tab_index]+'_post_'+local_runtime_post_id+'_likes">';
	post_content = post_content  + '<b>'+attachment_name+'</b><p/>';
	
	*/
}

function showPGroupagePost(user_groupage_id, start_num, end_num, social_network){
	$.ajax({
		url:'control.PGroupageStream.php',
		data:({
			func:'showPGroupagePost',
			user_groupage_id : user_groupage_id,
			start_num : start_num, 
			end_num : end_num,
			social_network : social_network
		}),
		dataType: 'json',
		async: true,
		success: function(result){
			//alert(result['pic_url']);
			if( result == null ) {
				$("#timeline-content").html("没有结果。");
			} else {
				$("#timeline-content").html("加载中...");
			}
		}
	});
}
/*
function showPic(user_groupage_id){
	$.ajax({
		url:'control.CharityProfile.php',
		data:({
			func:'showPic',
			user_groupage_id: user_groupage_id
		}),
		dataType: 'json',
		async: true,
		success: function(result){
			alert(result['pic_url']);
		}
	});
}
function showLoveNum(user_groupage_id){
	$.ajax({
		url:'control.CharityProfile.php',
		data:({
			func:'showLoveNum',
			user_groupage_id: user_groupage_id
		}),
		dataType: 'json',
		async: true,
		success: function(result){
			alert(result['love_num']);
		}
	});
}
function showMemberNum(user_groupage_id){
	$.ajax({
		url:'control.CharityProfile.php',
		data:({
			func:'showMemberNum',
			user_groupage_id: user_groupage_id
		}),
		dataType: 'json',
		async: true,
		success: function(result){
			alert(result['member_num']);
		}
	});
}
*/