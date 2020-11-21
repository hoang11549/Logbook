//Show function
var Product = {
    id: -1,
    Name: "",
    resPrice: "",
    resType: "",
    Date: "",
    Note: "",
    NameReporter: "",
    Rating: ""
}

function ShowProduct() {
    db.transaction(function (tx) {
        tx.executeSql("select * from restaurant", [], function (tx1, result) {
            var len = result.rows.length;
            console.log(len);
            var ListViewProduct = $("#ListViewProduct");
            ListViewProduct.empty();

            for (var i = 0; i < len; i++) {
                var item = result.rows.item(i);
                var a = $("<a />");
                var p = $("<p />").text("ID: ");
                var h2 = $("<h2 />").text("Restaurant name: ");
                var h3 = $("<h3 />").text("Restaurant type: ");
                var h4 = $("<h4 />").text("Service Rating: ");
                var h61 = $("<h5 />").text("Date: ");
                var h62 = $("<h5 />").text("Price: ");
                var h51 = $("<h6 />").text("Name reporter: ");
                var h52 = $("<h5 / > ").text("Note: ");


                var spanID = $("<p />").text(item.id);
                spanID.attr("name", "id");

                var spanName = $("<span />").text(item.resName);
                spanName.attr("name", "Name");

                var spanType = $("<span />").text(item.resType);
                spanType.attr("name", "resType");

                var spanDate = $("<span />").text(item.date);
                spanDate.attr("name", "date");

                var spanPrice = $("<span />").text(item.price);
                spanPrice.attr("name", "resPrice");

                var spanNameReporter = $("<span />").text(item.nameReporter);
                spanNameReporter.attr("name", "txtNameReporter");

                var spanNote = $("<span />").text(item.note);
                spanNote.attr("name", "note");

                var spanRating = $("<span />").text(item.serviceRating);
                spanRating.attr("name", "rating");

                h4.append(spanRating);
                h2.append(spanName);
                p.append(spanID);
                h3.append(spanType);
                h61.append(spanDate);
                h62.append(spanPrice);
                h51.append(spanNameReporter);
                h52.append(spanNote);

                a.append(p);
                a.append(h2);
                a.append(h3);
                a.append(h62);
                a.append(h61);
                a.append(h3);
                a.append(h51);
                a.append(h52);

                var li = $("<li />");
                li.attr("data-filtertext", item.name);
                li.append(a);

                var edit = $("<button />").text("Edit");
                var li_a = $("<a />");

                li_a.append(edit)
                ListViewProduct.append(li);
                //ListViewProduct.append(li_a);
            }
            ListViewProduct.listview("refresh");

            ListViewProduct.on("tap", "li", function () {
                Product.id = $(this).find("[name='id']").text();
                Product.Name = $(this).find("[name='Name']").text();
                Product.resType = $(this).find("[name='resType']").text();
                Product.resPrice = $(this).find("[name='resPrice']").text();
                Product.Date = $(this).find("[name='date']").text();
                Product.Rating = $(this).find("[name='rating']").text();
                Product.NameReporter = $(this).find("[name='txtNameReporter']").text();
                Product.Note = $(this).find("[name='Note']").text();

                console.log(Product.id);
                //alert(Showdetail.Name);
                //set event list item
                $("#PopupUpDe").popup("open");
            })
        }, errorCB);
    }, errorCB, fetchDataSuccess);

    function fetchDataSuccess() {
        alert("Fetch data successful!");
    }
}