// Get the elements

var itemlistcount = 0;
var newItem = function() {
    var itemList = document.getElementById("advSplit_BillItemList");
    var itemListLength = itemList.getElementsByTagName('div').length;
    var div = document.createElement("div");
    div.className = "advSplit_ItemRow";

    var child = document.createElement("input");
    child.className = "advSplit_ItemName";
    child.type = "text";
    child.id = "itemName" + itemListLength;
    child.placeholder = "Item" + itemListLength;
    child.value = child.placeholder;
    div.appendChild(child);

    var child = document.createElement("span");
    child.className = "money";
    child.innerHTML = "$";
    div.appendChild(child);

    var child = document.createElement("input");
    child.type = "number";
    child.className = "advSplit_UserPrice";
    child.id = "itemPrice" + itemListLength;
    child.placeholder = "00.00";
    child.value = child.placeholder;
    div.appendChild(child);

    itemList.appendChild(div);
}

function processGroupReq(event) {
    var group = document.getElementById("advSplit_BillGroups");
    var groupSelected = group.options[group.selectedIndex].value;
    var groupConfig = document.getElementById("advSplit_GroupConfig");

    if (group.selectedIndex > 0) {
        groupConfig.className = "";
        groupConfig.style.display = "inline;";
    }else {
        groupConfig.className = "hidden";
    }
}

function processAddUser(event) {
    var userList = document.getElementById("advSplit_UserList");
    var newUserList = document.getElementById("advSplit_AddUser");
    var userListLength = userList.getElementsByTagName('div').length;
    var div = document.createElement("div");
    div.className = "advSplit_UserRow";

    var child = document.createElement("input");
    child.className = "advSplit_UserName";
    child.type = "text";
    child.id = "userName" + userListLength;
    child.value = newUserList.options[newUserList.selectedIndex].value;
    child.readOnly = true;
    div.appendChild(child);

    var child = document.createElement("span");
    child.className = "money";
    child.innerHTML = "$";
    div.appendChild(child);

    var child = document.createElement("input");
    child.type = "number";
    child.className = "advSplit_UserPrice";
    child.id = "userPrice" + userListLength;
    child.value = "00.00";
    child.readOnly = true;
    div.appendChild(child);

    userList.appendChild(div);
    newUserList.remove(newUserList.selectedIndex);
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
//window.onclick = function(event) {
//  if (!event.target.matches('.dropbtn')) {
//
//    var dropdowns = document.getElementsByClassName("dropdown-content");
//    var i;
//    for (i = 0; i < dropdowns.length; i++) {
//      var openDropdown = dropdowns[i];
//      if (openDropdown.classList.contains('show')) {
//        openDropdown.classList.remove('show');
//      }
//    }
//  }
//}
