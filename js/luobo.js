
	let myTimer =null;
	let currIndex = 0;

	//自动播放
	function autoPlay(){
		if(myTimer=null){
			return;
		}
		myTimer = setInterval(function(){
			//处理数据
			currIndex=currIndex+1;
			if(currIndex>=4){
				currIndex=0;
			}
			//外观呈现
			showImg(currIndex);
		},3000);
	}

//停止播放
function stopPlay(){
	window.clearInterval(myTimer);
	myTimer = null;
}
//跳转到对应的图片上
function goImg(index){
	//处理数据
	currIndex = index;
	if(currIndex>=4 || currIndex<0){
		currIndex = 0;
	}
	//外观呈现
	showImg(currIndex);
}
//现实指定的图片
function showImg(ord){
	//改图片 
	let imgDoms=$("#box").children;
	for (let i=0;i<imgDoms.length-1;i++){
		imgDoms[i].style.zIndex = 1;
	}
	imgDoms[ord].style.zIndex=2;

	//改豆豆

	let liDoms = $("#doudouBox").children;
	for(var i=0;i<liDoms.length;i++){
		liDoms[i].style.backgroundColor = "#000";
	}
	liDoms[ord].style.backgroundColor = "red";
}


window.onload = function(){
	//自动播放
	autoPlay();
	//鼠标进入停止播放
	// $("#box").onmouseover = function(){
	// 	stopPlay();
	// }
	//数遍离开继续播放
	$("box").onmouseout = function(){
		autoPlay();
	}

	let liDoms = $("#doudouBox").children;
	for(var i=0;i<liDoms.length;i++){
		liDoms[i].setAttribute("index",i);
		//绑定事件
		liDoms[i].onclick = function(event){
			let evt = event || window.event;
			goImg(this.getAttribute("index"));
			evt.stopPropagation();
		}
	}
}
function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
// 	window.onload = function(){
// 	//1、流程
// 	let s1 = new Slider({
// 		$box:$("#box"),
// 		width:1600,
// 		height:600,
// 		imgs:["img/lunbo.jpg","img/lunbo2.jpg","img/lunbo3.jpg","img/lunbo4.jpg"],
// 		btnColor:"transparent",
// 		btnHighColor:'transparent',
// 		btnSize:20,
// 		isCircle:true,
// 		timeSpace:3000
// 	});
// }