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
        data.forEach((product, index) => {
            // Truncate the description to limit its text to 100 only
            const truncated_description = product.description.length > 100 ? product.description.substring(0, 100) + '...' : product.description;

            // Using Regex: Replaces all single quotes (') in the product title with an escaped version (\'), preventing the syntax error.
            const fixed_product_title = product.title.replace(/'/g, "\\'");

            // Generate HTML markup for each product
            html += `
                    <div class="card p-2 m-2">
                        <div class="d-flex justify-content-center">
                            <img src="${product.image}" class="card-image card-img-top" data-bs-toggle="modal" data-bs-target="#imageModal${index}" onclick="showImage('${product.image}', '${fixed_product_title}', ${index})">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text text-secondary">₱${product.price}</p>
                            <p class="card-text">${truncated_description}</p>
                        </div>
                    </div>
                    <!-- Preview Image Modal -->
                    <div class="modal fade" id="imageModal${index}" tabindex="-1" aria-labelledby="imageModalLabel${index}" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title w-100 text-center" id="imageModalLabel${index}">${product.title}</h5>
                                    <button type="button" class="btn-close mb-4" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body text-center">
                                    <img id="modalImage${index}" src="${product.image}" alt="Preview" class="img-fluid">
                                </div>
                            </div>
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

const showImage = (src, title, index) => {
    document.getElementById(`modalImage${index}`).src = src;
    document.getElementById(`imageModalLabel${index}`).textContent = title;
}

displayProductList();
