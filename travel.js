// Travel & Tourism Booking Feature
const tourForm = document.getElementById("tour-form");
const tourTable = document.getElementById("tour-table-body");

tourForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const guest = document.getElementById("tour-guest").value;
    const packageValue = document.getElementById("tour-package").value;
    const tourDate = document.getElementById("tour-date").value;

    let [pkgName, price] = packageValue.split(" - ");

    let newRow = `
        <tr>
            <td>${guest}</td>
            <td>${pkgName}</td>
            <td>₹${price}</td>
            <td>${tourDate}</td>
        </tr>
    `;

    tourTable.innerHTML += newRow;

    tourForm.reset();
    alert("🎉 Tour Package Successfully Booked!");
});
