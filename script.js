// Sidebar navigation – section change
const menuItems = document.querySelectorAll(".sidebar li");
const sections = document.querySelectorAll(".section");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        // remove active from all
        menuItems.forEach(i => i.classList.remove("active"));
        sections.forEach(sec => sec.classList.remove("active"));

        // add active on clicked
        item.classList.add("active");
        const targetId = item.getAttribute("data-target");
        document.getElementById(targetId).classList.add("active");
    });
});
// Booking Add Feature
const bookingForm = document.getElementById("booking-form");
const bookingTable = document.getElementById("booking-table-body");

bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const guest = document.getElementById("booking-guest").value;
    const room = document.getElementById("booking-room").value;
    const checkin = document.getElementById("checkin-date").value;
    const checkout = document.getElementById("checkout-date").value;

    // Insert row in Booking Table
    let newRow = `
        <tr>
            <td>${guest}</td>
            <td>${room}</td>
            <td>${checkin}</td>
            <td>${checkout}</td>
        </tr>
    `;
    bookingTable.innerHTML += newRow;

    // Clear Form fields
    bookingForm.reset();

    alert("Booking Successfully Added ✔");
});

// Simple Bill Calculation
const calculateBtn = document.getElementById("calculate-bill");
if (calculateBtn) {
    calculateBtn.addEventListener("click", () => {
        const room = Number(document.getElementById("bill-room-charge").value) || 0;
        const food = Number(document.getElementById("bill-food-charge").value) || 0;
        const taxPercent = Number(document.getElementById("bill-tax").value) || 0;

        const subtotal = room + food;
        const taxAmount = subtotal * (taxPercent / 100);
        const total = subtotal + taxAmount;

        document.getElementById("bill-total").textContent = "₹ " + total.toFixed(2);
    });
}

// (Optional) You can later add JS code to:
// - save guest form data in array
// - push new rows into table using DOM
// - etc.
