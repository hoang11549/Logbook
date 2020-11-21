// Fetch all records
function fetchData() {
    db.transaction(function (tx) {

        tx.executeSql("select * from restaurant", [], function (tx1, result) {
            var len = result.rows.length;

            for (var i = 0; i < len; i++) {
                var resName = result.rows.item(i).resName;
                var txtNameReporter = result.rows.item(i).txtNameReporter;
                var date = result.rows.item(i).date;
                var type = result.rows.item(i).resType;
                console.log(type);

                // Add list item
                var td = document.getElementById("resNameResult");
                var data = document.createElement("span");
                data.appendChild(document.createTextNode(resName));
                td.appendChild(data);

                var tdResult = document.getElementById("dateResult");
                var data = document.createElement("span");
                data.appendChild(document.createTextNode(date));
                tdResult.appendChild(data);

                var td = document.getElementById("typeResult");
                var data = document.createElement("span");
                if (type == "Grill") {
                    data.appendChild(document.createTextNode('Grill'));
                }
                else if (type == "Fastfood") {
                    data.appendChild(document.createTextNode('Fastfood'));
                }
                else {
                    data.appendChild(document.createTextNode('Seafoods'));
                }
                td.appendChild(data);
            }

        }, errorCB);
    }, errorCB, successCB);
}