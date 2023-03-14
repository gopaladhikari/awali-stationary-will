let main = document.getElementById("main");
let mobileCart = document.getElementById("mobile-cart");
let basket = JSON.parse(localStorage.getItem("shopItem")) || [];

const generateItem = () => {
  if (basket.length === 0) {
    document.querySelector("#notg").style.display = "none";
    main.innerHTML = `
    <div class="col-12 w-100 p-0">
      <div class="cart-icon w-100 px-4 d-flex justify-content-center align-items-center flex-column text-center">
        <i class="bi bi-cart-x-fill"></i>
        <h5>Your cart is empty</h5>
        <h2>It's look like you haven't added anything to your cart.</h2>
        <button class="hmp my-4">
          <a href="../../index.html">Go to Homepage</a>
        </button>
      </div>
    </div>
 `;
  } else if (window.innerWidth > 992) {
    main.innerHTML = basket
      .map((x) => {
        const { id, item } = x;
        let search = shopItemData.find((y) => y.id === id);
        const { img, title, text, shippingPrice, price } = search;
        return `
          <div class="col-12">
          <div class="row">
            <div class="item-wrapper py-3 d-flex">
              <div class="Item d-flex gap-3 align-items-center">
                <div>
                <img style="max-width:150px" src= "../.${img}" class="img-fluid" alt="" />
                </div>
                 <div>
                  <h3>${title}</h3>
                    <p class="desc">$ ${text}.00</p>
                    <button onclick="itemRemove(${id})" class="remove">Remove</button>
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
        </div>
        `;
      })
      .join("");
  } else {
    mobileCart.innerHTML = basket
      .map((x) => {
        const { id, item } = x;
        let search = shopItemData.find((y) => y.id === id);
        const { img, title, text, shippingPrice, price } = search;
        return `
        <div class="col-12 mobile--yourcart col-md-6 d-flex gap-2 my-4">
          <div class="d-flex">
            <img
              style="max-width: 130px"
              src="../.${img}"
              alt=""
            />
          </div>
          <div
            class="d-flex align-items-start w-100 flex-column"
          >
            <h2>${title}</h2>
            <h2>$ ${text}.00</h2>
            <h3>Est Shipping price : $ ${shippingPrice}.00</h3>
            <div class="d-flex w-100  align-items-center justify-content-between">
              <h2 class="">$ ${price * item}.00</h2>
              <div class="Quantity d-flex gap-2 ">
                <button  onclick="increment(${id})" id="add" class="add">+</button>
                <h2 class="quantity mt-2" id="${id}" class="mt-2">${item}</h2>
                <button onclick="decrement(${id})" id="sub" class="sub">-</button>
              </div>
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
  update(id.id);

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
  basket = basket.filter((x) => x.item !== 0);
  generateItem();
  localStorage.setItem("shopItem", JSON.stringify(basket));
  calculation();
  update(id.id);
  updatePrice();
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

  let subttl = basket.map((x) => x.item).reduce((x, y) => x + y, 0) * 2160;
  let estP = basket.map((x) => x.item).reduce((x, y) => x + y, 0) * 15;

  estShipPrice.innerHTML = `$ ${estP}.00 `;

  subTotal.innerHTML = subttl;
  total.innerHTML = `$ ${estP + subttl}`;
  generateItem();
};

updatePrice();

const itemRemove = (id) => {
  basket = basket.filter((x) => x.id !== id.id);
  localStorage.setItem("shopItem", JSON.stringify(basket));
  generateItem();
  calculation();
  updatePrice();
};
