class InlineContainer{
	constructor(){
		this.wrapper = document.createElement('div');
 		this.wrapper.setAttribute('class', 'inline-wrapper clearfix');
 		this.wrapper.setAttribute('draggable', 'true');
 		
 		this.closeButton = document.createElement('button');
 		this.closeButton.setAttribute('class', 'close-edit');
 		this.closeButton.innerHTML = '<i class="fa fa-close"></i>';
 		this.wrapper.appendChild(this.closeButton);

 		this.closeButton.onclick = ()=>{
 			this.parent = this.wrapper.parentElement;
 			console.log(this.parent);
 			this.parent.removeChild(this.wrapper);
 		}

	}
}