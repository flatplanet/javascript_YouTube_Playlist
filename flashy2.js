
// Math Picker Function
function mathPicker(sign){
	// Create 2 random numbers
	globalThis.number1 = Math.floor(Math.random() * 10) + 1;
	globalThis.number2 = Math.floor(Math.random() * 10) + 1;
	// Get the math Sign
	globalThis.mathSign = sign;
	// Get all our answers
	globalThis.addAnswer = number1 + number2;
	globalThis.subtractAnswer = number1 - number2;
	globalThis.multiplyAnswer = number1 * number2;
	// Logic for math sign
	if (mathSign != "Choose Math Type"){
		// Output Numbers and Sign to the screen:
		document.getElementById("nums").innerHTML = number1 + " " + mathSign + " " + number2;

	}


}


// Do Answer Stuff
function answer(){
	// get the answer the user typed in
	let ourAnswer = document.getElementById("ourAnswer").value;
	// determine if the answer is a number
	if (isNaN(ourAnswer)){
		// Not a Number
		document.getElementById("output").innerHTML = "Hey! " + ourAnswer + " Is Not A Number! Try Again!";
	} else {
		// Is a Number
		if (mathSign == "+") {
			if (ourAnswer == addAnswer){
				// We Win!
				document.getElementById("output").innerHTML = "Correct! " + number1 + " + " + number2 + " = " + ourAnswer;
			} else {
				// We lose!
				document.getElementById("output").innerHTML = "Wrong!! " + number1 + " + " + number2 + " Doesn't Equal " + ourAnswer;
			}
			
	} else if (mathSign == "-"){
		if (ourAnswer == subtractAnswer){
				// We Win!
				document.getElementById("output").innerHTML = "Correct! " + number1 + " - " + number2 + " = " + ourAnswer;
			} else {
				// We lose!
				document.getElementById("output").innerHTML = "Wrong!! " + number1 + " - " + number2 + " Doesn't Equal " + ourAnswer;
			}


	} else if (mathSign == "*"){
		if (ourAnswer == multiplyAnswer){
				// We Win!
				document.getElementById("output").innerHTML = "Correct! " + number1 + " * " + number2 + " = " + ourAnswer;
			} else {
				// We lose!
				document.getElementById("output").innerHTML = "Wrong!! " + number1 + " * " + number2 + " Doesn't Equal " + ourAnswer;
			}
	}

}
}


// Clear The Form and Stuff
function clearForm(){
	document.getElementById("myForm").reset();
	document.getElementById("output").innerHTML = "";
	document.getElementById("nums").innerHTML = "";
}

// Play Again - Reset 
function restart() {
	// reset the form
	document.getElementById("myForm").reset();
	// reload the page
	location.reload();
}