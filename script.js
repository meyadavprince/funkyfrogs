document.addEventListener("DOMContentLoaded", () => {


  /* =======================
     PRODUCT DATA
  ======================= */
  const products = {
    tshirts: [
      {
        id: "tee-1", name: "Allen Tee", price: "₹999", img: "images/T-shirts/Allen/Allen.png",                             // "use this formate to  //
        images: ["images/T-shirts/Allen/Allen.png", "images/T-shirts/Allen/Back.png", "images/T-shirts/Allen/Side.png"], // add more "back &front //
        desc: "Premium cotton t-shirt", sizes: ["3-4", "5-6", "7-8"]                                                   //   of product "        //
      },
      {
        id: "tee-2", name: "Awsome Tee", price: "₹999", img: "images/T-shirts/Awsome/Awsome.png",
        images: ["images/T-shirts/Awsome/Awsome.png", "images/T-shirts/Awsome/Back.png", "images/T-shirts/Awsome/Side.png"],
        desc: "Premium cotton t-shirt", sizes: ["3-4", "5-6", "7-8"]
      },
      {
        id: "tee-3", name: "Black Tee", price: "₹699", img: "images/T-shirts/Black/Back.png",
        images: ["images/T-shirts/Black/Back.png", "images/T-shirts/Black/Black.png", "images/T-shirts/Black/Side.png"],
        desc: "Premium cotton t-shirt", sizes: ["3-4", "5-6", "7-8"]
      },
      {
        id: "tee-4", name: "Blue Tee", price: "₹499", img: "images/T-shirts/Blue/Blue.png",
        images: ["images/T-shirts/Blue/Blue.png", "images/T-shirts/Blue/Back.png", "images/T-shirts/Blue/Side.png"],
        desc: "Premium cotton t-shirt", sizes: ["3-4", "5-6", "7-8"]
      },
      {
        id: "tee-5", name: "Funky Tee", price: "₹499", img: "images/T-shirts/Funky/funky.jpg",
        images: ["images/T-shirts/Allen/Allen.png", "images/T-shirts/Funky/Back.jpg", "images/T-shirts/Funky/Side.jpg"],
        desc: "Premium cotton t-shirt", sizes: ["3-4", "5-6", "7-8"]
      },
      {
        id: "tee-6", name: "Green Tee", price: "₹999", img: "images/T-shirts/Green/Green.png",
        images: ["images/T-shirts/Green/Green.png", "images/T-shirts/Green/Side.png", "images/T-shirts/Green/Back.png"],
        desc: "Premium cotton t-shirt", sizes: ["3-4", "5-6", "7-8"]
      },
      {
        id: "tee-7", name: "Orange Tee", price: "₹499", img: "images/T-shirts/Orange/Orange.png",
        images: ["images/T-shirts/Orange/Orange.png", "images/T-shirts/Orange/Back.png", "images/T-shirts/Orange/side.png"],
        desc: "Premium cotton t-shirt", sizes: ["3-4", "5-6", "7-8"]
      },
      {
        id: "tee-8", name: "Party Tee", price: "₹799", img: "images/T-shirts/Party/Party.png",
        images: ["images/T-shirts/Party/Party.png", "images/T-shirts/Party/Back.png", "images/T-shirts/Party/Side.png"],
        desc: "Premium cotton t-shirt", sizes: ["3-4", "5-6", "7-8"]
      }
    ],

    hoodies: [
      { id: "hoodie-1", name: "Cool Hoodie", price: "₹1299", img: "images/Hoodies/Boss-mode.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "hoodie-2", name: "Winter Hoodie", price: "₹1499", img: "images/Hoodies/Player-one.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "hoodie-3", name: "Street Hoodie", price: "₹999", img: "images/Hoodies/Bro- vibes.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "hoodie-4", name: "Zip Hoodie", price: "₹1999", img: "images/Hoodies/Level-up.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "hoodie-5", name: "Daily Hoodie", price: "₹1699", img: "images/Hoodies/Epic-gamer.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "hoodie-6", name: "Minimal Hoodie", price: "₹1999", img: "images/Hoodies/Game-over.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "hoodie-7", name: "Urban Hoodie", price: "₹2099", img: "images/Hoodies/Legend.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "hoodie-8", name: "Soft Hoodie", price: "₹1899", img: "images/Hoodies/Game-on.png", sizes: ["3-4", "5-6", "7-8"] }
    ],

    crocs: [
      { id: "crocs-1", name: "Blue Crocs", price: "₹499", img: "images/Croces/crocs.jpg", sizes: ["2", "3", "4"] },
      { id: "crocs-2", name: "Black Crocs", price: "₹599", img: "images/Croces/crocs.jpg", sizes: ["2", "3", "4"] },
      { id: "crocs-3", name: "White Crocs", price: "₹399", img: "images/Croces/crocs.jpg", sizes: ["2", "3", "4"] },
      { id: "crocs-4", name: "Street Crocs", price: "₹699", img: "images/Croces/crocs.jpg", sizes: ["2", "3", "4"] },
      { id: "crocs-5", name: "Daily Crocs", price: "₹299", img: "images/Croces/crocs.jpg", sizes: ["2", "3", "4"] },
      { id: "crocs-6", name: "Minimal Crocs", price: "₹499", img: "images/Croces/crocs.jpg", sizes: ["2", "3", "4"] },
      { id: "crocs-7", name: "Urban Crocs", price: "₹599", img: "images/Croces/crocs.jpg", sizes: ["2", "3", "4"] },
      { id: "crocs-8", name: "Soft Crocs", price: "₹399", img: "images/Croces/crocs.jpg", sizes: ["2", "3", "4"] }
    ],

    caps: [
      { id: "cap-1", name: "beaded Pastel Cap", price: "₹599", img: "images/caps/beaded Pastel  cap.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "cap-2", name: "Bear embroidery cap", price: "₹699", img: "images/caps/Bear embroidery cap.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "cap-3", name: "butterfly Lavender cap", price: "₹649", img: "images/caps/butterfly Lavender  cap.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "cap-4", name: "checkered Pastel  cap", price: "₹549", img: "images/caps/checkered Pastel  cap.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "cap-5", name: "colourful playful cap", price: "₹599", img: "images/caps/colourful playful cap.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "cap-6", name: "corduroy Beige  cap", price: "₹699", img: "images/caps/corduroy Beige  cap.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "cap-7", name: "flame embroidery cap", price: "₹579", img: "images/caps/flame embroidery cap.png", sizes: ["3-4", "5-6", "7-8"] },
      { id: "cap-8", name: "Teddy bear cap", price: "₹729", img: "images/caps/Teddy bear cap.png", sizes: ["3-4", "5-6", "7-8"] }
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

      // Format category name for text
      const label =
        category === "all"
          ? "All Products"
          : category.charAt(0).toUpperCase() + category.slice(1);

      seeMore.innerHTML = `See more ${label} <span class="arrow">→</span>`;
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
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    const categoryCheckboxes = document.querySelectorAll('.filter-section input[type="checkbox"]');
    const clearFiltersBtn = document.getElementById("clearFilters");
  function applySidebarFilters() {
  let filtered = [...items];

  // CATEGORY FILTER
  const selectedCategories = Array.from(categoryCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  if (selectedCategories.length) {
    filtered = filtered.filter(item =>
      selectedCategories.includes(item.category)
    );
  }

  renderCategory(filtered);
}
categoryCheckboxes.forEach(cb =>
  cb.addEventListener("change", applySidebarFilters)
);

if (clearFiltersBtn) {
  clearFiltersBtn.addEventListener("click", () => {
    categoryCheckboxes.forEach(cb => cb.checked = false);
    genderRadios.forEach(r => r.checked = false);
    renderCategory(items);
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
      const mainImage = document.getElementById("mainProductImage");
      const thumbnailsContainer = document.getElementById("productThumbnails");

      // MAIN IMAGE
      mainImage.src = product.img;
      mainImage.alt = product.name;

      // PRODUCT INFO
      document.querySelector(".product-info h1").textContent = product.name;
      document.querySelector(".price").textContent = product.price;
      document.querySelector(".desc").textContent = product.desc || "";

      // IMAGE GALLERY (for now using same image multiple times)
      const images = product.images || [product.img, product.img, product.img];

      thumbnailsContainer.innerHTML = "";

      images.forEach((src, index) => {
        const thumb = document.createElement("img");
        thumb.src = src;

        if (index === 0) thumb.classList.add("active");

        thumb.addEventListener("click", () => {
          document
            .querySelectorAll(".product-thumbnails img")
            .forEach(img => img.classList.remove("active"));

          thumb.classList.add("active");
          mainImage.src = src;
        });

        thumbnailsContainer.appendChild(thumb);
      });
    }
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
        const buyNowBtn = document.querySelector(".buy-now");

        if (buyNowBtn) {
          buyNowBtn.addEventListener("click", () => {
            if (!selectedSize) {
              alert("Please select a size");
              return;
            }

            const buyNowItem = [{
              id: product.id,
              name: product.name,
              price: Number(product.price.replace("₹", "")),
              img: product.img,
              size: selectedSize,
              qty: 1
            }];

            // Store temporary checkout item
            localStorage.setItem("buyNow", JSON.stringify(buyNowItem));

            // 🔥 Redirect directly to checkout/cart
            window.location.href = "cart.html";
          });
        }

      });
    }
  }
}
);
/* =======================
   PRODUCT PAGE → ADD TO CART
======================= */

const addToCartBtn = document.getElementById("addToCartBtn");
const sizeButtons = document.querySelectorAll(".size-btn");

let selectedSize = null;

// Handle size selection
sizeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    sizeButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedSize = btn.dataset.size;
  });
});

if (addToCartBtn) {
  addToCartBtn.addEventListener("click", () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = {
      id: productData.id,
      name: productData.name,
      price: productData.price,
      img: productData.img,
      size: selectedSize,
      qty: 1
    };

    // Check if same product + size already exists
    const existing = cart.find(
      item => item.id === product.id && item.size === selectedSize
    );

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push(product);
    }

    // Save + animate badge
    saveCart(cart, true);

    // 🔥 REDIRECT TO CART
    window.location.href = "cart.html";
  });
}
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
  let buyNow = JSON.parse(localStorage.getItem("buyNow"));
  let cart = buyNow ? buyNow : JSON.parse(localStorage.getItem("cart")) || [];

  // Clear Buy Now after loading cart page
  if (buyNow) {
    localStorage.removeItem("buyNow");
  }

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

function updateCartBadge(pop = false) {
  if (!cartBadge) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  if (totalQty > 0) {
    cartBadge.textContent = totalQty;
    cartBadge.style.display = "flex";

    if (pop) {
      cartBadge.classList.remove("pop"); // reset if already there
      void cartBadge.offsetWidth;        // force reflow
      cartBadge.classList.add("pop");
    }
  } else {
    cartBadge.style.display = "none";
  }
}

// Run on page load
updateCartBadge();
// =======================
// NEWSLETTER (FRONTEND ONLY)
// =======================
const newsletterForm = document.getElementById("newsletterForm");
const newsletterMsg = document.getElementById("newsletterMsg");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("newsletterEmail").value;

    // Temporary success (no backend)
    newsletterMsg.textContent = "Thanks for subscribing!";
    newsletterForm.reset();
  });
}
// =======================
// MOBILE CART COUNT
// =======================
const mobileCartCount = document.getElementById("mobileCartCount");

function updateMobileCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  if (mobileCartCount) {
    mobileCartCount.textContent = totalQty;
  }
}

updateMobileCartCount();


