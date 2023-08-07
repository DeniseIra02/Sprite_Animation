const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 250;
const CANVAS_HEIGHT = canvas.height = 350;

const playerImage = new Image();
playerImage.src = 'sporty_boy.jpg';

const spriteWidth = 240;
const spriteHeight = 500;
let frameX = 0;
let frameY = 0;

let gameFrame = 0;
const staggerFrame = 30;

function animate(){
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    if(gameFrame % staggerFrame == 0){
        if(frameX < 5)
        {
            frameX++;
        }
        else{
            frameX=0;
        }
    }
    gameFrame++;

    requestAnimationFrame(animate);
}
animate();