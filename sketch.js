var canvas;
var block1, block2, block3, block4;
var ball, edges;
var music;

function preload() {
    // load sound here
    music = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(800, 600);

    block1 = createSprite(100, 590, 180, 20);
    block1.shapeColor = "red";

    block2 = createSprite(300, 590, 180, 20);
    block2.shapeColor = "green";

    //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(500, 590, 180, 20);
    block3.shapeColor = "blue";

    block4 = createSprite(700, 590, 180, 20);
    block4.shapeColor = "yellow";

    ball = createSprite(random(20, 750), 100, 40, 40);
    ball.shapeColor = rgb(255, 255, 255);

    //write code to add velocityX and velocityY

    movingSprite = createSprite(random(10, 750), 300, 20, 20);
    movingSprite.shapeColor = "white";
    movingSprite.velocityX = 3;
    movingSprite.velocityY = 3;
}

function draw() {
    background(rgb(169, 169, 169));
    edges = createEdgeSprites();
    ball.bounceOff(edges);


    //write code to bounce off ball from the block1 
    if (ball.x < 0) {
        music.stop();
        ball.velocityX = 3;
    } else if (ball.x > 800) {
        music.stop();
        ball.velocityX = -3;
    }

    if (isTouching(ball, block4)) {
        music.play();
        ball.shapeColor = "yellow";
        bounceOff(ball, block4);

    } else if (isTouching(ball, block3)) {
        music.stop();
        movingSprite.shapeColor = "blue";
        bounceOff(ball, block3);

    } else if (isTouching(ball, block2)) {
        music.stop()
        ball.shapeColor = "green";
        bounceOff(ball, block2);
    } else if (isTouching(ball, block1)) {
        music.stop()
        ball.shapeColor = "red";
        bounceOff(ball, block1);
    }

    if (ball.y < 0) {
        music.stop()
        ball.velocityY = 3
    }

    drawSprites();
}