const endpointItem = 'https://api.mercadolibre.com/items/'; 
const fetchItem = (id) => {
  try {
    return fetch(`${endpointItem}${id}`)
    .then((data) => data.json())
    .then((response) => response);
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
