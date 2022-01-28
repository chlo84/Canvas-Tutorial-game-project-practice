const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
let ball1 = canvas.width/2;
let ball2 = canvas.height-30;
let lt1 = 2;
let lt2 = -2;
let ballRadius = 10;
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

function drawBall(){
    context.beginPath();
    context.arc(ball1, ball2, ballRadius, 0, Math.PI*2);
    context.fillStyle = 'green';
    context.fill();
    context.closePath();
    }

function drawPaddle() {
context.beginPath();
context.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
context.fillStyle = "#0095DD";
context.fill();
context.closePath();
}

function draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    context.beginPath();
    context.arc(ball1, ball2, 10, 0, Math.PI*2);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
    ball1 += lt1;
    ball2 += lt2; 
    if(ball1 + lt1 < 0){
        lt1 = -lt1;
    } 
    if(ball1 + lt1 > canvas.height){
        lt1 = -lt1;
    }
    if(ball1 + lt1 > canvas.height || ball1 + lt1 < 0){
        lt1 = -lt1;
    }
    if(ball2 + lt2 > canvas.width-ballRadius || ball2 + lt2 < 0){
        lt2 = -lt2;
    }
    if(ball1 + lt1 > canvas.height || ball1 + lt1 < 0){
        lt1 = -lt1;
    }
    if(rightPressed){
        paddleX += 7;
    }
    else if(leftPressed){
        paddleX -= 7;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
if(e.key == "Right" || e.key == "ArrowRight"){
    rightPressed = true;
}
else if(e.key == "Left" || e.key == "ArrowLeft"){
    leftPressed = true;
}

}
function keyUpHandler(e){
    if(e.key == "Right" || e.key == "ArrowRight"){
        rightPressed = false;
    }
    else if(e.key == "Left" || e.ket == "ArrowLeft"){
        leftPressed = false;
    }
}
setInterval(draw, 8);




// function drawRectangle(){
// context.beginPath();
// context.arc(240, 160, 20, 0, Math.PI*2, false);
// ctx.strokeStyle("rgba 0, 0, 255, 0.5");
// // context.fillStyle = 'green';
// context.fill();
// context.closePath()
// }



