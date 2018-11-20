// Get the modal
var qmodal = document.getElementById("qmodalID");

// Get the button that opens the modal
var qbtn = document.getElementById("quickID");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("qclose")[0];

// When the user clicks the button, open the modal 
qbtn.onclick = function() {
    qmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    qmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
