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
ul.style.width="810px";