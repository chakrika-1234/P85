canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");

greencar_width = 100;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	bg_img_tag = new Image();
   bg_img_tag.onload = uploadBg;
   bg_img_tag.src = bg_img;

}

function uploadBackground() {
	context.drawImage(bg_img_tag, 0, 0, canvas.width, canvas.height);


}

function uploadgreencar() {
	context.drawImage(greencar_img_tag, greencar_x, greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y>0){
		greencar_y=greencar_y-20;
		uploadBg();
		uploadgreencar();
	}
 
}

function down()
{
	if(greencar_y<=500){
		greencar_y=greencar_y+20;
		uploadBg();
		uploadgreencar();
	}
 
}

function left()
{
	if(greencar_x>0){
		greencar_x=greencar_x-20;
		uploadBg();
		uploadgreencar();
	}
}

function right(){
	if(greencar_x<=700){
		greencar_x=greencar_x+20;
		uploadBg();
		uploadgreencar();
	}
}
