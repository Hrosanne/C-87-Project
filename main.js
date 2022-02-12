
canvas = new fabric.Canvas("myCanvas");
block_y=1;
block_x=1;
block_image_width = 350;
block_image_height = 430;

var blockImg_object= "";

function new_image(get_img)
{
	fabric.Image.fromURL(get_img,function(Img){
        blockImg_object = Img;
        blockImg_object.scaleToWidth(block_image_width);
        blockImg_object.scaleToHeight(block_image_height);
        blockImg_object.set({
            top:block_y,
            left:block_x
        });
        canvas.add(blockImg_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '74') 
	{
		new_image('jal2.png');
		console.log("j");
	}

	if(keyPressed == '86')
	{
		block_x = 200;
		new_image('vayu2.png');
		console.log("v");
	}
	
	if(keyPressed == '65')
	{
		block_x =350;
		new_image('agni3.png');
		console.log("a");
	}
	
	if(keyPressed == '80')
	{
		block_x =500;
		new_image('prithvi.png');
		console.log("p");
	}
}

