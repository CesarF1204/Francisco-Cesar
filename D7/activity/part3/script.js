const cart_list = document.getElementById("cart_list");
const total_price = document.getElementById("total_price");
const checkout_btn = document.getElementById("checkout_btn");
const product_list = document.getElementById("product_list");

let cart = [];
let total = 0;

/* Event listener to "Add to Cart" buttons */
product_list.addEventListener("click", (event) => {
    /* Check if the clicked element is the "Add to Cart" button */
    if(event.target && event.target.id === "add_to_cart"){
        const product_item = event.target.closest("li");
        const product_name = product_item.querySelector("#product_name").textContent;
        const product_price = parseFloat(product_item.querySelector("#price").textContent.replace('₱', ''));

        /* Call addToCart() function for adding to your cart */
        addToCart(product_name, product_price);
    }
});

/**
* DOCU: This function is used to handle the adding of cart. <br>
* This is being called when the user add the product to the cart. <br>
* Triggered: When user clicks the "Add to Cart" button.  <br>
* Last Updated Date: November 14, 2024 <br>
* @function
* @param {string} name - The name of the product.
* @param {number} price - The price of the product.
* @author Cesar
*/
function addToCart(name, price) {
    /* Check if the product is already in the cart */
    const existing_product = cart.find(item => item.name === name);
    if(existing_product){
        /* Increase quantity if the product is already in the cart */
        existing_product.quantity++;
    }
    else{
        /*Add new product to the cart with quantity 1 */
        cart.push({ name, price, quantity: 1 });
    }

    /* Call updateCart() function to update your cart and the total amount */
    updateCart();
}

/**
* DOCU: This function is used to handle the removing of items from cart. <br>
* This is being called when the user wants to remove or decrease an item from the cart. <br>
* Triggered: When user clicks the "Remove" button from the cart.  <br>
* Last Updated Date: November 14, 2024 <br>
* @function
* @param {string} name - The name of the product.
* @author Cesar
*/
function removeFromCart(name) {
    /* Find the index of the product in the cart */
    const product_index = cart.findIndex(item => item.name === name);

    /* Check if the product_index is greater than 0 */
    if(product_index !== -1){
        const product = cart[product_index];
        /* If quantity is greater than 1, decrease the quantity */
        if (product.quantity > 1) {
            product.quantity--;
        }
        /* If quantity is 1 or less, remove the product completely from the cart */
        else {
            cart.splice(product_index, 1);
        }
    }

    /* Call updateCart() function to update your cart and the total amount */
    updateCart();
}

/**
* DOCU: This function is used to handle the updating of the cart. <br>
* This is being called from addToCart() function, removeFromCart() function, and when the user checks out. <br>
* Triggered: When user clicks the "Add to Cart", "Remove", and "Checkout" button.  <br>
* Last Updated Date: November 14, 2024 <br>
* @function
* @author Cesar
*/
function updateCart() {
    /* Clear the current cart display */
    cart_list.innerHTML = '';

    /* Loop through the cart and create list items for each product */
    for(let i = 0; i < cart.length; i++){
        /* Create a <li> element for each item */
        const list_item = document.createElement("li");

        /* Display product name, price, and quantity */
        list_item.textContent = `${cart[i].name} - ₱${cart[i].price} - ${cart[i].quantity} `;

        /* Create and append the remove button */
        const remove_cart = document.createElement("button");
        remove_cart.textContent = "Remove";
        remove_cart.classList.add("remove-cart");
        list_item.appendChild(remove_cart);

        /* Event listener to remove the item from the cart */
        remove_cart.addEventListener("click", () => removeFromCart(cart[i].name));

        /*  Append list item to the cart list */
        cart_list.appendChild(list_item);
    }

    /* Calculate total price */
    total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    /* Update total price in UI */
    total_price.textContent = `Total: ₱${total.toFixed(2)}`;
}

/* Event listener for checkout button functionality */
checkout_btn.addEventListener("click", () => {
    /* Check if cart has items, proceed with checkout */
    if(cart.length > 0){
        /* Show an alert containing the total amount purchased */
        alert(`Total amount to be paid: ₱${total.toFixed(2)}`);
        /* Empty the cart after checkout */
        cart = [];
        /* Update cart UI */
        updateCart();
    }
    else{
        /* If the cart is empty, show an alert */
        alert("Your cart is empty.");
    }
});