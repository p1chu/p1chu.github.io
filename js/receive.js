// Adafruit.io
var adaname = 'morourke';
var adafeedkey1 = 'triptofan';
var adafeedkey2 = 'open-or-closed';
var aiokey = '7290d199347c4a7cbae57969efcd18ed';

var currentValue;
var hour;

// Feed 1: "Closed till" Clock Setting
setInterval(function () {
    
	getAdaIO(adaname, adafeedkey1, aiokey, setTheHour);
	
}, 20000);

// Feed 2: Open or Closed
setInterval(function () {
    
	getAdaIO(adaname, adafeedkey2, aiokey, openClose);
	
}, 20000);


function setTheHour (data) {
	
	currentValue = parseInt(data);
	
	// I needed 12 ranges of 80 to get my 12 hours, so I reset the potentiometer max to 960 in NTK (960/12 = 80)
	var range = Math.floor(currentValue/80)
	
	switch (range) {
		case 0:
			//0-79 : 1 o'clock
			hour = 1;
			break;
		case 1:
			//80-159 : 2 o'clock
			hour = 2;
			break;
		case 2:
			//160-239 : 3 o'clock
			hour = 3;
			break;
		case 3:
			//240-319 : 4 o'clock
			hour = 4;
			break;
		case 4:
			//320-399 : 5 o'clock
			hour = 5;
			break;
		case 5:
			//400-479 : 6 o'clock
			hour = 6;
			break;
		case 6:
			//480-559 : 7 o'clock
			hour = 7;
			break;
		case 7:
			//560-639 : 8 o'clock
			hour = 8;
			break;
		case 8:
			//640-719 : 9 o'clock
			hour = 9;
			break;
		case 9:
			//720-799 : 10 o'clock
			hour = 10;
			break;
		case 10:
			//800-879 : 11 o'clock
			hour = 11;
			break;
		case 11:
			//880-960 : 12 o'clock
			hour = 12;
			break;
		}
	
	$("#till").text("T I L L " + hour);
//	$("#time").text(hour + " o'clock");
}

function openClose (data) {
	
	if (data === 0){
		$("#manners").text("Sorry, we're");
		$("#which-one").text("CLOSED");
	} else {
		$("#manners").text("Yes, we're.");
		$("#which-one").text("O P E N");
	}
}