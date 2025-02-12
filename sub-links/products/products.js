import products from "./products-constants.js"; // Import the product data


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".product-card").forEach(card => {
        const preview = card.querySelector(".click-preview");
        const quickView = card.querySelector(".quick-view-btn");
        const closeBtn = preview.querySelector(".close-btn");

        // Show preview when Learn More is clicked
        quickView.addEventListener("click", function (event) {
            event.stopPropagation();
            preview.style.display = "grid";
        });

        // Close preview when close button is clicked
        closeBtn.addEventListener("click", function () {
            preview.style.display = "none";
        });
    });
});



// load products-container
const productsContainer = document.querySelector(".products-container");

products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
        <div class="click-preview" id="preview-${index}" style="display: none;">
            <button class="close-btn" data-index="${index}">X</button>
            <div class="preview-img-container">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="preview-info-container">
                <div class="product-info">
                    <h1 class="name">${product.name}</h1>
                    <h4 class="item-number">Item # ${product.itemNumber}</h4>
                    <h2 class="price">MSRP<p>${product.price}</p></h2>
                    <p class="description">${product.description}</p>
                    <div class="form-buttons">

                        <div class="buttons-container">
                            <button class="button primary-btn ">+ ADD TO CART <i class="fa-solid fa-cart-shopping"></i></button>
                            <button class="button primary-btn ">+ ADD TO WISHLIST <i class="fa-solid fa-heart"></i></button>
                        </div>
                        <div class="warnings">
                            <p>
                                Price and specifications are subject to change without notice or liability. Availability is subject to production, stocking and demand. Manufacturer's suggested retail prices shown.
                            </p>
                            <p>
                                WARNING: Cancer and reproductive harm www.P65Warnings.ca.gov
                            </p>
                        </div>
                    </div>
                </div>
                <div class="customer-reviews-container">
                    ${product.reviews.map(review => {
                        let reviewSummary = "";
                        if (review.stars === 5) {
                            reviewSummary = "Excellent";
                        } else if (review.stars === 4) {
                            reviewSummary = "Very Good";
                        } else if (review.stars === 3) {
                            reviewSummary = "Good";
                        } else if (review.stars === 2) {
                            reviewSummary = "Poor";
                        } else {
                            reviewSummary = "Needs Improvement";
                        }

                        return `
                            <div class="customer-review-card">
                                <h4>${review.name}</h4>
                                <div class="stars-review">
                                <h1 class="review-summary">${reviewSummary}</h1>
                                    <div class="stars-container">
                                        ${'<i class="fa-solid fa-star"></i>'.repeat(review.stars)}
                                    </div>
                                </div>
                                <p>${review.comment}</p>
                            </div>
                        `;
                    }).join("")}
                </div>

            </div>
        </div>                

        <div class="img-container">
            <img src="${product.img}" alt="${product.name}">
        </div>
        
        <div class="card-info-container">
            <h1 class="name">${product.name}</h1>
            <h4 class="item-number">Item # ${product.itemNumber}</h4>
            <h2 class="price">MSRP<p>${product.price}</p></h2>
            <button class="quick-view-btn" data-index="${index}">Quick View<i class="fa-solid fa-eye"></i></button>
        </div>
        <button class="button primary-btn btn-add-to-cart">+ ADD TO CART <i class="fa-solid fa-cart-shopping"></i></button>
    `;

    productsContainer.appendChild(productCard);
});