document.addEventListener("DOMContentLoaded", () => {

  /* =======================
     PRODUCT DATA
  ======================= */
  const products = {
    tshirts: [
      { id: "tee-1", name: "Funky Tee", price: "₹999", img: "images/T-shirts/Black.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "tee-2", name: "Classic Tee", price: "₹1099", img: "images/T-shirts/Blue.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "tee-3", name: "Street Tee", price: "₹899", img: "images/T-shirts/Party.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "tee-4", name: "Daily Tee", price: "₹799", img: "images/T-shirts/Green.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "tee-5", name: "Oversized Tee", price: "₹1199", img: "images/T-shirts/ALLEN.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "tee-6", name: "Minimal Tee", price: "₹999", img: "images/T-shirts/Orange.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "tee-7", name: "Urban Tee", price: "₹899", img: "images/T-shirts/Awsome.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "tee-8", name: "Soft Tee", price: "₹949", img: "images/T-shirts/Awsome.png", sizes: ["3-4", "5-6", "7-8"] }
    ],

    hoodies: [
      { id: "hoodie-1", name: "Cool Hoodie", price: "₹1999", img: "images/Hoodies/Boss-mode.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "hoodie-2", name: "Winter Hoodie", price: "₹2199", img: "images/Hoodies/Player-one.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "hoodie-3", name: "Street Hoodie", price: "₹1899", img: "images/Hoodies/Bro- vibes.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "hoodie-4", name: "Zip Hoodie", price: "₹2299", img: "images/Hoodies/Level-up.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "hoodie-5", name: "Daily Hoodie", price: "₹1799", img: "images/Hoodies/Epic-gamer.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "hoodie-6", name: "Minimal Hoodie", price: "₹1999", img: "images/Hoodies/Game-over.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "hoodie-7", name: "Urban Hoodie", price: "₹2099", img: "images/Hoodies/Legend.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "hoodie-8", name: "Soft Hoodie", price: "₹1899", img: "images/Hoodies/Legend.png", sizes: ["3-4", "5-6", "7-8"] }
    ],

    crocs: [
      { id: "crocs-1", name: "Blue Crocs", price: "₹2499", img: "images/Croces/crocs.jpg", sizes: ["2", "3", "4"] },
      { id: "crocs-2", name: "Black Crocs", price: "₹2599", img: "images/Croces/crocs.jpg", sizes: ["2", "3", "4"] },
      { id: "crocs-3", name: "White Crocs", price: "₹2399", img: "images/Croces/crocs.jpg", sizes: ["2", "3", "4"] },
      { id: "crocs-4", name: "Street Crocs", price: "₹2699", img: "images/Croces/crocs.jpg", sizes: ["2", "3", "4"] },
      { id: "crocs-5", name: "Daily Crocs", price: "₹2299", img: "images/Croces/crocs.jpg", sizes: ["2", "3", "4"] },
      { id: "crocs-6", name: "Minimal Crocs", price: "₹2499", img: "images/Croces/crocs.jpg", sizes: ["2", "3", "4"] },
      { id: "crocs-7", name: "Urban Crocs", price: "₹2599", img: "images/Croces/crocs.jpg", sizes: ["2", "3", "4"] },
      { id: "crocs-8", name: "Soft Crocs", price: "₹2399", img: "images/Croces/crocs.jpg", sizes: ["2", "3", "4"] }
    ],

    caps: [
      { id: "cap-1", name: "Street Cap", price: "₹599", img: "images/caps/street-cap.jpg", sizes: ["3-4", "5-6", "7-8"] },
      { id: "cap-2", name: "Classic Cap", price: "₹699", img: "images/caps/street-cap.jpg", sizes: ["3-4", "5-6", "7-8"] },
      { id: "cap-3", name: "Black Cap", price: "₹649", img: "images/caps/street-cap.jpg", sizes: ["3-4", "5-6", "7-8"] },
      { id: "cap-4", name: "Daily Cap", price: "₹549", img: "images/caps/street-cap.jpg", sizes: ["3-4", "5-6", "7-8"] },
      { id: "cap-5", name: "Minimal Cap", price: "₹599", img: "images/caps/street-cap.jpg", sizes: ["3-4", "5-6", "7-8"] },
      { id: "cap-6", name: "Urban Cap", price: "₹699", img: "images/caps/street-cap.jpg", sizes: ["3-4", "5-6", "7-8"] },
      { id: "cap-7", name: "Soft Cap", price: "₹579", img: "images/caps/street-cap.jpg", sizes: ["3-4", "5-6", "7-8"] },
      { id: "cap-8", name: "Flex Cap", price: "₹729", img: "images/caps/street-cap.jpg", sizes: ["3-4", "5-6", "7-8"] }
    ],

    toys: [
      { id: "toy-1", name: "Frog Toy", price: "₹399", img: "images/Toys/toys.jpg", sizes: ["3-4", "5-6", "7-8"] },
      { id: "toy-2", name: "Jump Frog", price: "₹449", img: "images/Toys/toys.jpg", sizes: ["3-4", "5-6", "7-8"] },
      { id: "toy-3", name: "Soft Frog", price: "₹499", img: "images/Toys/toys.jpg", sizes: ["3-4", "5-6", "7-8"] },
      { id: "toy-4", name: "Mini Frog", price: "₹349", img: "images/Toys/toys.jpg", sizes: ["3-4", "5-6", "7-8"] },
      { id: "toy-5", name: "Toy Set", price: "₹599", img: "images/Toys/toys.jpg", sizes: ["3-4", "5-6", "7-8"] },
      { id: "toy-6", name: "Funky Frog", price: "₹399", img: "images/Toys/toys.jpg", sizes: ["3-4", "5-6", "7-8"] },
      { id: "toy-7", name: "Cute Frog", price: "₹429", img: "images/Toys/toys.jpg", sizes: ["3-4", "5-6", "7-8"] },
      { id: "toy-8", name: "Happy Frog", price: "₹459", img: "images/Toys/toys.jpg", sizes: ["3-4", "5-6", "7-8"] }
    ],
  };

  const allProducts = Object.values(products).flat();

  /* =======================
     HOME PAGE LOGIC
  ======================= */
  const grid = document.getElementById("productGrid");
  const tabs = document.querySelectorAll(".category-tab");
  const seeMore = document.getElementById("seeMoreLink");

  function renderHome(category) {
    if (!grid) return;

    grid.innerHTML = "";
    const items = products[category] || [];

    items.slice(0, 8).forEach(item => {
      grid.innerHTML += `
        <a href="product.html?id=${item.id}" class="product-card">
          <img src="${item.img}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.price}</p>
        </a>
      `;
    });

    if (seeMore) {
      seeMore.href = `category.html?type=${category}`;
    }
  }

  if (tabs.length) {
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        renderHome(tab.dataset.category);
      });
    });

    renderHome("tshirts");
  }

  /* =======================
     CATEGORY PAGE LOGIC
  ======================= */
  const categoryGrid = document.getElementById("categoryGrid");
  const categoryTitle = document.getElementById("categoryTitle");
  const categoryDesc = document.getElementById("categoryDesc");
  const sortSelect = document.getElementById("sortSelect");

  const urlParams = new URLSearchParams(window.location.search);
  const categoryType = urlParams.get("type");

  if (categoryGrid && categoryType) {
    let items = products[categoryType] || [];

    categoryTitle.textContent =
      categoryType.charAt(0).toUpperCase() + categoryType.slice(1);

    categoryDesc.textContent = `Explore all ${categoryTitle.textContent}`;

    function renderCategory(list) {
      categoryGrid.innerHTML = "";
      list.forEach(item => {
        categoryGrid.innerHTML += `
          <a href="product.html?id=${item.id}" class="product-card">
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
          </a>
        `;
      });
    }

    renderCategory(items);

    if (sortSelect) {
      sortSelect.addEventListener("change", () => {
        let sorted = [...items];

        if (sortSelect.value === "price-asc") {
          sorted.sort((a, b) => parseInt(a.price.slice(1)) - parseInt(b.price.slice(1)));
        }
        if (sortSelect.value === "price-desc") {
          sorted.sort((a, b) => parseInt(b.price.slice(1)) - parseInt(a.price.slice(1)));
        }
        if (sortSelect.value === "name-asc") {
          sorted.sort((a, b) => a.name.localeCompare(b.name));
        }

        renderCategory(sorted);
      });
    }
  }

  /* =======================
     PRODUCT PAGE LOGIC
  ======================= */
  const productId = urlParams.get("id");

  if (productId) {
    const product = allProducts.find(p => p.id === productId);

    if (product) {
      document.querySelector(".product-media img").src = product.img;
      document.querySelector(".product-info h1").textContent = product.name;
      document.querySelector(".price").textContent = product.price;

      // Sizes
      let selectedSize = null;
      const sizeContainer = document.getElementById("sizeOptions");

      if (sizeContainer && product.sizes) {
        sizeContainer.innerHTML = "";
        product.sizes.forEach(size => {
          const btn = document.createElement("button");
          btn.className = "size-btn";
          btn.textContent = size;

          btn.onclick = () => {
            document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            selectedSize = size;
          };

          sizeContainer.appendChild(btn);
        });
      }

      // ADD TO CART (SAFE)
      const addToCartBtn = document.querySelector(".add-to-cart");
      if (addToCartBtn) {
        addToCartBtn.onclick = () => {
          if (!selectedSize) {
            alert("Please select a size");
            return;
          }

          let cart = JSON.parse(localStorage.getItem("cart")) || [];

          const existing = cart.find(
            item => item.id === product.id && item.size === selectedSize
          );

          if (existing) {
            existing.qty += 1;
          } else {
            cart.push({
              id: product.id,
              name: product.name,
              price: Number(product.price.replace("₹", "")),
              img: product.img,
              size: selectedSize,
              qty: 1
            });
          }

          localStorage.setItem("cart", JSON.stringify(cart));
          console.log("Cart updated:", cart);
        };
      }

      // SIMILAR PRODUCTS
      const similarGrid = document.getElementById("similarProducts");
      if (similarGrid) {
        const related = allProducts.filter(p => p.id !== product.id);
        const shuffled = related.sort(() => 0.5 - Math.random()).slice(0, 8);

        similarGrid.innerHTML = "";
        shuffled.forEach(item => {
          similarGrid.innerHTML += `
            <a href="product.html?id=${item.id}" class="product-card">
              <img src="${item.img}" alt="${item.name}">
              <h3>${item.name}</h3>
              <p>${item.price}</p>
            </a>
          `;
        });
      }
    }
  }

});
/* =======================
   CART PAGE LOGIC (FINAL)
======================= */
const subtotalEl = document.getElementById("subtotalValue");
const shippingEl = document.getElementById("shippingValue");
const totalEl = document.getElementById("totalValue");
const cartItemsContainer = document.querySelector(".cart-items");
const topTotalEl = document.querySelector(".cart-top h1");

if (cartItemsContainer) {
  const SHIPPING_FEE = 99;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function calculateSubtotal() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  function renderCart() {
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
      cartItemsContainer.innerHTML =
        `<p class="empty-cart">Your cart is empty.</p>`;

      topTotalEl.textContent = `Your bag total is ₹0`;
      summaryRows[1].textContent = `₹${SHIPPING_FEE}`;
      summaryRows[2].textContent = `₹${SHIPPING_FEE}`;
      return;
    }

    cart.forEach((item, index) => {
      const itemRow = document.createElement("div");
      itemRow.className = "cart-item";
      itemRow.style.display = "flex";
      itemRow.style.alignItems = "center";
      itemRow.style.gap = "24px";
      itemRow.style.marginBottom = "32px";

      itemRow.innerHTML = `
        <img src="${item.img}" alt="${item.name}" style="width:120px;border-radius:12px">

        <div style="flex:1">
          <h3 style="margin-bottom:6px">${item.name}</h3>
          <p style="font-size:0.9rem;color:#666">Size: ${item.size}</p>
        </div>

        <div>
          <select data-index="${index}" class="qty-select">
            ${[1, 2, 3, 4, 5].map(q =>
        `<option value="${q}" ${q === item.qty ? "selected" : ""}>${q}</option>`
      ).join("")}
          </select>
          <p style="margin-top:8px;font-weight:500">₹${item.price}</p>
          <button data-index="${index}" class="remove-btn" style="margin-top:8px;background:none;border:none;color:#0071e3;cursor:pointer">
            Remove
          </button>
        </div>
      `;

      cartItemsContainer.appendChild(itemRow);
    });

    const subtotal = calculateSubtotal();
    const total = subtotal + SHIPPING_FEE;

    topTotalEl.textContent = `Your bag total is ₹${total}`;
    subtotalEl.textContent = `₹${subtotal}`;
    shippingEl.textContent = `₹${SHIPPING_FEE}`;
    totalEl.textContent = `₹${total}`;

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  cartItemsContainer.addEventListener("change", (e) => {
    if (e.target.classList.contains("qty-select")) {
      const index = e.target.dataset.index;
      cart[index].qty = Number(e.target.value);
      renderCart();
    }
  });

  cartItemsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const index = e.target.dataset.index;
      cart.splice(index, 1);
      renderCart();
    }
  });

  renderCart();
}
/* =======================
   CART BADGE COUNT
======================= */

const cartBadge = document.getElementById("cartBadge");

function updateCartBadge() {
  if (!cartBadge) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  if (totalQty > 0) {
    cartBadge.textContent = totalQty;
    cartBadge.style.display = "inline-block";
  } else {
    cartBadge.style.display = "none";
  }
}

// Run on page load
updateCartBadge();
