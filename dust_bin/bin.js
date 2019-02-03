	// console.log("window_width " + window_width);
	// console.log("window_height " + window_height);
	// console.log("window_height-40= " + (window_height-40));
	// console.log("desktop_icons_per_lie " + desktop_icons_per_lie);
	// console.log("desktop_icons_per_hang " + desktop_icons_per_hang);
    // console.log(cnt_of_all_block + ".the_end");
    
	// $(".desktop_icon").draggable({
	// 	opacity: 0.7,
	// 	scroll: false,
	// 	containment: "parent",
	// 	// snap: true,
	// 	// snapMode: "outer",
	// 	// snapTolerance: 30,
	// 	revert: "valid",
	// 	start: function(){
	// 		// return false;
	// 	},
	// 	drag: function(){
	// 		// return false;
	// 	},
	// 	end: function(){
	// 		// return false;
	// 	}
	// }).droppable();

	// $("#dragme").draggable({
	// 	containment: "parent"
	// });
	
//			var tmp_icon_pos = "(" + tmp_hang_pos + "," + tmp_lie_pos + ")";
//			console.log("icon_pos:" + tmp_icon_pos + ".the_end");
//			if($(this).parent().attr("id") != "innerdesktop"){
//				$(this).unwrap();
//			}
//			var temp=new blockDrag({
//				boxNode: "#innerdesktop",
//				dragNode: "#" + the_id,
//				blockW: 75,
//				blockH: 100,
//				block: cnt_of_all_block,
//				startPos: tmp_icon_pos
//			});

//		tmp_element.attr('tabindex',"-1");
//		tmp_element.bind('click', function () { this.focus(); });
			// console.log(tmp_element.html() );
			

//	$("#innerdesktop").contextMenu("desktop_menu_normal",
//	{
//		//菜单样式
//		menuStyle: {
//			border: "1px solid darkgray",
//			padding: "4px 2px",
//			width: "200px"
//		},
//		//菜单项样式
//		itemStyle: {
//			fontFamily: 'Microsoft Yahei',
//			backgroundColor: "white",
//			color: "black",
//			border: 'none',
//			padding: "2px 5px",
//			height: "22px"
//
//		},
//		//菜单项鼠标放在上面样式
//		itemHoverStyle: {
//			color: 'blue',
//			backgroundColor: 'red',
//			border: 'none'
//		},
//		bindings: {'open': function(t) {
//				console.log(t);
//			},
//			'email': function(t) {
//				console.log(t);
//			},
//			'save': function(t) {
//				console.log(t);
//			},
//			'delete': function(t) {
//				console.log(t);
//			}
//		}
//	});



									target_window.detach();
									console.log("detach");
									$("#innerdesktop").append(target_window,function(){
										target_window.show();
										console.log("ok , last now");
									});