const getSavedCartItems = () => {
  const savedItems = localStorage.getItem('cartItems');
  const cartItems = document.querySelector('.cart__items');
  cartItems.innerHTML = savedItems;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
