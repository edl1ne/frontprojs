// 11.1
document.addEventListener("DOMContentLoaded", function() {
    var table = document.getElementById("multiplication-table");

    var headerRow = table.insertRow();
    var emptyHeaderCell = document.createElement("th");
    headerRow.appendChild(emptyHeaderCell);

    for (var i = 1; i <= 10; i++) {
        var headerCell = document.createElement("th");
        headerCell.innerText = i;
        headerRow.appendChild(headerCell);
    }

    for (var row = 1; row <= 10; row++) {
        var tableRow = table.insertRow();
        var rowHeaderCell = document.createElement("th");
        rowHeaderCell.innerText = row;
        tableRow.appendChild(rowHeaderCell);

        for (var col = 1; col <= 10; col++) {
            var cell = tableRow.insertCell();
            cell.innerText = row * col;
        }
    }
});
