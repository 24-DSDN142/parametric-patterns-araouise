//your parameter variables go here!
let toeSize = 11 //11
let toeY = 190 //190
let eyeballX = 80 //80 (ranges from 76 to 83 )
let eyeballHeight = 15 //15
let bowtieSize = 5 //5

let drawFish = 2 //fishes 


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(105, 181, 164); //light blue colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
    stroke(0);
    strokeWeight(1);
    angleMode(DEGREES);

//  let fishtailX1 = 30
//  let fishtailX2 = 40
//  let fishtailY1 = 15
//  let fishtailY2 = 5
//  let fishtailY3 = 25
 // let fishX = 20
 // let fishY = 15
 // let fishWidth = 30
 // let fishHeight = 15
 // let fishEyeX1 = 10
 // let fishEyeX2 = 15
 // let fishEyeY1 = 17
 // let fishEyeY2 = 12
    //fish
  if (drawFish > 1){

 strokeWeight(1);
 fill(201, 153, 113);

  
  triangle(35, 40, 25, 55, 45, 55);
  ellipse(35, 30, 15, 30);
  //line(fishEyeX1, fishEyeY1, fishEyeX2, fishEyeY2)
  //line(fishEyeX1, fishEyeY2, fishEyeX2, fishEyeY1)

 //triangle(fishtailX1, fishtailY1+30, fishtailX2, fishtailY2+30, fishtailX2, fishtailY3+30);
 triangle(180, 160, 170, 145, 190, 145);
 ellipse(180, 170, 15, 30);
  //line(fishEyeX1, fishEyeY1+30, fishEyeX2, fishEyeY2+30)
  //line(fishEyeX1, fishEyeY2+30, fishEyeX2, fishEyeY1+30)

  //triangle(fishtailX1, fishtailY+60, fishtailX2, fishtailY2+60, fishtailX2, fishtailY3+60);
  //ellipse(fishX, fishY+60,fishWidth, fishHeight);
  //line(fishEyeX1, fishEyeY1+60, fishEyeX2, fishEyeY2+60);
  //line(fishEyeX1, fishEyeY2+60, fishEyeX2, fishEyeY2+60);

  
  }
  
    
    drawEars(60, 45);
    drawEars(140, 45);

    drawInnerEarpart(65, 43);
    drawInnerEarpart(135, 43);

    
    drawTail(140, 170);
    
    drawBody(40, 170);
    
    drawHead(100, 50);
    
    
    drawNose(95, 50);
    
    drawEyeballs(eyeballX, 35);
    drawEyeballs(eyeballX + 40, 35);

    if(eyeballHeight < 15){ //faint blush
      fill(252, 204, 204);
      ellipse(80, 50, 15, 15);
      ellipse(120, 50, 15, 15);
      
    }

    drawEyes(80, 35);
    drawEyes(120, 35);
  
    drawMouth(95, 50);
    
    drawLegs(70, 140);
    drawLegs(95, 140);
    drawLegs(105, 130);
    drawLegs(130, 140);

    drawToes(73, toeY);
    drawToes(83, toeY);

    drawBowtie(100, 93);
  
}

function drawEars(x,y){
  fill(240, 237, 238);
  strokeWeight(1);
beginShape(); //left ear
      vertex(60, 45);
      vertex(53, 10);
      vertex(85, 13);
    endShape(CLOSE);
    
    beginShape(); //right ear
      vertex(140, 45);
      vertex(116, 14);
      vertex(150, 11);
    endShape(CLOSE);
}


function drawInnerEarpart(x,y){
  strokeWeight(0);
  fill(214, 161, 181);
  beginShape();
  vertex(65, 43);
  vertex(60, 16);
  vertex(77, 17);
  endShape(CLOSE);

  beginShape()
  vertex(135, 43);
  vertex(110, 19);
  vertex(143, 16);
  endShape(CLOSE);
}

function drawEyeballs(x,y){
fill(132, 163, 145);
strokeWeight(0);
ellipse(eyeballX, 35, 12, eyeballHeight);
ellipse(eyeballX + 40, 35, 12, eyeballHeight);
}
function drawEyes(x, y){
  noFill();
  strokeWeight(1);
  ellipse(80, 35, 20, eyeballHeight);
  ellipse(120, 35, 20, eyeballHeight);
}
function drawLegs(x,y) {
  strokeWeight(1)

  line(70, 140, 70, toeY);//left leg
  line(95, 140, 95, toeY);
  line(105, 140, 105, toeY);//right leg
  line(130, 140, 130, toeY);
}

function drawMouth(x,y){
  noFill();
  strokeWeight(1);
  arc(95, 50, 15, 25, 60, 120);
  arc(105, 50, 15, 25, 60, 120);
  line(100, 55, 100, 60);
}

function drawToes(x,y){
  strokeWeight(1);
  fill(240, 237, 238);
  arc(73, toeY, toeSize, toeSize, 180, 0); //far left toebean
  arc(83, toeY, toeSize, toeSize, 180, 0);
  arc(93, toeY, toeSize, toeSize, 180, 0);
    
  arc(107, toeY, toeSize, toeSize, 180, 0);
  arc(117, toeY, toeSize, toeSize, 180, 0);
  arc(127, toeY, toeSize, toeSize, 180, 0); //far right toebean

}

function drawTail(x,y){
  strokeWeight(1);
  fill (240, 237, 238)
  strokeCap(ROUND);
    beginShape();
    vertex(130, toeY);
    bezierVertex(150, 3, 200, 100, 150, toeY);
    endShape(CLOSE);
}

function drawBody(x,y){
fill(240, 237, 238);
strokeWeight(1);
  beginShape();
  vertex(40, toeY);
  //quadraticVertex(50, 1, 165, 35);
  bezierVertex(75, 5, 140, 60, 160, toeY);
  endShape(CLOSE);
}

function drawHead(x,y){
  strokeWeight(1);
  fill(240, 237, 238);
  ellipse(100, 50, 80, 80); 
}
function drawNose(x,y){
  strokeWeight(1)
  fill(214, 161, 181)
  triangle(95, 50, 100, 55, 105, 50);
}

function drawBowtie(x,y){
  strokeWeight(1);
  fill(196, 33, 33);
  triangle(80, 105, 80, 80, 100, 93);
  triangle(120, 105, 120, 80, 100, 93);
  fill(0);
  ellipse(100, 93, bowtieSize, bowtieSize + 5);
}

