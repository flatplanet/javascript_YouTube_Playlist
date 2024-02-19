// Create 2 random numbers
let number1 = Math.floor(Math.random() * 10) + 1;
let number2 = Math.floor(Math.random() * 10) + 1;
// Get the Answer
let theAnswer = number1 + number2;

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
		if (ourAnswer == theAnswer) {
			// We Win!
			document.getElementById("output").innerHTML = "Correct! " + number1 + " + " + number2 + " = " + ourAnswer;
		} else {
			// Wrong Answer
			document.getElementById("output").innerHTML = "Wrong!! " + number1 + " + " + number2 + " Doesn't Equal " + ourAnswer;
		}
	}

}


// Clear The Form and Stuff
function clearForm(){
	document.getElementById("myForm").reset();
	document.getElementById("output").innerHTML = "";
}

// Play Again - Reset 
function restart() {
	// reset the form
	document.getElementById("myForm").reset();
	// reload the page
	location.reload();
}