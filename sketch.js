var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var address;

var bg,bgimg,buttonimg;

var name;
var Name;
var allPlayersInfo;

var form, player, game;

var cars, car1, car2, car3, car4;

var allHelpers

function preload(){
 bgimg = loadImage("bg.jpg");
 }

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  bg = createSprite(displayWidth /2, displayHeight/2,displayWidth,displayHeight);
  bg.addImage("sa",bgimg)
  //bg.scale = display;
  game = new Game();
  game.getState();
  game.start();
  form = new Form();
}


function draw(){
  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
 drawSprites();
}
