// Conrad Aube
// SDI 02/12
// Project 4

// This is an empty library :(

// Phone number validation
var validatePhone = function (phoneNumber) { // Phone Number Validation
	if (phoneNumber.length < 10) { //If the number has less than 10 characters
		return false;
	} else {
		var numberPattern = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;
		/* Regex for phone number validation. Breakdown below.
		/^ 		: is the start of the regex
		\(? 	: Means that the phone number may begin with an optional "("
		(\d{3})	: States that after the optional "(" there must be 3 numeric digits. If there is no "(" then the number must start with 3 digits. This means that either "(801" or "801" will work.
		\)?		: Means that after the first 3 digits there may be an optional ")"
		[-]?	: Means that there can be an optional "-" after either the first 3 digits, or the ")"
		(\d{3})	: Means that there must be another 3 numeric digits.
		[-]?	: States that there may be a "-" after the previous 3 digits.
		(\d{4}): Means there must be another 4 digits.
		$/		: Designates the end of the regex	
		*/
		return numberPattern.test(phoneNumber)
	};
};
	
var isPhone = validatePhone("(801)648-9353"); // Phone validation test
console.log (isPhone); //Validation test results

var formatMoney = function (money) { // Format a number to 2 decimal places and adds a "$" to the beginning.
	var dollars = "$" + money.toFixed(2) // fixes the number of decimal places to 2, and adds a "$" to hte beginning
	return dollars
};

var cash = formatMoney(27.568); // formatMoney test
console.log (cash); // Log results of formatMoney test

var findSmallest = function (numberArray, givenNumber) { // Find the smallest number in an array of numbers that is greater than a given number
	var gNumber = []
	for (var i=0; i < numberArray.length; i++) { //Finds all values greater than the given number
		if (numberArray[i] > givenNumber) {
			gNumber.push (numberArray[i]) // Places these numbers into an internal array
		};
	};
	min = gNumber[0]
	for (var i=0; i < gNumber.length; i++){ // Finds the lowest number in the array of numbers that are greater than the given number
		if (gNumber[i] < min) {
			min = gNumber[i];
		};
	};
	return min
};

// Test for finding the smallest number in an array that is greater than a given number.
var arrayOfNumbers = [21, 15, 100, 7, 87, 26];
var targetNumber = 25;
var smallest = findSmallest(arrayOfNumbers, targetNumber);
console.log (smallest); // Log results of smallest number test

var repSep = function (str, sep) { // Changes all the seperators in a given string to another given seperator
	var re = /\W(\s?)/gi // Matches the first word boundery, which may or may not include a space
	var newString = str.replace (re, sep + "$1") // Replaces all instances of the matched word boundery with the new seperator. Includes a space after the seperator if the original had a space.
	return newString
};

//Test for replacing the seperator in one string with another seperator
var oldString = "Turtle,monkey,chinchilla,cat";
var newSep = "/";
var newString = repSep(oldString, newSep);
console.log(oldString);
console.log(newString);

var addArrNum = function (mixedArr) { //Adds all numbers in a given array.
	var total = 0
	for (var i = 0; i < mixedArr.length; i++){
		var thisVal = parseInt(mixedArr[i], 10) //Trys to parse the value into a decimal number
		if (!isNaN(thisVal)){// If the value is a number then add it to the total
			total += thisVal;
		};
	};
	return total;
};

// Test adding numbers in an array
var mixed = [47, "23", "words", true, 100];
var arrTotal = addArrNum(mixed);
console.log (arrTotal);

var daysTill = function (date1, date2) {
	var day = 1000 * 60 * 60 * 24; // milliseconds in a day
	var start = date1.getTime(); // Convert start date into milliseconds
	var end = date2.getTime(); // convert end date into milliseconds
	
	var difference = Math.abs(start - end) // Find the difference
	
	return Math.round(difference/day) // Return the difference in days instead of milliseconds.
	
};
var firstDate = new Date(2012, 1, 12);
var secondDate = new Date(2012, 12, 25);
var daysBetween = daysTill(firstDate, secondDate);
console.log (daysBetween);

