class Drag{
	
	//里面添加原型方法
	constructor(id){
		//构造器
		this.ele = document.getElementById(id);
		var that = this;
		this.ele.onmousedown = function(evt){
			that.fnDown(evt);
		}
	}
	fnDown(evt){
		//兼容
		var e = evt || window.event;
		var target = e.target || e.srcElement;
		var that = this;
		if(target.id == "mouse_head"){
			this.disX = e.pageX - this.ele.offsetLeft;
			this.disY = e.pageY - this.ele.offsetTop;
			
			document.onmousemove = function(evt){
				that.fnMove(evt);
			}
			document.onmouseup = this.fnUp;
			document.ondragstart = function(){
				return false;
			}
		}
	}
	fnMove(evt){
		var e = evt || window.event;
		var left = e.pageX - this.disX;
		var top = e.pageY - this.disY;
		if(left <= 0){left = 0;}
		else if(left >= (document.documentElement.clientWidth - this.ele.offsetWidth) ){
			left = document.documentElement.clientWidth - this.ele.offsetWidth;
		}
		if(top <= 0){
			top = 0;
		}else if(top >= document.documentElement.clientHeight - this.ele.offsetHeight){
			top = document.documentElement.clientHeight - this.ele.offsetHeight;
		}
		this.ele.style.left = left + "px";
		this.ele.style.top = top + "px";
	}
	fnUp(){
		document.onmousemove = null;
	}
}
