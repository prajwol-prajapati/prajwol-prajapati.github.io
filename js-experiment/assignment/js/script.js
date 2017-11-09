// function getFullName(fname, lname){
// 	return(fname+" "+lname);
// // }
function reverseArray(array){
	for (var i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
}

// var fname="prajwol";
// var lname="prajapati";
// console.log(getFullName(fname, lname));

// var username ={
// 	fname:"prajwol",
// 	lname:"prajapati",
// 	displayFullName: function(){
// 		var fullname=this.fname+this.lname;
// 		return(fullname);
// 	}
// }
// username.displayFullName();
var array = [1, 2,3,4,5];
reverseArray(array);

// function searchFruit(index){
// 	return 
// }
var fruits = [
	{id:1, name:'apple', color: 'red'},
	{id:2, name:'banana',color: 'yellow'}
	
];
function searchFruit(id){
		for(var i=0; i<fruits.length; i++){
			if(fruits[i].id == id){
				return fruits[i].name;
				
			}
		}
	}
console.log(searchFruit(1));

function getData(onSuccess){
	var data ={
		name:"ng-book", author:"Ari Lerner"
	};
	//todo:code tofetch data from server
	onSuccess(data);
}

getData(function(book){
	console.log(book);
});

function initData(_name, _author){
	var data = {name:_name, author: _author};
	return function(){
		return data;
	}
}
var getData = initData("ng-book", "Ari Ler");
console.log(getData());


// console.log("from outside");
// var i=0;
// function setInterval(function() {
// 	console.log("from inside");
// 	i++;
// 	console.log(i);
// }, 2000);
console.log("from outside");
// var i=0;
// setInterval(function(){
// 	console.log("from inside");
// 	// i++;
// 	// console.log(i);
// }, 2000);



var someFunc = function(x) {
	return function() {
		console.log(x);
	}
}; 

function counter() {
	for(var i=0; i < 10; i++) {
		console.log(i);
		setTimeout(someFunc(i), 100);
	}
}
counter();