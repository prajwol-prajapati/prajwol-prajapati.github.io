
function Box(elementId){
	this.element = document.getElementById(elementId);
	this.x;
	this.y;
	this.dx=5;
	this.dy=5;
	var that=this;
	

	this.updatePosition = function(){
		this.x= this.x + this.dx;
		this.y= this.y+this.dy;
		this.element.style.top = this.y + "px";
		this.element.style.left = this.x + "px";
		if(this.x>=480){
			this.dx=-5;
		}
		if(this.x<=0){
			this.dx=5;
		}
		if(this.y>=480){
			this.dy=-5;
		}
		if(this.y<=0){
			this.dy=5;
		}
	}
	
}





var mainWrapper = document.getElementById('main-wrapper');

var newElement = document.createElement("div");

newElement.style.background = "grey";
newElement.style.width = "500px";
newElement.style.height = "500px";
newElement.setAttribute("id", "box");
newElement.style.position="relative"
newElement.display="table";
		
mainWrapper.appendChild(newElement);

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;

}

// var data = [
// 	{top:2, left:5},
// 	{top:10, left:6},
// 	{top:1, left:6},
// 	{top:10, left:15},
// ];
var antArray= [];
for(i=0;i<10;i++){
	
		var ant = document.createElement("div");
		ant.className = ""
		ant.style.background = "white";
		ant.style.width = "20px";
		ant.style.height = "20px";
		ant.style.position = "absolute";
		ant.setAttribute("id", "ant"+i);
		var x=Math.random()*480;
		var y=Math.random()*480;
		ant.style.left=x+"px";
		ant.style.top=y+"px";

		newElement.appendChild(ant);
		
			// var ul = document.createElement("ul");
			// mainWrapper.appendChild(ul);
			// var li = document.createElement("li");
			// li.setAttribute("id", "ant");
			// li.innerHTML=" Top: "+topsize+" Left: "+leftsize;
			// ul.appendChild(li);
		// antArray[i] = ant;
		console.log("before click");
		ant.onclick = function() {
			console.log("click");
			newElement.removeChild(this);	

		};
		
		ant[i] = new Box("ant"+i);
		ant[i].x = x;
		ant[i].y = y;
		antArray[i]= ant[i];
		

}
console.log(antArray);
setInterval(function(){
		for(i=0;i<antArray.length;i++){
 			antArray[i].updatePosition();
		}
	 	
		}, 100);




 	


// for(i=0;i<dots.length;i++){
// 	dots.onclick = function() {
// 	newElement.removeChild(dots[i]);
// };

// }