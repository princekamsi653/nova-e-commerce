document.addEventListener(
    "DOMContentLoaded",
    function() {

        const checkoutForm =
            document.getElementById(
                "checkout-form"
            );

        const emptyCheckout =
            document.getElementById(
                "empty-checkout"
            );

        const summaryProducts =
            document.getElementById(
                "summary-products"
            );

        const summaryItemCount =
            document.getElementById(
                "summary-item-count"
            );

        const subtotalDisplay =
            document.getElementById(
                "checkout-subtotal"
            );

        const deliveryDisplay =
            document.getElementById(
                "checkout-delivery"
            );

        const totalDisplay =
            document.getElementById(
                "checkout-total"
            );

        const placeOrderButton =
            document.getElementById(
                "place-order-button"
            );

        const orderSuccess =
            document.getElementById(
                "order-success"
            );

        const orderNumber =
            document.getElementById(
                "order-number"
            );

        const successPayment =
            document.getElementById(
                "success-payment"
            );

        const successDelivery =
            document.getElementById(
                "success-delivery"
            );

        const successTotal =
            document.getElementById(
                "success-total"
            );


        const deliveryPrices = {

            standard: 15000,

            express: 30000,

            pickup: 0

        };


        const deliveryNames = {

            standard:
                "Standard Delivery",

            express:
                "Express Delivery",

            pickup:
                "Store Pickup"

        };


        const paymentNames = {

            card:
                "Card Payment",

            transfer:
                "Bank Transfer",

            cod:
                "Pay on Delivery"

        };


        function getCatalog() {

            if (
                typeof getNovaProducts ===
                "function"
            ) {

                return getNovaProducts();

            }


            return (
                window.NOVA_PRODUCTS ||
                {}
            );

        }


        function getCurrentCart() {

            if (
                typeof getCart ===
                "function"
            ) {

                return getCart();

            }


            try {

                return (
                    JSON.parse(
                        localStorage.getItem(
                            "novaCart"
                        )
                    ) || []
                );

            } catch (error) {

                return [];

            }

        }


        function getItemPrice(
            product,
            item
        ) {

            if (
                item &&
                Number(
                    item.unitPrice
                ) > 0
            ) {

                return Number(
                    item.unitPrice
                );

            }


            if (
                typeof getStoragePrice ===
                "function"
            ) {

                return getStoragePrice(
                    product,
                    item.storage || ""
                );

            }


            if (
                typeof getProductPrice ===
                "function"
            ) {

                return getProductPrice(
                    product.price
                );

            }


            return 0;

        }


        function renderSummary() {

            const catalog =
                getCatalog();


            const cart =
                getCurrentCart();


            summaryProducts.innerHTML =
                "";


            let subtotal =
                0;

            let itemCount =
                0;


            cart.forEach(
                function(item) {

                    const product =
                        catalog[item.id];


                    if (!product) {
                        return;
                    }


                    const quantity =
                        Math.max(
                            1,
                            Number(
                                item.quantity
                            ) || 1
                        );


                    const unitPrice =
                        getItemPrice(
                            product,
                            item
                        );


                    const itemTotal =
                        unitPrice *
                        quantity;


                    subtotal +=
                        itemTotal;


                    itemCount +=
                        quantity;


                    const storage =
                        item.storage ||
                        "";


                    const storageLine =
                        storage
                            ? `
                                <p>
                                    Storage: ${storage}
                                </p>
                              `
                            : "";


                    const processor =
                        product.categoryId ===
                            "laptops" &&
                        product.specifications &&
                        product.specifications.Processor
                            ? `
                                <p>
                                    Processor: ${product.specifications.Processor}
                                </p>
                              `
                            : "";


                    const ram =
                        product.categoryId ===
                            "laptops" &&
                        product.specifications &&
                        product.specifications.RAM
                            ? `
                                <p>
                                    RAM: ${product.specifications.RAM}
                                </p>
                              `
                            : "";


                    const card =
                        document.createElement(
                            "div"
                        );


                    card.className =
                        "summary-product";


                    card.innerHTML = `

                        <div class="summary-product-image">

                            <img
                                src="${product.image}"
                                alt="${product.name}"
                            >

                        </div>


                        <div class="summary-product-info">

                            <h3>
                                ${product.name}
                            </h3>

                            ${storageLine}

                            ${processor}

                            ${ram}

                            <p>
                                Qty: ${quantity}
                            </p>

                        </div>


                        <strong class="summary-product-price">
                            ${
                                typeof formatPrice ===
                                "function"
                                    ? formatPrice(
                                        itemTotal
                                    )
                                    : "₦" +
                                      itemTotal.toLocaleString(
                                          "en-NG"
                                      )
                            }
                        </strong>

                    `;


                    summaryProducts.appendChild(
                        card
                    );

                }
            );


            if (
                itemCount === 0
            ) {

                checkoutForm.style.display =
                    "none";


                emptyCheckout.style.display =
                    "block";


                return;

            }


            checkoutForm.style.display =
                "grid";


            emptyCheckout.style.display =
                "none";


            summaryItemCount.textContent =
                itemCount +
                (
                    itemCount === 1
                        ? " item"
                        : " items"
                );


            const selectedDelivery =
                document.querySelector(
                    'input[name="delivery"]:checked'
                );


            const deliveryType =
                selectedDelivery
                    ? selectedDelivery.value
                    : "standard";


            const deliveryFee =
                deliveryPrices[
                    deliveryType
                ] || 0;


            const finalTotal =
                subtotal +
                deliveryFee;


            subtotalDisplay.textContent =
                formatPrice(
                    subtotal
                );


            deliveryDisplay.textContent =
                deliveryFee === 0
                    ? "Free"
                    : formatPrice(
                        deliveryFee
                    );


            totalDisplay.textContent =
                formatPrice(
                    finalTotal
                );


            return {

                subtotal:
                    subtotal,

                delivery:
                    deliveryFee,

                total:
                    finalTotal,

                itemCount:
                    itemCount

            };

        }


        document
            .querySelectorAll(
                'input[name="delivery"]'
            )
            .forEach(
                function(input) {

                    input.addEventListener(
                        "change",
                        function() {

                            renderSummary();

                        }
                    );

                }
            );


                if (checkoutForm) {

            checkoutForm.addEventListener(
                "submit",
                function(event) {

                    event.preventDefault();


                    const cart =
                        getCurrentCart();


                    if (
                        cart.length === 0
                    ) {

                        return;

                    }


                    if (
                        !checkoutForm.checkValidity()
                    ) {

                        checkoutForm.reportValidity();

                        return;

                    }


                    const data =
                        renderSummary();


                    if (!data) {
                        return;
                    }


                    const paymentInput =
                        document.querySelector(
                            'input[name="payment"]:checked'
                        );


                    const deliveryInput =
                        document.querySelector(
                            'input[name="delivery"]:checked'
                        );


                    const paymentType =
                        paymentInput
                            ? paymentInput.value
                            : "card";


                    const deliveryType =
                        deliveryInput
                            ? deliveryInput.value
                            : "standard";


                    const generatedOrderNumber =
                        "NOVA-" +
                        Date.now()
                            .toString()
                            .slice(-8);


                    const customer = {

                        name:
                            document.getElementById(
                                "full-name"
                            ).value.trim(),

                        email:
                            document.getElementById(
                                "email"
                            ).value.trim(),

                        phone:
                            document.getElementById(
                                "phone"
                            ).value.trim(),

                        address:
                            document.getElementById(
                                "address"
                            ).value.trim(),

                        city:
                            document.getElementById(
                                "city"
                            ).value.trim(),

                        state:
                            document.getElementById(
                                "state"
                            ).value,

                        landmark:
                            document.getElementById(
                                "landmark"
                            ).value.trim()

                    };


                    const order = {

                        orderNumber:
                            generatedOrderNumber,

                        customer:
                            customer,

                        items:
                            cart,

                        payment:
                            paymentType,

                        delivery:
                            deliveryType,

                        subtotal:
                            data.subtotal,

                        deliveryFee:
                            data.delivery,

                        total:
                            data.total,

                        date:
                            new Date()
                                .toISOString()

                    };


                    localStorage.setItem(
                        "novaLastOrder",
                        JSON.stringify(
                            order
                        )
                    );


                    if (
                        typeof saveCart ===
                        "function"
                    ) {

                        saveCart([]);

                    } else {

                        localStorage.removeItem(
                            "novaCart"
                        );

                    }


                    if (
                        typeof updateCartCount ===
                        "function"
                    ) {

                        updateCartCount();

                    }


                    window.location.href = "Order-success.html";
                    return;

                    if (orderNumber) {

                        orderNumber.textContent =
                            generatedOrderNumber;

                    }


                    if (successPayment) {

                        successPayment.textContent =
                            paymentNames[
                                paymentType
                            ] ||
                            "Card Payment";

                    }


                    if (successDelivery) {

                        successDelivery.textContent =
                            deliveryNames[
                                deliveryType
                            ] ||
                            "Standard Delivery";

                    }


                    if (successTotal) {

                        successTotal.textContent =
                            formatPrice(
                                data.total
                            );

                    }


                    checkoutForm.style.display =
                        "none";


                    emptyCheckout.style.display =
                        "none";


                    orderSuccess.style.display =
                        "block";


                    window.scrollTo({

                        top: 0,

                        behavior: "smooth"

                    });

                }
            );

        }


        renderSummary();

    }
);
