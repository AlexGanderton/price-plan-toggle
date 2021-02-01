const toggle = document.querySelector(".toggle");
const toggleBtn = document.querySelector(".toggle-btn");
const basicPrice = document.querySelector(".basic-price");
const proPrice = document.querySelector(".pro-price");
const masterPrice = document.querySelector(".master-price");

var toggleValue = 0;

function togglePrices() {
  if (toggleValue == 0) {
    toggleBtn.style.transform = "translateX(-22px)";
    basicPrice.innerHTML = "199.99";
    proPrice.innerHTML = "249.99";
    masterPrice.innerHTML = "399.99";
    toggleValue = 1;
  } else if (toggleValue == 1) {
    toggleBtn.style.transform = "translateX(0px)";
    basicPrice.innerHTML = "19.99";
    proPrice.innerHTML = "24.99";
    masterPrice.innerHTML = "39.99";
    toggleValue = 0;
  }
}

toggle.addEventListener("click", togglePrices);
