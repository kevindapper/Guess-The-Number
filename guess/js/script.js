var guessedNumbers = [];
var attempts;
var currentGuess;
var goalNumber;
var i;
	
function play() //resets variables and innerHTML to original values
{
	guessedNumbers = [];
	attempts = 0;
	i = 0;
	generateNumber();
	document.getElementById("numberAttempt").innerHTML = attempts;
	document.getElementById("guessedNumbers").innerHTML = "none";
	document.getElementById("prompt").innerHTML = "guess a number between 1 and 99";
	document.getElementById("hint").innerHTML = 'hint';
	document.getElementById("hint").style.color = "#98C377";
	document.getElementById("inGame").className = "show";
	document.getElementById("submit").attributes[1].nodeValue = "checkGuess()";
	document.getElementById("new").attributes[2].nodeValue = null;
	document.getElementById("new").className = "hide";
	document.getElementById("userChoice").value = "";
	document.getElementById("response").attributes[1].nodeValue = "img/start.png";
}

function generateNumber() //generates number to guess
{
	goalNumber = Math.ceil(Math.random() * 99);
	console.log("number to guess is " + goalNumber);
}

function checkGuess() 
{
	currentGuess = document.getElementById("userChoice").value;
	if(currentGuess > 0 && currentGuess < 100)
	{
		if (currentGuess == goalNumber)	//winning condition
		{ 
			document.getElementById("prompt").innerHTML = "lucky guess";
			document.getElementById("response").attributes[1].nodeValue = "img/right.png";
			playAgain();	//shows the new game button
		} 
		else 
		{
			if(currentGuess > goalNumber)
			{
			document.getElementById("prompt").innerHTML =
			  "too high";
			 document.getElementById("response").attributes[1].nodeValue = "img/high.png";
			 
			}
			else
			{
				document.getElementById("prompt").innerHTML =
			  "too low";
			  document.getElementById("response").attributes[1].nodeValue = "img/low.png";
			}
			guessedNumbers[attempts] = currentGuess;  //attempts begins at zero, so using to indicate index in array
			document.getElementById("guessedNumbers").innerHTML = guessedNumbers; //shows previously guessed numbers
			document.getElementById("numberAttempt").innerHTML = attempts+= 1; //increments attempts
		}
		hint();
		if(attempts == 8)
		{
			document.getElementById("prompt").innerHTML = "better luck next time"; //prompt to notify no more guesses
			playAgain();	//shows the new game button
			document.getElementById("response").attributes[1].nodeValue = "img/over.png";
		}
	}
	else
	{
		document.getElementById("prompt").innerHTML = "try a number between 1 and 99";
		document.getElementById("response").attributes[1].nodeValue = "img/error.png";
	}
}

function hint()	//ranges that update the hint for how close to the number
{
	if(Math.abs(goalNumber - currentGuess) < 10)	
	{
  		document.getElementById("hint").innerHTML = 'hot';
		document.getElementById("hint").style.color = "#EF4339";
  	} 
	else if(Math.abs(goalNumber - currentGuess) < 21 && Math.abs(goalNumber - currentGuess) > 9)
	{
  		document.getElementById("hint").innerHTML = 'warmer';
		document.getElementById("hint").style.color = "#FA877F";
  	} 
	else if(Math.abs(goalNumber - currentGuess) < 31 && Math.abs(goalNumber - currentGuess) > 19)
	{
  		document.getElementById("hint").innerHTML = 'colder';
		document.getElementById("hint").style.color = "#BAE8E8";
  	} 
	else 
	{
  		document.getElementById("hint").innerHTML = 'ice cold';
		document.getElementById("hint").style.color = "#d5eae9";
  	}
}

function playAgain()
{
	document.getElementById("new").className = "show";
	document.getElementById("submit").attributes[1].nodeValue = null;	//disables the button to keep guessing
	document.getElementById("inGame").className = "hide";				//hides the guessing button
	document.getElementById("new").attributes[2].nodeValue = "play()";	//enables new game button
}
