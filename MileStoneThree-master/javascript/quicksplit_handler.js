$(document).ready(function(){
  //------------------------------------------------------
  // Checks if user input is valid, alerts if invalid
  // then calculates the amount to be split
  // then displays the curtain where the amount to be split is shown
  $("#quicksplit-calculate-button").click(function(){
    if(checkForEmptyInput()){
      var numPeople = parseFloat($("#quicksplit-input-numberpeople").val());
      if( !$("#quicksplit-input-numberpeople").val() || numPeople <= 0){
        alert("Please enter a value that is more than or equal to 1.");
      }
      else{
        var total = parseFloat($("#quicksplit-input-billtotal").val());
        var tip = parseFloat($("#quicksplit-input-tip").val())/100;
        var tax = parseFloat($("#quicksplit-input-tax").val())/100;
        calculateSplit(numPeople, total, tip, tax);
        document.getElementById('quicksplit-curtain').style.display = "block";
      }
    }
  });
  
  //------------------------------------------------------
  // goes back to the quicksplit input screen
  // by hiding the curtain div that shows the result
  $("#quicksplit-back-button").click(function(){
    document.getElementById('quicksplit-curtain').style.display = "none";
  });
  
  function checkForEmptyInput(){
    var valid = true;
    var alertString = "";
    if(!$("#quicksplit-input-numberpeople").val()){
      valid = false;
      alertString += "Please enter a value more than or equal to 1 for the number of people.\n";
    }
    if(!$("#quicksplit-input-billtotal").val()){
      valid = false;
      alertString += "Please enter a value more than or equal to 1 for the bill total.\n";
    }
    if(!$("#quicksplit-input-tip").val()){
      valid = false;
      alertString = "Please enter a value more than or equal to 1 for the tip.\n";
    }
    if(!$("#quicksplit-input-tax").val()){
      valid = false;
      alertString = "Please enter a value more than or equal to 1 for the tax.\n";
    }
  
    if(!valid){
      alert(alertString);
    }
    return valid;
  }
  
  //------------------------------------------------------
  // calculates how much is to be split between users
  function calculateSplit(numPeople, total, tax, tip){
    split = (total + (total*tax) + (total*tip))/numPeople;
    split = split.toFixed(2);
    var element = document.getElementById("quicksplit-total-message");
    element.innerHTML =  "Split by: $" + split;
  }
  //------------------------------------------------------
  //Event listeners for if the user presses enter key during input
  $("#quicksplit-input-numberpeople").keypress(function(event){
    if(event.which == 13)
      document.getElementById("quicksplit-calculate-button").click();
  });
  
  $("#quicksplit-input-billtotal").keypress(function(event){
    if(event.which == 13)
      document.getElementById("quicksplit-calculate-button").click();
  });
  
  $("#quicksplit-input-tip").keypress(function(event){
    if(event.which == 13)
      document.getElementById("quicksplit-calculate-button").click();
  });
  
  $("#quicksplit-input-tax").keypress(function(event){
    if(event.which == 13)
      document.getElementById("quicksplit-calculate-button").click();
  }); 
});