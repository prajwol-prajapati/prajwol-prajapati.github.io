var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var ballRadius = 20;
var x = ballRadius;
var y = ballRadius;
var ballRadiusx = 0;
var dx = 0;
var dy = -2;
var a = 0;
var b = 0;

function drawBall() {
    ctx.beginPath();
    // ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    // if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    //     dx = -dx;
    // }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        if(y + dy > canvas.height-ballRadius){
        	dy = -dy;
        	ballRadiusx-=.05;
        }else if(y + dy < ballRadius){
        	dy = -dy;
        	ballRadius=20;
        }
    }
    
    // x += dx;
    ballRadius = ballRadius + ballRadiusx;
    y += dy;
}

function tenCircle() {
	for(var i = 0; i < 10; i++){
		
		draw();

		y += ballRadius;
		b += ballRadius*2;
	}
}

// tenCircle();
setInterval(draw, 10);