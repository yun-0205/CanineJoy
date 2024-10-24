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

// let isLoggedIn = false;

// const loggedInSection = document.querySelector('.login');
// const loggedOutSection = document.querySelector('.logout');

// if (isLoggedIn) {
//   loggedInSection.style.display = 'block';
//   loggedOutSection.style.display = 'none';
// } else {
//   loggedInSection.style.display = 'none';
//   loggedOutSection.style.display = 'block';
// }

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

const products = [
  {
    img: "/icon/products/VitalPaws Formula.png",
    name: "VitalPaws Formula",
    orginPrice: 899,
    discountPrice: 599,
  },
  {
    img: "/icon/products/NatureBite Blend.png",
    name: "NatureBite Blend",
    orginPrice: 1200,
    discountPrice: 1090,
  },
  {
    img: "/icon/products/HealthyTails Select.png",
    name: "HealthyTails Select",
    orginPrice: 1080,
    discountPrice: 690,
  },
  {
    img: "/icon/products/PureLife Kibble.png",
    name: "PureLife Kibble",
    orginPrice: 799,
    discountPrice: 750,
  },
  {
    img: "/icon/products/ActivePaws Nutrition.png",
    name: "ActivePaws Nutrition",
    orginPrice: 1390,
    discountPrice: 890,
  },
  {
    img: "/icon/products/WholesomeBite Recipe.png",
    name: "WholesomeBite Recipe",
    orginPrice: 999,
    discountPrice: 690,
  },
]

let html = "";
for (let i = 0; i < products.length; i++) {
  html += `        
      <div>
        <img class="products-img" src="${products[i].img}" alt="Products img">
        <h2>${products[i].name}</h2>
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


const cartBadge = document.querySelector('.cart-badge');
let cartCount = 0;

document.querySelectorAll('.add-cart-btn').forEach(img => {
  img.addEventListener('click', () => {
    cartCount++;
    cartBadge.textContent = cartCount;

    if (cartCount > 0) {
      cartBadge.style.display = 'block';
    }
  });
});