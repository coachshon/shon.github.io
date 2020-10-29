function selected(icon) {
	var pos = icon.src.lastIndexOf(".");
	var source = icon.src.slice(0, pos);
	source = source + "_selected.png";
	icon.src = source;
}

function unselected(icon) {
	var pos = icon.src.lastIndexOf("_");
	var source = icon.src.slice(0, pos);
	source = source + ".png";
	icon.src = source;
}

function navscroll(button) {
	var section = "about_me";
	switch(button.id){
		case "btn_aboutme":
			section = "about_me";
			break;
		case "btn_myskills":
			section = "my_skills";
			break;
		case "btn_work":
			section = "work_experience";
			break;
		case "btn_education":
			section = "education";
			break;		
		case "btn_projects":
			section = "projects";
			break;	
	}
	finished_typing = true;
	fill_typewriter();
	while (!filled);
	showcontent();
	document.getElementById(section).scrollIntoView();
}


var birthday = new Date(1997, 12, 16, 10, 0, 0, 0);
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs); // miliseconds from epoch
var age = Math.abs(ageDate.getUTCFullYear() - 1970).toString();
var finished_typing = false;
var filled = false;

// set up text to print, each item in array is new line
var aText = new Array(
"> Hello!", 
"> My name is Ariel, I am " + age + " years old.", 
"> I love programming and challenges.",
"> I am majoring in Computer Engineering at Federal University of Bahia (UFBA).",
"> I currently work as a software developer at Ford Motor Company.",
"> If you want to know more about me, you are in the right place :)"
);
var iSpeed = 10; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function fill_typewriter() {
	var destination = document.getElementById("typedtext");
	var text = "";
	for (var i = 0; i < aText.length; i++) {
		text += aText[i] +  '<br />';
	}
	destination.innerHTML = text;
	filled = true;
}

function typewriter() {
	sContents =  ' ';
	iRow = Math.max(0, iIndex-iScrollAt);
	var destination = document.getElementById("typedtext");
	while ( iRow < iIndex ) {
    	sContents += aText[iRow++] + '<br />';
   	}
	if (finished_typing == false) {
		destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
	}
   	if ( iTextPos++ == iArrLength ) {
    	iTextPos = 0;
    	iIndex++;
    	if ( iIndex != aText.length ) {
			iArrLength = aText[iIndex].length;
			if (finished_typing == false) {
				setTimeout("typewriter()", 500);
			} 	
    	}
		else {
			finished_typing = true;
			filled = true;
			showcontent();
			destination.innerHTML = destination.innerHTML.replace("_", "");
		}
   	} 
	else {
		if (finished_typing == false) {
			setTimeout("typewriter()", iSpeed);
		} 	
   	}

  }
document.addEventListener("DOMContentLoaded", function() {
	document.body.style.overflow = 'hidden';
	typewriter();
	console = document.getElementById("console");
	typedtext = document.getElementById("typedtext");
	console.style.width = (0.7 * window.screen.width);
	typedtext.style.width = console.style.width;
});

function showcontent() {
	var elements = document.getElementsByClassName('aftertw');
  	for(i = 0; i < elements.length; i++) {
		document.body.style.overflow = 'visible';
    	elements[i].style.visibility = 'visible';
		elements[i].style.animation = 'fadein 2s';
  	}
}

