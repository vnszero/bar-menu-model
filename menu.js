// Categories
const starters = [
    { name: "Salada", value: 3.00 },
    { name: "Pão", value: 2.00 },
    { name: "Bruschetta", value: 3.50 },
    { name: "Sopa de Tomate", value: 4.00 },
    { name: "Azeitonas Temperadas", value: 2.50 },
    { name: "Patê de Fígado com Torradas", value: 4.50 }
];

const dishes = [
    { name: "Princesinha", value: 8.00 },
    { name: "Prego no Prato", value: 9.00 },
    { name: "Bacalhau à Brás", value: 10.00 },
    { name: "Arroz de Pato", value: 11.50 },
    { name: "Frango à Piri-Piri", value: 7.50 },
    { name: "Lasagna de Vegetais", value: 8.50 }
];

const drinks = [
    { name: "Cerveja", value: 3.50 },
    { name: "Refrigerante", value: 2.50 },
    { name: "Água Mineral", value: 1.50 },
    { name: "Vinho Tinto (taça)", value: 4.00 },
    { name: "Café", value: 1.00 },
    { name: "Chá Verde", value: 2.00 }
];

const desserts = [
    { name: "Gelado", value: 4.00 },
    { name: "Tarte de Maçã", value: 5.00 },
    { name: "Pudim de Caramelo", value: 4.50 },
    { name: "Bolo de Chocolate", value: 5.00 },
    { name: "Cheesecake de Morango", value: 5.50 },
    { name: "Mousse de Limão", value: 4.00 }
];

// Populate
function populateMenu(categoryId, items) {
    const categoryElement = document.querySelector(`#${categoryId} ul`);
    items.forEach(item => {
        const listItem = document.createElement("li");
        const nameSpan = document.createElement("span");
        const valueSpan = document.createElement("span");
        
        nameSpan.textContent = item.name;
        valueSpan.textContent = `${item.value.toFixed(2)} €`;
        
        listItem.appendChild(nameSpan);
        listItem.appendChild(valueSpan);
        categoryElement.appendChild(listItem);
    });
}

// Fill Menu
populateMenu("starter", starters);
populateMenu("dishes", dishes);
populateMenu("drinks", drinks);
populateMenu("desserts", desserts);

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links a"); // Select all nav links

    // Toggle menu visibility
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("open");
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.classList.remove("open");
        });
    });
});

