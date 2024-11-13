//Header dropdown profile
const headerProfile = document.querySelector('.header-profile');
const dropdownProfile = document.querySelector('.account-profile-login');

dropdownProfile.style.display = 'none'; 

headerProfile.addEventListener('click', function() {
  if (dropdownProfile.style.display === 'block' || dropdownProfile.style.display === "") {
    dropdownProfile.style.display = 'none';
  } else {
    dropdownProfile.style.display = 'block';
  }
});

document.addEventListener('click', function(event) {
  if (!headerProfile.contains(event.target) && !dropdownProfile.contains(event.target)) {
    dropdownProfile.style.display = 'none';
  }
});

//Mobile menu
function showMenu() {
  document.querySelector('.overlay').style.display = 'block';
  document.querySelector('.mobile-menu-login').style.display = 'block';
}

function hideMenu() {
  document.querySelector('.overlay').style.display = 'none';
  document.querySelector('.mobile-menu-login').style.display = 'none';
}

document.querySelector('.mobile-menu').addEventListener('click', showMenu);
document.querySelector('.overlay').addEventListener('click', hideMenu);

document.addEventListener('click', function(event) {
  if (event.target.closest('.mobile-menu-close')) {
    hideMenu();
  }
});

//Product
const products = [
  {
    id: 1,
    img: "/icon/products/VitalPaws Formula.png",
    name: "VitalPaws Formula",
    orginPrice: 899,
    discountPrice: 599,
  },
  {
    id: 2,
    img: "/icon/products/NatureBite Blend.png",
    name: "NatureBite Blend",
    orginPrice: 1200,
    discountPrice: 1090,
  },
  {
    id: 3,
    img: "/icon/products/HealthyTails Select.png",
    name: "HealthyTails Select",
    orginPrice: 1080,
    discountPrice: 690,
  },
  {
    id: 4,
    img: "/icon/products/PureLife Kibble.png",
    name: "PureLife Kibble",
    orginPrice: 799,
    discountPrice: 750,
  },
  {
    id: 5,
    img: "/icon/products/ActivePaws Nutrition.png",
    name: "ActivePaws Nutrition",
    orginPrice: 1390,
    discountPrice: 890,
  },
  {
    id: 6,
    img: "/icon/products/WholesomeBite Recipe.png",
    name: "WholesomeBite Recipe",
    orginPrice: 999,
    discountPrice: 690,
  },
  {
    id: 7,
    img: "/icon/products/CanineVital Complete.png",
    name: "CanineVital Complete",
    orginPrice: 1090,
    discountPrice: 999,
  },
  {
    id: 8,
    img: "/icon/products/NutriTails Essentials.png",
    name: "NutriTails Essentials",
    orginPrice: 1099,
    discountPrice: 899,
  },
  {
    id: 9,
    img: "/icon/products/FreshPaw Naturals.png",
    name: "FreshPaw Naturals",
    orginPrice: 1090,
    discountPrice: 799,
  },
  {
    id: 10,
    img: "/icon/products/TailBlend Pro.png",
    name: "TailBlend Pro",
    orginPrice: 1299,
    discountPrice: 1200,
  },
  {
    id: 11,
    img: "/icon/products/PawPerfection Formula.png",
    name: "PawPerfection Formula",
    orginPrice: 1199,
    discountPrice: 990,
  },
  {
    id: 12,
    img: "/icon/products/PrimeBites Complete.png",
    name: "PrimeBites Complete",
    orginPrice: 999,
    discountPrice: 649,
  },
]

let html = "";
for (let i = 0; i < products.length; i++) {
  html += `        
      <div>
        <a href="productDetail.html?id=${products[i].id}">
          <img class="products-img" src="${products[i].img}" alt="Products img">
          <h2>${products[i].name}</h2>
        </a>
        <div class="products-price-bag">
          <div class="products-price-title">
            <p>Price</p>
            <div class="products-price">
              <h6>$${products[i].discountPrice}</h6>
              <p><del>$${products[i].orginPrice}</del></p>
            </div>
          </div>
          <img class="add-cart-btn" src="/icon/bag.svg" alt="Shopping Bag">
        </div>
      </div>
      `;
}
document.querySelector(".products-item").innerHTML = html;

//Cart dropdown
const headerBag = document.querySelector('.header-bag-icon');
const dropdownCart = document.querySelector('.dropdown-cart');

dropdownCart.style.display = 'none'; 

headerBag.addEventListener('click', function() {
  if (dropdownCart.style.display === 'block' || dropdownCart.style.display === "") {
    dropdownCart.style.display = 'none';
  } else {
    dropdownCart.style.display = 'block';
  }
});

document.addEventListener('click', function(event) {
  if (!headerBag.contains(event.target) && !dropdownCart.contains(event.target)) {
    dropdownCart.style.display = 'none';
  }
});

//Cart product list
const emptyCart = document.querySelector('.empty-cart');
const cart = [];
const cartBadge = document.querySelector('.cart-badge');
const dropdownCartList = document.querySelector('.dropdown-cart');
let cartCount = 0;

// Check if cart is empty on page load
if (cartCount === 0) {
  emptyCart.style.display = 'block';
}

document.querySelectorAll('.add-cart-btn').forEach((img, index) => {
  img.addEventListener('click', () => {
    const selectedProduct = products[index];
    cart.push(selectedProduct);
    cartCount++;
    
    // Update cart quantity badge
    cartBadge.textContent = cartCount;
    cartBadge.style.display = 'block';
    emptyCart.style.display = 'none';

    // Add product to dropdown-cart
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-product');
    cartItem.innerHTML = `
      <img src="${selectedProduct.img}" alt="Products Img">
      <div class="cart-info">
        <h4>${selectedProduct.name}</h4>
        <div class="price-delete">
          <p>x1 $${selectedProduct.discountPrice}</p>
          <img src="/icon/delete.svg" alt="Delete" class="delete-item">
        </div>
      </div>
    `;

    // Add cart-product to dropdownCartList
    dropdownCartList.insertBefore(cartItem, dropdownCartList.querySelector('.checkout'));

    // Delete product
    cartItem.querySelector('.delete-item').addEventListener('click', (event) => {
      event.stopPropagation();
      cartItem.remove();
      cartCount--;
      cartBadge.textContent = cartCount;

      //Cart empty
      if (cartCount === 0) {
        cartBadge.style.display = 'none';
        emptyCart.style.display = 'block';
      }
    });
  });
});