
document.addEventListener(
    "DOMContentLoaded",
    function() {

        const cartItems =
            document.getElementById(
                "cart-items"
            );

        const emptyCart =
            document.getElementById(
                "empty-cart"
            );

        const subtotal =
            document.getElementById(
                "cart-subtotal"
            );

        const total =
            document.getElementById(
                "cart-total"
            );

        const itemText =
            document.getElementById(
                "cart-item-text"
            );

        const checkout =
            document.getElementById(
                "checkout-button"
            );


        function removeCartItem(
            id,
            storage,
            variant,
            isDeal
        ) {

            const cart =
                getCart();

            const updatedCart =
                cart.filter(
                    function(item) {

                        return !(
                            String(item.id) ===
                            String(id) &&

                            String(
                                item.storage || ""
                            ) ===
                            String(
                                storage || ""
                            ) &&

                            String(
                                item.variant || ""
                            ) ===
                            String(
                                variant || ""
                            ) &&

                            Boolean(
                                item.isDeal
                            ) ===
                            Boolean(
                                isDeal
                            )
                        );

                    }
                );


            localStorage.setItem(
                "novaCart",
                JSON.stringify(
                    updatedCart
                )
            );


            window.dispatchEvent(
                new Event(
                    "cartUpdated"
                )
            );

        }


        function renderCartPage() {

            if (!cartItems) {
                return;
            }


            const cart =
                getCart();


            const catalog =
                getNovaProducts();


            cartItems.innerHTML =
                "";


            let totalAmount =
                0;

            let totalQuantity =
                0;


            cart.forEach(
                function(item) {

                    const product =
                        catalog[item.id];


                    if (!product) {
                        return;
                    }


                    const quantity =
                        Number(
                            item.quantity
                        ) || 1;


                    const unitPrice =
                        Number(
                            item.unitPrice
                        ) ||
                        getStoragePrice(
                            product,
                            item.storage || ""
                        );


                    const itemTotal =
                        unitPrice *
                        quantity;


                    const isDeal =
                        item.isDeal === true;


                    const dealDiscount =
                        item.discount || "";


                    const originalPrice =
                        Number(
                            item.originalPrice
                        ) || 0;


                    const dealSavings =
                        isDeal &&
                        originalPrice > unitPrice
                            ? originalPrice - unitPrice
                            : 0;


                    totalAmount +=
                        itemTotal;


                    totalQuantity +=
                        quantity;


                    const hasStorage =
                        (
                            product.categoryId ===
                                "phones" ||
                            product.categoryId ===
                                "laptops"
                        ) &&
                        item.storage;


                    const storageHTML =
                        hasStorage
                            ? `
                                <p class="cart-item-storage">
                                    Storage: ${item.storage}
                                </p>
                              `
                            : "";


                    const ram =
                        product.specifications &&
                        product.specifications.RAM
                            ? product.specifications.RAM
                            : "";


                    const processor =
                        product.specifications &&
                        product.specifications.Processor
                            ? product.specifications.Processor
                            : "";


                    const display =
                        product.specifications &&
                        product.specifications.Display
                            ? product.specifications.Display
                            : "";


                    const laptopHTML =
                        product.categoryId ===
                            "laptops"
                            ? `

                                ${
                                    processor
                                        ? `
                                            <p class="cart-item-spec">
                                                Processor: ${processor}
                                            </p>
                                          `
                                        : ""
                                }

                                ${
                                    ram
                                        ? `
                                            <p class="cart-item-spec">
                                                RAM: ${ram}
                                            </p>
                                          `
                                        : ""
                                }

                                ${
                                    display
                                        ? `
                                            <p class="cart-item-spec">
                                                Display: ${display}
                                            </p>
                                          `
                                        : ""
                                }

                              `
                            : "";


                    const card =
                        document.createElement(
                            "article"
                        );


                    card.className =
                        "cart-item";


                    card.innerHTML = `

                        <div class="cart-item-image">

                            <img
                                src="${product.image}"
                                alt="${product.name}"
                            >

                        </div>


                        <div class="cart-item-info">

                            <p class="cart-item-category">
                                ${product.category}
                            </p>


                            <h2>
                                ${product.name}
                            </h2>


                            ${
                                item.variant
                                    ? `
                                        <p class="cart-item-storage">
                                            Finish: ${item.variant}
                                        </p>
                                      `
                                    : ""
                            }


                            ${storageHTML}


                            ${laptopHTML}


                            ${
                                isDeal
                                    ? `
                                        <div class="cart-deal-badge">
                                            <span>DEAL</span>
                                            ${dealDiscount}
                                        </div>

                                        <p class="cart-item-original-price">
                                            Regular Price: ${formatPrice(originalPrice)}
                                        </p>

                                        <p class="cart-item-price cart-deal-price">
                                            Deal Price: ${formatPrice(unitPrice)}
                                        </p>

                                        ${
                                            dealSavings > 0
                                                ? `
                                                    <p class="cart-deal-savings">
                                                        You save ${formatPrice(dealSavings)}
                                                    </p>
                                                  `
                                                : ""
                                        }
                                      `
                                    : `
                                        <p class="cart-item-price">
                                            ${formatPrice(unitPrice)}
                                        </p>
                                      `
                            }


                            <div class="cart-quantity">

                                <button
                                    type="button"
                                    class="cart-minus"
                                    data-id="${item.id}"
                                    data-storage="${item.storage || ""}"
                                    data-variant="${item.variant || ""}"
                                    data-deal="${isDeal}"
                                >
                                    −
                                </button>


                                <span>
                                    ${quantity}
                                </span>


                                <button
                                    type="button"
                                    class="cart-plus"
                                    data-id="${item.id}"
                                    data-storage="${item.storage || ""}"
                                    data-variant="${item.variant || ""}"
                                    data-deal="${isDeal}"
                                >
                                    +
                                </button>

                            </div>

                        </div>


                        <div class="cart-item-right">

                            <span class="cart-item-total">
                                ${formatPrice(itemTotal)}
                            </span>


                            <button
                                type="button"
                                class="remove-item"
                                data-id="${item.id}"
                                data-storage="${item.storage || ""}"
                                data-variant="${item.variant || ""}"
                                data-deal="${isDeal}"
                            >
                                Remove
                            </button>

                        </div>

                    `;


                    cartItems.appendChild(
                        card
                    );

                }
            );


            const hasItems =
                cartItems.children.length >
                0;


            if (emptyCart) {

                emptyCart.style.display =
                    hasItems
                        ? "none"
                        : "block";

            }


            if (subtotal) {

                subtotal.textContent =
                    formatPrice(
                        totalAmount
                    );

            }


            if (total) {

                total.textContent =
                    formatPrice(
                        totalAmount
                    );

            }


            if (itemText) {

                itemText.textContent =
                    totalQuantity === 0
                        ? "Your selected products"
                        : totalQuantity +
                            (
                                totalQuantity ===
                                1
                                    ? " item in your cart"
                                    : " items in your cart"
                            );

            }


            updateCartCount();

            attachCartControls();

        }


        function attachCartControls() {

            document
                .querySelectorAll(
                    ".cart-minus"
                )
                .forEach(
                    function(button) {

                        button.addEventListener(
                            "click",
                            function() {

                                const id =
                                    button.dataset.id;


                                const storage =
                                    button.dataset.storage ||
                                    "";


                                const variant =
                                    button.dataset.variant ||
                                    "";


                                const isDeal =
                                    button.dataset.deal ===
                                    "true";


                                const item =
                                    getCart().find(
                                        function(entry) {

                                            return (
                                                String(
                                                    entry.id
                                                ) ===
                                                String(
                                                    id
                                                ) &&

                                                String(
                                                    entry.storage ||
                                                    ""
                                                ) ===
                                                String(
                                                    storage
                                                ) &&

                                                String(
                                                    entry.variant ||
                                                    ""
                                                ) ===
                                                String(
                                                    variant
                                                ) &&

                                                Boolean(
                                                    entry.isDeal
                                                ) ===
                                                isDeal
                                            );

                                        }
                                    );


                                if (!item) {
                                    return;
                                }


                                updateCartItemQuantity(
                                    id,
                                    Number(
                                        item.quantity
                                    ) - 1,
                                    storage,
                                    variant,
                                    isDeal
                                );


                                renderCartPage();

                            }
                        );

                    }
                );


            document
                .querySelectorAll(
                    ".cart-plus"
                )
                .forEach(
                    function(button) {

                        button.addEventListener(
                            "click",
                            function() {

                                const id =
                                    button.dataset.id;


                                const storage =
                                    button.dataset.storage ||
                                    "";


                                const variant =
                                    button.dataset.variant ||
                                    "";


                                const isDeal =
                                    button.dataset.deal ===
                                    "true";


                                const item =
                                    getCart().find(
                                        function(entry) {

                                            return (
                                                String(
                                                    entry.id
                                                ) ===
                                                String(
                                                    id
                                                ) &&

                                                String(
                                                    entry.storage ||
                                                    ""
                                                ) ===
                                                String(
                                                    storage
                                                ) &&

                                                String(
                                                    entry.variant ||
                                                    ""
                                                ) ===
                                                String(
                                                    variant
                                                ) &&

                                                Boolean(
                                                    entry.isDeal
                                                ) ===
                                                isDeal
                                            );

                                        }
                                    );


                                if (!item) {
                                    return;
                                }


                                updateCartItemQuantity(
                                    id,
                                    Number(
                                        item.quantity
                                    ) + 1,
                                    storage,
                                    variant,
                                    isDeal
                                );


                                renderCartPage();

                            }
                        );

                    }
                );


            document
                .querySelectorAll(
                    ".remove-item"
                )
                .forEach(
                    function(button) {

                        button.addEventListener(
                            "click",
                            function() {

                                const id =
                                    button.dataset.id;


                                const storage =
                                    button.dataset.storage ||
                                    "";


                                const variant =
                                    button.dataset.variant ||
                                    "";


                                const isDeal =
                                    button.dataset.deal ===
                                    "true";


                                removeCartItem(
                                    id,
                                    storage,
                                    variant,
                                    isDeal
                                );


                                renderCartPage();

                            }
                        );

                    }
                );

        }


        if (checkout) {

            checkout.addEventListener(
                "click",
                function() {

                    if (
                        getCart().length === 0
                    ) {

                        alert(
                            "Your cart is empty."
                        );

                        return;

                    }


                    window.location.href =
                        "Checkout.html";

                }
            );

        }


        renderCartPage();

    }
);

