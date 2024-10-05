// Mostrar el enlace cuando el usuario haga scroll
window.onscroll = function() {
    scrollFunction();
};

// Scroll function
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topLink").style.display = "block";
    } else {
        document.getElementById("topLink").style.display = "none";
    }
}

// Scroll to top function
function topFunction() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

// Lógica del dropdown
document.getElementById('dropdownBtn').addEventListener('click', function(event) {
    event.preventDefault();  // Evita que se ejecute el enlace
    var dropdownMenu = document.getElementById('dropdownMenu');

    // Alternar la visibilidad del menú dropdown
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

// Cerrar el dropdown si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('#dropdownBtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
};

// Modal logic
var modal = document.getElementById("ageCalculatorModal");
var btn = document.getElementById("ageCalculatorBtn");
var span = document.getElementsByClassName("close")[0];

// Show the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Modal logic
var modal = document.getElementById("ageCalculatorModal");
var btn = document.getElementById("ageCalculatorBtn");
var span = document.getElementsByClassName("close")[0];

// Show the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Calculate the dog's age in human years
document.getElementById("calculateAgeBtn").addEventListener("click", function() {
    var dogAge = parseFloat(document.getElementById("dogAge").value);
    
    if (!isNaN(dogAge)) {
        var humanAge = dogAge * 7;
        document.getElementById("result").innerText = "La edad de tu perro en años humanos es: " + humanAge;
    } else {
        document.getElementById("result").innerText = "Por favor, ingresa una edad válida.";
    }
});

