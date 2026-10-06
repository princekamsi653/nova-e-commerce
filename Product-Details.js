document.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    const catalog =
        typeof getNovaProducts === "function"
            ? getNovaProducts()
            : window.NOVA_PRODUCTS || {};

    const product = catalog[productId];

    const productName = document.getElementById("product-name");
    const productCategory = document.getElementById("product-category");
    const productImage = document.getElementById("product-image");
    const productPrice = document.getElementById("product-price");
    const oldPrice = document.getElementById("old-price");
    const discount = document.getElementById("discount");
    const rating = document.getElementById("product-rating");
    const reviews = document.querySelector(".reviews");
    const description = document.getElementById("product-description");
    const fullDescription = document.getElementById("full-description");
    const stock = document.getElementById("stock");
    const overallRating = document.getElementById("overall-rating");
    const overallReviews = document.getElementById("overall-reviews");
    const quantityDisplay = document.getElementById("quantity");
    const specificationsGrid = document.getElementById("specifications-grid");
    const reviewsContainer = document.getElementById("reviews-container");
    const relatedContainer = document.getElementById("related-container");
    const specificationsSection = document.getElementById("specifications");
    const reviewsSection = document.getElementById("reviews");
    const addButton = document.getElementById("add-to-cart") || document.querySelector(".add-cart");
    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const wishlist = document.getElementById("wishlist") || document.querySelector(".wishlist");
    const storageSection = document.getElementById("storage-section");
    const storageOptions = document.getElementById("storage-options");
    const tabs = document.querySelectorAll(".info-tab");

    const thumbnailsContainer = document.getElementById("product-thumbnails");
    const previousButton = document.getElementById("gallery-prev");
    const nextButton = document.getElementById("gallery-next");
    const visualIdentityOptions = document.getElementById("visual-identity-options");

    let quantity = 1;
    let selectedStorage = "";
    let selectedVariant = null;
    let galleryImages = [];
    let currentImageIndex = 0;


    function getProductImages(item) {

        if (!item) {
            return [];
        }

        if (Array.isArray(item.images) && item.images.length) {
            return item.images.filter(Boolean);
        }

        if (item.image) {
            return [item.image];
        }

        return [];
    }


    function getVariantImages(variant) {

        if (!variant) {
            return [];
        }

        if (Array.isArray(variant.images) && variant.images.length) {
            return variant.images.filter(Boolean);
        }

        if (variant.image) {
            return [variant.image];
        }

        return [];
    }


    function setupGallery() {

        if (!productImage) {
            return;
        }

        galleryImages = getProductImages(product);
        currentImageIndex = 0;

        renderGallery();

    }


    function renderGallery() {

        if (!productImage) {
            return;
        }

        if (!galleryImages.length) {

            productImage.removeAttribute("src");
            productImage.alt = product.name || "Product";

            if (thumbnailsContainer) {
                thumbnailsContainer.innerHTML = "";
            }

            return;
        }

        currentImageIndex = Math.max(
            0,
            Math.min(
                currentImageIndex,
                galleryImages.length - 1
            )
        );

        productImage.src =
            galleryImages[currentImageIndex];

        productImage.alt =
            product.name || "NOVA Product";

        renderThumbnails();

        updateGalleryButtons();

    }


    function renderThumbnails() {

        if (!thumbnailsContainer) {
            return;
        }

        thumbnailsContainer.innerHTML = "";

        galleryImages.forEach(
            function (image, index) {

                const thumbnail =
                    document.createElement("button");

                thumbnail.type = "button";
                thumbnail.className = "product-thumbnail";

                if (index === currentImageIndex) {
                    thumbnail.classList.add("active");
                }

                thumbnail.setAttribute(
                    "aria-label",
                    "View product image " + (index + 1)
                );

                const thumbnailImage =
                    document.createElement("img");

                thumbnailImage.src = image;
                thumbnailImage.alt =
                    product.name + " view " + (index + 1);
                thumbnailImage.loading = "lazy";

                thumbnail.appendChild(thumbnailImage);

                thumbnail.addEventListener(
                    "click",
                    function () {

                        currentImageIndex = index;

                        renderGallery();

                    }
                );

                thumbnailsContainer.appendChild(
                    thumbnail
                );

            }
        );

        const activeThumbnail =
            thumbnailsContainer.querySelector(
                ".product-thumbnail.active"
            );

        if (activeThumbnail) {

            activeThumbnail.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });

        }

    }


    function updateGalleryButtons() {

        if (previousButton) {

            previousButton.disabled =
                galleryImages.length <= 1;

            previousButton.style.visibility =
                galleryImages.length > 1
                    ? "visible"
                    : "hidden";

        }

        if (nextButton) {

            nextButton.disabled =
                galleryImages.length <= 1;

            nextButton.style.visibility =
                galleryImages.length > 1
                    ? "visible"
                    : "hidden";

        }

    }


    function showPreviousImage() {

        if (galleryImages.length <= 1) {
            return;
        }

        currentImageIndex =
            currentImageIndex <= 0
                ? galleryImages.length - 1
                : currentImageIndex - 1;

        renderGallery();

    }


    function showNextImage() {

        if (galleryImages.length <= 1) {
            return;
        }

        currentImageIndex =
            currentImageIndex >= galleryImages.length - 1
                ? 0
                : currentImageIndex + 1;

        renderGallery();

    }


    if (previousButton) {

        previousButton.addEventListener(
            "click",
            function () {

                showPreviousImage();

            }
        );

    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function () {

                showNextImage();

            }
        );

    }


    function setupVisualIdentities() {

        if (!visualIdentityOptions) {
            return;
        }

        visualIdentityOptions.innerHTML = "";

        const variants =
            Array.isArray(product.variants)
                ? product.variants
                : [];

        if (!variants.length) {

            visualIdentityOptions.parentElement.style.display =
                "none";

            return;

        }

        visualIdentityOptions.parentElement.style.display =
            "block";

        selectedVariant = variants[0];

        variants.forEach(
            function (variant, index) {

                const button =
                    document.createElement("button");

                button.type = "button";
                button.className =
                    "visual-identity-button";

                button.textContent =
                    variant.name ||
                    "Finish " + (index + 1);

                if (index === 0) {
                    button.classList.add("active");
                }

                button.addEventListener(
                    "click",
                    function () {

                        document
                            .querySelectorAll(
                                ".visual-identity-button"
                            )
                            .forEach(
                                function (item) {

                                    item.classList.remove(
                                        "active"
                                    );

                                }
                            );

                        button.classList.add("active");

                        selectedVariant =
                            variant;

                        const variantImages =
                            getVariantImages(
                                variant
                            );

                        if (variantImages.length) {

                            galleryImages =
                                variantImages;

                            currentImageIndex = 0;

                            renderGallery();

                        } else {

                            galleryImages =
                                getProductImages(
                                    product
                                );

                            currentImageIndex = 0;

                            renderGallery();

                        }

                    }
                );

                visualIdentityOptions.appendChild(
                    button
                );

            }
        );

    }


    function setupStorage() {

        if (!storageSection) {
            return;
        }

        if (
            !product ||
            (
                product.categoryId !== "phones" &&
                product.categoryId !== "laptops"
            )
        ) {

            storageSection.style.display =
                "none";

            return;

        }

        if (
            typeof getStorageOptions !== "function" ||
            typeof getDefaultStorage !== "function"
        ) {

            storageSection.style.display =
                "none";

            return;

        }

        storageSection.style.display =
            "block";

        const options =
            getStorageOptions(product);

        const defaultStorage =
            getDefaultStorage(product);

        selectedStorage =
            defaultStorage;

        storageOptions.innerHTML =
            "";

        options.forEach(
            function (storage) {

                const button =
                    document.createElement("button");

                button.type = "button";
                button.className =
                    "storage-button";

                button.dataset.storage =
                    storage;

                button.textContent =
                    storage;

                if (
                    storage ===
                    selectedStorage
                ) {

                    button.classList.add(
                        "active"
                    );

                }

                button.addEventListener(
                    "click",
                    function () {

                        document
                            .querySelectorAll(
                                ".storage-button"
                            )
                            .forEach(
                                function (item) {

                                    item.classList.remove(
                                        "active"
                                    );

                                }
                            );

                        button.classList.add(
                            "active"
                        );

                        selectedStorage =
                            storage;

                        updateSelectedPrice();
                        renderSpecifications();

                    }
                );

                storageOptions.appendChild(
                    button
                );

            }
        );

    }


    function updateSelectedPrice() {

        if (
            !productPrice ||
            !product
        ) {

            return;

        }

        if (
            typeof getStoragePrice !== "function" ||
            !selectedStorage
        ) {

            productPrice.textContent =
                product.price || "₦0";

            return;

        }

        const price =
            getStoragePrice(
                product,
                selectedStorage
            );

        productPrice.textContent =
            typeof formatPrice === "function"
                ? formatPrice(price)
                : price;

    }


    function renderSpecifications() {

        if (
            !specificationsGrid ||
            !product
        ) {

            return;

        }

        specificationsGrid.innerHTML =
            "";

        const baseSpecifications = {

            Brand:
                product.brand || "NOVA",

            Model:
                product.model ||
                product.name,

            Category:
                product.category

        };

        const productSpecifications =
            {
                ...(product.specifications || {})
            };

        if (
            product.categoryId ===
            "phones"
        ) {

            delete productSpecifications.Storage;

        }

        if (
            product.categoryId ===
            "laptops"
        ) {

            delete productSpecifications.Storage;

        }

        const specifications = {

            ...baseSpecifications,

            ...productSpecifications

        };

        if (selectedStorage) {

            specifications.Storage =
                selectedStorage;

        }

        if (selectedVariant) {

            specifications.Finish =
                selectedVariant.name ||
                "";

        }

        specifications.Warranty =
            product.warranty ||
            "1 Year";

        specifications.Availability =
            product.stock ||
            "In Stock";

        Object.entries(
            specifications
        ).forEach(
            function (entry) {

                const box =
                    document.createElement("div");

                box.className =
                    "specification";

                const label =
                    document.createElement("span");

                label.textContent =
                    entry[0];

                const value =
                    document.createElement("strong");

                value.textContent =
                    entry[1];

                box.appendChild(
                    label
                );

                box.appendChild(
                    value
                );

                specificationsGrid.appendChild(
                    box
                );

            }
        );

    }


    function renderReviews() {

        if (!reviewsContainer) {
            return;
        }

        reviewsContainer.innerHTML =
            "";

        const list =
            Array.isArray(
                product.reviewsList
            )
                ? product.reviewsList
                : [];

        list.forEach(
            function (review) {

                if (
                    !Array.isArray(review)
                ) {

                    return;

                }

                const reviewer =
                    review[0] ||
                    "Customer";

                const stars =
                    review[1] ||
                    "★★★★★";

                const text =
                    review[2] ||
                    "";

                const card =
                    document.createElement("article");

                card.className =
                    "review-card";

                const top =
                    document.createElement("div");

                top.className =
                    "review-top";

                const user =
                    document.createElement("div");

                user.className =
                    "review-user";

                const avatar =
                    document.createElement("div");

                avatar.className =
                    "user-avatar";

                avatar.textContent =
                    reviewer
                        .charAt(0)
                        .toUpperCase();

                const userInfo =
                    document.createElement("div");

                const reviewerName =
                    document.createElement("h3");

                reviewerName.textContent =
                    reviewer;

                const verified =
                    document.createElement("p");

                verified.textContent =
                    "Verified Buyer";

                userInfo.appendChild(
                    reviewerName
                );

                userInfo.appendChild(
                    verified
                );

                user.appendChild(
                    avatar
                );

                user.appendChild(
                    userInfo
                );

                const starElement =
                    document.createElement("div");

                starElement.className =
                    "review-stars";

                starElement.textContent =
                    stars;

                top.appendChild(
                    user
                );

                top.appendChild(
                    starElement
                );

                const reviewText =
                    document.createElement("p");

                reviewText.className =
                    "review-text";

                reviewText.textContent =
                    text;

                card.appendChild(
                    top
                );

                card.appendChild(
                    reviewText
                );

                reviewsContainer.appendChild(
                    card
                );

            }
        );

        const subtitle =
            document.getElementById(
                "reviews-subtitle"
            );

        if (subtitle) {

            subtitle.textContent =
                "What our customers are saying about " +
                product.name;

        }

        if (overallReviews) {

            overallReviews.textContent =
                "Based on " +
                (product.reviews || 0) +
                " reviews";

        }

    }


    function renderRelatedProducts() {

        if (!relatedContainer) {
            return;
        }

        relatedContainer.innerHTML =
            "";

        const related =
            Object.entries(catalog)
                .filter(
                    function (entry) {

                        return (
                            entry[0] !==
                            productId
                        );

                    }
                )
                .filter(
                    function (entry) {

                        return (
                            !product.categoryId ||
                            entry[1].categoryId ===
                                product.categoryId
                        );

                    }
                )
                .slice(0, 4);

        const fallbackRelated =
            related.length
                ? related
                : Object.entries(catalog)
                    .filter(
                        function (entry) {

                            return (
                                entry[0] !==
                                productId
                            );

                        }
                    )
                    .slice(0, 4);

        fallbackRelated.forEach(
            function (entry) {

                const id =
                    entry[0];

                const item =
                    entry[1];

                const card =
                    document.createElement("article");

                card.className =
                    "related-card";

                const imageContainer =
                    document.createElement("div");

                imageContainer.className =
                    "related-image";

                const image =
                    document.createElement("img");

                image.src =
                    item.image ||
                    (
                        Array.isArray(item.images) &&
                        item.images.length
                            ? item.images[0]
                            : ""
                    );

                image.alt =
                    item.name || "NOVA Product";

                image.loading =
                    "lazy";

                imageContainer.appendChild(
                    image
                );

                const name =
                    document.createElement("h3");

                name.textContent =
                    item.name;

                const price =
                    document.createElement("p");

                price.textContent =
                    item.price || "";

                card.appendChild(
                    imageContainer
                );

                card.appendChild(
                    name
                );

                card.appendChild(
                    price
                );

                card.addEventListener(
                    "click",
                    function () {

                        window.location.href =
                            "Product-details.html?id=" +
                            encodeURIComponent(id);

                    }
                );

                relatedContainer.appendChild(
                    card
                );

            }
        );

    }


    function handleProductNotFound() {

        document.title =
            "NOVA | Product Not Found";

        if (productName) {

            productName.textContent =
                "Product Not Found";

        }

        if (productCategory) {

            productCategory.textContent =
                "Unavailable";

        }

        if (productImage) {

            productImage.removeAttribute(
                "src"
            );

            productImage.alt =
                "Product Not Found";

        }

        if (productPrice) {

            productPrice.textContent =
                "₦0";

        }

        if (description) {

            description.textContent =
                "Sorry, we could not find this product.";

        }

        if (fullDescription) {

            fullDescription.textContent =
                "The product link is incorrect or the product is unavailable.";

        }

        if (stock) {

            stock.textContent =
                "Unavailable";

        }

        if (storageSection) {

            storageSection.style.display =
                "none";

        }

        if (visualIdentityOptions) {

            visualIdentityOptions.innerHTML =
                "";

        }

        if (specificationsSection) {

            specificationsSection.style.display =
                "none";

        }

        if (reviewsSection) {

            reviewsSection.style.display =
                "none";

        }

        if (addButton) {

            addButton.disabled =
                true;

        }

    }


    if (!product) {

        handleProductNotFound();

        return;

    }


    document.title =
        "NOVA | " +
        product.name;


    if (productName) {

        productName.textContent =
            product.name;

    }


    if (productCategory) {

        productCategory.textContent =
            product.category;

    }


    if (productPrice) {

        productPrice.textContent =
            product.price || "₦0";

    }


    if (oldPrice) {
        oldPrice.textContent = "";
        oldPrice.style.display = "none";
    }


    if (discount) {
        discount.textContent = "";
        discount.style.display = "none";
    }


    if (rating) {

        rating.textContent =
            product.rating || "0";

    }


    if (reviews) {

        reviews.textContent =
            "(" +
            (product.reviews || 0) +
            " Reviews)";

    }


    if (description) {

        description.textContent =
            product.description || "";

    }


    if (fullDescription) {

        fullDescription.textContent =
            product.description || "";

    }


    if (stock) {

        stock.textContent =
            product.stock || "In Stock";

    }


    if (overallRating) {

        overallRating.textContent =
            product.rating || "0";

    }


    if (overallReviews) {

        overallReviews.textContent =
            "Based on " +
            (product.reviews || 0) +
            " reviews";

    }


    setupGallery();

    setupVisualIdentities();

    setupStorage();

    updateSelectedPrice();

    renderSpecifications();

    renderReviews();

    renderRelatedProducts();


    if (quantityDisplay) {

        quantityDisplay.textContent =
            quantity;

    }


    if (plus) {

        plus.addEventListener(
            "click",
            function () {

                quantity =
                    Math.min(
                        quantity + 1,
                        10
                    );

                if (quantityDisplay) {

                    quantityDisplay.textContent =
                        quantity;

                }

            }
        );

    }


    if (minus) {

        minus.addEventListener(
            "click",
            function () {

                quantity =
                    Math.max(
                        quantity - 1,
                        1
                    );

                if (quantityDisplay) {

                    quantityDisplay.textContent =
                        quantity;

                }

            }
        );

    }


    if (addButton) {

        addButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                const variantName =
                    selectedVariant &&
                    selectedVariant.name
                        ? selectedVariant.name
                        : "";

                let added = false;

                if (
                    typeof addProductToCart ===
                    "function"
                ) {

                    added =
                        addProductToCart(
                            productId,
                            quantity,
                            selectedStorage,
                            variantName
                        );

                } else {

                    const CART_STORAGE_KEY =
                        "novaCart";

                    let cart = [];

                    try {

                        cart =
                            JSON.parse(
                                localStorage.getItem(
                                    CART_STORAGE_KEY
                                )
                            ) || [];

                    } catch (error) {

                        cart = [];

                    }

                    cart.push({
                        id: productId,
                        quantity: quantity,
                        storage: selectedStorage,
                        variant: variantName
                    });

                    localStorage.setItem(
                        CART_STORAGE_KEY,
                        JSON.stringify(cart)
                    );

                    added = true;

                }


                if (!added) {
                    return;
                }


                addButton.textContent =
                    "Added to Cart ✓";

                addButton.classList.add(
                    "added"
                );


                setTimeout(
                    function () {

                        addButton.textContent =
                            "Add to Cart";

                        addButton.classList.remove(
                            "added"
                        );

                    },
                    1800
                );

            }
        );

    }


    if (wishlist) {
        function syncDetailWishlist() {
            const active = typeof isInWishlist === "function" && isInWishlist(productId);
            wishlist.classList.toggle("active", active);
            wishlist.textContent = active ? "♥" : "♡";
            wishlist.setAttribute("aria-pressed", active ? "true" : "false");
            wishlist.setAttribute("aria-label", active ? "Remove from wishlist" : "Add to wishlist");
        }

        syncDetailWishlist();

        wishlist.addEventListener("click", function () {
            if (typeof toggleWishlist === "function") {
                toggleWishlist(productId);
                syncDetailWishlist();
            }
        });

        window.addEventListener("nova:wishlist-changed", syncDetailWishlist);
    }


    tabs.forEach(
        function (tab) {

            tab.addEventListener(
                "click",
                function () {

                    tabs.forEach(
                        function (item) {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );

                    tab.classList.add(
                        "active"
                    );

                    const target =
                        document.getElementById(
                            tab.dataset.target
                        );

                    if (target) {

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        }
    );

});


document.addEventListener('DOMContentLoaded',function(){setTimeout(function(){const reviews=document.getElementById('reviews');if(!reviews||document.getElementById('nova-rating-breakdown'))return;const p=(window.NOVA_PRODUCTS||{})[new URLSearchParams(location.search).get('id')];if(!p)return;const box=document.createElement('div');box.id='nova-rating-breakdown';box.style.cssText='max-width:620px;margin:20px 0 35px;padding:20px;border:1px solid #292931;border-radius:12px;background:#101014';const r=Number(p.rating||4.5);const rows=[5,4,3,2,1].map(function(star,i){const pct=Math.max(2,Math.round(star===5?(r-4)*75+25:star===4?Math.max(10,75-((r-4)*75+25)):star===3?8:star===2?3:2));return '<div style="display:grid;grid-template-columns:28px 1fr 42px;gap:10px;align-items:center;margin:8px 0;color:#aaa"><span>'+star+'★</span><span style="height:7px;background:#24242a;border-radius:9px;overflow:hidden"><i style="display:block;height:100%;width:'+pct+'%;background:#6d24ad"></i></span><span>'+pct+'%</span></div>'}).join('');box.innerHTML='<strong style="font-size:18px">Rating breakdown</strong>'+rows;const container=document.getElementById('reviews-container');reviews.insertBefore(box,container||null)},100)});
