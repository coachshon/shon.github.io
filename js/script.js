function selected(icon){
	var pos = icon.src.lastIndexOf(".");
	var source = icon.src.slice(0, pos);
	source = source + "_selected.png";
	icon.src = source;
}

function unselected(icon){
	var pos = icon.src.lastIndexOf("_");
	var source = icon.src.slice(0, pos);
	source = source + ".png";
	icon.src = source;
}


var birthday = new Date(1997, 12, 16, 10, 0, 0, 0);
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs); // miliseconds from epoch
var age = Math.abs(ageDate.getUTCFullYear() - 1970).toString();


// set up text to print, each item in array is new line
var aText = new Array(
"> Hello!", 
"> My name is Ariel, I am " + age + " years old.", 
"> I love programming and challenges.",
"> I am majoring in Computer Engineering at Federal University of Bahia (UFBA).",
"> I currently work as a software developer at Ford Motor Company.",
"> If you want to know more about me. You are in the right place :)"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}
document.addEventListener("DOMContentLoaded", function(){
	typewriter();
});

