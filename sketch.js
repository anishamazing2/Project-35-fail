var dog, dogImage, happyDog;
var database;
var foodStock;

function preload()
{
  //load images here
  dogImage = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250, 250, 100, 100);
  dog.addImage(dogImage);
  foodStock = database.ref('Food');
  foodStock.on("value", readStock)

  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodStock);
    dog.addImage(happyDog);
  }

  drawSprites();
  textSize(30);
  fill ("white");
  stroke ("black");
  text("Food: " + foodStock, 200, 200);
  //add styles here

}
function readStock(data){
  foodStock = data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x = x-1
  }
  database.ref('/').update({
    Food:x
  })
}



