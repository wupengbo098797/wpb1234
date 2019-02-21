<?php
	header("content-type:text/html;Charset=utf-8");

	// 一 获取用户输入
	$username = $_POST['username'];
	$userpass = $_POST['userpass'];
	// $userphone = $_POST['userphone'];

	//通过post获取到name值为userage的值

	// 1建立连接
	$conn = mysql_connect('localhost','root','root');	//连接mysql 本机 用户名root 密码root 
	
	// 2选择数据库
	mysql_select_db('myxtep',$conn);						//选择数据库 select = 查找 在1809下查找$conn 
	
	// 3执行sql语句
	$sqlstr="select * from xtep where username='$username'";	//在from学生表单里面查找id
	$result = mysql_query($sqlstr,$conn);					//执行
	
	if(mysql_num_rows($result)>0){							//如果找到则>0 
		mysql_close($conn);		//关闭数据库
		echo "-1";								//echo 返回
	}else{													//否则
		$sqlstr1 = "insert into xtep(username,userpass) values('".$username."','".$userpass."')";
		$result1 = mysql_query($sqlstr1,$conn);
	///关闭数据库
	// 4关闭数据库(过河拆桥);		//在学生表单里插入value值 获取到的所有stu值
		mysql_close($conn);	
		// 三,响应
		if($result1==0){						//响应 如果等于1 说明已经插入成功	 
			echo "0";					//则 返回注册成功
		}else{									//否则
			echo "1";					//返回注册失败//
		}
}
?>