var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 object_img="";
function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
        object_img=Img;
        object_img.scaleToWidth(900);
        object_img.scaleToHeight(400);
        object_img.set({
            top:0,
            left:0
        });
        canvas.add(object_img);
    });
}

function playSound(){
	x.play();
    
}
