let cart = [];

const products = {
  mobiles: [
    { name: "Sony Xperia 1 III", price: 85999, image: "xperia1.jpg" },
    { name: "Huawei P50 Pro", price: 79999, image: "huaweip50.jpg" },
    { name: "Nothing Phone 1", price: 39999, image: "nothingphone1.jpg" },
    { name: "Poco F4", price: 32999, image: "pocof4.jpg" },
    { name: "iQOO 9 Pro", price: 64999, image: "iqoo9pro.jpg" },
    { name: "Redmi K50 Gaming", price: 45999, image: "redmik50.jpg" },
    { name: "Asus Zenfone 9", price: 56999, image: "zenfone9.jpg" },
    { name: "Samsung A73", price: 34999, image: "samsunga73.jpg" },
    { name: "Moto G200", price: 37999, image: "motog200.jpg" },
    { name: "Realme GT Neo 3", price: 41999, image: "realmegtneo3.jpg" }
  ],

  laptops: [
    { name: "Samsung Galaxy Book Pro", price: 99999, image: "galaxybook.jpg" },
    { name: "Huawei MateBook X Pro", price: 119999, image: "matebookx.jpg" },
    { name: "Gigabyte Aero 15", price: 124999, image: "aero15.jpg" },
    { name: "Alienware M15 R6", price: 149999, image: "alienwarem15.jpg" },
    { name: "Apple MacBook Air M2", price: 114999, image: "macbookairm2.jpg" },
    { name: "Lenovo Yoga 9i", price: 105999, image: "yoga9i.jpg" },
    { name: "Dell G15 Gaming", price: 89999, image: "dellg15.jpg" },
    { name: "HP Pavilion 14", price: 63999, image: "hppavilion14.jpg" },
    { name: "Acer Aspire 7", price: 57999, image: "aspire7.jpg" },
    { name: "MSI Creator Z16", price: 179999, image: "msicreatorz16.jpg" }
  ],

  accessories: [
    { name: "Smart Glasses", price: 15999, image: "smartglasses.jpg" },
    { name: "Wireless Gamepad", price: 4999, image: "gamepad.jpg" },
    { name: "LED Strip Lights", price: 2999, image: "ledstrip.jpg" },
    { name: "Action Camera", price: 10999, image: "actioncamera.jpg" },
    { name: "Tablet Stand", price: 1999, image: "tabletstand.jpg" },
    { name: "Electric Toothbrush", price: 4999, image: "electrictoothbrush.jpg" },
    { name: "Portable Air Purifier", price: 7999, image: "airpurifier.jpg" },
    { name: "Mini Projector", price: 12999, image: "miniprojector.jpg" },
    { name: "Smart Door Lock", price: 17999, image: "smartlock.jpg" },
    { name: "Selfie Stick with Tripod", price: 2999, image: "selfiestick.jpg" }
  ]
};

// Show selected category
function showCategory(category) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products[category].forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
    `;
    productList.appendChild(productElement);
  });
}

// Add to cart
function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
  const cartItems = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");

  cartItems.innerHTML = "";
  let cartTotal = 0;

  cart.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.innerHTML = `
      <p>${item.name} - ₹${item.price} x ${item.quantity}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartItems.appendChild(itemElement);
    cartTotal += item.price * item.quantity;
  });

  cartTotalElement.textContent = cartTotal.toFixed(2);
  cartCount.textContent = cart.length;
}

// Remove item
function removeItem(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

// Empty cart
document.getElementById("empty-cart").addEventListener("click", () => {
  cart = [];
  updateCartDisplay();
});

// Toggle cart visibility
document.getElementById("cart-icon").addEventListener("click", () => {
  document.getElementById("cart").classList.toggle("active");
});
