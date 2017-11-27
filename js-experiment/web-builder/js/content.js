class Content{
	constructor(){
		// this.parent = grid.grid;
		this.table;

	}

	makeHeading(size){
		// this.headingSize = size;
		this.makeContainer();
		this.element = document.createElement('h'+ size);
		console.log(this.element);
		this.element.innerHTML = "Edit Heading";
		this.element.setAttribute('contenteditable', 'true');
		this.element.setAttribute('draggable', 'true');
		this.element.setAttribute('class', 'editable');
		this.container.wrapper.appendChild(this.element);
		return this.container.wrapper;
	}

	makeParagraph(){
		this.makeContainer();
		this.element = document.createElement('p');
		this.element.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque dolorum 
								praesentium hic nulla velit adipisci ipsum soluta placeat quae, officiis 
								architecto similique eos possimus qui modi? Voluptatum, aliquid hic. Repellat.`;
		this.element.setAttribute('contenteditable', 'true');
		this.element.setAttribute('draggable', 'true');
		this.element.setAttribute('class', 'editable');

		this.container.wrapper.appendChild(this.element);
		return this.container.wrapper;
	}

	makeLink(){
		this.makeInlineContainer();
		this.link = document.createElement('a');
		this.link.innerHTML = "Edit Link name";
		this.link.setAttribute('contenteditable', 'true');
		this.link.setAttribute('class', 'editable');

		this.inlineContainer.wrapper.appendChild(this.link);
		return this.inlineContainer.wrapper;
	}

	editLink(){
		let url = prompt('Enter Url Below', '');
		if(url == '' || url === null){
			// this.parent = this.container.wrapper.parentElement;
 		// 	console.log(this.parent);
 		// 	this.parent.removeChild(this.container.wrapper);
			return false;
		}
		this.link.setAttribute('href', url);

	}
	makeTable(){
		this.makeContainer();
		this.table = document.createElement('table');
		// this.container.wrapper.appendChild(this.table);
		// console.log(this.table);
		// console.log(this.container.wrapper)
		this.container.wrapper.appendChild(this.table);

		return this.editTable();

	}


	editTable(){
		this.makeInlineContainer();
		this.makeFormContainer();

		this.br = document.createElement('br');
		// this.rowLabel = document.createElement('label');
		// this.rowLabel.innerHTML = 'Enter number of rows:';
		// this.rowInput = document.createElement('input');
		// this.rowInput.setAttribute('type', 'number');
		// this.rowInput.setAttribute('id', 'row');
		// this.rowInput.setAttribute('value', '1');
		this.rowLabel = this.form.makeLabel('Enter Number of rows: ');
		this.rowInput = this.form.makeInput('number', 'row', '1');
		
		this.colLabel = this.form.makeLabel('Enter Number of Columns: ');
		this.colInput = this.form.makeInput('number', 'col', '1');

		this.submitButton = document.createElement('button');
		this.submitButton.innerHTML = 'Submit';
		this.submitButton.setAttribute('onclick', 'content.submitTable()');


		this.inlineContainer.wrapper.appendChild(this.rowLabel);
		this.inlineContainer.wrapper.appendChild(this.rowInput);
		this.inlineContainer.wrapper.appendChild(this.br);
		this.inlineContainer.wrapper.appendChild(this.colLabel);
		this.inlineContainer.wrapper.appendChild(this.colInput);
		this.inlineContainer.wrapper.appendChild(this.submitButton);

		this.rowInput.onchange = (e) => {
			this.rowInput.setAttribute('value', e.target.value);
		}
		this.colInput.onchange = (e) => {
			this.colInput.setAttribute('value', e.target.value);
		}
		this.table.appendChild(this.inlineContainer.wrapper);
		this.container.wrapper.appendChild(this.table);
		return this.container.wrapper;

	}
	submitTable(){
		// this.makeTable();
		console.log(this.rowInput.value);
		console.log(this.colInput.value);
		console.log("abc");
		this.parent = this.inlineContainer.wrapper.parentElement;
		this.parent.removeChild(this.inlineContainer.wrapper);
		
		this.makeContainer();

		console.log(this.rowInput.value);
		console.log(this.colInput.value);

		console.log(this.table);

		for(let i = 0; i<this.rowInput.value; i++){
			this.tr = document.createElement('tr');
			this.table.appendChild(this.tr);
			for (let j = 0; j < this.colInput.value; j++) {
				if(i==0){
					this.th = document.createElement('th');
					this.th.setAttribute('contenteditable', 'true');
					this.th.setAttribute('class', 'editable');

					this.th.innerHTML = 'data';
					this.tr.appendChild(this.th);
				}else{

					this.td = document.createElement('td');
					this.td.setAttribute('contenteditable', 'true');
					this.td.setAttribute('class', 'editable');

					this.td.innerHTML = 'data';
					this.tr.appendChild(this.td);
				}
			}
		}
		// this.container.wrapper.appendChild(this.table);
		// console.log(this.container.wrapper);
		// return this.container.wrapper;
		// this.parent = 
	}
	makeForm(){
		this.makeFormContainer();
		this.form = this.form.makeForm();
		return this.form;
	}
	makeLabel(){
		this.makeFormContainer();
		this.label = this.form.makeFormLabel();
		return this.label;
	}

	makeInput(id){
		this.makeFormContainer();
		this.input = this.form.makeFormInput(id);
		return this.input;
	}

	makeImage(){
		this.makeInlineContainer();
		this.image = document.createElement('img');
		this.image.setAttribute('id', 'image1');
		this.image.setAttribute('alt', 'your-image');
		this.image.setAttribute('src', '#');
		this.makeFormContainer();
		this.input = this.form.makeFormInput('file');
		this.inlineContainer.wrapper.appendChild(this.image);
		this.inlineContainer.wrapper.appendChild(this.input);
		return this.inlineContainer.wrapper;
		
	}

	setURL(input){
		if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                document.getElementById('image1').setAttribute('src', e.target.result);
                this.browse = document.getElementById('file').parentElement;
                this.parent = this.browse.parentElement;
                this.parent.removeChild(this.browse);
            };

            reader.readAsDataURL(input.files[0]);
        }
	}

	makeContainer(){
		this.container = new Container();

	}

	makeInlineContainer(){
		this.inlineContainer = new InlineContainer();
	}
	makeFormContainer(){
		this.form = new Form();

	}



// 	// makeInput(type, id, value){
// 	// 	this.input = document.createElement('input');
// 	// 	this.input.setAttribute('type', type);
// 	// 	this.input.setAttribute('id', id);
// 	// 	this.input.setAttriubte('placeholder', value);

// 	// 	this.input.onchange = (e) => {
// 	// 		this.input.setAttribute('value', e.target.value);
// 	// 	}
// }

}