const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=$computador';
// const items = document.querySelector('.items');

// const createProductItemElement = (product) => {
//   const div = document.createElement('div');    //elemento com a classe .item deve exibir a lista de produtos
//   div.className.add('item');
//   div.innerHTML = product;
//   items.appendChild(div);
// };

const fetchProducts = () => {
  try {
    return fetch(endpoint)
      .then((data) => data.json())
      .then((response) => response.results);
  } catch (error) {
    return error;
  }
};
fetchProducts();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
