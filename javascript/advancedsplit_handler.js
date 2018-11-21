// Get the elements

function processGroupReq(event) {
    var group = document.getElementById("advSplit_BillGroups");
    var groupSelected = group.options[group.selectedIndex].value;
    var groupConfig = document.getElementById("advSplit_GroupConfig");

    if (group.selectedIndex > 0) {
        groupConfig.className = "";
        groupConfig.style.display = "inline;";
        console.log("changed boi");
    }else {
        groupConfig.className = "hidden";
    }
    console.log("yea boi");
}

var userlistcount = 0;
function processAddUser(event) {
    var parent = document.getElementById("advSplit_Users");

    var div = document.createElement("div");
    div.className = "advSplit_UserRow";

    var field = document.createElement("input");
    field.className = "advSplit_UserName";
    field.id = "userName" + userlistcount;

    var user = document.getElementById("advSplit_AddUser");
    field.value = user.options[user.selectedIndex].value;
    
    field.readOnly = true;
    div.appendChild(field);

    field = document.createElement("input");
    field.type = "number";
    field.className = "userPrice";
    //field.style = "display:inline;margin-left: 50px;";
    field.id = "userPrice" + userlistcount;
    field.value = "00.00";
    field.readOnly = true;
    div.appendChild(field);

    parent.appendChild(div);
    userlistcount += 1;
}
