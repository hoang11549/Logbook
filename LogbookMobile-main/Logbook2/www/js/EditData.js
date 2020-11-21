//delete function

function editData() {
    var txtnewType = $("#newType").val();
    var txtnewNote = $("#newNote").val();
    var txtnewRRating = $("#newRRating").val();
    SQliteProduct.updateProduct(Showdetail.id, txtnewType, txtnewNote, txtnewRRating);
    $("#UpdateRes").dialog("close");
}


function EditData(id, name, resType, resNameReporter) {
    console.log(Product.id);
    var r = confirm("Delete product\nRestaurant Name: " + Product.Name +
        "\nRes ID: " + Product.id +
        "\nRestaurant Type: " + Product.Type +
        "\nDate visited: " + Product.Date +
        "\nNote: " + Product.Note +
        "\nName Reporter :" + Product.NameReporter)

    if (r == true) {
        db.transaction(
            function EditProductAtDB(tx) {
                var value = [resName, type, date, reporterName];
                tx.executeSql(
                    "UPDATE restaurant set resName, resType, date, nameReporter WHERE id = ?", value,
                    function (tx, results) { },
                    function (tx, error) {
                        //TODO: Could make an alert for this one.
                        console.log("Error when edit:" + error.message);
                    }
                );
            }, errorCB, EditSuccessful);
        ShowProduct();
    }

    function EditSuccessful() {
        alert("Edit Successful!");
    }
    $("#PopupUpDe").popup("close");
}