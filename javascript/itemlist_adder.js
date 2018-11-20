var itemlistcount = 0;
var newinput = function() {
  var parent = document.getElementById("hey");

  var field = document.createElement("input")
  field.className = "itemname"
  field.style = "display:inline;"
  field.id = "itemname" + itemlistcount;
  parent.appendChild(field);
  var field = document.createElement("input")
  field.className = "itemprice"
  field.style = "display:inline;margin-left: 50px;"
  field.id = "itemprice" + itemlistcount;
  parent.appendChild(field);
  parent.appendChild(document.createElement("br"));
  itemlistcount += 1;
}
