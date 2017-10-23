
 
 
 function show (){
 var weather = document.getElementById('weather');
 var temperature = document.getElementById('temperature');
 var formContent = document.getElementById('myForm');
 
var clothesArray = ['images/shirt.png','images/sneakers.png', 'images/gloves.png', 'images/jacket.png', 'images/longSleeves.png', 'images/pants.png', 'images/shorts.png', 'images/sunglasses.png', 'images/winterHat.png'];


weather.innerHTML = "So, the current temperature is "+temperature.value+" degrees! You should wear: <br/>";


if (temperature.value < -15 ) {

	 var x = document.createElement("img");
    x.setAttribute("src", "images/frozen.gif");
     x.setAttribute("alt", "frozen");
    document.body.appendChild(x);

    alert("It is too cold! You are going to freeze!")



} else if (temperature.value >= -15  && temperature.value <= -3) {

	var img1 = document.createElement('img')
      img1.src = clothesArray[1];
      document.body.appendChild(img1);

      var img2 = document.createElement('img')
      img2.src = clothesArray[2];
      document.body.appendChild(img2);

      var img3 = document.createElement('img')
      img3.src = clothesArray[3];
      document.body.appendChild(img3);

      var img4 = document.createElement('img')
      img4.src = clothesArray[4];
      document.body.appendChild(img4);

      var img5 = document.createElement('img')
      img5.src = clothesArray[5];
      document.body.appendChild(img5);

     
      var img6 = document.createElement('img')
      img6.src = clothesArray[8];
      document.body.appendChild(img6);


}
else if (temperature.value > -3 && temperature.value <= 5) {

	var img1 = document.createElement('img')
      img1.src = clothesArray[1];
      document.body.appendChild(img1);

      var img2 = document.createElement('img')
      img2.src = clothesArray[2];
      document.body.appendChild(img2);

      var img3 = document.createElement('img')
      img3.src = clothesArray[3];
      document.body.appendChild(img3);

      var img4 = document.createElement('img')
      img4.src = clothesArray[5];
      document.body.appendChild(img4);

      var img5 = document.createElement('img')
      img5.src = clothesArray[8];
      document.body.appendChild(img5);

 



} else if (temperature.value > 5 && temperature.value <= 13) {
var img1 = document.createElement('img')
      img1.src = clothesArray[1];
      document.body.appendChild(img1);

      var img2 = document.createElement('img')
      img2.src = clothesArray[4];
      document.body.appendChild(img2);

      var img3 = document.createElement('img')
      img3.src = clothesArray[5];
      document.body.appendChild(img3);

    
} else if (temperature.value >  13 && temperature.value <= 18) {
	var img1 = document.createElement('img')
      img1.src = clothesArray[0];
      document.body.appendChild(img1);

      var img2 = document.createElement('img')
      img2.src = clothesArray[1];
      document.body.appendChild(img2);

      var img3 = document.createElement('img')
      img3.src = clothesArray[5];
      document.body.appendChild(img3);

} else if (temperature.value > 18 && temperature.value <=25) {
	var img1 = document.createElement('img')
      img1.src = clothesArray[0];
      document.body.appendChild(img1);

      var img2 = document.createElement('img')
      img2.src = clothesArray[1];
      document.body.appendChild(img2);

      var img3 = document.createElement('img')
      img3.src = clothesArray[6];
      document.body.appendChild(img3);

      var img4 = document.createElement('img')
      img4.src = clothesArray[7];
      document.body.appendChild(img4);

}else if (temperature.value >25) {
	 var x = document.createElement("img");
    x.setAttribute("src", "images/melting.gif");
     x.setAttribute("alt", "melting");
    document.body.appendChild(x);

    alert("It is too hot! You are going to melt!")

}
 
 formContent.innerHTML = ""; // this removes the form text input box after name has been entered.
 
 }
 
