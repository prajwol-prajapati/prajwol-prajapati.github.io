// var mainWrapper = document.getElementById("main-wrapper");
// console.log(mainWrapper);

// var a = document.getElementsByClassName("second-div");
// console.log(a);

// mainWrapper.style.background = "red";

//exercise 3....................................................

var colorChanger = document.getElementById("color-changer");
colorChanger.style.background = "red";
colorChanger.style.width = "500px";
colorChanger.style.height = "500px";
colorChanger.style.position = relative;

var colors=["red", "blue", "green", "yellow"];
i=0;
colorChanger.onclick = function(){
	colorChanger.style.background = colors[i];
	i++;
	if(i>colors.length){
		i=0;
	}
}

//exercise 4............................................

var data = [
	{top:"2px", left:"5px"},
	{top:10, left:6},
	{top:1, left:6},
	{top:10, left:15},
];

for(i=0;i<data.length;i++){
	
		var newElement = document.createElement("div");

		newElement.style.background = "grey";
		newElement.style.width = "10px";
		newElement.style.height = "10px";
		newElement.style.position="absolute";
		newElement.style.left= data[0].left;
		newElement.style.top= data[0].top;

		colorChanger.appendChild(newElement);

}