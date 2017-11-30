//upper heading slider
var mainSliderArray = [{
    title: 'Donec faucibus ultricies congue',
    images: ['images/a1.png', 'images/b1.png', 'images/c1.png']
}, {
    title: 'tpoic 1',
    images: ['images/a2.png', 'images/b2.png', 'images/c2.png']
}, {
    title: 'Puppies',
    images: ['images/a3.png', 'images/b3.png', 'images/c3.png']
}];

var mainSlider = document.getElementsByClassName('main-slider')[0];
var silderBody = document.getElementsByClassName('slider-body')[0];
var projectName = document.getElementsByClassName('project-name')[0];
var heading = projectName.children[0];
var imageSlider = document.getElementsByClassName('image-slider')[0];
var imageList = document.getElementsByClassName('image-list')[0];
var imageIndex = document.getElementsByClassName('image-index')[0];

var mainIndex = 0;
var currentImageIndex = 0;

console.log(mainSliderArray[mainIndex]['title']);

//initial topic
setMainSlider();

//main slider 
function setMainSlider() {
    heading.innerHTML = mainSliderArray[mainIndex]['title'];
    var imageContainer = [];
    var image = [];
    var index = [];
    console.log(imageList.children.length)
    const childNumber = imageList.children.length;

    for (var i = childNumber - 1; i >= 0; i--) {
        console.log(imageList.children);
        imageList.removeChild(imageList.children[i]);
        imageIndex.removeChild(imageIndex.children[i]);
    }



    for (var i = 0; i < mainSliderArray[mainIndex]['images'].length; i++) {
        image[i] = document.createElement('img');
        image[i].setAttribute('src', mainSliderArray[mainIndex]['images'][i]);
        imageContainer[i] = document.createElement('li');
        imageContainer[i].appendChild(image[i]);
        imageList.appendChild(imageContainer[i]);
        index[i] = document.createElement('div');
        index[i].setAttribute('class', 'index');
        index[i].setAttribute('onclick', 'imageSliderIndex(' + i + ')');
        if (currentImageIndex == i) {
            imageList.style.left = -i * 1170 + 'px';

            index[i].classList = 'index active';
        }
        imageIndex.appendChild(index[i]);
    }

}

function leftMainSliderChanger() {
    if (mainIndex > 0) {
        mainIndex--;
        setMainSlider();
    }
}

function rightMainSliderChanger() {
    if (mainIndex < mainSliderArray.length - 1) {
        mainIndex++;
        setMainSlider();
    }
}
var leftsize = 0;
var flag = true;

function setImageSlider() {
    
}

function leftImageSlider() {
    var counter = 1;
    if (flag) {
                // console.log('inside if');

        flag = false;
        var checker = setInterval(function() {
            if ((leftsize) > 0) {
                leftsize = -((mainSliderArray[mainIndex]['images'].length - 1) * 1170);
                imageList.style.left = (leftsize) + "px";
                console.log('inside if');

                clearInterval(checker);
                flag = true;
            } else {
                leftsize = leftsize + 11.70;
                counter++;
                console.log('inside else');
                imageList.style.left = (leftsize) + "px";
                if (counter > 100) {
                    clearInterval(checker);
                    flag = true;
                }
            }

        }, 1);
    }
    if (currentImageIndex-1 < 0) {
    	currentImageIndex = mainSliderArray[mainIndex]['images'].length - 1;
    } else{
    	currentImageIndex--;
    }
    var index = document.getElementsByClassName('index');

    for (var i = 0; i < mainSliderArray[mainIndex]['images'].length; i++) {
        index[i].setAttribute('class', 'index');
        // index[i].setAttribute('onclick', 'imageSliderIndex(' + i + ')');
        if (currentImageIndex == i) {
            imageList.style.left = -i * 1170 + 'px';

            index[i].classList = 'index active';
        }
        // imageIndex.appendChild(index[i]);
    }
    
}
function rightImageSlider() {
    var counter = 1;
    if (flag) {
        flag = false;
        var checker = setInterval(function() {
            if ((leftsize) <= -((mainSliderArray[mainIndex]['images'].length - 1) * 1170)) {
                leftsize = 0;
                imageList.style.left = (leftsize) + "px";
                clearInterval(checker);
                flag = true;
            } else {
                leftsize = leftsize - 11.70;
                imageList.style.left = (leftsize) + "px";
                counter++;
                if (counter > 100) {
                    clearInterval(checker);
                    flag = true;
                }
            }
        }, 1);
    }
    if (currentImageIndex + 1 >= mainSliderArray[mainIndex]['images'].length) {
    	currentImageIndex = 0;
    } else{
    	currentImageIndex++;
    }
    var index = document.getElementsByClassName('index');

    for (var i = 0; i < mainSliderArray[mainIndex]['images'].length; i++) {
        index[i].setAttribute('class', 'index');
        // index[i].setAttribute('onclick', 'imageSliderIndex(' + i + ')');
        if (currentImageIndex == i) {
            imageList.style.left = -i * 1170 + 'px';

            index[i].classList = 'index active';
        }
        // imageIndex.appendChild(index[i]);
    }

}

function imageSliderIndex(clicked){
	var difference = clicked - currentImageIndex;
	
	var index = document.getElementsByClassName('index');

    for (var i = 0; i < mainSliderArray[mainIndex]['images'].length; i++) {
        index[i].setAttribute('class', 'index');
        // index[i].setAttribute('onclick', 'imageSliderIndex(' + i + ')');
        if (clicked == i) {
            imageList.style.left = -i * 1170 + 'px';

            index[i].classList = 'index active';
        }
        // imageIndex.appendChild(index[i]);
    }
}

//search
function expand(element){
		element.classList.toggle("active");
		// console.log(element.nextElementSibling);
		this.childElement = element.children[0];
		if (this.childElement.style.maxWidth){
			this.childElement.style.maxWidth = null;
			this.childElement.style.minWidth = null;
		}else{
			this.childElement.style.maxWidth = '150px';
			this.childElement.style.minWidth = this.childElement.scrollHeight + 'px';
		}
}		

//lower grid images
var gridImages = document.getElementsByClassName('grid-images')[0];
console.log(gridImages.children);
var gridImagesImage = gridImages.getElementsByClassName('image');
console.log(gridImages.getElementsByClassName('image'));
for (var i = 0; i < gridImagesImage.length; i++) {
    gridImagesImage[i].style.top = 0;

}

function rightGridImages() {

    for (var i = 0; i < gridImagesImage.length; i++) {
        if (parseInt(gridImagesImage[i].style.top) > -(gridImages.scrollHeight - 276)) {
            gridImagesImage[i].style.top = (parseInt(gridImagesImage[i].style.top) - 276) + 'px';
            fadeIn(gridImagesImage[i]);
        }

    }
};

function leftGridImages() {

    for (var i = 0; i < gridImagesImage.length; i++) {
        if (parseInt(gridImagesImage[i].style.top) < 0) {
            gridImagesImage[i].style.top = (parseInt(gridImagesImage[i].style.top) + 276) + 'px';
            fadeIn(gridImagesImage[i]);
        }

    }
};

function fadeIn(image) {

    var counter = 0;
    var opacity = 0;
    var fade = setInterval(function() {
        counter++;
        opacity += 0.01;
        image.style.opacity = opacity;
        console.log(image.style.opacity);

        if (counter >= 100) {
            clearInterval(fade);

        }
    }, 10);
}