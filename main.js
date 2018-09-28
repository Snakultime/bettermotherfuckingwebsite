var monImage = document.querySelector('img');

monImage.onclick = function() {
      var monSrc = monImage.getAttribute('src');
      if(monSrc === 'gars.jpg') {
        monImage.setAttribute ('src','gars2.jpg');
      } else {
        monImage.setAttribute ('src','gars.jpg');
      }
}

window.onload = function() {
   setTimeout(function() {
   if (window.confirm('xxxvidsxxx : Viens voir des BOOBS ')) {
         window.location = ' https://www.youtube.com/watch?v=dQw4w9WgXcQ'    }
     else {
     }}, 10000);
}

function myFunction () {
	document.body.style.backgroundColor = 'magenta';
}

function pblue() {
    var x = document.getElementsByTagName("P");
    var i;
    for (i=0; i < x.length; i++) {
    	x[i].style.color = "blue";
    }

}

function hgreen() {
	var x = document.querySelectorAll("h1, h2");
	var i;
	for (i=0; i < x.length; i++) {
		x[i].style.color = "green";
	}
}

function policepap() {
		var x = document.querySelectorAll("header");
	var i;
	for (i=0; i < x.length; i++) {
		x[i].style.fontFamily = "Comic Sans";
	}
}

function policepap() {
	var x = document.getElementsByTagName("P");
	var i;
	for (i=0; i < x.length; i++) {
		x[i].style.fontFamily = "papyrus";
	}
}
