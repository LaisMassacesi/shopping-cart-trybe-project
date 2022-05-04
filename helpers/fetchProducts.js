const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=$computador';

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
