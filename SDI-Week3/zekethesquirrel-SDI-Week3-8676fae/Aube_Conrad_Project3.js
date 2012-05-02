// JavaScript for Project 3
// Conrad Aube
// SDI 12/02
var catInfo = function (jsonData, chosenCat) { // Handle JSON data and returns info for chosen index number as cat object
	var cat = jsonData.cats[chosenCat]
	return cat;
};


// local variables
var chosen = 0, // Index number for chosen catch
	//Variables from json data
	cat = catInfo(info, chosen), // Set cat from json data and chosen index number
	time = info.time, // Sets time object from JSON data
	room = info.room, // Sets room object from JSON data
	//
	timeLeft = (time.alarm + 12) - time.bed, // time between bed and alarm
	food = true,
	toysLeft = true,
	asleep = false
;

var currentTime = function (timeLeft, time) { // Gets the current time
	current = time.alarm - timeLeft
	if (current < 1) {
		console.log ("The time is now " + (current + 12) + "pm. There are " + timeLeft + " hours until the alarm goes off.");
	} else {
		console.log ("The time is now " + current + "am. There are " + timeLeft + " hours until the alarm goes off.")
	};
};

var eat = function () { // Eating function
	console.log (cat.name + " eat's their food, which keeps them happy for 2 hours.");
	timeLeft -= 2;
	currentTime(timeLeft, time)
};	

var toy = { // Toy object with play function
	names: cat.toys,
	play: function () {
		for (i = 0; i < cat.toys.length; i++) {
			console.log (cat.name + " plays with their " + toy.names[i] + " for an hour.");
			timeLeft--;
			currentTime(timeLeft, time);
		};
	toysLeft = false
	},
};

var night = function () { // What happens at night
	while (asleep === true) {
		if (toysLeft === true) {
			toy.play();
			toysLeft = false
		} else if (food === true) {
			eat();
			food = false
		}else if (timeLeft > 0) {
			console.log (cat.name + " is bored and hungry! They've woken you up!");
			currentTime (timeLeft, time);
			asleep = false
		} else {
			console.log ("The alarm goes off at " + time.alarm + "am. You made it through the night without the cat waking you up!");
			asleep = false
		};
	};
};


var checkRoom = function (room) { // Check room. Turn off pc, clean clutter
	while (asleep === false) {
		if (room.clutter === true) {
			console.log ("You notice the desk is cluttered. Better clean it up so " + cat.name + " doesn't knock things down.");
			room.clutter = false;
		} else if (room.pcPower === true){
			console.log ("The computer is on. I should turn it off so it doesn't wake me up when " + cat.name + " walks on the keyboard.");
			room.pcPower = false;
		} else {
			console.log ("The desk is clear and the computer is off, looks like you're ready to go to bed.");
			asleep = true
		};
	};
	console.log ("After checking the room you go to bed.");
};


// Execution
console.log ("It's almost " + time.bed + "pm. You'd better get to bed soon since you have to be up at " + time.alarm + "am." )
checkRoom(room); // Call check room function
// after checking the room you fall asleep
night(); // night function that includes cat playing with toys and eating




