var data = [
{
 tagName: 'div',
 className: 'test-class',
 styles: {
   width: "100px",
   height: "100px",
   backgroundColor: 'red'
 },
 children: [
	 {
	   tagName: 'div',
	   className: 'box',
	   styles: {
	     width: "50px",
	     height: "50px",
	     backgroundColor: 'blue'
	   },
	 },
	 {
	   tagName: 'div',
	   className: 'box',
	   styles: {
	     width: "50px",
	     height: "50px",
	     backgroundColor: 'brown',
	     float: 'right'
	   },
	 }
 ]
}
];



function displayData() {
  for(var i=0;i<data.length;i++) {
    var mainWrapper = document.createElement(data[i].tagName);
    mainWrapper.className = data[i].className;

    styleArray=data[i].styles
    var keys = Object.keys(styleArray);

    for(var k=0;k<keys.length; k++) {
    	console.log([keys[k]]);
      mainWrapper.style[keys[k]] = styleArray[keys[k]];
    }

    document.body.appendChild(mainWrapper);

    if(data[i].children) {
      var dataChildren = data[i].children;
      
      for(var j=0; j<dataChildren.length; j++) {
        var child = document.createElement(dataChildren[j].tagName);
        child.className = dataChildren[j].className;
        styleArray=dataChildren[j].styles
        var key = Object.keys(styleArray);

        for(var k=0;k<key.length; k++) {
          child.style[key[k]] = styleArray[key[k]];
        }



        mainWrapper.appendChild(child);
      }
    }

  }
}



displayData();
