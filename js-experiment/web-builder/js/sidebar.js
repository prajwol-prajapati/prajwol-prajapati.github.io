class NavExpander{
	constructor(){

	}
	expand(element){
		element.classList.toggle("active");
		console.log(element.nextElementSibling);
		this.childElement = element.nextElementSibling;
		if (this.childElement.style.maxHeight){
			this.childElement.style.maxHeight = null;
			this.childElement.style.minHeight = null;
		}else{
			this.childElement.style.maxHeight = '100%';
			this.childElement.style.minHeight = this.childElement.scrollHeight + 'px'
		}
		console.log(element.children[1]);
	}
}

let grid = new Grid();

let content = new Content();

let menuMaker = new MenuMaker();


let dragDrop = new DragDrop();

let navExpander = new NavExpander();

