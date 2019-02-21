function $(id){
		return document.getElementById(id);
	}
	
	window.onload = function(){

		$("buttn").onclick = function(){		//给按钮绑定点击事件
			// console.log("username="+$("username").value+"&userpass="+$("userpass").value)
			// 1创建对象 
			let xhr = new XMLHttpRequest();		
			// 2设置请求参数
			xhr.open("post","js/denglu.php",true);
			// 3设置回调函数
			xhr.onreadystatechange = function(){
				if(xhr.readyState==4 && xhr.status==200){
					if(xhr.responseText=="1"){
						// auto_index();
						// cookie
						// saveCookie("username",$("username").value,7);
						// 跳首页
						alert("登陆成功,点击确定按钮跳转至首页");
						window.location.href="index.html";
					}else{
						alert("用户名或者密码不正确！");
					}
				}
				// 5接受响应
			}
		xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
			
			// 4发送
			xhr.send("username="+$("username").value+"&userpass="+$("userpass").value);		
		}
	}
	
// 	function auto_index(){
// 		setInterval(function(){
// 				location.href="index.html"
// 		},3000);
// 	}
// }
	// $("stupass").onblur = function(){
	// 	let test;
	// 	if(this.value.length<6 || this.value.length>16){
	// 		$("inner_spans").style.display="block";
	// 		$("inner_spans").style.color="red";
	// 		$("inner_spans").style.fontSize="12px";
	// 		$("inner_spans").innerHTML="请输入6-16位密码";
	// 		test = false;
	// 		$("btn").style.display = "none";
	// 	}else{
	// 		$("inner_spans").style.display="none";
	// 		test = true;
	// 		$("btn").style.display = "block";
	// 	}
	// }