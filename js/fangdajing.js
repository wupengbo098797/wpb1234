function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}

//放大效果
function scale1(evt){
		//1、数据（放大镜的left和top）
		let left1 = evt.pageX-$("#big_pic").offsetLeft-90;
		let top1 = evt.pageY-$("#big_pic").offsetTop-90;
		
		if(left1<0){
			left1=0;
		}else if(left1>400-180){
			left1 = 400-180;
		}
		
		if(top1<0){
			top1=0;
		}else if(top1>417-180){
			top1 = 417-180;
		}
		
		//2、外观
		$("#mirrorBox").style.left = left1+"px";
		$("#mirrorBox").style.top = top1+"px";
		
		$("#showBox").style.backgroundPosition = (-2*left1)+"px "+(-2*top1)+"px";
}	

window.onload = function(){
	$("#big_pic").onmouseover = function(){
		$("#mirrorBox").style.display = "block";
		$("#showBox").style.display = "block";
	}
	
	$("#big_pic").onmouseout = function(){
		$("#mirrorBox").style.display = "none";
		$("#showBox").style.display = "none";
	}

	$("#big_pic").onmousemove = function(event){
		let evt = event || window.event;
		scale1(evt);
	}
	
	let liDoms = $("li");
	for(let i=0;i<liDoms.length;i++){
		liDoms[i].onclick = function(){
			let bgImg = getStyle(this,"backgroundImage");
			$("#big_pic").style.backgroundImage = bgImg;
			$("#showBox").style.backgroundImage = bgImg;
		}
	}

}
function getStyle(domObj,attr){
	if(domObj.currentStyle){
		return domObj.currentStyle[attr];
	}else{
		return window.getComputedStyle(domObj)[attr];
	}	
}