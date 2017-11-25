class NavButtons{
	constructor(){
		this.editButton = document.getElementById('editViewButton');
		this.previewButton = document.getElementById('previewButton');
		this.editButton.onclick = () => {
			this.editView();
		}
		this.previewButton.onclick = () => {
			this.preView();
		}
		this.downloadCounter = 0;
	}

	editView(){
		this.preview = document.getElementById('previewLayout');
		this.parent = this.preview.parentElement;
		this.parent.removeChild(this.preview);

		this.previewButton = document.getElementById('previewButton');
		this.previewButton.setAttribute('class', '');
		this.previewButton.removeAttribute('disabled', 'true');
		this.editViewButton = document.getElementById('editViewButton');
		this.editViewButton.setAttribute('class', 'active');
		this.editViewButton.setAttribute('disabled', 'true');

		this.edit = document.createElement('link');
		this.edit.setAttribute('id', 'editLayout');
		this.edit.setAttribute('rel', 'stylesheet');
		this.edit.setAttribute('href', 'css/edit-layout.css');
		this.parent.appendChild(this.edit);
	}

	preView(){
		this.edit = document.getElementById('editLayout');
		this.parent = this.edit.parentElement;
		this.parent.removeChild(this.edit);

		this.previewButton = document.getElementById('previewButton');
		this.previewButton.setAttribute('class', 'active');
		this.previewButton.setAttribute('disabled', 'true');

		this.editViewButton = document.getElementById('editViewButton');
		this.editViewButton.setAttribute('class', '');
		this.editViewButton.removeAttribute('disabled', 'true');


		this.preview = document.createElement('link');
		this.preview.setAttribute('id', 'previewLayout');
		this.preview.setAttribute('rel', 'stylesheet');
		this.preview.setAttribute('href', 'css/preview-layout.css');
		this.parent.appendChild(this.preview);
	}

	downloadButton(){
		let htmlStart = `<!DOCTYPE html>
		<html>
			<head>
				
				<title>Web Builder</title>
				<link rel="stylesheet" href="reset.css">
				<link rel="stylesheet" href="layout.css">
				<link rel="stylesheet" href="style.css">
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">

				
			</head>
			<body>
				<div class="main-container">`;
		let htmlEnd = `</div>
		</body>
		</html>`;

		let editPanel = document.getElementById('editPanel');
		console.log(editPanel.innerHTML);
		let htmlData = editPanel.innerHTML;
		let totalData = htmlStart + htmlData + htmlEnd;
		let resetCSS = `*{
			margin: 0px;
			padding: 0px;
			/*text-align: center;*/
		}

		.clearfix:before,
		.clearfix:after {
		  content: "";
		  display: table;
		} 
		.clearfix:after {
		  clear: both;
		}
		.clearfix {
		  zoom: 1; /* For IE 6/7 (trigger hasLayout) */
		}`;
		let styleCSS = `
		.pull-right{
			float: right;
		}

		.pull-left{
			float: left:;
		}

		.nav-bar>.nav>ul>li{
			display: inline-block;
			list-style: none;
		}

		.nav-bar{

		}

		.button-group{

		}

		.side-bar ul li{
			list-style: none;
			/*font-size: 22px;*/
			color: white;
			cursor: pointer;
		}

		table {
		    border-collapse: collapse;
		    width: 100%;
		}

		th, td {
		    text-align: left;
		    padding: 8px;
		}
		img{
			width: 100%;
		}
		tr:nth-child(even){background-color: #f2f2f2}

		th {
		    background-color: #4CAF50;
		    color: white;
		}


		#formElement{
			width: 100%;
			min-width:2em;
			
			min-height: 2em;
		}
		/*.side-bar>ul>li>ul>li{
			display: none;
			font-size: 20px;
			color: yellow;
		}

		.side-bar ul li:hover ul>li{
			display: block;
		}

		.side-bar>ul>li>ul>li>ul>li{
			display: none;
			font-size: 16px;
			color: red;
		}

		.side-bar>ul>li>ul>li:hover ul>li{
			display: block;
		}*/`;

		let layoutCSS = `.col-1 {width: 7.33%;}
		.col-2 {width: 15.66%;}
		.col-3 {width: 24%;}
		.col-4 {width: 32.33%;}
		.col-5 {width: 40.66%;}
		.col-6 {width: 49%;}
		.col-7 {width: 57.33%;}
		.col-8 {width: 65.66%;}
		.col-9 {width: 74%;}
		.col-10 {width: 82.33%;}
		.col-11 {width: 90.66%;}
		.col-12 {width: 100%;}


		body {
		  	margin: 0 auto;
		  	max-width: 100%;
			/*height: 100vh;*/

		}

		.main-container{
			
			
			min-height: 100vh;/*remove*/
			position: relative;
			padding-left: 1em;
			padding-right: 1em;
			/*background: green;	*/

		}

		.main-container .edit{
			margin-left: 0em;/*200px*/	
			min-height:95vh;
			/*background: red;*/	
			/*display: none;*/
		}


		.nav-bar{
			display: none;
			height: 2em;
			position: fixed;
			z-index: 15;
			top: 0px;
			left: 0px;
			right:0px;
			background: yellow;
			padding: 5px;
		}

		.side-bar{
			display: none;
			position: fixed;
		    width: 11.25em;/*180px*/
		    left: 0;
		    bottom: 0;
		    top: 3em;
		    background: #ccc;
		    padding-left: 10px;
		    z-index: 10;
		}

		.grid{
			/*border: 1px solid yellow;*/
			border: 5px solid transparent;
			background: lightgrey;
			/*display: inline-block;*/
			min-height: 100px;
			/*border-radius: 5px;*/
			padding: 5px;
			margin: 0.5%;
			box-sizing: border-box;
		}

		.close-edit{
			display: none;
			position: absolute;
			top: 0;
			right: 0;
			background-color: red;

		}`;

		// this.readTextFile("file:///css/style.css");
		if (this.downloadCounter == 0) {
			this.download1(resetCSS, 'reset.css', 'css');
			this.download1(layoutCSS, 'layout.css', 'css');
			this.download1(styleCSS, 'style.css', 'css');

		}
		this.downloadCounter++;
		
		this.download1(totalData, 'index.html', 'html');

	}

	download1(data, filename, type) {
	    let file = new Blob([data], {type: type});
	    if (window.navigator.msSaveOrOpenBlob) // IE10+
	        window.navigator.msSaveOrOpenBlob(file, filename);
	    else { // Others
	        let a = document.createElement("a"),
	                url = URL.createObjectURL(file);
	        a.href = url;
	        a.download = filename;
	        document.body.appendChild(a);
	        a.click();
	        setTimeout(function() {
	            document.body.removeChild(a);
	            window.URL.revokeObjectURL(url);  
	        }, 0); 
	    }
	}

	readTextFile(file) {
	    let rawFile = new XMLHttpRequest();
	    rawFile.open("GET", file, false);
	    rawFile.onreadystatechange = () => {
	        if(rawFile.readyState === 4)
	        {
	            if(rawFile.status === 200 || rawFile.status == 0)
	            {
	                let allText = rawFile.responseText;
	                alert(allText);
	            }
	        }
	    }
	    rawFile.send(null);
	}
}