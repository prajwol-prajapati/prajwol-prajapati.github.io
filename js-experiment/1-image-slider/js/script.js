var mainWrapper = document.getElementById('main-wrapper');

var newElement = document.createElement("div");

newElement.style.background = "grey";
newElement.style.width = "270px";
newElement.style.height = "270px";
newElement.setAttribute("id", "box");
newElement.style.position="relative"
newElement.display="table";
newElement.style.overflow="hidden";
newElement.style.position="relative";

mainWrapper.appendChild(newElement);



var images = ["images/a.png", "images/b.png", "images/c.png", "images/d.png", "images/e.png"];
// var objectKeys = Object.keys(per); 
var ul = document.createElement("ul");
newElement.appendChild(ul);
ul.style.position="absolute";
ul.style.width="5000px";

	// ul.style.display="inline-block";
	for(var i=0; i<images.length; i++) {
		
		// if(personalProfile[key][0])

		var li = document.createElement("li");
		li.style.listStyle="none";
		
		li.style.display="inline-block";
		

		
		ul.appendChild(li);
		var img = document.createElement("img");
		ul.style.margin="0px";
		ul.style.padding="0px";
		img.setAttribute("src", images[i]);
		li.appendChild(img);


		// console.log("value: ", personalProfile[ key ] );
	}

	var next= document.createElement("button");
	next.setAttribute("id", "next");
	mainWrapper.appendChild(next);
	next.innerHTML="Next";

	var prev= document.createElement("button");
	prev.setAttribute("id", "prev");
	prev.innerHTML="Prev";
	
	mainWrapper.appendChild(prev);
	mainWrapper.appendChild(next);
	var leftsize=0;
	var flag=true;
	ul.style.left = leftsize+"px";
	next.onclick=function(){
		var counter=1;
		if(flag){
			flag=false;
			var checker=setInterval(function(){
				if((leftsize)<=-((images.length-1)*270)){
					leftsize=0;
					ul.style.left= (leftsize)+ "px";
					clearInterval(checker);
					flag=true;
				}
				else{
					leftsize=leftsize-2.70;
					ul.style.left= (leftsize)+ "px";
					counter++;
					if(counter>100){
							clearInterval(checker);
							flag=true;
						}
				}
			},1);
		}
	
		
		// for(i=1; i<=270;i++){
		// 	leftsize--;
		// 	ul.style.left= leftsize+ "px";
		// }
	}

	prev.onclick=function(){
		var counter=1;
		if(flag){
			flag=false;
			var checker=setInterval(function(){
				if((leftsize)>=0){
					leftsize=-((images.length-1)*270);
					ul.style.left= (leftsize)+ "px";
					clearInterval(checker);
					flag=true;
				}
				else{
					leftsize=leftsize+2.70;
					counter++;
					ul.style.left= (leftsize)+ "px";
					if(counter>100){
						clearInterval(checker);
						flag=true;
					}
				}	

			},1);
		}
		// ul.style.left= (leftsize+270)+ "px";
		// for(i=1; i<=270;i++){
		// 	leftsize--;
		// 	ul.style.left= leftsize+ "px";
		// }
	}
