// function Box{

// };








var mainWrapper = document.getElementById('main-wrapper');

var boxContainer = document.createElement("div");

boxContainer.style.background = "grey";
boxContainer.style.width = "1000px";
boxContainer.style.height = "1000px";
boxContainer.setAttribute("id", "box-container");
boxContainer.style.position="relative"
boxContainer.display="table";
		
mainWrapper.appendChild(boxContainer);

function Box(elementId){
	this.element = document.getElementById(elementId);
	this.x=0;
	this.y=0;
	this.dx=5;
	this.dy=0;
	this.width = this.element.style.get

	this.updatePosition = function(){
		this.x= this.x + this.dx;
		this.y= this.y+this.dy;
		this.element.style.top = this.y + "px";
		this.element.style.left = this.x + "px";
		if(this.x>=980){
			this.dx=-5;
		}
		if(this.x<=-1){
			this.dx=5;
		}
		if(this.y>=980){
			this.dy=-5;
		}
		if(this.y<=-1){
			this.dy=5;
		}
	}
}

var object = document.createElement("div");
	object.style.background = "white";
	object.style.width = "20px";
	object.style.height = "20px";
	object.style.position = "absolute";
	object.setAttribute("id", "box");
	boxContainer.appendChild(object);
	



 object = new Box("box");

 setInterval(function(){
 	

 	document.onkeydown = function(event) {
    console.log(event.keyCode);
    
    object.dx=5;

    // if(event.keyCode==37){
    // 	object.dx = -5;
    // 	object.dy = 0;

    // }
    // else if(event.keyCode==38){
    // 	object.dx=0;
    // 	object.dy = -5;
    // }
    // else if(event.keyCode==39){
    // 	object.dx = 5;
    // 	object.dy = 0;
    // }
    // else if(event.keyCode==40){
    // 	object.dx=0;
    // 	object.dy = 5;
    // }
    // if(){
	    switch(event.keyCode){
	    	
	    	case 37:
	    	object.dx = -5;
	    	object.dy = 0;
	    	
	    	break;

	    	case 38:
	    	object.dx=0;
	    	object.dy = -5;
	    	break;

	    	case 39:
	    	object.dx = 5;
	    	object.dy = 0;
	    	break;

	    	case 40:
	    	object.dx=0;
	    	object.dy = 5;
	    	break;

	    	default:


	    }
	// }

};

 	object.updatePosition();
 	
 }, 50);






//left=37 up=38 right=39 down=40