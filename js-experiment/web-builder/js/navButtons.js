class NavButtons {
  constructor() {
    this.editButton = document.getElementById('editViewButton');
    this.previewButton = document.getElementById('previewButton');
    this.editButton.onclick = () => {
      this.editView();
    }
    this.previewButton.onclick = () => {
        this.preView();
      }
      // this.downloadCounter = 0;
  }

  editView() {
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

  preView() {
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

  downloadButton() {
    let htmlStart = `<!DOCTYPE html>
    <html>
      <head>
        
        <title>Web Builder</title>
        <link rel="stylesheet" href="https://prajwol-prajapati.github.io/js-experiment/web-builder/css/reset.css">
        <link rel="stylesheet" href="https://prajwol-prajapati.github.io/js-experiment/web-builder/css/layout.css">
        <link rel="stylesheet" href="https://prajwol-prajapati.github.io/js-experiment/web-builder/css/style.css">
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
    console.log(editPanel);
    console.log(editPanel.children);
    console.log(null);
    console.log([]);
    this.setInnerElementNonEditable();

    let htmlData = editPanel.innerHTML;
    let totalData = htmlStart + htmlData + htmlEnd;

    this.download1(totalData, 'index.html', 'html');
    this.setInnerElementEditable();

  }

  uploadButton() {
    this.frame = document.createElement('iframe');
    this.frame.setAttribute('id', 'uploadedHtml');
    this.form = new Form();
    this.input = document.createElement('input');
    this.input.setAttribute('onchange', 'navButtons.setURL(this)');
    this.input.setAttribute('id', 'uploadInput');
    this.input.setAttribute('type', 'file');
    this.makeContainer();
    this.container.wrapper.appendChild(this.input);
    this.container.wrapper.appendChild(this.frame);
    document.getElementById('editPanel').appendChild(this.container.wrapper);

  }

  setURL(input) {
    if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = function(e) {
        this.frame = document.getElementById('editPanel');
        this.frame.setAttribute('src', e.target.result);
        this.browse = document.getElementById('uploadInput').parentElement;
        this.parent = this.browse.parentElement;
        console.log(this.frame.contentDocument);
        console.log(this.frame.contentWindow.document.children[0].children[1]);
        this.editCode = this.frame.contentWindow.document.body.innerHTML;
        console.log(document.getElementsByClassName('main-container'));
        console.log(this.editCode);
        this.editPanel = document.getElementById('editPanel');

        // this.parent.removeChild(this.browse);
        this.editPanel.appendChild(this.editCode.innerHTML);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  download1(data, filename, type) {
    let file = new Blob([data], {
      type: type
    });
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
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          let allText = rawFile.responseText;
          alert(allText);
        }
      }
    }
    rawFile.send(null);
  }

  setInnerElementNonEditable() {
    this.editable = document.getElementsByClassName('editable');
    console.log((this.editable));
    console.log((Array(this.editable)));
    for (let i = 0; i < this.editable.length; i++) {
      this.editable[i].setAttribute('contenteditable', 'false');
    }

  }

  setInnerElementEditable() {
    this.editable = document.getElementsByClassName('editable');
    console.log((this.editable));
    console.log((Array(this.editable)));
    for (let i = 0; i < this.editable.length; i++) {
      this.editable[i].setAttribute('contenteditable', 'true');
    }
  }

  makeContainer() {
    this.container = new Container();

  }
}