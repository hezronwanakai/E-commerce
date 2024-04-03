// Mock data for products
const products = [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 3", price: 39.99 }
];

// Function to display products on the page
function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

// Function to add item to cart
function addToCart(productId) {
    // Mock function to add item to cart
    console.log(`Product with ID ${productId} added to cart.`);
}

// Initialize function
function init() {
    displayProducts();
}

// Call initialize function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", init);
