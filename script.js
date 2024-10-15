const animals = [
    { name: "Perro", image: "https://www.elmueble.com/medio/2023/03/09/perro-de-raza-rottweiler_9f7a22a7_230309180127_900x900.jpg" },
    { name: "Gato", image: "https://th.bing.com/th/id/R.07e1adce7bd0f361fdcdc40eec542cd9?rik=aCElvdkEHqTHRA&pid=ImgRaw&r=0" },
    { name: "Elefante", image: "https://th.bing.com/th/id/R.8b937dc3ca626a962aa3c32e1c69d522?rik=xrv510Eh1knljg&pid=ImgRaw&r=0" },
    { name: "León", image: "https://th.bing.com/th/id/R.d384494a854dec632c6a72bf14d12aa2?rik=f8d%2fNWXpxenN4Q&riu=http%3a%2f%2flosanimalesmehablan.com%2fwp-content%2fuploads%2f2015%2f05%2fPanthera-leo.jpg&ehk=aOt6zlc6kr4kJMKwL%2fC4uUECG87CFXK1xGCGHK3nXDk%3d&risl=&pid=ImgRaw&r=0" },
    { name: "Tigre", image: "https://th.bing.com/th/id/OIP.U_oWZOck3M36SiHJHMVkKQHaE8?rs=1&pid=ImgDetMain" }
];
 
document.getElementById("search-button").addEventListener("click", function() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const results = animals.filter(animal => animal.name.toLowerCase().includes(query));
    displayResults(results);
});
 
function displayResults(results) {
    const container = document.getElementById("results-container");
    container.innerHTML = ""; // Limpiar resultados previos
    if (results.length === 0) {
        container.innerHTML = "<p>No se encontraron animales.</p>";
        return;
    }
    results.forEach(animal => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${animal.image}" alt="${animal.name}">
            <h3>${animal.name}</h3>
            <a href="#">Más información</a>
        `;
        container.appendChild(card);
    });
}




document.getElementById("search-button").addEventListener("click", function() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const results = animals.filter(animal => animal.name.toLowerCase().includes(query));
    displayResults(results);
});

function displayResults(results) {
    const container = document.getElementById("results-container");
    container.innerHTML = ""; // Limpiar resultados previos
    if (results.length === 0) {
        container.innerHTML = "<p>No se encontraron animales.</p>";
        return;
    }
    results.forEach(animal => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${animal.image}" alt="${animal.name}">
            <h3>${animal.name}</h3>
            <a href="animal.html?name=${animal.name}">Más información</a>
        `;
        container.appendChild(card);
    });
}


// Mostrar modal de bienvenida al cargar la página
window.onload = function() {
    const modal = document.getElementById("welcome-modal");
    const closeButton = document.querySelector(".close-button");
    const continueButton = document.getElementById("continue-button");

    modal.style.display = "block"; // Mostrar el modal

    closeButton.onclick = function() {
        modal.style.display = "none"; // Cerrar el modal
    }

    continueButton.onclick = function() {
        modal.style.display = "none"; // Cerrar el modal
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Cerrar el modal si se hace clic fuera de él
        }
    }
};

