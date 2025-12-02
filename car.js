const carForm = document.getElementById("car-form");
const carTable = document.getElementById("car-table");

carForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    let guest = document.getElementById("car-guest").value;
    let selected = document.getElementById("car-type").value;
    let [car, price] = selected.split(" - ");
    let datetime = document.getElementById("car-date").value;

    carTable.innerHTML += `
        <tr>
            <td>${guest}</td>
            <td>${car}</td>
            <td>₹${price}</td>
            <td>${datetime}</td>
        </tr>
    `;
    carForm.reset();
    alert("🚕 Car Booked Successfully!");
const cityPlaces = {
    "Delhi": ["Red Fort", "India Gate", "Qutub Minar"],
    "Mumbai": ["Gateway of India", "Marine Drive", "Juhu Beach"],
    "Agra": ["Taj Mahal", "Agra Fort", "Sikandra"],
    "Jaipur": ["Hawa Mahal", "Amber Fort", "Jal Mahal"],
    "Varanasi": ["Kashi Vishwanath Temple", "Ganga Ghat", "Sarnath"]
};

document.getElementById("booking-city").addEventListener("change", () => {
    let city = document.getElementById("booking-city").value;
    alert("Best Places in " + city + ":\n👉 " + cityPlaces[city].join(", "));
});

let carBookings = JSON.parse(localStorage.getItem("carData")) || [];
const carForm = document.getElementById("car-form");
const carTable = document.getElementById("car-table");

// Show existing data on load
function loadCarBookings() {
    carTable.innerHTML = "";
    carBookings.forEach((book, index) => {
        carTable.innerHTML += `
        <tr>
            <td>${book.guest}</td>
            <td>${book.car}</td>
            <td>₹${book.price}</td>
            <td>${book.datetime}</td>
            <td>
                <button class="edit-btn" onclick="editCar(${index})">✏️</button>
                <button class="delete-btn" onclick="deleteCar(${index})">❌</button>
            </td>
        </tr>
        `;
    });
}
loadCarBookings();

carForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let guest = document.getElementById("car-guest").value;
    let selected = document.getElementById("car-type").value;
    let [car, price] = selected.split(" - ");
    let datetime = document.getElementById("car-date").value;

    carBookings.push({ guest, car, price, datetime });
    localStorage.setItem("carData", JSON.stringify(carBookings));

    loadCarBookings();
    carForm.reset();
    alert("🚕 Car Booked Successfully!");
});

// Delete Function
function deleteCar(i) {
    if(confirm("Are you sure you want to delete this booking?")) {
        carBookings.splice(i, 1);
        localStorage.setItem("carData", JSON.stringify(carBookings));
        loadCarBookings();
    }
}

// Edit Function
function editCar(i) {
    let book = carBookings[i];

    document.getElementById("car-guest").value = book.guest;
    document.getElementById("car-type").value = `${book.car} - ${book.price}`;
    document.getElementById("car-date").value = book.datetime;

    deleteCar(i);
}


});
