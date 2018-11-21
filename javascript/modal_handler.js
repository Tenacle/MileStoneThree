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
    document.getElementById("quicksplit-input-numberpeople").value = "";
    document.getElementById("quicksplit-input-billtotal").value = "";
    document.getElementById("quicksplit-input-tip").value = "0";
    document.getElementById("quicksplit-input-tax").value = "0";
    document.getElementById('quicksplit-curtain').style.display = "none";

}

cspan.onclick = function() {
    cmodal.style.display = "none";
}

abtspan.onclick = function() {
    abtmodal.style.display = "none";
}


//When the user clicks anywhere outside of the modal, close it
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
