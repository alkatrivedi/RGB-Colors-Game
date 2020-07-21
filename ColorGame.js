var numSquares = 6;
// var colors = generateRandomColors(numSquares);
var colors = [];
// var pickedColor = pickColor();
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
// var easyBtn = document.getElementById("easyBtn");
// var hardBtn = document.getElementById("hardBtn");

// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0;i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0;i<squares.length;i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpSquares(){
	for(var i=0;i<squares.length;i++)
	{
		// //add inital color to the squares
		// squares[i].style.backgroundColor = colors[i];
		//add click listener to the clicked squares
		squares[i].addEventListener("click",function(){
			//grab color of the clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickcolor
			if(pickedColor === clickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
}

function setUpModeButtons(){
	//mode buttons event listener
		for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function reset(){
	//generate all new color
	colors = generateRandomColors(numSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change color display to match the color of the array
	colorDisplay.textContent = pickedColor;
	//change the span too empty
	messageDisplay.textContent = "";
	//change play again to new colors
	resetButton.textContent = "New Colors";
	//change colors of the squares
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click",function(){
	reset();
	// //generate all new color
	// colors = generateRandomColors(6);
	// //pick a new random color
	// pickedColor = pickColor();
	// //change color display to match the color of the array
	// colorDisplay.textContent = pickedColor;
	// //change the span too empty
	// messageDisplay.textContent = "";
	// //change play again to new colors
	// this.textContent = "New Colors";
	// //change colors of the squares
	// for(var i=0;i<squares.length;i++)
	// 	squares[i].style.backgroundColor = colors[i];
	// h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;



function changeColors(color)
{
	//loop through all the squares
	for(var i=0;i<squares.length;i++)
	{
		//change each color to match the given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i=0;i<num;i++){
		arr.push(randomColor());
		//get random color and push into arr
	}
	//return that arr
	return arr;
}

function randomColor(){

	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}