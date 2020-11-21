// Insert record

function radioButtonHandling(variable) {
    var checkbox = document.getElementsByName(variable);
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked === true) {
            return result = checkbox[i].value;
        }
    }
}

function insertData() {
    db.transaction(insertRestaurant, errorCB, successInsert);
    window.location.href = "#homepage";
    window.location.reload();
    ShowProduct();
}

function insertRestaurant(tx) {
    //var resName = document.getElementById('txtName').value;
    var resName = $("#txtName").val();
    var reporterName = document.getElementById('txtNameReporter').value;
    var date = document.getElementById('date').value;
    var type = document.getElementById('resTypeSelect').value;
    var price = document.getElementById('txtPrice').value;
    var serviceRating = radioButtonHandling("serRating");
    var cleanRating = radioButtonHandling("cleanRating");
    var foodQualityRating = radioButtonHandling("foodQualityRating");


    document.getElementById("submit").onclick = function () {

    };


    // Insert query
    var value = [resName, type, date, price, serviceRating, cleanRating, foodQualityRating, reporterName];
    tx.executeSql("INSERT INTO restaurant(resName, resType, date, price, serviceRating, cleanRating, foodRating, nameReporter) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", value);

    // Append new list item
    // var eleName = document.getElementById("resNameResult");
    // var data = document.createElement("span");
    // data.appendChild(document.createTextNode(resName));
    // eleName.appendChild(data);

    // console.log(date);
    // var eleDate = document.getElementById("dateResult");
    // var dateResult = document.createElement("spans");
    // dateResult.appendChild(document.createTextNode(date));
    // eleDate.appendChild(dateResult);

    // var td = document.getElementById("typeResult");
    // var data = document.createElement("span");
    // if (type == "Grill") {
    //     data.appendChild(document.createTextNode('Grill'));
    // }
    // else if (type == "Fastfood") {
    //     data.appendChild(document.createTextNode('Fastfood'));
    // }
    // else {
    //     data.appendChild(document.createTextNode('Seafoods'));
    // }

    // td.appendChild(data);


}

function errorCB(err) {
    alert("Error processing SQL: " + err.message);
}

function successInsert() {
    alert("Insert successful!");
}