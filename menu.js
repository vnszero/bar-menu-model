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

// CSV Parser
function parseCSV(csvText) {
    const rows = csvText.trim().split("\n");
    const headers = rows.shift().split(";");
    return rows.map(row => {
        const values = row.split(";");
        return headers.reduce((obj, header, index) => {
            obj[header.trim()] = values[index].trim();
            return obj;
        }, {});
    });
}

// Load and Parse CSV File
async function loadMenuFromCSV(filePath) {
    const response = await fetch(filePath);
    const csvText = await response.text();
    const menuData = parseCSV(csvText);

    // Organize items by category
    const menuByCategory = {
        starter: [],
        dishes: [],
        drinks: [],
        desserts: []
    };

    menuData.forEach(item => {
        const category = item.category.toLowerCase();
        if (menuByCategory[category]) {
            menuByCategory[category].push({
                name: item.name,
                value: parseFloat(item.value.replace(",", "."))
            });
        }
    });

    // Populate menu categories
    populateMenu("starter", menuByCategory.starter);
    populateMenu("dishes", menuByCategory.dishes);
    populateMenu("drinks", menuByCategory.drinks);
    populateMenu("desserts", menuByCategory.desserts);
}

// Event Listener
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links a");

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

    // Load menu from CSV file
    loadMenuFromCSV("menu.csv"); // Provide the correct path to your CSV file
});
