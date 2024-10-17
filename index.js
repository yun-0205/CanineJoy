document.getElementById("block1-button").addEventListener("click", function() {
  window.location.href = "products.html";
});

const headerProfile = document.querySelector('.header-profile');
const dropdownProfile = document.querySelector('.account-profile-logout');

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
  document.querySelector('.mobile-menu-logout').style.display = 'block';
}

function hideMenu() {
  document.querySelector('.overlay').style.display = 'none';
  document.querySelector('.mobile-menu-logout').style.display = 'none';
}

document.querySelector('.mobile-menu').addEventListener('click', showMenu);
document.querySelector('.overlay').addEventListener('click', hideMenu);

document.addEventListener('click', function(event) {
  if (event.target.closest('.mobile-menu-close')) {
    hideMenu();
  }
});