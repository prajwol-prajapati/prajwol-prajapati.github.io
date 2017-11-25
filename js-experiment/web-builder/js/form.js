class Form{
	constructor(){
	}

	makeForm(){
		this.form = document.createElement('form');
		this.form.setAttribute('id', 'formElement');
		this.makeInlineContainer();
		this.inlineContainer.wrapper.appendChild(this.form);
		return this.inlineContainer.wrapper;
	}

	makeFormLabel(){
		this.makeInlineContainer();
		this.label = document.createElement('label');
		this.label.innerHTML = 'edit label: ';
		this.label.setAttribute('contenteditable', 'true');
		this.inlineContainer.wrapper.appendChild(this.label);
		// this.form.appendChild(this.inlineContainer.wrapper);
		return this.inlineContainer.wrapper;
	}
	makeLabel(content){
		this.label = document.createElement('label');
		this.label.innerHTML = content;
		return this.label;
	}

	makeFormInput(type){
		this.makeInlineContainer();
		this.input = document.createElement('input');
		this.input.setAttribute('type', type);
		this.input.setAttribute('id', type);

		this.br = document.createElement('br');
		this.inlineContainer.wrapper.appendChild(this.input);
		this.label = document.createElement('label');
		this.label.innerHTML = 'option1';
		
		if (type == 'radio' || type == 'checkbox') {
			this.inlineContainer.wrapper.appendChild(this.label);
			this.label.setAttribute('contenteditable', 'true');
			this.inlineContainer.wrapper.appendChild(this.br);


		}
		if (type == 'text') {
			this.input.setAttribute('placeholder', 'text here');
			this.inlineContainer.wrapper.appendChild(this.br);


		}
		
		if (type == 'button') {
			this.input.setAttribute('value', 'Button');
			this.input.setAttribute('contenteditable', 'true');
			this.inlineContainer.wrapper.appendChild(this.br);
			
		}

		if (type == 'file') {
			this.input.setAttribute('onchange', 'content.setURL(this)')
		}
		// this.form.appendChild(this.inlineContainer.wrapper);
		return this.inlineContainer.wrapper;
	}

	makeInput(type, id, value){
		this.input = document.createElement('input');
		this.input.setAttribute('type', type);
		this.input.setAttribute('id', id);
		this.input.setAttribute('placeholder', value);

		this.input.onchange = (e) => {
			this.input.setAttribute('value', e.target.value);
		}

		return this.input;
	}

	makeInlineContainer(){
		this.inlineContainer = new InlineContainer();
	}
	
}
