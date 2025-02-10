document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".product-card").forEach(card => {
        const preview = card.querySelector(".click-preview");
        const learnMoreBtn = card.querySelector(".secondary-btn");
        const closeBtn = preview.querySelector(".close-btn");

        // Show preview when Learn More is clicked
        learnMoreBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            preview.style.display = "grid";
        });

        // Close preview when close button is clicked
        closeBtn.addEventListener("click", function () {
            preview.style.display = "none";
        });
    });
});
