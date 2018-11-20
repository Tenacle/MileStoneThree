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
var span = document.getElementsByClassName("close")[0];

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

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  amodal.style.display = "none";
  qmodal.style.display = "none";
  cmodal.style.display = "none";
  abtmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == amodal) {
      amodal.style.display = "none";
  }else if (event.target == qmodal) {
      qmodal.style.display = "none";
  }else if (event.target == cmodal) {
      cmodal.style.display = "none";
  }else if (event.target == abtmodal) {
  abtmodal.style.display = "none";
  }
}
