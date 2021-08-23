var bttn_red;
var bttn_green;

function setup() {
  createCanvas(400,400);

  bttn_red = createButton("RED");
  bttn_red.position(100,50);
  bttn_red.mousePressed(red_bg);

  bttn_green = createButton("GREEN");
  bttn_green.position(250,50);
  bttn_green.mousePressed(green_bg);

  function red_bg()
  {
    r = 255;
    g = 0;
    b = 0;
  }
  
  function green_bg()
  {
    r = 0;
    g = 255;
    b = 0;
  }  
}

function draw() 
{
  background(30);
}


 

