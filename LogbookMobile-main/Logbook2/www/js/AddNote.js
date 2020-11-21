function addNote() {
    var alr = confirm("Do you want to add note?");

    if (alr == true) {
        db.transaction(noteAddition, errorCB, AddSuccessful);
        ShowProduct();
    }
    $("#PopupUpDe").popup("close");
}

function noteAddition(tx) {
    var addNoteVari = $("#addnote").val();
    console.log(Product.id);
    tx.executeSql(
        "UPDATE restaurant set note = (?) WHERE id = (?)", [addNoteVari, Product.id],
        function (tx, results) { },
        function (tx, error) {
            //TODO: Could make an alert for this one.
            console.log("Error when edit:" + error.message);
        }
    );
}
function AddSuccessful() {
    alert("Add Successful!");
}
function errorCB(err) {
    alert("Error processing SQL: " + err.message);
}