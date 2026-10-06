function openProductDetails(productId) {
if (!productId) {
console.error("Product details could not be opened:", productId);
return;
}


const catalog =
    typeof window.NOVA_PRODUCTS !== "undefined" &&
    window.NOVA_PRODUCTS
        ? window.NOVA_PRODUCTS
        : {};

if (!catalog[productId]) {
    console.error("Product details could not be opened:", productId);
    return;
}

window.location.href =
    "Product-details.html?id=" +
    encodeURIComponent(productId);


}

function getProductIdFromCard(card) {
if (!card) {
return "";
}


let productId = card.dataset.productId;

if (productId) {
    return productId;
}

const detailsButton =
    card.querySelector(".view-details");

if (!detailsButton) {
    return "";
}

try {
    const url =
        new URL(
            detailsButton.href,
            window.location.href
        );

    productId =
        url.searchParams.get("id") || "";

} catch (error) {
    const href =
        detailsButton.getAttribute("href") || "";

    const match =
        href.match(/[?&]id=([^&]+)/i);

    if (match) {
        productId =
            decodeURIComponent(match[1]);
    }
}

return productId;


}

function updateProductCardPrices() {
const catalog =
typeof window.NOVA_PRODUCTS !== "undefined" &&
window.NOVA_PRODUCTS
? window.NOVA_PRODUCTS
: null;


if (!catalog) {
    return;
}

document
    .querySelectorAll(".product-card")
    .forEach(function(card) {

        const productId =
            getProductIdFromCard(card);

        if (!productId) {
            return;
        }

        const product =
            catalog[productId];

        if (!product) {
            return;
        }

        card.dataset.productId =
            productId;

        const price =
            card.querySelector(".price");

        if (price && product.price) {
            price.textContent =
                product.price;
        }

        const oldPrice =
            card.querySelector(".old-price");

        if (oldPrice) {
            oldPrice.textContent = "";
            oldPrice.style.display = "none";
        }

        const discount =
            card.querySelector(".discount");

        if (discount) {
            discount.textContent = "";
            discount.style.display = "none";
        }
    });


}

function updateProductCategoryInfo(category) {
const categoryTitle =
document.getElementById(
"category-title"
);


const productCount =
    document.getElementById(
        "product-count"
    );

const categoryNames = {
    all: "All Products",
    phones: "Phones",
    laptops: "Laptops",
    audio: "Audio",
    watches: "Watches",
    power: "Power",
    chargers: "Chargers",
    accessories: "Accessories"
};

let count = 0;

document
    .querySelectorAll(".product-card")
    .forEach(function(card) {

        if (
            card.style.display !==
            "none"
        ) {
            count++;
        }
    });

if (categoryTitle) {
    categoryTitle.textContent =
        categoryNames[category] ||
        "All Products";
}

if (productCount) {
    productCount.textContent =
        "Showing " +
        count +
        " products";
}


}

function updateCategoryButtons(category) {
document
.querySelectorAll(".category-button")
.forEach(function(button) {


        button.classList.toggle(
            "active",
            button.dataset.category ===
            category
        );
    });

document
    .querySelectorAll(".side-category")
    .forEach(function(button) {

        button.classList.toggle(
            "active",
            button.dataset.category ===
            category
        );
    });


}

function showProductCategory(category) {
const cards =
document.querySelectorAll(
".product-card"
);


let visibleCount = 0;

cards.forEach(function(card) {

    const shouldShow =
        category === "all" ||
        card.dataset.category ===
        category;

    card.style.display =
        shouldShow
            ? "block"
            : "none";

    if (shouldShow) {
        visibleCount++;
    }
});

updateCategoryButtons(
    category
);

const categoryNames = {
    all: "All Products",
    phones: "Phones",
    laptops: "Laptops",
    audio: "Audio",
    watches: "Watches",
    power: "Power",
    chargers: "Chargers",
    accessories: "Accessories"
};

const categoryTitle =
    document.getElementById(
        "category-title"
    );

const productCount =
    document.getElementById(
        "product-count"
    );

if (categoryTitle) {
    categoryTitle.textContent =
        categoryNames[category] ||
        "All Products";
}

if (productCount) {
    productCount.textContent =
        "Showing " +
        visibleCount +
        " products";
}


}

function filterProducts(category) {
if (!category) {
category = "all";
}


const validCategories = [
    "all",
    "phones",
    "laptops",
    "audio",
    "watches",
    "power",
    "chargers",
    "accessories"
];

if (
    !validCategories.includes(
        category
    )
) {
    category = "all";
}

if (
    category ===
    window.currentNovaCategory
) {
    return;
}

window.currentNovaCategory =
    category;

const cards =
    document.querySelectorAll(
        ".product-card"
    );

cards.forEach(function(card) {

    card.classList.remove(
        "product-slide-in",
        "product-slide-out-right",
        "slide-from-right"
    );

    if (
        card.style.display !==
        "none"
    ) {
        card.classList.add(
            "product-slide-out-right"
        );
    }
});

setTimeout(function() {

    showProductCategory(
        category
    );

    cards.forEach(function(card) {

        if (
            card.style.display !==
            "none"
        ) {
            card.classList.add(
                "product-slide-in",
                "slide-from-right"
            );
        }
    });

    setTimeout(function() {

        cards.forEach(function(card) {

            card.classList.remove(
                "product-slide-in",
                "slide-from-right",
                "product-slide-out-right"
            );
        });

    }, 450);

    const params =
        new URLSearchParams(
            window.location.search
        );

    if (category === "all") {
        params.delete("category");
    } else {
        params.set(
            "category",
            category
        );
    }

    const query =
        params.toString();

    window.history.replaceState(
        null,
        "",
        "Products.html" +
        (
            query
                ? "?" + query
                : ""
        )
    );

}, 250);


}

function setupProductDetailsButtons() {
document
.querySelectorAll(".product-card")
.forEach(function(card) {


        const productId =
            getProductIdFromCard(card);

        if (!productId) {
            return;
        }

        card.dataset.productId =
            productId;

        const detailsButton =
            card.querySelector(
                ".view-details"
            );

        if (
            detailsButton &&
            detailsButton.dataset.detailsReady !==
            "true"
        ) {

            detailsButton.dataset.detailsReady =
                "true";

            detailsButton.addEventListener(
                "click",
                function(event) {

                    event.preventDefault();
                    event.stopPropagation();

                    openProductDetails(
                        productId
                    );
                }
            );
        }

        if (
            card.dataset.cardReady !==
            "true"
        ) {

            card.dataset.cardReady =
                "true";

            card.addEventListener(
                "click",
                function(event) {

                    if (
                        event.target.closest(
                            "button"
                        )
                    ) {
                        return;
                    }

                    if (
                        event.target.closest(
                            "a"
                        )
                    ) {
                        return;
                    }

                    openProductDetails(
                        productId
                    );
                }
            );
        }
    });


}

function initializeProductsPage() {
if (
!document.querySelector(
".product-card"
)
) {
return;
}


window.currentNovaCategory =
    "all";

const params =
    new URLSearchParams(
        window.location.search
    );

const requestedCategory =
    params.get("category");

const validCategories = [
    "all",
    "phones",
    "laptops",
    "audio",
    "watches",
    "power",
    "chargers",
    "accessories"
];

const initialCategory =
    validCategories.includes(
        requestedCategory
    )
        ? requestedCategory
        : "all";

updateProductCardPrices();

showProductCategory(
    initialCategory
);

window.currentNovaCategory =
    initialCategory;

document
    .querySelectorAll(
        ".category-button"
    )
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                filterProducts(
                    button.dataset.category
                );
            }
        );
    });

document
    .querySelectorAll(
        ".side-category"
    )
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                filterProducts(
                    button.dataset.category
                );
            }
        );
    });

setupProductDetailsButtons();


}

if (
document.readyState ===
"loading"
) {


document.addEventListener(
    "DOMContentLoaded",
    initializeProductsPage
);


} else {


initializeProductsPage();


}


const NOVA_COMPARE_KEY = "novaCompare";
function getCompareList(){try{return JSON.parse(localStorage.getItem(NOVA_COMPARE_KEY))||[]}catch(e){return[]}}
function saveCompareList(v){localStorage.setItem(NOVA_COMPARE_KEY,JSON.stringify(v.slice(0,3)));updateCompareUI()}
function setupCompareControls(){document.querySelectorAll('.product-card').forEach(function(card){if(card.querySelector('.product-compare-control'))return;const id=getProductIdFromCard(card);if(!id)return;const b=document.createElement('button');b.type='button';b.className='product-compare-control';b.dataset.productId=id;b.addEventListener('click',function(e){e.stopPropagation();let list=getCompareList();if(list.includes(id))list=list.filter(x=>x!==id);else{if(list.length>=3){if(window.showNovaToast)showNovaToast('Compare up to 3 products at a time.');return}list.push(id)}saveCompareList(list)});card.appendChild(b)});updateCompareUI()}
function updateCompareUI(){const list=getCompareList();const count=document.getElementById('compare-count');if(count)count.textContent=list.length;document.querySelectorAll('.product-compare-control').forEach(function(b){const on=list.includes(b.dataset.productId);b.classList.toggle('active',on);b.textContent=on?'✓ Compare':'+ Compare'})}
function applyAdvancedFilters(){const catalog=window.NOVA_PRODUCTS||{};const category=window.currentNovaCategory||'all';const pf=document.getElementById('price-filter');const rf=document.getElementById('rating-filter');const sort=document.getElementById('sort-products');let visible=[];document.querySelectorAll('.product-card').forEach(function(card){const id=getProductIdFromCard(card), product=catalog[id]||{};const price=typeof getProductPrice==='function'?getProductPrice(product.price):Number(String(product.price||'').replace(/[^0-9]/g,''));const rating=Number(product.rating||0);let ok=category==='all'||card.dataset.category===category;if(pf&&pf.value!=='all'){const [lo,hi]=pf.value.split('-').map(Number);ok=ok&&price>=lo&&price<=hi}if(rf)ok=ok&&rating>=Number(rf.value||0);card.style.display=ok?'block':'none';if(ok)visible.push(card)});if(sort&&sort.value!=='featured'){visible.sort(function(a,b){const A=catalog[getProductIdFromCard(a)]||{},B=catalog[getProductIdFromCard(b)]||{};if(sort.value==='price-low')return getProductPrice(A.price)-getProductPrice(B.price);if(sort.value==='price-high')return getProductPrice(B.price)-getProductPrice(A.price);if(sort.value==='rating-high')return Number(B.rating)-Number(A.rating);return String(A.name).localeCompare(String(B.name))});const container=document.querySelector('.product-container');visible.forEach(x=>container.appendChild(x))}const count=document.getElementById('product-count');if(count)count.textContent='Showing '+visible.length+' products';let empty=document.getElementById('products-empty-state');if(!visible.length){if(!empty){empty=document.createElement('div');empty.id='products-empty-state';empty.className='products-empty-state';empty.innerHTML='<h3>No products found</h3><p>Try changing your filters.</p>';document.querySelector('.product-container').appendChild(empty)}}else if(empty)empty.remove()}
document.addEventListener('DOMContentLoaded',function(){setupCompareControls();['price-filter','rating-filter','sort-products'].forEach(function(id){const e=document.getElementById(id);if(e)e.addEventListener('change',applyAdvancedFilters)});const clear=document.getElementById('clear-filters');if(clear)clear.addEventListener('click',function(){document.getElementById('price-filter').value='all';document.getElementById('rating-filter').value='0';document.getElementById('sort-products').value='featured';applyAdvancedFilters()});document.querySelectorAll('.category-button,.side-category').forEach(function(b){b.addEventListener('click',function(){setTimeout(applyAdvancedFilters,300)})})});
