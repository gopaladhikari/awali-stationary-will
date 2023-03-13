let shopItem = document.getElementById("shop-item");

let basket = JSON.parse(localStorage.getItem("shopItem")) || [];
const generateShopItem = () => {
  shopItem.innerHTML = shopItemData
    .map((card, index) => {
      let { id, img, title, text, cartImg } = card;
      const jse = `justify-content-end`;
      const jsc = `justify-content-center`;
      let search = basket.find((x) => x.id === id);
      return `
        <div id=product-id-${id} class="col-6 col-sm-4 col-xl-3 d-flex p-0 col-xl-3
    ${
      window.innerWidth > 1200
        ? index === 3 || index === 7 || index === 11
          ? jse
          : ""
        : ""
    }

    ${
      window.innerWidth > 1200
        ? index === 2 || index === 6 || index === 10
          ? jsc
          : ""
        : ""
    }
    ${
      window.innerWidth > 1200
        ? index === 1 || index === 5 || index === 9
          ? jsc
          : ""
        : ""
    }

    ${
      window.innerWidth < 1200 && window.innerWidth > 576
        ? index === 2 || index === 5 || index === 8 || index === 11
          ? jse
          : ""
        : ""
    }

    ${
      window.innerWidth < 1200 && window.innerWidth > 576
        ? index === 1 || index === 4 || index === 7 || index === 10
          ? jsc
          : ""
        : ""
    }

    ${
      window.innerWidth < 576
        ? index === 1 ||
          index === 3 ||
          index === 5 ||
          index === 7 ||
          index === 9 ||
          index === 11
          ? jse
          : ""
        : ""
    }
    
    
    ">
         <div class="card" style="max-width: 18rem">
             <img
                src=${img}
                class="card-img-top img-fluid"
                alt="photo-id-${id}"
              />
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${text}</p>
              <h3 id="${id}" id="quantity" class="mt-4"> ${
        search === undefined ? "" : search.item
      } </h3>
              <button onclick="increment(${id})" id={${id}}  class="add-btn">
              <img src=${cartImg}  class="img-fluid" alt="" /> Add
              </button>
            </div>
         </div>
    </div>
`;
    })
    .join("");
};

generateShopItem();

const increment = (id) => {
  let search = basket.find((item) => id.id === item.id);
  if (search === undefined) {
    basket.push({
      id: id.id,
      item: 1,
    });
  } else search.item += 1;
  localStorage.setItem("shopItem", JSON.stringify(basket));
  update(id.id);
};

const update = (id) => {
  let search = basket.find((item) => id === item.id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

const calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket
    .map((item) => item.item)
    .reduce((x, y) => x + y, 0);
};

calculation();
