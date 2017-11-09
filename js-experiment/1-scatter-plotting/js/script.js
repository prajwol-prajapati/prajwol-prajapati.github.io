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
 var leftsize=[];
 var topsize=[];
for(i=0;i<10;i++){
	
		var dots = document.createElement("div");

		dots.style.background = "white";
		dots.style.width = "10px";
		dots.style.height = "10px";
		dots.style.position = "absolute";
		leftsize = getRandomArbitrary(0, 500)+"px";
		topsize = getRandomArbitrary(0, 500)+"px";

		dots.style.left = leftsize;
		dots.style.top = topsize;
		

		

		newElement.appendChild(dots);
		dots.onclick = function() {
			newElement.removeChild(this);
			var ul = document.createElement("ul");
			mainWrapper.appendChild(ul);
			var li = document.createElement("li");
			li.innerHTML=" Top: "+topsize+" Left: "+leftsize;
			ul.appendChild(li);

		};

}


for(i=0;i<dots.length;i++){
	dots.onclick = function() {
	newElement.removeChild(dots[i]);
};

}