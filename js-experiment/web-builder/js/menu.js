class MenuMaker{
	constructor(){

	}

	makeMenu(type){
		this.makeContainer();
		this.menu = document.createElement('ul');
		this.menu.setAttribute('id', type);
		this.menu.setAttribute('class', 'menu');
		this.wrapper = document.createElement('div');
		
		this.menu.appendChild(this.wrapper);
		this.wrapper.innerHTML = `<li><a class="active editable" href="#home" contenteditable="true">Home</a></li>
							  <li><a href="#news" contenteditable="true" class="editable">News</a></li>
							  <li><a href="#contact" contenteditable="true" class="editable">Contact</a></li>
							  <li><a href="#about" contenteditable="true" class="editable">About</a></li>`;
		this.container.wrapper.appendChild(this.menu);
		return this.container.wrapper;

	}

	makeContainer(){
		this.container = new Container();

	}

}