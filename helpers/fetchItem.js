const fetchItem = async (id) => {
  if (!id) {
    throw new Error('You must provide an url');
  }
  const endpoint = `https://api.mercadolibre.com/items/${id}`;
  const p = await fetch(endpoint);
  const r = await p.json();
  return r;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
