let mainWrapper = document.getElementById('mainWrapper');
mainWrapper.style.width = '500px';
mainWrapper.style.height = '700px';
mainWrapper.style.overflow = 'hidden';


const KEY_CODES = {
    SPACE: 32,

}

class World {


    constructor() {
        this.background = document.createElement('div');
        this.positionRight = 0;
        this.background.style.background = 'url(images/background.png) repeat-x';
        this.background.style.width = '500px';
        this.background.style.height = '700px';
        this.background.setAttribute('id', 'box');
        this.background.style.position = 'relative'
        this.background.display = 'table';
        this.background.overflow = 'hidden';



    }



}

class Bird {
    constructor() {
        this.birdElement = document.createElement('div');

        this.birdElement.style.background = 'url(images/bird.png)no-repeat';
        this.birdElement.style.width = '50px';
        this.birdElement.style.height = '40px';
        this.birdElement.setAttribute('id', 'birdElement');
        this.birdElement.style.position = 'absolute';
        this.birdElement.display = 'table';
        this.positionTop = 300;
        this.positionTopx = 0;
        this.positionLeft = 50;
        this.birdElement.right = this.positionLeft + 50;
        this.birdElement.bottom = this.positionTop + 40;


        this.birdElement.style.top = this.positionTop + 'px';
        this.birdElement.style.left = this.positionLeft + 'px';

    }
    updatePosition() {
        this.positionTop = this.positionTopx + this.positionTop;
        this.birdElement.style.top = this.positionTop + 'px';
        this.birdElement.bottom = this.positionTop + 40;
    }
}

class Score {
    constructor(value) {
        this.score = document.createElement('h2');
        this.score.style.background = 'transparent';

        this.score.style.height = '40px';
        this.score.setAttribute('id', 'score');

        this.score.style.fontSize = '20pt';

        this.value = value;
        this.score.innerHTML = '<br>Score: ' + this.value;
    }


}

class Game {
    constructor() {

        this.startScreen();


    }

    startScreen() {
        this.startScreen = document.createElement('div');

        this.startScreen.style.background = 'orange';
        this.startScreen.style.width = '500px';
        this.startScreen.style.height = '700px';
        this.startScreen.setAttribute('id', 'startScreen');
        // this.startScreen.display='table';
        this.startScreen.innerHTML = '<h1>Welcome to Flappy Bird Game</h1><br>'
        this.startScreen.style.textAlign = 'center';
        this.startButton = new Button('Start');
        this.startButton.element.onclick = () => {
            this.start();
        }
        mainWrapper.appendChild(this.startScreen);
        this.startScreen.appendChild(this.startButton.element);


    }
    gameOverScreen() {
        this.gameOver = document.createElement('div');
        this.gameOver.style.position = 'absolute';
        this.gameOver.style.top = '0px';
        this.gameOver.style.background = 'orange';
        this.gameOver.style.width = '500px';
        this.gameOver.style.height = '700px';
        this.gameOver.setAttribute('id', 'gameOver');
        this.gameOver.display = 'table';
        this.gameOver.innerHTML = '<h1>Game Over</h1><br>'
        this.gameOver.style.textAlign = 'center';

        this.restartButton = new Button('Restart');
        this.restartButton.element.onclick = () => {
            console.log('inside onclick');
            mainWrapper.removeChild(this.gameOver);
            this.reset();



        }
        this.gameOver.appendChild(this.restartButton.element);
    }

    reset() {
        mainWrapper.removeChild(this.world.background);
        console.log(this.gameOver);


        this.init();
    }
    start() {
        mainWrapper.removeChild(this.startScreen);
        this.init();

    }

    init() {
        this.world = new World();
        this.bird = new Bird();
        this.backgroundMover();
        this.keyPress();
        mainWrapper.appendChild(this.world.background);
        this.world.background.appendChild(this.bird.birdElement);
        this.obstacleTopArray = [];
        this.obstacleBottomArray = [];


        this.gameOverScreen();
        this.resetButton = new Button('Reset');
        this.world.background.appendChild(this.resetButton.element);
        this.resetButton.element.onclick = () => {
            this.reset();
        }

    }

    backgroundMover() {
        let value = 0;
        let interval = setInterval(() => {
            if (this.world.positionRight >= -20000) {
                this.world.positionRight -= 2;
                this.world.background.style.backgroundPositionX = this.world.positionRight + 'px';

                if (this.world.positionRight % 300 == 0) {
                    let obstacleTop = new ObstacleTop();
                    let obstacleBottom = new ObstacleBottom();

                    this.obstacleTopArray.push(obstacleTop);
                    this.obstacleBottomArray.push(obstacleBottom);

                    obstacleTop.obsTopHeight = Math.random() * (700 - 160 - 100);
                    obstacleTop.obs.style.height = obstacleTop.obsTopHeight + 'px';
                    obstacleBottom.obsBottomHeight = (700 - 160 - 100) - obstacleTop.obsTopHeight;
                    obstacleBottom.obs.style.height = obstacleBottom.obsBottomHeight + 'px';

                    this.world.background.appendChild(obstacleTop.obs);

                    this.world.background.appendChild(obstacleBottom.obs);






                }

                this.obstacleTopArray.forEach((obstacleTop) => {
                    obstacleTop.positionLeftx = -2;
                    obstacleTop.updatePosition();


                    //score counter
                    if (this.bird.positionLeft == obstacleTop.positionLeft) {
                        value++;
                        // console.log('score' + this.score.value);
                    }


                    //top obstacle collision
                    if ((this.bird.birdElement.right > obstacleTop.positionLeft && this.bird.positionLeft < obstacleTop.positionLeft + 100) && obstacleTop.obsTopHeight > this.bird.positionTop) {
                        clearInterval(interval);
                        console.log('game over');
                        mainWrapper.appendChild(this.gameOver);
                        this.score = new Score(value);

                        this.gameOver.appendChild(this.score.score);
                    }

                    if (obstacleTop.positionLeft < -100) {
                        console.log('inside splice');
                        this.world.background.removeChild(this.obstacleTopArray[0].obs);
                        this.obstacleTopArray.splice(0, 1);
                    }

                });


                this.obstacleBottomArray.forEach((obstacleBottom) => {
                    obstacleBottom.positionLeftx = -2;
                    obstacleBottom.updatePosition();


                    //bottom collision
                    if (this.bird.birdElement.right > obstacleBottom.positionLeft && this.bird.positionLeft < (obstacleBottom.positionLeft + 100) && this.bird.birdElement.bottom > (700 - 160 - obstacleBottom.obsBottomHeight)) {
                        clearInterval(interval);
                        console.log('game over');
                        mainWrapper.appendChild(this.gameOver);
                        this.score = new Score(value);
                        this.gameOver.appendChild(this.score.score);

                    }

                    if (obstacleBottom.positionLeft < -100) {
                        console.log('inside splice');
                        this.world.background.removeChild(this.obstacleBottomArray[0].obs);

                        this.obstacleBottomArray.splice(0, 1);
                    }


                });



                if (this.bird.positionTop <= 500) {

                    this.bird.positionTopx = 2;
                    this.bird.updatePosition();
                    if (this.bird.positionTop >= 500) {
                        console.log('game over');
                        mainWrapper.appendChild(this.gameOver);
                        this.score = new Score(value);
                        this.gameOver.appendChild(this.score.score);
                        clearInterval(interval);
                    }
                }

            } else {
                this.score = new Score(value);
                this.gameOver.appendChild(this.score.score);
                clearInterval(interval);
            }

        }, 10);
    }

    keyPress() {
        document.onkeydown = () => {
            switch (event.keyCode) {

                case KEY_CODES.SPACE:

                    if (this.bird.positionTop >= 50) {
                        this.bird.positionTopx = -50;
                        this.bird.updatePosition();

                    }

            }
        };
    }


}

class Button {

    constructor(type) {
        this.element = document.createElement('button');
        this.element.style.width = '200px';
        this.element.style.height = '100px';
        this.element.innerHTML = type;
        this.element.fontSize = '20pt';
    }
}



class Obstacle {
    constructor() {
        this.obs = document.createElement('div');

        this.obs.style.width = '100px';
        this.obs.style.position = 'absolute';

        this.positionLeft = 500;
        this.positionLeftx = 0;
        this.obs.style.overflow = 'hidden';

        this.updatePosition();


    }
    updatePosition() {
        this.positionLeft = this.positionLeft + this.positionLeftx;
        this.obs.style.left = this.positionLeft + 'px';

    }


}

class ObstacleTop extends Obstacle {
    constructor() {
            super();
            this.obsTop = 0;
            this.obs.style.top = this.obsTop + 'px';

            this.obsTopHeightConstant = this.obsTopHeight;
            this.obsTopHeight;
            this.obs.style.height = this.obsTopHeight + 'px';
            this.obs.style.background = 'url(images/pipe-r.png)no-repeat';
            this.obs.style.backgroundPosition = 'bottom';

        }
        // update
}

class ObstacleBottom extends Obstacle {
    constructor() {
        super();
        console.log('inside' + this.positionLeft);
        this.obsBottom = 160;
        this.obsBottomHeight;
        console.log('bottom height' + this.obs);
        this.obs.style.bottom = this.obsBottom + 'px';
        this.obs.style.height = this.obsBottomHeight + 'px';
        this.obs.style.background = 'url(images/pipe.png)no-repeat';

    }
}


let game = new Game();