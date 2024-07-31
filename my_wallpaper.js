//your parameter variables go here!


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(191, 197, 217); //light blue colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //function draw() {
    stroke(0);
    strokeWeight(1);
    angleMode(DEGREES);
    
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
    
    //tail
    strokeCap(ROUND);
    beginShape();
    vertex(140, 170);
    bezierVertex(165, 3, 180, 100, 150, 170);
    endShape(CLOSE);
    
    //body
    beginShape();
    vertex(40, 170);
    //quadraticVertex(50, 1, 165, 35);
    bezierVertex(75, 5, 140, 60, 160, 170);
    endShape(CLOSE);
    
    //head
    ellipse(100, 50, 80, 80); 
    
    //nose
    triangle(95, 50, 100, 55, 105, 50);
    
    //eye
    ellipse(80, 35, 20, 15);
    ellipse(120, 35, 20, 15);
    
    //eyeballs
    ellipse(80, 35, 12, 15);
    ellipse(120, 35, 12, 15);
    
    //middle of the eye
    //line(80, 34, 80, 36);
    //line(120, 34, 120, 36);
    
    //mouth
    arc(95, 50, 15, 25, 60, 120);
    arc(105, 50, 15, 25, 60, 120);
    line(100, 55, 100, 60);
    
    //legs
    line(70, 140, 70, 170);
    line(95, 140, 95, 170);
    line(105, 140, 105, 170);
    line(130, 140, 130, 170);
    
    //toes
    let toeSize = 11
    let toeY = 170
    
    arc(73, toeY, toeSize, toeSize, 180, 0); //far left toebean
    arc(83, toeY, toeSize, toeSize, 180, 0);
    arc(93, toeY, toeSize, toeSize, 180, 0);
    
    arc(107, toeY, toeSize, toeSize, 180, 0);
    arc(117, toeY, toeSize, toeSize, 180, 0);
    arc(127, toeY, toeSize, toeSize, 180, 0); //far right toebean
    
}

