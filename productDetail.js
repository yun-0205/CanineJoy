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

  // Quantity Picker
  const decreaseButton = document.querySelector('.decrease-button');
  const increaseButton = document.querySelector('.increase-button');
  const quantityInput = document.querySelector('.quantity-input');

  decreaseButton.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value) || 1;
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });

  increaseButton.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value) || 1;
    quantityInput.value = currentValue + 1;
  });