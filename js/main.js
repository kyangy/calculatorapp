var euroButton = document.getElementById("euroButton");
var yenButton = document.getElementById("yenButton");
var wonButton = document.getElementById("wonButton");
var pesosButton = document.getElementById("pesosButton");
var poundButton = document.getElementById("poundButton");


var digit1 = document.getElementById("digit1");
var result = document.getElementById("result");

euroButton.addEventListener("click", function (){
	a = digit1.value;
	b = a * 0.80;
	result.value = b;
});

yenButton.addEventListener("click", function(){
	a = digit1.value;
	b = a * 118.10;
	result.value = b;
});

wonButton.addEventListener("click", function(){
	a = digit1.value;
	b = a * 1114.90;
	result.value = b;
});

pesosButton.addEventListener("click", function(){
	a = digit1.value;
	b = a * 13.66;
	result.value = b;
});

poundButton.addEventListener("click", function(){
	a = digit1.value;
	b = a * 0.64;
	result.value = b;
});
