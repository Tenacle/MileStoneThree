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
  amodal.style.className = "modal";
}
qbtn.onclick = function() {
  qmodal.style.className = "modal";
}
cbtn.onclick = function() {
  cmodal.style.className = "modal";
}
abtbtn.onclick = function() {
  abtmodal.style.className = "modal";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  amodal.style.className = "hidden";
  qmodal.style.className = "hidden";
  cmodal.style.className = "hidden";
  abtmodal.style.className = "hidden";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == amodal) {
      amodal.style.className = "hidden";
  }else if (event.target == qmodal) {
      qmodal.style.className = "hidden";
  }else if (event.target == cmodal) {
      cmodal.style.className = "hidden";
  }else if (event.target == abtmodal) {
  abtmodal.style.className = "hidden";
  }
}
