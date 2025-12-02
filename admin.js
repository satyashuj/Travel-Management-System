let tableBody = document.getElementById("admin-booking-body");

function loadBookings(){
    let bookings = JSON.parse(localStorage.getItem("bookingData")) || [];
    tableBody.innerHTML = "";

    bookings.forEach((b,i)=>{
        tableBody.innerHTML += `
        <tr>
            <td>${b.name}</td>
            <td>${b.phone}</td>
            <td>${b.city}, ${b.country}</td>
            <td>${b.checkin}</td>
            <td>${b.status}</td>
            <td>
                <button class="approve-btn" onclick="approveBooking(${i})">Approve</button>
                <button class="reject-btn" onclick="rejectBooking(${i})">Reject</button>
            </td>
        </tr>
        `;
    });
}

loadBookings();

// Approve
function approveBooking(i){
    let bookings = JSON.parse(localStorage.getItem("bookingData")) || [];
    bookings[i].status = "Approved ✔";
    localStorage.setItem("bookingData", JSON.stringify(bookings));
    loadBookings();
    alert("Booking Approved!");
}

// Reject
function rejectBooking(i){
    let bookings = JSON.parse(localStorage.getItem("bookingData")) || [];
    bookings[i].status = "Rejected ❌";
    localStorage.setItem("bookingData", JSON.stringify(bookings));
    loadBookings();
    alert("Booking Rejected!");
}
