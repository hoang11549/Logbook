//Drop TABLE
var db = window.openDatabase("iRateDB", "1.0", "iRate Database", 1000000);
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

    // Create Table
    db.transaction(populateDB, errorCB, successCB);

    // Select records
    fetchData();
}

function populateDB(tx) {
    //tx.executeSql('CREATE TABLE IF NOT EXISTS restaurant (id INTEGER PRIMARY KEY AUTOINCREMENT, resName TEXT NOT NULL, resType TEXT, date TEXT, price DECIMAL(10,2), serviceRating INT, cleanRating INT, foodRating INT, nameReporter TEXT)');
    tx.executeSql('DROP TABLE restaurant');
}

function errorCB(err) {
    alert("Error processing SQL: " + err.message);
}

function successCB() {
    console.log("Create Successful!");
    alert("Success!");
}