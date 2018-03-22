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
	
}
