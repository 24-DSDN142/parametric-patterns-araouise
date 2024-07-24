//your parameter variables go here!
let eyeSize = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(191, 197, 217); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //function draw() {
    stroke(128, 172, 242);
    strokeWeight(3)
    
    //ears
    ellipse(80, 60, 35, 60);
    ellipse(120, 60, 35, 60);
    
    //head
    ellipse(100, 100, 90, 90);
    
    //let eyeSize = 10;
    //eyes
    ellipse(80, 85, eyeSize, eyeSize);
    ellipse(120, 85, eyeSize, eyeSize);
    
    //whiskers
    line(35, 100, 80, 105)
    line(35, 130, 80, 115)
    
    line(120, 105, 165, 100)
    line(120, 115, 165, 130)
    
    //nose
    //triangle(250, 250, 240, 280, 260, 280)
    
    //mouth
    ellipse(100, 120, 20, 20)
}
