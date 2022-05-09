function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function getArrayOfPrices() {
  const arrayOfPrices = [];
  const allItems = document.querySelectorAll('.cart__item');
  allItems.forEach((item) => {
    const infoItem = item.innerText;
    const array = infoItem.split('|');
    const value = array[2].split('$');
    const numbValue = value[1];
    const price = parseFloat(numbValue);
    arrayOfPrices.push(price);
  });
  return arrayOfPrices;
}

function calculateTotal() {
  const arrayPrices = getArrayOfPrices();
  let total = 0;
  arrayPrices.forEach((price) => {
    total += price;
  });
  return total;
}

function setInnerTextOfSubtotal() {
  const total = calculateTotal();
  const paragraph = document.querySelector('.total-price');
  paragraph.innerText = total;
}

function cartItemClickListener(event) {
  event.target.remove('cart_item');
  saveCartItems();
  setInnerTextOfSubtotal();
}

function addListenerToCartItems() {
  const allItems = document.querySelectorAll('.cart__item');
  allItems.forEach((item) => item.addEventListener('click', cartItemClickListener));
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function addToCart(event) {
  const itemId = event.target.id;
  const itemObj = await fetchItem(itemId);
  const { id, title, price } = itemObj;
  const li = createCartItemElement({ sku: id, name: title, salePrice: price });
  const cartItems = document.querySelector('.cart__items');
  cartItems.appendChild(li);
  saveCartItems();
  setInnerTextOfSubtotal();
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const btn = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  btn.id = `${sku}`;
  btn.addEventListener('click', addToCart);
  section.appendChild(btn);
  return section;
}

async function getItemOfArrayResults() {
  const { results } = await fetchProducts('computador');
  results.forEach((item) => {
  const { id, title, thumbnail } = item;
  const productCard = createProductItemElement({ sku: id, name: title, image: thumbnail });
  const productsSection = document.querySelector('.items');
  productsSection.appendChild(productCard);
  });
}

function assembleCart() {
  getSavedCartItems();
  addListenerToCartItems();
}

function emptyCart() {
  const cart = document.querySelector('.cart__items');
  const subtotal = document.querySelector('.total-price');
  subtotal.innerText = '0';
  cart.innerText = '';
  saveCartItems();
}

function addListenerToButtonEmptyCart() {
  const button = document.querySelector('.empty-cart');
  button.addEventListener('click', emptyCart);
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

window.onload = () => {
  getItemOfArrayResults();
  assembleCart(); 
  setInnerTextOfSubtotal(); 
  addListenerToButtonEmptyCart();
};
