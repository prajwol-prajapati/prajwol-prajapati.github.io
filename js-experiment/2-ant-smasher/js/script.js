
function Box(elementId){
	

	this.element = document.getElementById(elementId);
	this.x;
	this.y;
	this.dx=5;
	this.dy=5;
	this.bx=this.x;
	this.by=this.y;
	var that=this;

	// this.a = this.x + 20;
	// this.b = this.y + 20;
	// this.ab;
	// for(i = 0; i<20; i++){
	// 	that.ab[i] = 
	// }

	this.updatePosition = function(){
		this.x= this.x + this.dx;
		this.y= this.y+this.dy;
		this.element.style.top = this.y + "px";
		this.element.style.left = this.x + "px";
		if(this.x>=460){
			this.dx=-5;
		}
		if(this.x<=0){
			this.dx=5;
		}
		if(this.y>=460){
			this.dy=-5;
		}
		if(this.y<=0){
			this.dy=5;
		}

	}
	
}



var mainWrapper = document.getElementById("mainWrapper");


function World(){
	var that =  this;
	var Button = function(type) {
        this.element = document.createElement('button');
        this.element.style.width = '200px';
        this.element.style.height = '100px';
        this.element.innerHTML = type;
        this.element.fontSize = '20pt';
       

    }

		this.startScreen = document.createElement('div');
    this.startScreen.style.width = '100%';
    this.startScreen.style.height = '100vh';
    this.startScreen.style.display = 'table';
    this.startScreen.style.background = 'yellow';
    this.startScreen.innerHTML = "<h1>Welcome to AntSmasher Game</h1>"
    this.startScreen.style.textAlign = 'center';

    this.startButton = new Button('Start');

this.init = function(){
this.newElement = document.createElement("div");

this.newElement.style.background = "grey";
this.newElement.style.width = "500px";
this.newElement.style.height = "500px";
this.newElement.setAttribute("id", "world");
this.newElement.style.position="relative"
this.newElement.display="table";
	
}
}
	
var world = new World();	
world.init();

mainWrapper.appendChild(world.newElement);

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;

// }

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
		ant.style.background = "url(images/ant.png)no-repeat";
		ant.style.width = "20px";
		ant.style.height = "20px";
		ant.style.position = "absolute";
		ant.setAttribute("id", "ant"+i);
		var x=Math.random()*460;
		var y=Math.random()*460;
		ant.style.left=x+"px";
		ant.style.top=y+"px";

		world.newElement.appendChild(ant);
		
			// var ul = document.createElement("ul");
			// mainWrapper.appendChild(ul);
			// var li = document.createElement("li");
			// li.setAttribute("id", "ant");
			// li.innerHTML=" Top: "+topsize+" Left: "+leftsize;
			// ul.appendChild(li);
		// antArray[i] = ant;



		ant.onclick = function() {
			console.log("click");
			
			this.style.backgroundImage="url('images/blood.png')";
			that =this;
			setTimeout(	function(){	
				world.newElement.removeChild(that);
				},200)	

		};
		
		ant = new Box("ant"+i);
		ant.x = x;
		ant.y = y;
		antArray.push(ant);
		

}
console.log(antArray[2].x);
setInterval(function(){
		for(i = 0; i < antArray.length; i++){
 			
 			for(var j = 0; j  < antArray.length; j++){
 				console.log(antArray[j].x);
 				if (antArray[i] == antArray[j]){
 					console.log("self collide");
 				}else if ( (antArray[i].x)<=(antArray[j].x+20) && (antArray[i].x + 20)>=(antArray[j].x) && (antArray[i].y)<=(antArray[j].y+20) && (antArray[i].y + 20)>=(antArray[j].y)){
 					antArray[i].dx = antArray[i].dx * -1;
 					antArray[j].dx = antArray[j].dx * -1;
				
					antArray[i].dy = antArray[i].dy * -1;
 					antArray[j].dy = antArray[j].dy * -1;
				}
		
 			}


 			antArray[i].updatePosition();
		}
	 	
		}, 100);




 	


// for(i=0;i<dots.length;i++){
// 	dots.onclick = function() {
// 	newElement.removeChild(dots[i]);
// };

// }