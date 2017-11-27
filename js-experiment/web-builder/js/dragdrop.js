class DragDrop{
	constructor(){
		
	}

	allowDrop(ev) {
    ev.preventDefault();
	}

	drag(ev) {
		this.dragElement = this.dragSelector(ev.target.id);
		console.log(this.dragElement);
		this.dragId = ev.target.id;
	    ev.dataTransfer.setData(this.dragElement, ev.target.id);
	    // console.log(ev.target.id);
	}

	drop(ev) {
    ev.preventDefault();
    this.dropSelector(this.dragId);
    // console.log(this.dragId);
    ev.target.appendChild(this.dragElement);
    

	}

	dragSelector(id){
		switch(id){
			//grid
			case "fullGrid":
			return grid.fullGrid();

			case "twoHalfGrid":
			return grid.twoHalfGrid();

			case "threeEqualGrid":
			return grid.threeEqualGrid();

			case "col2LeftGrid":
			return grid.col2LeftGrid();

			case "col2RightGrid":
			return grid.col2RightGrid();

			//menu bar
			case "menu1":
			return menuMaker.makeMenu('menu1');

			case "menu2":
			return menuMaker.makeMenu('menu2');
			//basic content
			//heading
			case "h1":
			return content.makeHeading(1);
			case "h2":
			return content.makeHeading(2);
			case "h3":
			return content.makeHeading(3);
			case "h4":
			return content.makeHeading(4);
			case "h5":
			return content.makeHeading(5);
			case "h6":
			return content.makeHeading(6);

			case "paragraph":
			return content.makeParagraph();

			case "link":
			return content.makeLink();

			case "table":
			return content.makeTable();

			case "form":
			return content.makeForm();

			case "label":
			return content.makeLabel();

			case 'text':
			return content.makeInput('text');

			case 'password':
			return content.makeInput('password');

			case 'button':
			return content.makeInput('button');

			case 'submit':
			return content.makeInput('submit');

			case 'radio':
			return content.makeInput('radio');

			case 'checkbox':
			return content.makeInput('checkbox');

			case 'image':
			return content.makeImage();



		}
	}

	dropSelector(id){
		switch(id){
			case "link":
			content.editLink();
			break;

			// case "table":
			// content.editTable();
			// break;
			// return content.makeLink(href);
		}
	}
}