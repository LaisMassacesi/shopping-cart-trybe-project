const saveCartItems = () => {
  const cartItems = document.querySelector('.cart__items');
  const cartHTML = cartItems.innerHTML;
  localStorage.setItem('cartItems', cartHTML); 
};
  
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
