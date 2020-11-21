//delete function
function deleteProduct() {
    console.log(Product.id);
    var r = confirm("DELETE RESTAURANT\nRestaurant Name: " + Product.Name +
        "\nRestaurant Type: " + Product.resType +
        "\nPrice per people: " + Product.resPrice +
        "\nDate visited: " + Product.Date +
        "\nName Reporter :" + Product.NameReporter)

    if (r == true) {
        db.transaction(
            function deleteProductAtDB(tx) {
                tx.executeSql(
                    "DELETE FROM restaurant WHERE id = (?)", [Product.id],
                    function (tx, results) { },
                    function (tx, error) {
                        //TODO: Could make an alert for this one.
                        console.log("Error when deleted:" + error.message);
                    }
                );
            }, errorCB, DeleteSuccessful);
        ShowProduct();
    }

    function DeleteSuccessful() {
        alert("Delete Successful!");
    }
    $("#PopupUpDe").popup("close");
}