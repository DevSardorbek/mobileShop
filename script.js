import { PRODUCTS } from "./server.js";

const prodactCards = document.querySelector(".prodact_cards");

function cardCreator(data) {
  data.forEach((el) => {
    let card = document.createElement("div");
    card.classList.add("prodact_card");
    card.innerHTML = `
    <div class="card_top">
    <div class="sale">
      <div class="sale1">
        <img src="./img/X.png" alt="" />
        <p>Нет в наличии</p>
      </div>
      <button class="btn1">SALE</button>
    </div>
    <img class="img" src="${el.thumbnail}" alt="" />
  </div>
  <div class="card_info">
    <h1>${el.title}</h1>
    <div class="card_reyting">
      <img src="./img/star.png" alt="" />
      <p>(${el.rating})</p>
    </div>
    <h2>${el.description}</h2>
    <div class="card_price">
      <h2>${el.oldprice}$</h2>
      <h3>${el.price}$</h3>
    </div>
  </div>`;
    prodactCards.appendChild(card);
  });
}
cardCreator(PRODUCTS);

const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  document.body.classList.toggle("btnOpened");
});
