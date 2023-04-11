
  var rn1=Math.random()*6;
  rn1=Math.floor(rn1)+1;
  var random_dice_image="dice"+rn1+".png";

  var random_image_source="photos/"+random_dice_image;

  var image_1=document.querySelectorAll("img")[0];
  image_1.setAttribute("src",random_image_source);

  var rn2=Math.random()*6;
  rn2=Math.floor(rn2)+1;
  var random_dice_image="dice"+rn2+".png";

  var random_image_source="photos/"+random_dice_image;

  image_2=document.querySelectorAll("img")[1];
  image_2.setAttribute("src",random_image_source);

  if(rn1>rn2){
    document.querySelector("h1").innerHTML="🌟Player 1 win";
  }
  else if(rn1<rn2){
    document.querySelector("h1").innerHTML="Player 2 win🌟";
  }
  else{
    document.querySelector("h1").innerHTML="🌟Draw🌟";
  }
