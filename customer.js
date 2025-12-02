// Country-State-City-Branch Demo Data
const data = {
    "India": {
        "UP": {
            "Lucknow": ["Hazratganj", "Gomti Nagar"],
            "Kanpur": ["Swaroop Nagar", "Barra"]
        },
        "Maharashtra": {
            "Mumbai": ["Bandra", "Andheri"],
            "Pune": ["Hinjewadi", "Kothrud"]
        }
    },
    "USA": {
        "California": {
            "Los Angeles": ["Downtown", "Hollywood"],
            "San Francisco": ["Chinatown"]
        }
    }
};

// Dropdown References
let countrySel = document.getElementById("country-select");
let stateSel = document.getElementById("state-select");
let citySel = document.getElementById("city-select");
let branchSel = document.getElementById("branch-select");

// Load Countries
for(let c in data){
    countrySel.innerHTML += `<option value="${c}">${c}</option>`;
}

countrySel.onchange = () => {
    stateSel.innerHTML = `<option value="">--Select State--</option>`;
    citySel.innerHTML = `<option value="">--Select City--</option>`;
    branchSel.innerHTML = `<option value="">--Select Branch--</option>`;

    for(let s in data[countrySel.value]){
        stateSel.innerHTML += `<option value="${s}">${s}</option>`;
    }
};

stateSel.onchange = () => {
    citySel.innerHTML = `<option value="">--Select City--</option>`;
    branchSel.innerHTML = `<option value="">--Select Branch--</option>`;
    
    for(let ct in data[countrySel.value][stateSel.value]){
        citySel.innerHTML += `<option value="${ct}">${ct}</option>`;
    }
};

citySel.onchange = () => {
    branchSel.innerHTML = `<option value="">--Select Branch--</option>`;
    
    data[countrySel.value][stateSel.value][citySel.value].forEach(b=>{
        branchSel.innerHTML += `<option>${b}</option>`;
    });
};


// Save All Details
document.getElementById("customer-form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let cust = {
        name: document.getElementById("cust-name").value,
        phone: document.getElementById("cust-phone").value,
        email: document.getElementById("cust-email").value,
        id: document.getElementById("cust-id-proof").value,
        persons: document.getElementById("cust-person").value,
        country: countrySel.value,
        state: stateSel.value,
        city: citySel.value,
        branch: branchSel.value,
        checkin: document.getElementById("cust-in").value,
        checkout: document.getElementById("cust-out").value
    };

    localStorage.setItem("customerData", JSON.stringify(cust));

    alert("✔ Customer + Location Saved!");
    
    window.location.href = "../index.html"; // Go back Dashboard
});
