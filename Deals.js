const NOVA_FEATURED_DEALS = [
    "nova-aura",
    "nova-flex",
    "nova-sonic-plus",
    "nova-vault-pro"
];

const NOVA_DEAL_PRICES = {
    "nova-aura": 579000,
    "nova-flex": 809000,
    "nova-sonic-plus": 84000,
    "nova-vault-pro": 73000
};

function formatNairaPrice(price) {
    return `₦${Number(price).toLocaleString("en-NG")}`;
}

function getNumericPrice(price) {
    return Number(String(price).replace(/[^\d.]/g, ""));
}

function getDiscountPercentage(dealPrice, originalPrice) {
    const deal = getNumericPrice(dealPrice);
    const original = getNumericPrice(originalPrice);

    if (!deal || !original || original <= deal) {
        return 0;
    }

    return Math.round(((original - deal) / original) * 100);
}

function getDealData(productId, product) {
    const originalPrice = getNumericPrice(product.price);
    const dealPrice = Number(NOVA_DEAL_PRICES[productId]) || 0;
    const percentage = getDiscountPercentage(dealPrice, originalPrice);

    return {
        originalPrice,
        dealPrice,
        discountText: `${percentage}% OFF`
    };
}

function updateDealCard(card, productId, product) {
    if (!card || !product) {
        return;
    }

    const deal = getDealData(productId, product);

    if (!deal.originalPrice || !deal.dealPrice || deal.dealPrice >= deal.originalPrice) {
        return;
    }

    card.dataset.productId = productId;

    const discountElement = card.querySelector(".discount");
    const image = card.querySelector(".product-image img");
    const category = card.querySelector(".product-category");
    const name = card.querySelector("h3");
    const oldPriceElement = card.querySelector("del");
    const currentPriceElement = card.querySelector("strong");
    const button = card.querySelector(".add-to-cart");

    if (discountElement) {
        discountElement.textContent = deal.discountText;
    }

    if (image) {
        image.src = product.image;
        image.alt = product.name;
    }

    if (category) {
        category.textContent = product.category;
    }

    if (name) {
        name.textContent = product.name;
    }

    if (oldPriceElement) {
        oldPriceElement.textContent = formatNairaPrice(deal.originalPrice);
    }

    if (currentPriceElement) {
        currentPriceElement.textContent = formatNairaPrice(deal.dealPrice);
    }

    if (button) {
        button.dataset.productId = productId;
        button.dataset.deal = "true";
        button.dataset.discount = deal.discountText;
        button.dataset.dealPrice = String(deal.dealPrice);
        button.dataset.originalPrice = String(deal.originalPrice);
    }
}

function syncFeaturedDeals() {
    const products = window.NOVA_PRODUCTS;

    if (!products || typeof products !== "object") {
        return;
    }

    const container = document.getElementById("deals-container");

    if (!container) {
        return;
    }

    const cards = container.querySelectorAll(".Deals-card");

    NOVA_FEATURED_DEALS.forEach(function(productId, index) {
        const card = cards[index];
        const product = products[productId];

        updateDealCard(card, productId, product);
    });
}

function initializeDealsPage() {
    syncFeaturedDeals();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeDealsPage);
} else {
    initializeDealsPage();
}
