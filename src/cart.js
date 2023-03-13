let main = document.getElementById("main");

let basket = JSON.parse(localStorage.getItem("shopItem")) || [];

const generateItem = () => {
  if (basket.length === 0) {
    body.innerHTML = `
    <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="../../index.html"
          ><img src="Images/logo.png" class="img-fluid logo" alt="logo"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <form class="d-flex">
                <input
                  class="form-control"
                  type="search"
                  placeholder="Search Here"
                  aria-label="Search"
                />
                <button class="submit-btn p-0 m-0" type="submit">
                  Submit
                </button>
              </form>
            </li>
            <li class="nav-item dropdown mt-2 mt-lg-0">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ukraine
              </a>
            </li>
            <li class="nav-item cart-link">
              <a class="nav-link" href="../Wishlist/wishlist.html">
                <span><img src="./Images/cart.png " alt="" /></span>
                <div class="cart-amount"></div>
                <span class="ms-2">Whislist </span>
              </a>
            </li>
            <li class="nav-item cart-link">
              <a class="nav-link" href="./yourcart.html">
                <span><img src="./Images/cart.png " alt="" /></span>
                <div class="cart-amount" id="cartAmount"></div>
                <span class="ms-2">Cart </span>
              </a>
            </li>
            <li class="nav-item">
              <button
                class="nav-link nav-login"
                id="userName"
                onclick="dislayLogin()"
              >
                <span><img src="./Images/login.png" alt="" /></span> Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
    <div class="container-fluid p-0">
    <div class="col-12">
      <div class="cart-icon px-4 d-flex justify-content-center align-items-center flex-column ">
        <i class="bi bi-cart-x-fill"></i>
        <h5>Your cart is empty</h5>
        <h2>It's look like you haven't added anything to your cart.</h2>
        <button class="hmp my-4">
          <a href="../../index.html">Go to Homepage</a>
        </button>
      </div>
    </div>
  </div>
  <div class="container-fluid mt-5">
  <div class="row mx-auto">
    <div class="col-6 col-lg-4 mt-5 p-0">
      <img src="./Images/footer-logo.png" class="img-fluid mt-4" alt="" />
    </div>
    <div class="col-6 col-lg-2">
      <ul class="list-group">
        <li class="list-group-item">GOODS</li>
        <li class="list-group-item mt-4">
          Promotions and discounts on stationery
        </li>
        <li class="list-group-item">Novelties of the office</li>
        <li class="list-group-item">Sales leaders</li>
      </ul>
    </div>
    <div class="col-6 col-lg-2">
      <ul class="list-group">
        <li class="list-group-item">INFORMATION</li>
        <li class="list-group-item mt-4">Payment and delivery</li>
        <li class="list-group-item">User agreement</li>
      </ul>
    </div>
    <div class="col-6 col-lg-2">
      <ul class="list-group">
        <li class="list-group-item">YOUR PROFILE</li>
        <li class="list-group-item mt-4">Personal data</li>
        <li class="list-group-item">order</li>
        <li class="list-group-item">add btnresses</li>
        <li class="list-group-item">Coupons</li>
      </ul>
    </div>
    <div
      class="col-6 col-lg-2 d-flex mt-5 p-0 ms-5 ms-md-0 justify-content-end"
    >
      <img
        src="./Images/play-store.png"
        class="img-fluid play-store mt-4"
        alt=""
      />
      <img
        src="./Images/apple-store.png"
        class="img-fluid play-store mt-4"
        alt=""
      />
    </div>
  </div>
</div>
<hr />

<div class="p-2">
  <p class="text-center footer-text">
    &copy; Copyright Awali Starionary WLL 2023. All rights reserved.
  </p>
</div>
          `;
  } else {
    main.innerHTML = basket
      .map((x) => {
        const { id, item } = x;
        let search = shopItemData.find((y) => y.id === id);
        const { img, title, text, shippingPrice, price } = search;
        return `
        <div class="col-12">
        <div class="item-wrapper py-3 d-flex">
          <div class="Item d-flex gap-3 align-items-center">
            <div>
              <img style="max-width:150px" src= "../.${img}" class="img-fluid" alt="" />
            </div>
            <div>
              <h3>${title}</h3>
              <p class="desc">$ ${text}.00</p>
              <button class="remove">remove</button>
            </div>
          </div>
          <div class="Shipping">Mami</div>
          <div class="Quantity d-flex gap-3 align-items-center">
            <button onclick="increment(${id})" id="add" class="add">+</button>
            <h2 id="${id}" class="mt-2"> ${item} </h2>
            <button onclick="decrement(${id})" id="sub" class="sub">-</button>
          </div>
          <div
            class="Shipping-cost d-flex flex-column align-items-center"
          >
            <h4>Est. Shopping</h4>
            <h5 class="ship-price">$ ${shippingPrice}</h5>
          </div>
          <div class="Price">
            <h6>$ ${price * item}.00</h6>
          </div>
        </div>
      </div>
        `;
      })
      .join("");
  }
};

generateItem();

const calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket
    .map((item) => item.item)
    .reduce((x, y) => x + y, 0);
};

calculation();

const increment = (id) => {
  let search = basket.find((item) => id.id === item.id);
  if (search === undefined) {
    basket.push({
      id: id.id,
      item: 1,
    });
  } else search.item += 1;
  updatePrice();
  generateItem();
  localStorage.setItem("shopItem", JSON.stringify(basket));
  update(id.id);
};

const decrement = (id) => {
  let search = basket.find((item) => id.id === item.id);
  if (search.item === 0) return;
  else if (search === undefined) return;
  else search.item -= 1;
  update(id.id);
  basket = basket.filter((x) => x.item !== 0);
  generateItem();
  updatePrice();
  localStorage.setItem("shopItem", JSON.stringify(basket));
};

const update = (id) => {
  let search = basket.find((item) => id === item.id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  updatePrice();
};

const updatePrice = () => {
  let subTotal = document.getElementById("subtotal");
  let estShipPrice = document.getElementById("est-ship");
  let total = document.getElementById("total");

  subTotal.innerHTML =
    "$ " + basket.map((x) => x.item).reduce((x, y) => x + y, 0) * 2160 + ".00";
  generateItem();
};

updatePrice();
