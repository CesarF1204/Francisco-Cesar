// Function expression to fetch and display product data
const displayProductList = async() => {
    // Select the product container element
    const productContainer = document.getElementById("productContainer");

    try{
        // Fetch product data from the fakestoreapi
        const response = await fetch("https://fakestoreapi.com/products");
        
        // Check if the response is not successful
        if (!response.ok) {
            throw new Error("Failed to fetch data.");
        }

        // Extract JSON data from the response
        const data = await response.json();

        let html = '';
        data.forEach((product) => {
            // Truncate the description to limit its text to 100 only
            const truncated_description = product.description.length > 100 ? product.description.substring(0, 100) + '...' : product.description;

            // Generate HTML markup for each product
            html += `
                
                    <div class="card p-2 m-2" style="width: 18rem;">
                        <div class="d-flex justify-content-center">
                            <img src="${product.image}" class="card-image card-img-top ">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text text-secondary">₱${product.price}</p>
                            <p class="card-text">${truncated_description}</p>
                        </div>
                    </div>
                
            `;
        });

        // Insert the generated HTML markup into the product container
        productContainer.innerHTML = html;
    } catch(error){
        // Display an error message if fetching data fails
        productContainer.innerHTML = "An error occurred while fetching data.";
        console.error(error);
    }
}

displayProductList();
