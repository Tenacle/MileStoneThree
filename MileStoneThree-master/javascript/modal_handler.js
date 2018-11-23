// Get the modal
var amodal = document.getElementById("amodalID");
var qmodal = document.getElementById("qmodalID");
var cmodal = document.getElementById("cmodalID");
var abtmodal = document.getElementById("abtmodalID");

// Get the button that opens the modal
var abtn = document.getElementById("advancedID");
var qbtn = document.getElementById("quickID");
var cbtn = document.getElementById("codeID");
var abtbtn = document.getElementById("abtusID");

// Get the <span> element that closes the modal
var aspan = document.getElementById("aclose");
var cspan = document.getElementById("cclose");
var qspan = document.getElementById("qclose");
var abtspan = document.getElementById("abtclose");

// Get the button that close's the c modal
var closer  = document.getElementById("finishID");

// When the user clicks the button, open the modal 
abtn.onclick = function() {
    amodal.style.display = "block";
}
qbtn.onclick = function() {
    qmodal.style.display = "block";
}
cbtn.onclick = function() {
    cmodal.style.display = "block";
}
abtbtn.onclick = function() {
    abtmodal.style.display = "block";
}

aspan.onclick = function() {
    amodal.style.display = "none";
}

qspan.onclick = function() {
    qmodal.style.display = "none";
    resetqmodal();
}

cspan.onclick = function() {
    cmodal.style.display = "none";
	resetcmodal();
}

abtspan.onclick = function() {
    abtmodal.style.display = "none";
}

closer.onclick = function(){
	cmodal.style.display = "none";
	resetcmodal();
}

//When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == amodal) {
      amodal.style.display = "none";
  }else if (event.target == qmodal) {
      qmodal.style.display = "none";
      resetqmodal();
  }else if (event.target == cmodal) {
      cmodal.style.display = "none";
	  resetcmodal();
  }else if (event.target == abtmodal) {
  abtmodal.style.display = "none";
  }
}

//resets values in quicksplit modal
function resetqmodal(){
    document.getElementById("quicksplit-input-numberpeople").value = "";
    document.getElementById("quicksplit-input-billtotal").value = "";
    document.getElementById("quicksplit-input-tip").value = "0";
    document.getElementById("quicksplit-input-tax").value = "0";
    document.getElementById('quicksplit-curtain').style.display = "none";
}

//resets values in codesplit modal
function resetcmodal(){
    document.getElementById("codesplit-inputID").value = "";
    document.getElementById('codesplit-curtain').style.display = "none";
	document.getElementById('codesplit-paynow').style.display = "none";
	document.getElementById('codesplit-background').style.display = "block";
}
