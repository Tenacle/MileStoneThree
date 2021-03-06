
//automatically selects bills at startup
$(document).ready(function(){
	toptext.innerHTML = "Bills";
	bsidebtn.style.color = "white";
	gsidebtn.style.color = "black";
	usidebtn.style.color = "black";
	bsidebtn.style.background = "#002171";
	gsidebtn.style.background = "white";
	usidebtn.style.background = "white";
	billsDisplay.style.display = "block";
	groupsDisplay.style.display = "none";
	usersDisplay.style.display = "none";
});


//get the button
var bsidebtn = document.getElementById("bsidebtn");
var gsidebtn = document.getElementById("gsidebtn");
var usidebtn = document.getElementById("usidebtn");
var billsDisplay = document.getElementById("billsID");
var groupsDisplay = document.getElementById("groupsID");
var usersDisplay = document.getElementById("usersID");

//get the changeing text
var toptext = document.getElementById("toptext");

//clicking the bills button changes everything else back to white and sets the color and display for the bills
bsidebtn.onclick = function(){
	toptext.innerHTML = "Bills";
	bsidebtn.style.color = "white";
	gsidebtn.style.color = "black";
	usidebtn.style.color = "black";
	bsidebtn.style.background = "#002171";
	gsidebtn.style.background = "white";
	usidebtn.style.background = "white";
	billsDisplay.style.display = "block";
	groupsDisplay.style.display = "none";
	usersDisplay.style.display = "none";
}

//clicking the groups button changes everything else back to white and sets the color and display for the groups
gsidebtn.onclick = function(){
	toptext.innerHTML = "Groups";
	bsidebtn.style.color = "black";
	gsidebtn.style.color = "white";
	usidebtn.style.color = "black";
	bsidebtn.style.background = "white";
	gsidebtn.style.background = "#002171";
	usidebtn.style.background = "white";
	billsDisplay.style.display = "none";
	groupsDisplay.style.display = "block";
	usersDisplay.style.display = "none";
}

//clicking the users button changes everything else back to white and sets the color and display for the users
usidebtn.onclick = function(){
	toptext.innerHTML = "Users";
	bsidebtn.style.color = "black";
	gsidebtn.style.color = "black";
	usidebtn.style.color = "white";
	bsidebtn.style.background = "white";
	gsidebtn.style.background = "white";
	usidebtn.style.background = "#002171";
	billsDisplay.style.display = "none";
	groupsDisplay.style.display = "none";
	usersDisplay.style.display = "block";
}
