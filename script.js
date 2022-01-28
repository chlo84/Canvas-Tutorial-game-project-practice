let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
let ballRadius = 10;
let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth)/2;
let rightPressed = false;
let leftPressed = false;
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

let bricks = [];
for(let c =)

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
        else if(e.key == "Left" || e.key == "ArrowLeft"){
            leftPressed = false;
        }
    }


function drawBall(){
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI*2);
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

function drawBricks(){
    for(let c = 0; c < brickColumnCount; c++){
        for(let r = 0; r < brickRowCount; r++){
            let brickX = (c*(brickWidth + brickPadding))+ brickOffsetLeft;
            let brickY = (r*(brickHeight + brickPadding))+ brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            context.beginPath();
            context.rect(brickX, brickY, brickWidth, brickHeight);
            contextfillStyle = "#0095DD";
            context.fill();
            context.closePath();
        }
    }
}

function draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius){
        dx = -dx;
    }
    if(y + dy < ballRadius){
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius){
        if(x > paddleX && x < paddleX + paddleWidth){
            if(y = y-paddleHeight){
                dy = -dy;
            }
        }
        else {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval);
        }
        
    }
    if(rightPressed && paddleX < canvas.width-paddleWidth){
        paddleX += 7;
        
    }
    else if(leftPressed && paddleX > 0){
        paddleX -= 7;
        
        }
    
    x += dx;
    y += dy;
    
}
let interval = setInterval(draw, 10);




// function drawRectangle(){
// context.beginPath();
// context.arc(240, 160, 20, 0, Math.PI*2, false);
// ctx.strokeStyle("rgba 0, 0, 255, 0.5");
// // context.fillStyle = 'green';
// context.fill();
// context.closePath()
// }



