let basket = JSON.parse(localStorage.getItem("shopItem")) || [];

const calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket
    .map((item) => item.item)
    .reduce((x, y) => x + y, 0);
};

calculation();
