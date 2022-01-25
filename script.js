const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

function drawBall(){
context.beginPath()
context.arc = 240, 160, 20, 0, Math.PI*2, false;
context.fillStyle = 'red';
context.fill()
context.closePath()
}





