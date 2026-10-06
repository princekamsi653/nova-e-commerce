document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById("wishlist-grid");
    const empty = document.getElementById("wishlist-empty");
    const summary = document.getElementById("wishlist-summary");

    function renderWishlist() {
        if (!grid || !empty || !summary) return;
        const catalog = typeof getNovaProducts === "function" ? getNovaProducts() : window.NOVA_PRODUCTS || {};
        const ids = typeof getWishlist === "function" ? getWishlist() : [];
        grid.innerHTML = "";
        summary.textContent = ids.length + (ids.length === 1 ? " product saved" : " products saved");
        empty.hidden = ids.length !== 0;
        grid.hidden = ids.length === 0;

        ids.forEach(function (id) {
            const product = catalog[id];
            if (!product) return;
            const card = document.createElement("article");
            card.className = "wishlist-card";
            card.innerHTML = `
                <button class="remove-wishlist" type="button" data-product-id="${id}" aria-label="Remove ${product.name} from wishlist">♥</button>
                <a class="wishlist-image" href="Product-details.html?id=${encodeURIComponent(id)}"><img src="${product.image}" alt="${product.name}"></a>
                <div class="wishlist-info">
                    <p class="wishlist-category">${product.category || "NOVA"}</p>
                    <h3>${product.name}</h3>
                    <p class="wishlist-description">${product.description || "Premium NOVA technology designed for everyday life."}</p>
                    <div class="wishlist-meta"><strong>${product.price}</strong><span>★ ${product.rating || "0"}</span></div>
                    <div class="wishlist-actions">
                        <a href="Product-details.html?id=${encodeURIComponent(id)}">View Details</a>
                        <button type="button" class="wishlist-add-cart" data-product-id="${id}">Add to Cart</button>
                    </div>
                </div>`;
            grid.appendChild(card);
        });

        grid.querySelectorAll(".remove-wishlist").forEach(function (button) {
            button.addEventListener("click", function () {
                toggleWishlist(button.dataset.productId);
                renderWishlist();
            });
        });

        grid.querySelectorAll(".wishlist-add-cart").forEach(function (button) {
            button.addEventListener("click", function () {
                const added = addProductToCart(button.dataset.productId, 1);
                if (!added) return;
                const original = "Add to Cart";
                button.textContent = "Added ✓";
                button.disabled = true;
                setTimeout(function () { button.textContent = original; button.disabled = false; }, 1400);
            });
        });
    }

    renderWishlist();
    window.addEventListener("nova:wishlist-changed", renderWishlist);
});
