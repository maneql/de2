function changeColor(){
	var divcolor = document.getElementById("changeColordiv");
	if(divcolor.style.backgroundColor =="yellow")
		divcolor.style.backgroundColor = "red";
	else
		divcolor.style.backgroundColor = "yellow";
}

function addsolution(){
	document.getElementById("paragraph1").className ="myclass";
	document.getElementById("paragraph2").className ="myclass";	
}