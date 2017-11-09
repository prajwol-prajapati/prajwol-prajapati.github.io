var mainWrapper = document.getElementById('main-wrapper');

var newElement = document.createElement("div");

newElement.style.background = "grey";
newElement.style.width = "1000px";
// newElement.style.height = "1000px";
newElement.style.margin = "0 auto";
newElement.setAttribute("id", "content-container");
newElement.style.position="relative"
newElement.display="table";
		
mainWrapper.appendChild(newElement);

var personalProfile = {
	name: "Prajwol Prajapati",
	Address: "Balaju, Bypass",
	dob: "1996-03-16",
	gender: "Male",
	nationality: "Nepali",
	education : "BIM",
	projects: [
		"Android basic Chat Application(7th Sem Project)",
		"Admin Panel For Nepali License Test(8th sem Project)"
	],
	experience: [
		"Worked at Cloudfactory for more than a year as a data entry worker",
		"Internship in Beetech Solutions Pvt. Ltd. in Android Development and PHP Laravel Development"

	]
}
var objectKeys = Object.keys(personalProfile); 
for(var i=0; i<objectKeys.length; i++) {
	var key = objectKeys[i];
	console.log( "key: ", key );
	// if(personalProfile[key][0])

	
	var ul = document.createElement("ul");
	newElement.appendChild(ul);
	var li = document.createElement("li");
	li.innerHTML=key+"  :  "+personalProfile[key];
	ul.appendChild(li);


	console.log("value: ", personalProfile[ key ] );
}