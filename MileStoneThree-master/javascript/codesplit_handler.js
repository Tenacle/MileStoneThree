var inputbox = document.getElementById("codesplit-inputID");
var findbillbtn = document.getElementById("findBillID");
var backbtn = document.getElementById("backbtnID");
var paynow = document.getElementById("paybtnID");


findbillbtn.onclick = function(){	
		var input, tip;
		input = inputbox.value;
		if( input == ""){
			tip = "Field can't be blank! Any code will work.";
			document.getElementById("tip").innerHTML = tip;
		}
		else{	
			document.getElementById('codesplit-curtain').style.display = "block";
			document.getElementById('codesplit-total-message').innerHTML = "Bill ID: " + input;      
			//Printbill();
			document.getElementById("tip").innerHTML = "";
			
		}
	     
}

backbtn.onclick = function(){
	document.getElementById('codesplit-curtain').style.display = "none";
}

paynow.onclick = function(){
	document.getElementById('codesplit-curtain').style.display = "none";
	document.getElementById('codesplit-background').style.display = "none";
	document.getElementById('codesplit-paynow').style.display = "block";
}

