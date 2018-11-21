var itemlistcount = 0;
var newinput = function() {
  var parent = document.getElementById("advSplit_BillItems");

  var div = document.createElement("div");
  div.className = "advSplit_ItemRow";

  var field = document.createElement("input");
  field.className = "advSplit_ItemName";
  field.id = "itemName" + itemlistcount;
  field.placeholder = "Item Name";
  div.appendChild(field);

  field = document.createElement("input");
  field.type = "number";
  field.className = "itemPrice";
  //field.style = "display:inline;margin-left: 50px;";
  field.id = "itemPrice" + itemlistcount;
  field.placeholder = "00.00";
  div.appendChild(field);

  parent.appendChild(div);
  itemlistcount += 1;
}
