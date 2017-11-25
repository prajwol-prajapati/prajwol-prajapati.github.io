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
			that.reset();
		}

		this.bullets = [];
		this.obstacles = [];
		this.slider = setInterval(function() {
			
			if (that.positionTop <= 100000) {
				that.positionTop += 2;

				that.bullets.forEach(function(bullet){
					bullet.topx = -4;
					bullet.updateBullet();

					// console.log("collision through bullet"+that.obstacle.obstaclePositionBottom);
					if(that.obstacle.obstaclePositionBottom > bullet.top && bullet.left>=that.obstacle.position && bullet.left<=(that.obstacle.position+80)){
						
						console.log("collision through bullet");
						console.log(that.track);
						console.log(bullet.element);
						// that.track.removeChild(bullet.element);

						// that.track.removeChild(that.obstacle.obstacle);
					}
				});
				that.obstacles.forEach(function(obstacle){

				});

				if (that.obstacle.obstaclePositionTop <= 600) {
					that.obstacle.obstaclePositionTopx = 2;
					that.obstacle.updatePosition();
					
					
					if (that.obstacle.position == that.car.x && that.obstacle.obstaclePositionTop >= 420) {
						console.log('game over');
						clearInterval(that.slider);
						newElement.appendChild(that.gameOverScreen)
					}
				} else {
					that.obstacle = new Obstacle('joker');
				}

				that.track.style.backgroundPositionY = that.positionTop + 'px';
			} else {

				clearInterval(this.slider);

			}
		}, 1);



	}

	var Obstacle = function(obstacleId) {
		var index = parseInt(Math.random() * 3);
		var obstacleType = parseInt(Math.random() * 3);
		console.log(parseInt(Math.random() * 3));
		this.position = 10 + index * 100;
		this.obstacle = document.createElement('div');
		var obstacles = ["block.png", "joker.png", "bomb.png"];
		console.log(obstacles[0]);
		this.obstacle.style.background = 'url(images/'+ obstacles[obstacleType] + ')no-repeat';
		this.obstacle.style.width = '80px';
		this.obstacle.style.height = '90px';
		this.obstacle.style.overflow = 'hidden';
		this.obstacle.setAttribute('id', obstacleId);
		that.track.appendChild(this.obstacle);
		this.obstacle.style.position = 'absolute';
		this.obstaclePositionTopx = 0;
		this.obstacle.style.left = this.position + 'px'
		this.obstaclePositionTop = -90;
		this.obstaclePositionBottom = this.obstaclePositionTop + 90;

		var obs = this;

		this.updatePosition = function(){
			this.obstaclePositionTop = this.obstaclePositionTop + this.obstaclePositionTopx;
			this.obstacle.style.top = this.obstaclePositionTop + 'px';
			this.obstaclePositionBottom = this.obstaclePositionTop + 90;
		}

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

	this.makeBullet = function(){
		var bullet = new Bullet(this.car.x+34);
		this.bullets.push(bullet);
		this.track.appendChild(bullet.element);

	}

	this.start = function() {
		newElement.removeChild(that.startScreen);
		that.init();
	}

	this.reset = function() {
		newElement.removeChild(that.track);
		that.obstacle.obstaclePositionTop = 0;
		clearInterval(that.slider);
		that.init();
	}
}

function Bullet(left){
	this.element =document.createElement('div');
	this.element.style.background = 'url(images/bullet.png)no-repeat';
	this.element.style.width = '12px';
	this.element.style.height = '8px';
	this.element.setAttribute('id', 'bulletx');
	this.element.style.position = 'absolute';
	this.top = 600 - 80;
	this.topx = 0;
	this.left = left;
	this.element.style.left = this.left +"px";
	this.top = this.top + this.topx;
	this.element.style.top = this.top + "px";
	

	this.updateBullet = function(){
		this.top = this.top + this.topx;
		this.element.style.top = this.top + "px";
		
	}
	
}

var track = new Track('track1');



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
		case 32:
			track.makeBullet();

		default:


	}


}

