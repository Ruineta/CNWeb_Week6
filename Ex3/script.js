const SearchInput = document.getElementById('search-input');
const SearchButton = document.getElementById('search-button');
const ProductItems = document.getElementsByClassName('product-item');

// Handle search functionality
SearchButton.addEventListener('click', () => {
    // Get the search keyword and convert to lowercase for case-insensitive search
    const keyword = SearchInput.value.trim().toLowerCase();
    // Get all product items
    const products = document.querySelectorAll(".product-item");

    // Loop through products and toggle visibility based on search keyword
    products.forEach(item => {
        const name = item.querySelector(".product-name").textContent.toLowerCase();
        if (name.includes(keyword) || keyword === "") {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
});

// Enable search on Enter key press
SearchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Search') {
        SearchButton.click();
    }
});

const addButtons = document.getElementsByClassName('add-button');
const addForm = document.getElementById('add-form');

//Toggle add product form visibility
for (let button of addButtons) {
  button.addEventListener("click", () => {
  addProductForm.classList.toggle("hidden");
});
}

//Handle form submission
addForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting normally

    //Get form values
    const productName = document.getElementById('product-name').value;
    const productDesc = document.getElementById('product-desc').value;
    const productPrice = document.getElementById('product-price').value;

    //Validate input
    if(!productName || !productDesc || !productPrice) {
        alert("Please fill in all fields.");
        return;
    }

    //Add new product to the list
    const newProduct = document.createElement('article');
    newProduct.classList.add('product-item');
    newProduct.innerHTML = `
        <h3 class="product-name">${productName}</h3>
        <p class="product-desc">${productDesc}</p>
        <p class="product-price">Price: $${productPrice}</p>
        <button class="add-button">Add Product</button>
    `;

    // Append new product to the product list
    const productList = document.getElementById('product-list');
    productList.append(newProduct);

    // Reset form
    addForm.reset();
    addForm.classList.add('hidden');
});