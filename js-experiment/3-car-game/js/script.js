var mainWrapper = document.getElementById('main-wrapper');

var newElement = document.createElement('div');


newElement.setAttribute('id', 'box');

newElement.display = 'table';

mainWrapper.appendChild(newElement);




function Track(trackId) {
    var that = this;

    var Button = function(type) {
        this.element = document.createElement('button');
        this.element.style.width = '200px';
        this.element.style.height = '100px';
        this.element.innerHTML = type;
        this.element.fontSize = '20pt';
        // this.element.style. = '0 auto';

        // that.startScreen.appendChild(this.s)

    }
    this.startScreen = document.createElement('div');
    this.startScreen.style.width = '100%';
    this.startScreen.style.height = '100vh';
    this.startScreen.style.display = 'table';
    this.startScreen.style.background = 'yellow';
    this.startScreen.innerHTML = "<h1>Welcome to Car Game</h1>"
    this.startScreen.style.textAlign = 'center';

    this.startButton = new Button('Start');
    this.startButton.element.onclick = function() {
        that.start();
    }
    this.startScreen.appendChild(that.startButton.element);

    newElement.appendChild(this.startScreen);


    this.gameOverScreen = document.createElement('div');
    this.gameOverScreen.style.width = '100%';
    this.gameOverScreen.style.height = '100vh';
    this.gameOverScreen.style.display = 'table';
    this.gameOverScreen.style.backgroundColor = 'yellow';
    this.gameOverScreen.style.position = 'absolute';
    this.gameOverScreen.style.top = '0px';
    this.gameOverScreen.innerHTML = "<h1>Game Over</h1>"
    this.gameOverScreen.style.textAlign = 'center';

    this.restartButton = new Button('Restart Game');
    this.restartButton.element.onclick = function() {
        that.reset()
        newElement.removeChild(that.gameOverScreen);
        // that.start();
    }
    this.gameOverScreen.appendChild(that.restartButton.element);


    this.init = function() {

        this.track = document.createElement('div');

        this.track.style.width = '300px';
        this.track.style.height = '600px';
        this.track.style.margin = '20px';
        this.track.setAttribute('id', trackId);
        this.track.style.position = 'relative';
        this.track.style.overflow = 'hidden';
        this.track.display = 'table';
        this.track.style.background = 'url(images/track.png) repeat-y';
        // this.track.style.overflow= 'hidden';
        this.track.style.float = 'left';
        newElement.appendChild(this.track);
        this.positionTop = 0;
        this.track.style.backgroundPosition = '0px ' + this.positionTop + 'px';
        console.log(this.positionTop);


        this.obstacle = new Obstacle('joker');
        this.car = new Car('batmobile');
        this.resetButton = new Button('reset');
        this.track.appendChild(this.resetButton.element);
        this.resetButton.element.onclick = function() {
            // that.positionTop = 0;
            that.reset();
        }


        this.slider = setInterval(function() {
            // console.log(this.positionTop);
            if (that.positionTop <= 10000) {
                that.positionTop += 2;
                if (that.obstacle.obstaclePositionTop <= 600) {
                    // console.log('inside if');
                    that.obstacle.obstaclePositionTop += 2;
                    that.obstacle.obstacle.style.top = that.obstacle.obstaclePositionTop + 'px';
                    if (that.obstacle.position == that.car.x && that.obstacle.obstaclePositionTop >= 420) {
                        console.log('game over');
                        clearInterval(that.slider);
                        newElement.appendChild(that.gameOverScreen)
                    }
                } else {
                    // that.obstacle.obstaclePositionTop = -90;
                    that.obstacle = new Obstacle('joker');
                }
                // console.log(that.positionTop);
                that.track.style.backgroundPositionY = that.positionTop + 'px';
            } else {

                clearInterval(this.slider);

            }
        }, 1);



    }

    var Obstacle = function(obstacleId) {
        var index = parseInt(Math.random() * 3);
        console.log(parseInt(Math.random * 3));
        this.position = 10 + index * 100;
        this.obstacle = document.createElement('div');

        this.obstacle.style.background = 'url(images/joker.png)no-repeat';
        this.obstacle.style.width = '80px';
        this.obstacle.style.height = '90px';
        this.obstacle.style.overflow = 'hidden';
        this.obstacle.setAttribute('id', obstacleId);
        that.track.appendChild(this.obstacle);
        this.obstacle.style.position = 'absolute';

        this.obstacle.style.left = this.position + 'px'
        this.obstaclePositionTop = -90;
        var obs = this;

    }
    var Car = function(carId) {
        this.car = document.createElement('div');

        this.car.style.background = 'url(images/bat.png)no-repeat';
        this.car.style.width = '80px';
        this.car.style.height = '90px';
        this.car.setAttribute('id', carId);
        that.track.appendChild(this.car);
        this.car.style.position = 'absolute';
        this.x = 110;
        this.dx = 0;
        this.car.style.bottom = '2px';
        this.car.style.left = this.x + 'px'

        this.updatePosition = function() {
            if ((this.x + this.dx) <= 300 && (this.x + this.dx) >= 10) {
                this.x = this.x + this.dx;
                this.car.style.left = this.x + 'px';
            }
        }
    }

    this.start = function() {
        newElement.removeChild(that.startScreen);
        // that.obstacle.obstaclePositionTop = 0;
        // clearInterval(that.slider);
        that.init();
    }

    this.reset = function() {
        newElement.removeChild(that.track);
        that.obstacle.obstaclePositionTop = 0;
        clearInterval(that.slider);
        that.init();
    }
}

var track = new Track('track1');
// track.init();
// var track2 = new Track('track2');

// var resetButton = document.createElement('button');
// resetButton.style.width = '60px';
// resetButton.style.height = '20px';
// resetButton.innerHTML= 'reset';
// newElement.appendChild(resetButton);

// resetButton.onclick =function(){
// 	track.positionTop = 0;
// 	track2.positionTop = 0;

// }

// var car = document.createElement('div');

// car.style.background = 'url(images/car.png)no-repeat';
// car.style.width = '180px';
// car.style.height = '280px';
// car.setAttribute('id', 'car');
// track.appendChild(car);
// car.style.position ='absolute';
// car.style.bottom = '2px';
// car.style.left = '210px'

function obstacle() {

}



document.onkeydown = function(event) {
    console.log(event.keyCode);
    switch (event.keyCode) {

        case 37:
            track.car.dx = -100;
            track.car.updatePosition();
            break;

        case 39:
            track.car.dx = 100;
            track.car.updatePosition();
            break;

        case 65:
            track2.car.dx = -100;
            track2.car.updatePosition();
            break;

        case 68:
            track2.car.dx = 100;
            track2.car.updatePosition();
            break;

        default:


    }


}

// var images = ['images/a.png', 'images/b.png', 'images/c.png', 'images/d.png', 'images/e.png'];
// // var objectKeys = Object.keys(per); 
// var ul = document.createElement('ul');
// newElement.appendChild(ul);
// ul.style.position='absolute';
// ul.style.height='5000px';

// 	// ul.style.display='inline-block';
// 	for(var i=0; i<images.length; i++) {

// 		// if(personalProfile[key][0])

// 		var li = document.createElement('li');
// 		li.style.listStyle='none';

// 		li.style.display='inline-block';



// 		ul.appendChild(li);
// 		var img = document.createElement('img');
// 		ul.style.margin='0px';
// 		ul.style.padding='0px';
// 		img.setAttribute('src', images[i]);
// 		li.appendChild(img);


// 		// console.log('value: ', personalProfile[ key ] );
// 	}

// var next= document.createElement('button');
// next.setAttribute('id', 'next');
// mainWrapper.appendChild(next);
// next.innerHTML='Next';

// var prev= document.createElement('button');
// prev.setAttribute('id', 'prev');
// prev.innerHTML='Prev';

// mainWrapper.appendChild(prev);
// mainWrapper.appendChild(next);
// var leftsize=0;
// var flag=true;
// ul.style.left = leftsize+'px';
// next.onclick=function(){
// 	var counter=1;
// 	if(flag){
// 		flag=false;
// 		var checker=setInterval(function(){
// 			if((leftsize)<=-((images.length-1)*270)){
// 				leftsize=0;
// 				ul.style.left= (leftsize)+ 'px';
// 				clearInterval(checker);
// 				flag=true;
// 			}
// 			else{
// 				leftsize=leftsize-2.70;
// 				ul.style.left= (leftsize)+ 'px';
// 				counter++;
// 				if(counter>100){
// 						clearInterval(checker);
// 						flag=true;
// 					}
// 			}
// 		},1);
// 	}


// 	// for(i=1; i<=270;i++){
// 	// 	leftsize--;
// 	// 	ul.style.left= leftsize+ 'px';
// 	// }
// }

// prev.onclick=function(){
// 	var counter=1;
// 	if(flag){
// 		flag=false;
// 		var checker=setInterval(function(){
// 			if((leftsize)>=0){
// 				leftsize=-((images.length-1)*270);
// 				ul.style.left= (leftsize)+ 'px';
// 				clearInterval(checker);
// 				flag=true;
// 			}
// 			else{
// 				leftsize=leftsize+2.70;
// 				counter++;
// 				ul.style.left= (leftsize)+ 'px';
// 				if(counter>100){
// 					clearInterval(checker);
// 					flag=true;
// 				}
// 			}	

// 		},1);
// 	}
// 	// ul.style.left= (leftsize+270)+ 'px';
// 	// for(i=1; i<=270;i++){
// 	// 	leftsize--;
// 	// 	ul.style.left= leftsize+ 'px';
// 	// }
// }