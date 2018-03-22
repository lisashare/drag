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
			this.disX = e.clientX - this.ele.offsetLeft;
			this.disY = e.clientY - this.ele.offsetTop;
			document.onmousemove = function(evt){
				that.fnMove(evt);
			}
			document.onmouseup = this.fnUp;
			document.ondragStart = function(){
				return false;
			}
		}
	}
	fnMove(evt){
		
	}
}
