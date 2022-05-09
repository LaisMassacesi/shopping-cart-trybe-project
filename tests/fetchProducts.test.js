require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('Verifique se `fetchProducts` é uma função', () => {
  it('Teste se `fetchProducts` é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Executa a função `fetchProducts` com o argumento "computador" e testa se `fetch` foi chamada', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');   //corrigir teste
  });
  it('Verifique se o retorno da função `fetchProducts` com o argumento "computador" é uma estrutura de dados igual ao objeto `computadorSearch`', async () => {
    const responseApi = await fetchProducts('computador')
    const keysFetch = Object.keys(responseApi);
    const keysComputadorSearch = Object.keys(computadorSearch);
    expect(
      keysFetch.includes(keysComputadorSearch[0])
    ).toBeTruthy();
    expect(
      keysFetch.includes(keysComputadorSearch[2])
    ).toBeTruthy();
  });
  it('Teste se, ao chamar a função `fetchProducts` sem argumento, retorna um erro com a mensagem: `You must provide an url`', async () => {
    await expect(fetchProducts()).rejects.toThrowError(new Error('You must provide an url'))
  });
  it('Teste se, ao chamar a função `fetchProducts` com o argumento "computador", a função `fetch` utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });
});
