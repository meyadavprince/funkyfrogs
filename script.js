const addToCartButton = document.querySelector("button");

if (addToCartButton) {
  addToCartButton.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push("Funky Tee");
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart 🛒");
  });
}
