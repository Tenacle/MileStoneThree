// Get the elements

var itemlistcount = 0;
var newItem = function() {
    var itemList = document.getElementById("advSplit_BillItemList");
    var itemListLength = itemList.getElementsByTagName('div').length;
    var div = document.createElement("div");
    div.className = "advSplit_ItemRow";

    var inchild = document.createElement("span");
    var child = document.createElement("input");
    child.className = "advSplit_ItemName";
    child.type = "text";
    child.id = "itemName" + itemListLength;
    child.placeholder = "Item" + itemListLength;
    inchild.appendChild(child);
    div.appendChild(inchild);


    var inchild = document.createElement("span");
    inchild.className = "advSplit_ItemMoney";

    var child = document.createElement("span");
    child.className = "money";
    child.innerHTML = document.getElementById("advSplit_CurrCurrency").textContent;
    inchild.appendChild(child);

    var child = document.createElement("input");
    child.type = "number";
    child.className = "advSplit_ItemPrice";
    child.id = "itemPrice" + itemListLength;
    child.placeholder = "00.00";
    inchild.appendChild(child);
    div.appendChild(inchild);

    itemList.appendChild(div);
}

var GroupList = {
    "Family" : [ "Mom", "Dad", "Sis", "Bro" ],
    "Friends" : [ "Jon", "Earl", "Jai", "Stan" ],
    "Workmates" : [ "Boss", "Office", "Yeeters"]}


function processGroupReq(event) {
    var group = document.getElementById("advSplit_BillGroupList");
    var groupSelected = group.options[group.selectedIndex].value;
    var groupConfig = document.getElementById("advSplit_GroupConfig");

    var userList = document.getElementById("advSplit_UserList");
    userList.innerHTML = '';
    var getTotal = document.getElementById("totalBill").value;
    console.log(getTotal);
    if (group.selectedIndex > 0) {
        groupConfig.className = "";
        groupConfig.style.display = "inline;";
    }else {
        groupConfig.className = "hidden";
        return;
    }
    var selectedUserList;
    if (group.selectedIndex == 1) {
        //Family
        
        selectedUserList = GroupList["Friends"];
        var addUserList = document.getElementById("advSplit_AddUser");
        addUserList.innerHTML = "";
        addUserList.innerHTML += "<option value=\"\">Add User</option>";
        for (var i = 0; i < selectedUserList.length; i++) {
            addUserList.innerHTML += "<option value=\""+selectedUserList[i]+"\">"+selectedUserList[i]+"</option>";
        }
        selectedUserList = GroupList["Workmates"];
        for (var i = 0; i < selectedUserList.length; i++) {
            addUserList.innerHTML += "<option value=\""+selectedUserList[i]+"\">"+selectedUserList[i]+"</option>";
        }
        selectedUserList = GroupList["Family"];

    }else if (group.selectedIndex == 2) {
        //Friends
        selectedUserList = GroupList["Family"];
        var addUserList = document.getElementById("advSplit_AddUser");
        addUserList.innerHTML = "";
        addUserList.innerHTML += "<option value=\"\">Add User</option>";
        for (var i = 0; i < selectedUserList.length; i++) {
            addUserList.innerHTML += "<option value=\""+selectedUserList[i]+"\">"+selectedUserList[i]+"</option>";
        }
        selectedUserList = GroupList["Workmates"];
        for (var i = 0; i < selectedUserList.length; i++) {
            addUserList.innerHTML += "<option value=\""+selectedUserList[i]+"\">"+selectedUserList[i]+"</option>";
        }
        selectedUserList = GroupList["Friends"];
    }else if (group.selectedIndex == 3) {
        //Workmates
        selectedUserList = GroupList["Family"];
        var addUserList = document.getElementById("advSplit_AddUser");
        addUserList.innerHTML = "";
        addUserList.innerHTML += "<option value=\"\">Add User</option>";
        for (var i = 0; i < selectedUserList.length; i++) {
            addUserList.innerHTML += "<option value=\""+selectedUserList[i]+"\">"+selectedUserList[i]+"</option>";
        }
        selectedUserList = GroupList["Friends"];
        for (var i = 0; i < selectedUserList.length; i++) {
            addUserList.innerHTML += "<option value=\""+selectedUserList[i]+"\">"+selectedUserList[i]+"</option>";
        }
        selectedUserList = GroupList["Workmates"];
    }else {
        return
    }
    var evenSplit = getTotal/selectedUserList.length;
    for (var i = 0; i < selectedUserList.length; i++) {
        var div = document.createElement("div");
        div.className = "advSplit_UserRow";
        var inchild = document.createElement("span");
        var child = document.createElement("input");
        child.className = "advSplit_UserName";
        child.type = "text";
        child.id = "userName" + i;
        child.value = selectedUserList[i];
        child.readOnly = true;
        inchild.appendChild(child);
        div.appendChild(inchild);

        var inchild = document.createElement("span");
        inchild.className = "advSplit_UserMoney";
        var child = document.createElement("span");
        child.className = "money";
        child.innerHTML = document.getElementById("advSplit_CurrCurrency").textContent;
        inchild.appendChild(child);

        var child = document.createElement("input");
        child.type = "number";
        child.className = "advSplit_UserPrice";
        child.id = "userPrice" + i;
        child.value = evenSplit;
        child.readOnly = true;
        inchild.appendChild(child);
        div.appendChild(inchild);

        userList.appendChild(div);
    }
    recalculate();
}

function processAddUser(event) {
    var userList = document.getElementById("advSplit_UserList");
    var newUserList = document.getElementById("advSplit_AddUser");
    var userListLength = userList.getElementsByTagName('div').length;
    var div = document.createElement("div");
    div.className = "advSplit_UserRow";

    var inchild = document.createElement("span");
    var child = document.createElement("input");
    child.className = "advSplit_UserName";
    child.type = "text";
    child.id = "userName" + userListLength;
    child.value = newUserList.options[newUserList.selectedIndex].value;
    child.readOnly = true;
    inchild.appendChild(child);
    div.appendChild(inchild);

    var inchild = document.createElement("span");
    inchild.className = "advSplit_UserMoney";
    var child = document.createElement("span");
    child.className = "money";
    child.innerHTML = document.getElementById("advSplit_CurrCurrency").textContent;
    inchild.appendChild(child);

    var child = document.createElement("input");
    child.type = "number";
    child.className = "advSplit_UserPrice";
    child.id = "userPrice" + userListLength;
    child.value = "00.00";
    child.readOnly = true;
    inchild.appendChild(child);
    div.appendChild(inchild);

    userList.appendChild(div);
    newUserList.remove(newUserList.selectedIndex);
    recalculate();
}



function recalculate() {
    var userList = document.getElementById("advSplit_UserList");
    var userListLength = userList.getElementsByTagName('div').length;
    var getTotal = document.getElementById("totalBill").value;
    var actualSum = 0;
    if (/%/.test(document.getElementById("advSplit_Tax").textContent)) {
        console.log("%%%% by tax");
        var qqq = parseInt(document.getElementById("taxValue").value);
        if (qqq != 0 ) {
            actualSum = parseInt(getTotal) + parseInt(getTotal * qqq);
        }
    }else {
        console.log("$$ by tax");
        actualSum = parseInt(getTotal) + parseInt(document.getElementById("taxValue").value);
    }
    if (/%/.test(document.getElementById("advSplit_Tip").textContent)) {
        console.log("%%%% by tip");
        var qqq = parseInt(document.getElementById("taxValue").value);
        if (qqq != 0 ) {
            actualSum = parseInt(getTotal) + parseInt(getTotal * qqq);
        }
    }else {
        console.log("$$ by tip");
        actualSum = parseInt(getTotal) + parseInt(document.getElementById("tipValue").value);
    }
    console.log(actualSum);
    console.log(userListLength);
    var splitEven = parseInt(actualSum)/parseInt(userListLength);
    for (var i = 0; i < userListLength; i++) {
        document.getElementById("userPrice"+i).value = splitEven;
    }
}

document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;   
    processFoundElem(target);
}, false);

function processFoundElem(target) {
    console.log(target);
    if (target.classList.contains("dropbtn")) {
        switcharoo(target);
    }else {
    }
}

function switcharoo(target) {
    if (target.nodeName == "IMG") {
        if (/\/icon\/.*\..*$/.test(target.src)) {
            console.log("this is an icon");
            var main = document.getElementById("advSplit_CurrIcon");
            var list = document.getElementById("advSplit_IconContent").getElementsByTagName("img");
//            console.log(list.length);
//            console.log(list.getElementsByClassName("dropbtn").length);
            for (var i = 0; i < list.length; i++) {
                if (list[i].src == target.src) {
                    var temp = list[0].src;
                    main.src = target.src;
                    main.alt = target.src;
                    list[0].src = target.src;
                    list[0].alt = target.src;
                    list[i].src = temp;
                    list[i].alt = temp;
                    break;
                }
            }
        }
    }else if (target.nodeName == "BUTTON") {
        if (/^TAX/.test(target.textContent)) {
            var list = document.getElementById("advSplit_TaxMethods").getElementsByTagName("button");
            var temp = document.getElementById("advSplit_Tax").textContent;
            document.getElementById("advSplit_Tax").textContent = target.textContent;
            list[0].textContent = temp;
        }else if (/^TIP/.test(target.textContent)) {
            var list = document.getElementById("advSplit_TipMethods").getElementsByTagName("button");
            var temp = document.getElementById("advSplit_Tip").textContent;
            document.getElementById("advSplit_Tip").textContent = target.textContent;
            list[0].textContent = temp;
        }else {
            var list = document.getElementById("advSplit_CurrencyContent").getElementsByTagName("button");
            for (var i = 0; i < list.length; i++) {
                if (list[i].textContent == target.textContent) {
                    var temp = list[0].textContent;
                    list[0].textContent = target.textContent;
                    list[i].textContent = temp;
                    break;
                }
            }
            var currencies = document.getElementsByClassName("money");
            for (var i = 0; i < currencies.length; i++) {
                currencies[i].textContent = list[0].textContent;
            }
        }
    }
}



var finalizebtn = document.getElementById("advSplit_Sub");

finalizebtn.onclick = function() {
    window.location.reload(false); 
}













