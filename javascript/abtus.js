// Get the modal
var abtmodal = document.getElementById("abtmodalID");

// Get the button that opens the modal
var abtbtn = document.getElementById("abtusID");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("aclose")[0];

// When the user clicks the button, open the modal 
abtbtn.onclick = function() {
    abtmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    abtmodal.style.display = "none";
}

