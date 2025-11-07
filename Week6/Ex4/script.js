const SearchInput = document.getElementById('search-input');
const SearchButton = document.getElementById('search-button');
const ProductItems = document.getElementsByClassName('product-item');

// Handle search functionality
function filterSearch(){
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
}

SearchButton.addEventListener("click", filterSearch);
SearchInput.addEventListener("keyup", filterSearch);

// Enable search on Enter key press
SearchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Search') {
        SearchButton.click();
    }
});

const addButtons = document.getElementsByClassName('add-button');
const addForm = document.getElementById('add-form');
const cancelButtons = document.getElementById('cancel-button')

//Toggle add product form visibility
for (let button of addButtons) {
  button.addEventListener("click", () => {
    addProductForm.classList.toggle("hidden");
});
}

cancelButtons.addEventListener("click", () => {
    addProductForm.classList.add("hidden");
    addProductForm.reset();
    document.getElementById("errorMsg").textContent="";
});


//Handle form submission
addForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting normally

    //Get form values
    const productName = document.getElementById('newName').value;
    const productDesc = document.getElementById('newDesc').value;
    const productPrice = document.getElementById('newPrice').value;
    const errorMsg = document.getElementById("errorMsg");

    //Validate input
    if(!productName || !productDesc || !productPrice) {
        errorMsg.textContent = "Please fill in all fields.";
        return;
    }

    if(isNaN(productPrice) || Number(productPrice) <= 0){
        errorMsg.textContent = "Prices must be greater than 0"
        return;
    }

    errorMsg.textContent=""; //Delete alert

    //Add new product to the list
    const newProduct = document.createElement('article');
    newProduct.classList.add('product-item');
    newProduct.innerHTML = `
        <h3 class="product-name">${productName}</h3>
        <p class="product-desc">${productDesc}</p>
        <p class="product-price">Price: ${productPrice}</p>
    `;

    // Append new product to the product list
    const productList = document.getElementById('product-list');
    productList.prepend(newProduct);

    // Reset form
    addProductForm.reset();
    addProductForm.classList.add('hidden');
});