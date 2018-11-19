// Get the modal
var cmodal = document.getElementById("cmodalID");

// Get the button that opens the modal
var cbtn = document.getElementById("codeID");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("cclose")[0];

// When the user clicks the button, open the modal 
cbtn.onclick = function() {
    cmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    cmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == cmodal) {
        cmodal.style.display = "none";
    }
}
