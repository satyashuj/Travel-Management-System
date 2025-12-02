// Country - State - City - Branch Data (Sample Demo)
const data = {
    "India": {
        "Uttar Pradesh": {
            "Lucknow": ["Hazratganj", "Gomti Nagar", "Charbagh"],
            "Kanpur": ["Swaroop Nagar", "Barra", "Kakadeo"]
        },
        "Maharashtra": {
            "Mumbai": ["Andheri", "Bandra", "Colaba"],
            "Pune": ["Hinjewadi", "Kothrud", "Viman Nagar"]
        }
    },
    "USA": {
        "California": {
            "Los Angeles": ["Downtown", "Hollywood"],
            "San Francisco": ["Chinatown", "Mission"]
        },
        "Texas": {
            "Houston": ["Downtown", "Midtown"],
            "Austin": ["Zilker", "Domain"]
        }
    }
};

// References
let countrySel = document.getElementById("country-select");
let stateSel = document.getElementById("state-select");
let citySel = document.getElementById("city-select");
let branchSel = document.getElementById("branch-select");

// Load Countries
for (let c in data) {
    countrySel.innerHTML += `<option value="${c}">${c}</option>`;
}

countrySel.onchange = () => {
    stateSel.innerHTML = `<option value="">--Select State--</option>`;
    citySel.innerHTML = `<option value="">--Select City--</option>`;
    branchSel.innerHTML = `<option value="">--Select Branch--</option>`;

    let states = data[countrySel.value];
    for (let s in states) {
        stateSel.innerHTML += `<option value="${s}">${s}</option>`;
    }
};

stateSel.onchange = () => {
    citySel.innerHTML = `<option value="">--Select City--</option>`;
    branchSel.innerHTML = `<option value="">--Select Branch--</option>`;

    let cities = data[countrySel.value][stateSel.value];
    for (let ct in cities) {
        citySel.innerHTML += `<option value="${ct}">${ct}</option>`;
    }
};

citySel.onchange = () => {
    branchSel.innerHTML = `<option value="">--Select Branch--</option>`;

    let branches = data[countrySel.value][stateSel.value][citySel.value];
    branches.forEach(b => {
        branchSel.innerHTML += `<option>${b}</option>`;
    });
};

// On Submit
document.getElementById("location-form").addEventListener("submit", (e)=>{
    e.preventDefault();

    alert(`
✔ Location Confirmed!

Country: ${countrySel.value}
State: ${stateSel.value}
City: ${citySel.value}
Branch/Area: ${branchSel.value}

Customer: ${document.getElementById("cust-name").value}
Phone: ${document.getElementById("cust-phone").value}
    `);
});
