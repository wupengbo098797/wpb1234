function getByClass(oParent,sClass){
	var aElm=document.getElementsByTagName('#');
	var i=0;
	var aResult=[]
	for(i=0;i<aElm.length;i++){
		if(aElm[i].className==sClass){
			aResult.push(aElm[i])
			}
		}
		return aResult;			
	}

window.onload=function(){
	var oDiv=document.getElementById('playimages');	
	var oSmallUl=getByClass(oDiv,'small_pic')[0].getElementsByTagName('ul')[0]
	var aSmallLi=oSmallUl.getElementsByTagName('li');
	var oBigUl=getByClass(oDiv,'big_pic')[0]
	var aBigLi=oBigUl.getElementsByTagName('li')
	var i=0
	var iNow=0
	var iMinZindex=5;
	//小图预览UL的宽度 = 小图宽度 X 小图个数
	oSmallUl.style.width=aSmallLi[0].offsetWidth*aSmallLi.length+'px';
	
	for(i=0;i<aSmallLi.length;i++){
		aSmallLi[i].index=i
		aSmallLi[i].onmouseover=function(){
			startMove(this,{opacity:100})
		}
		aSmallLi[i].onmouseout=function(){
			if(this.index!=iNow){
				startMove(this,{opacity:100})
			}
		}
		aSmallLi[i].onclick=function(){
			if(iNow==this.index){return}
			iNow=this.index
			tab();//切换图片
		}

	}
		
	function tab(){ 
		//将所有小图透明度降低
		for(i=0;i<aSmallLi.length;i++){
			startMove(aSmallLi[i],{opacity:50})
		}
		//将当前小图显示
		startMove(aSmallLi[iNow],{opacity:100})
		//当前大图z坐标提升
		aBigLi[iNow].style.zIndex=iMinZindex++
	}
}