var addButton = document.getElementById("addButton");
var subtractButton = document.getElementById("subtractButton");
var multiplyButton = document.getElementById("multiplyButton");
var divideButton = document.getElementById("divideButton");

var digit1 = document.getElementById("digit1");
var digit2 = document.getElementById("digit2");
var result = document.getElementById("result");


addButton.addEventListener("click", function (){
	a = digit1.value;
	b = digit2.value;
	c = a + b;
	c = result.value;
	console.log(c);
});

subtractButton.addEventListener("click", function(){
	a = digit1.value;
	b = digit2.value;
	c = a - b;
	c = result.value;
	console.log(c);
});

multiplyButton.addEventListener("click", function(){
	a = digit1.value;
	b = digit2.value;
	c = a * b;
	c = result.value;
	console.log(c);
});

divideButton.addEventListener("click", function(){
	a = digit1.value;
	b = digit2.value;
	c = a / b;
	c = result.value;
	console.log(c);
});