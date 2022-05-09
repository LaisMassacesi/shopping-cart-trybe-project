const fetchProducts = async (param) => {
  if (!param) {
    throw new Error('You must provide an url');
  }
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
  const p = await fetch(endpoint);
  const r = await p.json();
  return r;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
